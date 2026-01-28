# Portal Photo Slideshow

A beautiful, fullscreen photo slideshow for your Meta Portal using Cloudinary-hosted images.

## Features

- 🖼️ Fullscreen display optimized for Portal
- ⏯️ Auto-play with customizable timing
- 👆 Touch/swipe support for Portal touchscreen
- ⌨️ Keyboard controls (arrow keys, spacebar)
- 🎨 Smooth fade transitions
- 📱 Responsive design
- 🔢 Photo counter display

## Setup Instructions

### 1. Add Your Photos to Cloudinary

1. Upload photos to your Cloudinary account (cloud name: `du8kevdcc`)
2. For each photo, note the **Public ID** from the URL
   - Example URL: `https://res.cloudinary.com/du8kevdcc/image/upload/v1769636960/WhatsApp_Image_2025-12-08_at_9.18.16_AM_e8nj7q.jpg`
   - Public ID: `WhatsApp_Image_2025-12-08_at_9.18.16_AM_e8nj7q`

### 2. Update the Photo List

1. Open `slideshow.js`
2. Find the `photoIds` array (around line 5)
3. Add your photo public IDs:

```javascript
const photoIds = [
    'WhatsApp_Image_2025-12-08_at_9.18.16_AM_e8nj7q',
    'your_second_photo_id',
    'your_third_photo_id',
    // Add more as needed
];
```

### 3. Deploy to GitHub Pages

1. Create a new GitHub repository
2. Upload these files to the repository:
   - `index.html`
   - `style.css`
   - `slideshow.js`
   - `README.md` (this file)

3. Enable GitHub Pages:
   - Go to repository Settings
   - Click "Pages" in the sidebar
   - Under "Source", select "main" branch
   - Click "Save"

4. Your slideshow will be available at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### 4. Access on Your Portal

1. Open the web browser on your Portal
2. Navigate to your GitHub Pages URL
3. Bookmark it for easy access
4. Enjoy your photos!

## Controls

### On Portal:
- **Swipe left**: Next photo
- **Swipe right**: Previous photo
- **Tap screen**: Show controls
- **Play/Pause button**: Toggle auto-play
- **Previous/Next buttons**: Manual navigation

### On Computer (for testing):
- **Left Arrow**: Previous photo
- **Right Arrow**: Next photo
- **Spacebar**: Play/Pause

## Customization

### Change Slide Duration

In `slideshow.js`, modify the `SLIDE_DURATION` constant:

```javascript
const SLIDE_DURATION = 7000; // Time in milliseconds (7000 = 7 seconds)
```

### Add More Photos

1. Upload new photos to Cloudinary
2. Copy the public ID from the URL
3. Add it to the `photoIds` array in `slideshow.js`
4. Commit and push to GitHub

The slideshow will automatically update!

### Adjust Image Quality

Images use Cloudinary's automatic optimization (`q_auto,f_auto`). To change quality, edit the `getCloudinaryUrl` function in `slideshow.js`.

## Troubleshooting

**Photos not showing?**
- Check that photo IDs are correct (copy from Cloudinary Media Library)
- Verify your Cloudinary cloud name is `du8kevdcc`
- Check browser console for errors

**Slideshow not auto-playing?**
- Check that you have more than one photo
- Try clicking the Play button

**Controls not visible?**
- Hover/touch the screen to reveal controls
- Controls auto-hide after a few seconds

## File Structure

```
portal-slideshow/
├── index.html       # Main HTML page
├── style.css        # Styling and layout
├── slideshow.js     # Slideshow logic and photo management
└── README.md        # This file
```

## Tips

- Optimize photos before uploading to Cloudinary (recommended: 1920x1080 or less)
- Use consistent aspect ratios for best viewing experience
- Update the `photoIds` array whenever you add new photos
- Test on a computer browser before deploying to Portal

## Support

If you encounter issues:
1. Check the browser console for errors (F12 on desktop)
2. Verify all photo IDs are correct
3. Ensure GitHub Pages is properly deployed
4. Try accessing the slideshow from a regular browser first

Enjoy your Portal photo slideshow! 📸
