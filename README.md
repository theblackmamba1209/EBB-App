# Ebb Recovery Tracker

A private, research-based recovery tracker made for the Philippines. Ebb is a single-file web app that installs to the Home Screen, works offline and keeps every entry on the phone.

## What's in version 2

**A living horizon.** The Today screen shows the current substance-free stretch over a sky that follows the real hour: umaga, tanghali, takipsilim, gabi. The tide rises toward the next milestone.

**Help when it's hardest**
- Urge surfing timer with a live wave track, the user's HALT needs, exit plans, reasons and people to call
- Calm sounds matched to research on what calms people: ocean waves, forest stream, morning birds, rain, slow piano, Breathe at six (paced at six breaths a minute) and soft tones. They're generated on the phone as seamless audio loops, work offline, keep playing in the background and on the lock screen, and have a mini player and sleep timer. Users can also save their own calming music
- Slow breathing in three patterns (Calm 4-6, Box, 4-7-8) with an animated orb and optional ocean sound
- Videos and guided audio from NIDA and Mindfulness-Based Relapse Prevention researchers

**Catching risk early**
- Payday heads-up on the 15th and 30th (or Fridays) that shows the user's own payday plan
- A heads-up before the user's personal high-risk hours, learned from their craving logs
- Weekly review comparing this week with last week, and an 18-week craving heatmap

**Staying motivated**
- Milestone rewards picked by Ebb for a working professional's budget in the Philippines, from specialty coffee at 24 hours to a trip abroad at one year; users can swap in their own
- Milestone celebrations and a shareable progress image
- Check-in streaks, skill badges, a plan-strength meter, and a timeline of every stretch without use
- A quick daily check-in with mood faces, HALT tiles, a sleep slider and a reflection prompt

**Sex and recovery.** An affirming guide for any orientation: compulsive sexual behaviour (ICD-11), chemsex on shabu, HIV testing, PrEP, PEP and LoveYourself. Ebb treats loss of control as the problem, never sexual orientation.

**Reaching out**
- Help now shows contact cards with Call and Text, and ready-made messages in English or Filipino that ask someone to call or meet

**Privacy and care**
- Optional 4-digit passcode lock (stored as a salted SHA-256 hash, never included in backups), with Face ID or Touch ID unlock
- Discreet daily check-in reminder added to the phone's calendar
- A plain-text 30-day summary to share with a counselor or doctor
- Light, dark or match-phone appearance

Existing entries from version 1 carry over automatically.

## Files

- `index.html`: the whole app
- `sw.js`: service worker for offline use
- `manifest.webmanifest`: install settings and Home Screen shortcuts
- `sounds/`: the seven calm sounds as seamless 60-second WAV loops, streamed so iOS keeps them playing in the background (the app can also generate them offline)
- `ebb-app.zip`: the app files, zipped (without `sounds/`; the app generates the sounds itself when the files aren't there)

Every health claim in the app links to its source under My plan, Research behind Ebb. Ebb supports treatment. It doesn't replace it.
