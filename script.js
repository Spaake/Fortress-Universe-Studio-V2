let countDownDate = new Date("Feb 13, 2025 22:00:00").getTime();
const trailerVideo = document.getElementById("main__video");
const toggle = document.querySelector(".navbar__toggle");
const navbarLinks = document.querySelector(".navbar__links");
const carouselContainer = document.querySelectorAll(".carousel__container");
let width;

calculateWidth();
// infiniteLoop();
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

carouselContainer.forEach(startCarousel);

function startCarousel(carousel) {
    let offset = 0;
    let speed = 2;


    function animate() {
        offset -= speed;
        const halfAddWidth = carousel.scrollWidth / 2;
        if (Math.abs(offset) >= halfAddWidth) {
            offset = 0;
        }
        carousel.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(animate);
        // let currentItem = carousel.children[currentIndex];
        // let itemWidth = currentItem.offsetWidth;
        //
        //
        // carousel.style.transform = `translateX(-100%)`;
        // getTranslateX(carousel);
        // function getTranslateX(element) {
        //     const style = window.getComputedStyle(element);
        //     const matrix = new DOMMatrix(style.transform);
        //     console.log(matrix.m41);
        //     return matrix.m41;
        // }
        //
        // if (Math.abs(offset) >= itemWidth) {
        //     offset = 0;
        //     currentIndex++;
        //
        //     if (currentIndex >= carousel.childElementCount) {
        //         currentIndex = 0;
        //     }
        //
        //
        //     carousel.style.transition = "none";
        //     carousel.style.transform = `translateX(0px)`;
        //     setTimeout(() => {
        //         carousel.style.transition = "transform 1s linear";
        //     }, 10);
        // }
        //
        // requestAnimationFrame(animate);
    }
    animate();
}
    // let firstElement = carousel.firstElementChild;
    // carousel.appendChild(firstElement);
    //
    // let offset = 0;
    // let speed = 2;
    // function animate() {
    //     offset -= speed;
    //     carousel.style.transform = `translateX(${offset}px)`;
    //     let firstElementWidth = firstElement.offsetWidth;
    //     if (Math.abs(offset) >= firstElementWidth) {
    //         offset += firstElementWidth;
    //         carousel.appendChild(carousel.firstElementChild);
    //         carousel.style.transition = "none";
    //         carousel.style.transform = `translateX(${offset}px)`;
    //         setTimeout(() => {
    //             carousel.style.transition = "transform 15s linear";
    //         }, 1);
    //     }
    //     requestAnimationFrame(animate);
    // }
    // carousel.style.transition = "transform 0.1s linear";
    // animate();

// function infiniteLoop() {
//     carouselContainer.forEach((item) => {
//         item.style.transition = '15s linear'
//         item.style.transform = 'translateX(-100%)';
//
//         item.addEventListener("transitionend", () => {
//             item.style.transition = "none";
//             item.style.transform = "translateX(0)";
//
//
//             void item.offsetWidth;
//
//             setTimeout(() => infiniteLoop(item), 100)
//
//         })
//
//     })
// }
// const carouselContainers = document.querySelectorAll(".carousel__container");




// carouselContainer.forEach((carousel) => {
//     carousel.addEventListener("mouseover", () => {
//         carouselContainer.forEach((item) => {
//             item.style.transition = "transform 2s linear"
//             item.style.animationDuration = "35s";
//         });
//     });
//
//     carousel.addEventListener("mouseout", () => {
//          carouselContainer.forEach((item) => {
//              item.style.transition = "transform 2s linear"
//              item.style.animationDuration = "15s";
//          });
//     });
// });

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