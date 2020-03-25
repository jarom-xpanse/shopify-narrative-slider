window.onload = init; // call the function only when the page is completely loaded
var indicators, slideshow, slideTitles, slideItems, span;
var width = window.innerWidth;
var body = document.querySelector('body');

console.log('testing if this updated code is on netlify now');
window.addEventListener('resize', e=> {
  width = body.offsetWidth;
})
// 750 and up .. 749 and below mobile of this page

function init() {
  indicators = document.querySelector("#indicators");
  slideshow = document.querySelector("#slideshow");
  slideTitles = indicators.querySelectorAll("a.slide-title");
  slideItems = slideshow.querySelectorAll(".slide-item");
  span = indicators.querySelectorAll('span');

  window.addEventListener("mousemove", showCursorLocation);
  window.addEventListener("mouseout", e => indicators.style.transform = "translateX(0)");
  window.addEventListener("keyup", detectKey);

  function showCursorLocation(e) {
    if (width < 750) return; // do not run this events on mobile
    let percent = Math.round((e.pageX / window.innerWidth) * 100);
    let moveX = (percent - 50) * -1;
    moveX /= 3;
    indicators.style.transform = `translateX(${moveX}%)`;
  }

  slideTitles.forEach((e, i) => {
    if (width < 750) return; // do not run this events on mobile
    e.addEventListener("click", evt => {
      removeClassActive();
      slideItems[i].classList.add("active");
      // add slide-active in slide-title span
      span[i].classList.add('slide-active');
    });
  });
  

  function detectKey(e) {
    let index = detectClassActive();
    if (e.key == "ArrowLeft") {
      if (index <= 0) return;
      removeClassActive();
      slideItems[index - 1].classList.add("active");
      // add slide-active in slide-title span
      span[index-1].classList.add('slide-active');
    } else if (e.key == "ArrowRight") {
      if (index >= 3) return;
      removeClassActive();
      slideItems[index + 1].classList.add("active");
      // add slide-active in slide-title span
      span[index+1].classList.add('slide-active');
    }
  }

  function detectClassActive() {
    let activeIndex;
    // this function returns index of active class removed
    slideItems.forEach((evt, i) => {
      evt.classList.value.split(" ").forEach(e => {
        if (e == "active") {
          activeIndex = i;
        }
      });
    });
    return activeIndex;
  }

  function removeClassActive() {
    slideItems.forEach((evt, i) => {
      evt.classList.value.split(" ").forEach(e => {
        if (e == "active") {
          evt.classList.remove("active");
          // remove slide-active in slide-title span
          span[i].classList.remove('slide-active');
        }
      });
    });
  }


}
