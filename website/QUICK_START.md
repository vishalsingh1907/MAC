# Quick Start Checklist

## ✅ Phase 1: Firebase Setup (Today)
- [ ] Create Firebase project at console.firebase.google.com
- [ ] Enable Firestore database
- [ ] Get Firebase config credentials
- [ ] Add config to `firebase.config.js`

## ✅ Phase 2: Update Your Website (Today)
- [ ] Add Firebase SDK links to HTML head
- [ ] Include `firebase.config.js`
- [ ] Include `firebase-integration.js`
- [ ] Include `registration-handler.js`
- [ ] Add registration form to event detail page

## ✅ Phase 3: Test Locally (Today)
- [ ] Open HTML in browser
- [ ] Check console for Firebase connection
- [ ] Test event registration form

## ✅ Phase 4: GitHub Setup (Tomorrow)
- [ ] Install Git
- [ ] Create GitHub account/repository
- [ ] Push code to GitHub

## ✅ Phase 5: Deploy to Vercel (Tomorrow)
- [ ] Connect Vercel to GitHub
- [ ] Deploy live
- [ ] Test all features on live site

## Important Files Structure
```
your-project/
├── mac club.html (UPDATE with Firebase scripts)
├── mac club.js (existing)
├── mac club.css (existing)
├── firebase.config.js (ADD - your credentials)
├── firebase-integration.js (ADD - database functions)
├── registration-handler.js (ADD - form handling)
├── registration-form.html (ADD - form HTML/CSS)
├── DEPLOYMENT.md (reference guide)
├── firebase-setup.md (detailed steps)
├── firestore-structure.md (database schema)
└── package.json (for Vercel)
```

## What to do next:
1. **Copy the Firebase CDN links** from HTML head section below
2. **Update your HTML file** to include these scripts
3. **Create Firebase project** and get credentials
4. **Replace config values** in firebase.config.js
5. **Test locally** before deployment

---

### Firebase CDN Links (Add to HTML <head>)
```html
<!-- Firebase v9+ SDK -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"></script>

<!-- Your Firebase Config -->
<script src="firebase.config.js"></script>
<script src="firebase-integration.js"></script>
<script src="registration-handler.js"></script>
```
