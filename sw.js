/* Ebb service worker: keeps the app working offline. Build 6b04a487 */
const CACHE='ebb-shell-6b04a487';
const FONTS='ebb-fonts';
const LEGACY=['ebb-shell-b1e07f91'];
const SHELL=['./','./index.html','./manifest.webmanifest','./apple-touch-icon.png','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
// Fetch the new shell straight from the network, never from the browser's HTTP cache.
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  const keys=await caches.keys();const old=keys.filter(k=>k!==CACHE&&k!==FONTS);
  await Promise.all(old.map(k=>caches.delete(k)));
  await self.clients.claim();
  // Version 1 pages can't reload themselves after an update, so reload them once here.
  if(old.some(k=>LEGACY.includes(k))){const cs=await self.clients.matchAll({type:'window'});cs.forEach(c=>{try{const p=c.navigate(c.url);if(p&&p.catch)p.catch(()=>{});}catch(_){}});}
})());});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  // Calm sounds stream straight from the site so iOS can keep them playing in the background.
  if(url.origin===self.location.origin&&url.pathname.indexOf('/sounds/')>=0)return;
  if(url.origin===self.location.origin){
    const key=req.mode==='navigate'?'./index.html':req;
    e.respondWith(caches.open(CACHE).then(c=>c.match(key,{ignoreSearch:true}).then(hit=>{
      const net=fetch(req).then(res=>{if(res&&res.ok)c.put(key,res.clone());return res;}).catch(()=>hit);
      return hit||net;
    })));
    return;
  }
  if(url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.open(FONTS).then(c=>c.match(req).then(hit=>{
      const net=fetch(req).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(req,res.clone());return res;}).catch(()=>hit);
      return hit||net;
    })));
  }
});
