# Expand Hover Effect

This project is an interactive web page developed to showcase various multimedia elements.

## Project Overview
The goal of this project was to create a visually appealing and interactive web page that allows users to explore various elements related to the content.

## Features
- Interactive multimedia content.
- Smooth hover animations for visual engagement.
- Responsive design for both mobile and desktop devices.

## Tools
- HTML5
- CSS3
- JavaScript
- GSAP (GreenSock Animation Platform)

## Script Explanation
This project is focused on creating an interactive web page with hover effects, expanding images, and triggering animations using HTML, CSS, and JavaScript. Here's a breakdown of the main parts of the code:

**1. HTML**

The HTML provides the basic structure of the web page. It includes:
   - Image Previews: These are the main content blocks that showcase multimedia elements (images and videos).
   - Overlay with Descriptions: Each block contains an overlay with descriptions that appear when the user hovers over the image or video.
Example:

```html
<div class="image-preview">
    <img src="path/to/image.jpg" alt="description">
    <video paused loop muted playsinline aria-hidden="true">
        <source src="path/to/video.mp4" type="video/mp4">
    </video>
    <span class="overlay">
        <div class="desc">
            <h1>Title</h1>
            <p>Description goes here...</p>
        </div>
    </span>
</div>
```
<br>

**2. CSS**

The CSS is used to style the web page and add interactivity. Key points:

   - Layout: Flexbox is used to position elements within the .main-container so that each "image-preview" section takes equal space and adjusts based on the screen size.
   - Hover Effects: When hovering over an image, CSS transitions are used to smoothly reveal the overlay and play the video.
   - Responsiveness: The design is responsive, ensuring the layout adjusts properly for mobile and desktop views.

```CSS
.image-preview img, 
.image-preview video {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease; 
}

.image-preview:hover .overlay {
    opacity: 1;
}
```
<br>

**3. JavaScript**

JavaScript is used to enhance the page’s interactivity:

   - Hover Animations: When the user hovers over an image or video, the size of the block expands dynamically using GSAP (GreenSock Animation Platform) for smooth transitions.
   - Video Play on Hover: JavaScript ensures that the videos play when hovered over and pause when the mouse leaves.
   - Animations: GSAP is used to animate the appearance of the image previews and to manage the hover interactions.

```JavaScript
window.onload = () => {
    const setOpacity = (opacity) => image.forEach(img => img.style.opacity = opacity);

    mainContainer.onmouseenter = () => setOpacity(0.2);
    mainContainer.onmouseleave = () => setOpacity(1);

    gsap.fromTo(imagePreview, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%, opacity: 0)",
    }, {
        duration: 1.5,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        opacity: 1,
    });

    imagePreview.forEach((preview, index) => {
        const expandCard = (flexValue) => gsap.to(preview, { duration: 0.1, flex: flexValue });

        preview.onmouseenter = () => {
            expandCard(2);
            video[index].play();
        };

        preview.onmouseleave = () => {
            expandCard(1);
            video[index].pause();
        };
    });
};

```

## Getting Started
To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/rizkyngrh23/expand-hover-effect.git

2. Navigate to the project directory:
   ```bash
   cd expand-hover-effect
3. Open the index.html file in your browser to view the project:
   ```bash
   open index.html

## How to Use
- Hover over the images to see the smooth hover effects, including the expansion of the image block and the appearance of an overlay with a description.
- For videos, hovering will automatically play the video, and it will pause when the mouse leaves the area.

## Installation Requirements
This project requires the following external library:
   - GSAP (GreenSock Animation Platform)
     
     - You can include GSAP in your project via CDN by adding the following script in your HTML file before the closing </body> tag:
       ```html
       <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js"></script>
       ```
     - Alternatively, you can install GSAP via npm:
       ```bash
       npm install gsap
       ```
## License
This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
