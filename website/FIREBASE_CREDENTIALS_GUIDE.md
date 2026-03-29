# Firebase Credentials - Quick Visual Guide

## Finding Project Settings - Step by Step

### Method 1: Gear Icon (EASIEST)
```
1. Open https://console.firebase.google.com
2. Look at TOP RIGHT CORNER
3. Click ⚙️ GEAR ICON
4. Click "Project settings" from dropdown
5. ✓ You're in Project Settings
```

### Method 2: Project Menu
```
1. Open https://console.firebase.google.com
2. Look at TOP LEFT - Project name
3. Click the project name dropdown
4. Click ⚙️ Settings icon next to project name
5. Click "Project settings"
6. ✓ You're in Project Settings
```

---

## Getting Your Firebase Config

### Once in Project Settings:

**Location of Config:**
1. Scroll DOWN on the page
2. Find section called **"Your apps"**
3. You'll see icons for: iOS, Android, Web, etc.

**Creating Web App:**
1. Click **Web icon** (looks like `</>` or globe)
2. If no web app shown, click **"Add app"**
3. Enter app name: `MAC Club Website`
4. Check "Also set up Firebase Hosting"
5. Click **"Register app"**

**Getting Config Object:**
1. Next screen shows your config
2. Look for code that starts with: `const firebaseConfig = {`
3. It contains:
   - apiKey
   - authDomain
   - projectId
   - storageBucket
   - messagingSenderId
   - appId

4. **SELECT ALL** (Ctrl+A) and **COPY** this entire config
5. Paste into `firebase.config.js` in your project
6. Replace the placeholder text

---

## What Your firebase.config.js Should Look Like

**BEFORE (with placeholders):**
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "0000000000",
  appId: "1:000000000:web:abcdef123456"
};
```

**AFTER (with your actual values):**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6",
  authDomain: "mac-club-project.firebaseapp.com",
  projectId: "mac-club-project",
  storageBucket: "mac-club-project.appspot.com",
  messagingSenderId: "987654321098",
  appId: "1:987654321098:web:xyz789abc456def123"
};
```

---

## Troubleshooting

**Q: I can't find the gear icon**
- Look in TOP RIGHT corner of Firebase console
- It's next to your profile icon
- Should be ⚙️ symbol

**Q: Project Settings page looks different**
- Firebase updates their UI sometimes
- Look for "Your apps" section
- It contains the web app configuration

**Q: I don't see "Your apps" section**
- Scroll DOWN the page (it's below other settings)
- Or use Ctrl+F and search "Your apps"

**Q: No Web app listed**
- Click "Add app" button
- Select Web platform
- Complete the form

---

## Video Alternative
If still stuck, search "Firebase Console Project Settings 2025" on YouTube for visual walkthrough.

---

## Next Step
After copying your config into `firebase.config.js`:
1. Save the file
2. Move to Step 2.1 in IMPLEMENTATION_STEPS.md
3. Update your HTML file
