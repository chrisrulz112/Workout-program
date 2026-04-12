# Workout-program# 
Training PWA

Personal hypertrophy training app. Tracks sessions, logs sets, shows previous performance inline, and includes a rest timer.

## Files
- `index.html` — main app
- `manifest.json` — PWA manifest
- `sw.js` — service worker (offline support)
- `icon-192.png` / `icon-512.png` — app icons (see below)

---

## How to Install on iPhone

The app must be hosted over HTTPS for PWA install to work. The easiest free option is GitHub Pages.

### Step 1 — Host on GitHub Pages (free, 5 minutes)

1. Create a free account at github.com if you don't have one
2. Create a new repository — name it anything (e.g. `training`)
3. Upload all files from this folder to the repository:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png` (optional — see below)
   - `icon-512.png` (optional — see below)
4. Go to repository Settings → Pages
5. Under "Source", select `main` branch and `/ (root)` folder
6. Click Save — GitHub gives you a URL like `https://yourusername.github.io/training`

### Step 2 — Install to iPhone Home Screen

1. Open the URL from Step 1 in **Safari** on your iPhone (must be Safari, not Chrome)
2. Tap the **Share** button (box with arrow) at the bottom of Safari
3. Scroll down and tap **"Add to Home Screen"**
4. Name it "Training" and tap **Add**
5. The app icon appears on your home screen and opens fullscreen like a native app

---

## App Icons (Optional but Recommended)

Without icons, iOS uses a screenshot. To add proper icons:

1. Create a 512×512 PNG image with a dark background (#0e0e0e) and simple "T" or dumbbell symbol
2. Save as `icon-512.png`
3. Resize to 192×192, save as `icon-192.png`
4. Upload both to your GitHub repository alongside the other files

Free icon generators: favicon.io, realfavicongenerator.net

---

## How to Update the App

1. Make changes to `index.html` (or other files)
2. Upload the updated file(s) to your GitHub repository (drag and drop, or use the GitHub web editor)
3. GitHub Pages updates automatically within ~1 minute
4. On your iPhone, open the app and pull down to refresh once to get the latest version

---

## Data

All workout data is stored locally on your iPhone using localStorage. It never leaves your device. To view/export your data, use the History tab → Export button, which generates a text summary you can copy or share.

---

## Exporting Data for Review

Tap **History → Export** to generate a formatted text summary of all your sessions. You can then paste this into Claude to get a progress analysis and program adjustments.
