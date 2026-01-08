let countDownDate = new Date("Feb 13, 2025 22:00:00").getTime();
const trailerVideo = document.getElementById("main__video");
const toggle = document.querySelector(".navbar__toggle");
const navbarLinks = document.querySelector(".navbar__links");
const carouselContainer = document.querySelectorAll(".carousel__container");
let width;

calculateWidth();
infiniteLoop();
function calculateWidth() {
    width = window.innerWidth;
}

window.addEventListener('resize', () => {
    calculateWidth();
    if (width >= 801) {
        if (toggle.classList.contains('is-active')) {
            toggle.classList.remove('is-active');
            navbarLinks.classList.remove('is-active');
        }
    }
})

toggle.addEventListener('click', () => {
    toggle.classList.toggle('is-active');
    navbarLinks.classList.toggle('is-active');
})


// carouselContainer.forEach((item) => {
//     item.addEventListener('mouseover', () => {
//         item.style.animationPlayState= 'paused';
// })
function infiniteLoop() {
    carouselContainer.forEach((item) => {
        item.style.transition = '15s linear'
        item.style.transform = 'translateX(-100%)';

        item.addEventListener("transitionend", () => {
            item.style.transition = "none";
            item.style.transform = "translateX(0)";


            void item.offsetWidth;

            setTimeout(() => infiniteLoop(item), 100)
            
        })

    })
}

carouselContainer.forEach((carousel) => {
    carousel.addEventListener("mouseover", () => {
        carouselContainer.forEach((item) => {
            item.style.transition = "transform 2s linear"
            item.style.animationDuration = "35s";
        });
    });

    carousel.addEventListener("mouseout", () => {
         carouselContainer.forEach((item) => {
             item.style.transition = "transform 2s linear"
             item.style.animationDuration = "15s";
         });
    });
});

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;
  console.log(distance);
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("header__timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("header__timer").innerHTML = "NOW";
  }
}, 1000);

trailerVideo.addEventListener('loadedmetadata', () => {
    trailerVideo.currentTime = 9;
    });

trailerVideo.addEventListener('ended', () => {
    trailerVideo.play();
    trailerVideo.currentTime = 9;
})