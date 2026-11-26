# Ebb Recovery Tracker

A private, research-based recovery tracker made for the Philippines. Ebb is a single-file web app that installs to the Home Screen, works offline and keeps every entry on the phone.

## What's in version 2

**A living horizon.** The Today screen shows the current substance-free stretch over a sky that follows the real hour: umaga, tanghali, takipsilim, gabi. The tide rises toward the next milestone.

**Help when it's hardest**
- Urge surfing timer with a live wave track, the user's HALT needs, exit plans, reasons and people to call
- Calm sounds: ocean, rain and soft tones generated on the phone as seamless audio loops. They work offline, keep playing in the background and on the lock screen, and have a mini player and sleep timer. Users can also save their own calming music
- Slow breathing in three patterns (Calm 4-6, Box, 4-7-8) with an animated orb and optional ocean sound
- Videos and guided audio from NIDA and Mindfulness-Based Relapse Prevention researchers

**Catching risk early**
- Payday heads-up on the 15th and 30th (or Fridays) that shows the user's own payday plan
- A heads-up before the user's personal high-risk hours, learned from their craving logs
- Weekly review comparing this week with last week, and an 18-week craving heatmap

**Staying motivated**
- Milestone rewards picked by Ebb for a working professional's budget in the Philippines, from specialty coffee at 24 hours to a trip abroad at one year; users can swap in their own
- Milestone celebrations and a shareable progress image
- Check-in streaks, skill badges and a plan-strength meter

**Sex and recovery.** An affirming guide for any orientation: compulsive sexual behaviour (ICD-11), chemsex on shabu, HIV testing, PrEP, PEP and LoveYourself. Ebb treats loss of control as the problem, never sexual orientation.

**Privacy and care**
- Optional 4-digit passcode lock (stored as a salted SHA-256 hash, never included in backups)
- Discreet daily check-in reminder added to the phone's calendar
- A plain-text 30-day summary to share with a counselor or doctor
- Light, dark or match-phone appearance

Existing entries from version 1 carry over automatically.

## Files

- `index.html`: the whole app
- `sw.js`: service worker for offline use
- `manifest.webmanifest`: install settings and Home Screen shortcuts
- `ebb-app.zip`: the same files, zipped

Every health claim in the app links to its source under My plan, Research behind Ebb. Ebb supports treatment. It doesn't replace it.
