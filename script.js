// carousel 

const reviews = [
    {
        name: "Abbie Harvey",
        image: "reviewer-img.png",
        text: "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments."
    },
    {
        name: "John Doe",
        image: "reviewer-img2.png",
        text: "Great experience! The staff was very helpful and made sure all my concerns were addressed. Highly recommend their service!"
    },
    {
        name: "Emily Smith",
        image: "reviewer-img3.png",
        text: "A truly life-changing experience. Their dedication and care made all the difference in my family's life. Thank you!"
    }
];

let currentIndex = 0;

const reviewerImg = document.querySelector(".reviewer-img");
const reviewerName = document.querySelector(".reviewer-name-con h3");
const reviewText = document.querySelector(".content-con p");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const indicators = document.querySelectorAll(".indicator-circle-con span");

function updateReview(index) {
    reviewerImg.classList.remove("fade-slide");
    reviewerName.classList.remove("fade-slide");
    reviewText.classList.remove("fade-slide");

    setTimeout(() => {
        reviewerImg.src = reviews[index].image;
        reviewerName.textContent = reviews[index].name;
        reviewText.textContent = reviews[index].text;

        reviewerImg.classList.add("fade-slide");
        reviewerName.classList.add("fade-slide");
        reviewText.classList.add("fade-slide");

        indicators.forEach((circle, i) => {
            circle.style.backgroundColor = i === index ? "#1E9658" : "#B0B0B0";
        });
    }, 50);
}

updateReview(currentIndex);

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? reviews.length - 1 : currentIndex - 1;
    updateReview(currentIndex);
    resetInterval();
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex === reviews.length - 1) ? 0 : currentIndex + 1;
    updateReview(currentIndex);
    resetInterval();
});

indicators.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        currentIndex = index;
        updateReview(currentIndex);
        resetInterval();
    });
});

const autoSlide = () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview(currentIndex);
};

let slideInterval = setInterval(autoSlide, 4000);

const resetInterval = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 4000);
};

// selector 

document.addEventListener("DOMContentLoaded", function () {
    const selectBox = document.querySelector(".custom-select");
    const selected = selectBox.querySelector(".selected");
    const options = selectBox.querySelector(".custom-options");

    selectBox.addEventListener("click", function () {
        selectBox.classList.toggle("open");
    });

    options.querySelectorAll("div").forEach(option => {
        option.addEventListener("click", function (event) {
            selected.textContent = this.textContent;
            selectBox.classList.remove("open");
            event.stopPropagation();
        });
    });

    document.addEventListener("click", function (event) {
        if (!selectBox.contains(event.target)) {
            selectBox.classList.remove("open");
        }
    });
});


// nav and video modal

function toggleMenu() {
    let menu = document.querySelector(".call-nav-consultant");
    let toggleBtn = document.querySelector(".toggle-btn");

    menu.classList.toggle("show");
    toggleBtn.classList.toggle("active");
}

function openModal() {
    document.getElementById("videoModal").style.display = "flex";
    document.getElementById("videoPlayer").play();
}

function closeModal() {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("videoPlayer").pause();
}

document.getElementById("playButton").addEventListener("click", openModal);

document.getElementById("closeModal").addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
    let modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeModal();
    }
});