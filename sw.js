/* Ebb service worker: keeps the app working offline. Build b1e07f91 */
const CACHE='ebb-shell-b1e07f91';
const FONTS='ebb-fonts';
const SHELL=['./','./index.html','./manifest.webmanifest','./apple-touch-icon.png','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE&&k!==FONTS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
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
