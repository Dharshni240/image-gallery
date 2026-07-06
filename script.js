// ===========================
// SELECT ELEMENTS
// ===========================

const galleryItems = document.querySelectorAll(".gallery-item");
const filterButtons = document.querySelectorAll(".filter-btn");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const caption = document.querySelector(".caption");
const counter = document.querySelector(".counter");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let visibleImages = [...galleryItems];

// ===========================
// FILTER IMAGES
// ===========================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        visibleImages = [];

        galleryItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {

                item.style.display = "block";

                visibleImages.push(item);

            } else {

                item.style.display = "none";

            }

        });

    });

});

// ===========================
// OPEN LIGHTBOX
// ===========================

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        currentIndex = visibleImages.indexOf(item);

        openLightbox();

    });

});

function openLightbox() {

    const image = visibleImages[currentIndex].querySelector("img");

    lightbox.style.display = "flex";

    lightboxImg.src = image.src;

    lightboxImg.alt = image.alt;

    caption.textContent =
        visibleImages[currentIndex]
        .querySelector("h3").textContent;

    counter.textContent =
        `${currentIndex + 1} of ${visibleImages.length}`;

}

// ===========================
// CLOSE
// ===========================

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// ===========================
// NEXT
// ===========================

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= visibleImages.length) {

        currentIndex = 0;

    }

    openLightbox();

});

// ===========================
// PREVIOUS
// ===========================

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = visibleImages.length - 1;

    }

    openLightbox();

});

// ===========================
// KEYBOARD SUPPORT
// ===========================

document.addEventListener("keydown", e => {

    if (lightbox.style.display !== "flex")
        return;

    if (e.key === "ArrowRight") {

        nextBtn.click();

    }

    if (e.key === "ArrowLeft") {

        prevBtn.click();

    }

    if (e.key === "Escape") {

        closeBtn.click();

    }

});

// ===========================
// CLOSE WHEN CLICKING OUTSIDE
// ===========================

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});
