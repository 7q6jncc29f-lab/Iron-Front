# IRON FRONT — Normandy Foundation (development edition)

This package restructures the **last working v0.7 gameplay prototype** into a multi-file GitHub Pages project. It is **not** a finished graphics upgrade: existing in-game soldiers, buildings and guns are still basic shapes. v1.4/v1.5 were deliberately not used because they looked worse on the user's iPhone.

## Files
- `index.html` — entry point and menus
- `src/styles.css` — interface styles
- `src/config.js` — theatre and weapon definitions
- `src/game.js` — working survival combat and controls
- `assets/icons/icon.png` — Home Screen icon
- `assets/models/` and `assets/textures/` — future art imports; these currently contain README placeholders

## Upload to GitHub Pages
1. Open https://github.com/7q6jncc29f-lab/Iron-Front
2. Delete the existing root `index.html` or overwrite it.
3. **Upload the CONTENTS of this folder**, not the ZIP itself and not the enclosing folder. GitHub should show `index.html`, `src/`, and `assets/` at the repository root.
4. Commit on `main`. Under Settings → Pages select `Deploy from a branch` → `main` → `/(root)`.
5. Visit https://7q6jncc29f-lab.github.io/Iron-Front/ in iPhone Safari.

### Important caveats
- **Internet required:** `src/game.js` imports Three.js v0.160.1 from jsDelivr. It does not currently support offline gameplay.
- This preserves the old engine and UI; performance/controls still need real iPhone and Xbox-controller testing.
- PWA/offline worker is not supplied, since relying on the CDN would make offline claims misleading.

## Next visual milestone (not yet implemented)
1. Import an actually licensed WW2 soldier GLB with idle/walk/attack/death animation clips, inspect model proportions and skeleton, and make hitboxes independent of render geometry.
2. Import a historically plausible rifle GLB with separate animation; test view-model placement on iPhone landscape.
3. Replace Normandy buildings using low-draw-call textured assets, terrain detail and LODs.
4. Use compressed textures and size caps, targeting stable frame rate on real iPhone hardware.
5. Compare actual screenshots **before** calling this an upgrade.

## Licensing sources
- Three.js is MIT licensed: https://threejs.org/
- Poly Haven provides CC0 assets: https://polyhaven.com/license
- ambientCG provides CC0 materials: https://ambientcg.com/
Each future asset must be checked and its original license included. No third-party character model is distributed in this package.
