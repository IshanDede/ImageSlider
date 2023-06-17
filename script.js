const slideContainer = document.querySelector(".container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const slideButton = document.querySelector(".up-button");
const length = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(length - 1) * 100}vh`;

const slideChange = () => {
  const slideHeight = slideContainer.clientHeight;
  activeSlideIndex++;
  if (activeSlideIndex > length - 1) {
    activeSlideIndex = 0;
  }

  leftSlide.style.transform = `translateY(${slideHeight * activeSlideIndex}px)`;
  rightSlide.style.transform = `translateY(-${slideHeight * activeSlideIndex}px)`;
};

slideButton.addEventListener("click", slideChange);
