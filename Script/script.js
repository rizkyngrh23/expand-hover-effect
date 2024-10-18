const mainContainer = document.querySelector(".main-container");
const imagePreview = document.querySelectorAll(".image-preview");
const image = document.querySelectorAll(".image-preview img");
const video = document.querySelectorAll("video");
const desc = document.querySelectorAll(".desc");

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
            desc[index].style.opacity = "1";  // Show the description when video plays
        };

        preview.onmouseleave = () => {
            expandCard(1);
            video[index].pause();
            desc[index].style.opacity = "1";  // Hide the description when video pauses
        };
    });
};
