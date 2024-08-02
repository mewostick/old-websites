document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const textContainer = document.querySelector(".text-container");
    const texts = [
        "hey hey hey, welcome to my website :D",
        "enjoy your stay!",
        "",
        "MEOW",
        "",
        "",
        "still here? :0",
        "",
        "Havana, uh-nah-nah..",
        "half of my heart is in Havana, uh-nah-nah..",
        "",
        "",
        "",
        "never gonna give you up!",
        "never gonna let you down!",
        "never gonna run around and desert you!",
        "never gonna make you cry!",
        "never gonna say goodbye!",
        "never gonna tell a lie and hurt you!",
        "",
        "",
        "anyway, time to REPEAT!"
    ];
    let currentIndex = 0;
    const fadeDuration = 1000; // Duration of fade animation in milliseconds

    function setTextContainerHeight() {
        textContainer.style.height = textContainer.offsetHeight + "px";
    }

    setTextContainerHeight();

    function fadeInText() {
        textElement.textContent = texts[currentIndex];
        textElement.style.opacity = "0"; // Start with opacity 0
        setTimeout(function () {
            textElement.style.transition = `opacity ${fadeDuration / 1000}s`;
            textElement.style.opacity = "1"; // Fade in
            setTextContainerHeight();
            setTimeout(fadeOutText, 3000);
        }, 100);
    }

    function fadeOutText() {
        textElement.style.opacity = "0"; // Fade out
        setTimeout(function () {
            currentIndex = (currentIndex + 1) % texts.length;
            fadeInText();
        }, fadeDuration);
    }

    // Call the function initially
    fadeInText();
});
