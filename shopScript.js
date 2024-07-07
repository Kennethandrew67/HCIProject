const homeBtn = document.getElementById("home");

homeBtn.addEventListener("click", () => {
    window.location.href = "HomePage.html"
})

const signUpBtn = document.getElementById("signup")

signUpBtn.addEventListener("click", () => {
    window.location.href = "SignUpPage.html"
})

const shopBtn = document.getElementById("shop")

shopBtn.addEventListener("click", () => {
    window.location.href = "ShopPage.html"
})

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const carousels = document.querySelectorAll('.carousel');
    const intervalTime = 3000;

    function showCarousel(index) {
        carousels.forEach((carousel) => {
            carousel.style.display = 'none';
        });


        carousels[index].style.display = 'block';
    }


    showCarousel(currentIndex);


    function moveToNextSlide() {
        currentIndex = (currentIndex === carousels.length - 1) ? 0 : currentIndex + 1;
        showCarousel(currentIndex);
    }


    let slideInterval = setInterval(moveToNextSlide, intervalTime);

    document.getElementById('prevBtn').addEventListener('click', function () {
        clearInterval(slideInterval);
        currentIndex = (currentIndex === 0) ? carousels.length - 1 : currentIndex - 1;
        showCarousel(currentIndex);
        slideInterval = setInterval(moveToNextSlide, intervalTime);
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
        clearInterval(slideInterval);
        currentIndex = (currentIndex === carousels.length - 1) ? 0 : currentIndex + 1;
        showCarousel(currentIndex);
        slideInterval = setInterval(moveToNextSlide, intervalTime);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById('product-container');


    function createCard() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="./assests/product1.jpg">
            <h1>Whey Protein</h1>
            <p>Rp. 1.500.000</p>
            <button>Buy</button>
        `;
        productContainer.appendChild(card);
    }

    function checkScroll() {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollHeight - (scrollTop + clientHeight) < 200) {
            loadMoreCards();
        }
    }


    function loadMoreCards() {
        const numberOfCardsToLoad = 4;
        for (let i = 0; i < numberOfCardsToLoad; i++) {
            createCard();
        }
    }

    // Event listener for scrolling
    window.addEventListener('scroll', function () {
        checkScroll();
    });


    loadMoreCards();
});


const head = document.getElementById("header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        head.classList.add("graying")

    } else {
        head.classList.remove("graying")

    }
})

