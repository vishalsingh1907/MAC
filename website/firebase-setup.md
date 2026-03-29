# Firebase Setup Instructions

## Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a new project"
3. Project name: `MAC Club`
4. Accept terms and click "Create project"
5. Wait for project creation (1-2 minutes)

## Step 2: Enable Firestore Database
1. In Firebase console, click "Firestore Database" (left menu)
2. Click "Create database"
3. Select "Start in test mode" (for development)
4. Choose region: `us-central1`
5. Click "Create"

## Step 3: Get Firebase Config
1. In Project Settings (gear icon top), click "Project settings"
2. Go to "Your apps" section
3. Click "Web" icon to create web app
4. Register app as "MAC Club Web"
5. Copy the Firebase config object provided
6. Replace the config in `firebase.config.js` file

## Step 4: Firestore Collections Setup
Collections needed:
- **events** - Store events dynamically
- **registrations** - Store user registrations

See `firestore-structure.md` for detailed structure.
