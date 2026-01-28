# Quick Start - Adding Your 3 Photos

You mentioned you uploaded 3 photos to Cloudinary. Here's how to add them all:

## Step 1: Get Your Photo IDs

1. Go to your Cloudinary Media Library: https://cloudinary.com/console/media_library
2. Click on each of the 3 photos you uploaded
3. Look at the URL or find the "Public ID" field
4. Copy each Public ID (the part after the version number)

Example:
- Full URL: `https://res.cloudinary.com/du8kevdcc/image/upload/v1769636960/WhatsApp_Image_2025-12-08_at_9.18.16_AM_e8nj7q.jpg`
- Public ID: `WhatsApp_Image_2025-12-08_at_9.18.16_AM_e8nj7q`

## Step 2: Edit slideshow.js

Open `slideshow.js` and find this section (around line 5):

```javascript
const photoIds = [
    'WhatsApp_Image_2025-12-08_at_9.18.16_AM_e8nj7q',
    // Add your other two photo IDs here
];
```

Add your other two photo public IDs:

```javascript
const photoIds = [
    'WhatsApp_Image_2025-12-08_at_9.18.16_AM_e8nj7q',
    'your_second_photo_public_id_here',
    'your_third_photo_public_id_here',
];
```

**Important:** 
- Keep the quotes around each ID
- Add a comma after each ID (except the last one)
- The exact format matters!

## Step 3: Test Locally (Optional)

Before uploading to GitHub:
1. Open `index.html` in your web browser
2. Check that all 3 photos display correctly
3. Test the controls and auto-advance

## Step 4: Upload to GitHub

### Option A: GitHub Web Interface
1. Go to GitHub.com and create a new repository
2. Name it something like "portal-slideshow"
3. Make it public
4. Click "uploading an existing file"
5. Drag all 4 files:
   - index.html
   - style.css
   - slideshow.js (with your photo IDs added)
   - README.md
6. Commit the files

### Option B: GitHub Desktop
1. Create new repository in GitHub Desktop
2. Copy the 4 files to the repository folder
3. Commit and push

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Click **Pages** in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: **main**
6. Select folder: **/ (root)**
7. Click **Save**
8. Wait 1-2 minutes for deployment

Your slideshow URL will be:
`https://YOUR_GITHUB_USERNAME.github.io/portal-slideshow/`

## Step 6: Access on Portal

1. Open the web browser on your Portal
2. Type in your GitHub Pages URL
3. Bookmark it
4. Enjoy!

## Adding More Photos Later

1. Upload new photos to Cloudinary
2. Get the public IDs
3. Edit `slideshow.js` on GitHub (click the file, then the pencil icon)
4. Add the new IDs to the `photoIds` array
5. Commit changes
6. Refresh the page on your Portal

---

**Need Help?**

If you get stuck on any step, let me know and I can walk you through it!
