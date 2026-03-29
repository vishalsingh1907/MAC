# Vercel Deployment Guide for MAC Club Website

## Step 1: Prepare for GitHub
1. Install Git from https://git-scm.com/download/win
2. Open PowerShell in your project folder
3. Initialize Git repository:
```powershell
git init
git add .
git commit -m "Initial commit - MAC Club website"
```

## Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Create new repository: `mac-club-website`
3. Copy the repository URL

## Step 3: Push to GitHub
```powershell
git remote add origin https://github.com/YOUR-USERNAME/mac-club-website.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel
1. Go to https://vercel.com/import
2. Click "Import Git Repository"
3. Paste your GitHub repo URL
4. Click "Import"
5. In settings, add Environment Variables:
   - Create a `.env.local` file with Firebase credentials (optional)
6. Click "Deploy"

## Step 5: Verify Deployment
- Vercel will provide a URL (e.g., mac-club-website.vercel.app)
- Your site will auto-deploy on every git push to main branch

## Step 6: Custom Domain (Optional)
1. In Vercel dashboard, go to project settings
2. Add your custom domain (e.g., macclub.yourdomain.com)
3. Update DNS records as instructed

## Troubleshooting
- **Firebase not connecting?** Ensure firebase config is properly set in `firebase.config.js`
- **Images not loading?** Place images in a `public/` folder in root directory
- **CORS errors?** Update Firebase security rules in console

## Auto-Deployment
After this setup:
- Every `git push` automatically deploys new version
- Old versions are preserved (can rollback)
- Each deployment gets unique URL for testing
