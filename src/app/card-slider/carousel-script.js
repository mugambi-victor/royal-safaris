window.initializeCarousel = function() {
    let prev, next, carouselVp, cCarouselInner;
    let leftValue = 0;
    let carouselInnerWidth = 0;
    let totalMovementSize = 0;

    prev = document.querySelector("#prev");
    next = document.querySelector("#next");
    carouselVp = document.querySelector("#carousel-vp");
    cCarouselInner = document.querySelector("#cCarousel-inner");
    carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

    totalMovementSize = parseFloat(document.querySelector(".cCarousel-item").getBoundingClientRect().width, 10) +
        parseFloat(window.getComputedStyle(cCarouselInner).getPropertyValue("gap"), 10);

    prev.addEventListener("click", () => {
        if (!leftValue == 0) {
            leftValue -= -totalMovementSize;
            cCarouselInner.style.left = leftValue + "px";
        }
    });

    next.addEventListener("click", () => {
        const carouselVpWidth = carouselVp.getBoundingClientRect().width;
        if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
            leftValue -= totalMovementSize;
            cCarouselInner.style.left = leftValue + "px";
        }
    });

    const mediaQuery510 = window.matchMedia("(max-width: 510px)");
    const mediaQuery770 = window.matchMedia("(max-width: 770px)");

    mediaQuery510.addEventListener("change", mediaManagement);
    mediaQuery770.addEventListener("change", mediaManagement);

    let oldViewportWidth = window.innerWidth;

    function mediaManagement() {
        const newViewportWidth = window.innerWidth;

        if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
            leftValue += totalMovementSize;
            cCarouselInner.style.left = leftValue + "px";
            oldViewportWidth = newViewportWidth;
        } else if (leftValue <= -totalMovementSize && oldViewportWidth > newViewportWidth) {
            leftValue -= totalMovementSize;
            cCarouselInner.style.left = leftValue + "px";
            oldViewportWidth = newViewportWidth;
        }
    }
};
