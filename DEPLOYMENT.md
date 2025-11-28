# Deploying to GitHub Pages

Follow these steps to deploy your Hebrew Song Word Game to GitHub Pages:

## Step 1: Initialize Git Repository (if not already done)

```bash
cd c:\Code\random-word-generator
git init
git add .
git commit -m "Initial commit - Hebrew Song Word Game"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `random-word-generator` (or any name you prefer)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)

## Step 3: Push to GitHub

Replace `YOUR-USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR-USERNAME/random-word-generator.git
git branch -M master
git push -u origin master
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Click **Save**

## Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, your app will be live!

## Step 6: Access Your App

Your app will be available at:
```
https://YOUR-USERNAME.github.io/random-word-generator/
```

## Automatic Updates

Every time you push changes to the `master` branch, GitHub Actions will automatically rebuild and redeploy your app!

## Troubleshooting

### If the deployment fails:

1. Check the **Actions** tab for error messages
2. Make sure you selected "GitHub Actions" as the source in Settings → Pages
3. Verify that the workflow file exists at `.github/workflows/deploy.yml`

### If you see a 404 error:

1. Wait a few minutes - it can take time for GitHub Pages to propagate
2. Make sure the repository is public (or you have GitHub Pro for private repos)
3. Check that the `base` path in `vite.config.js` matches your repository name

### If assets don't load:

Make sure the `base` property in `vite.config.js` matches your repository name:
```javascript
base: '/random-word-generator/', // Must match your repo name
```

## Local Testing

To test the production build locally before deploying:

```bash
npm run build
npm run preview
```

This will build the app and serve it locally so you can verify everything works.
