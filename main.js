window.onload = init; // call the function only when the page is completely loaded
var indicators = document.querySelector("#indicators");
var slideTitles;
var slideshow = document.querySelector("#slideshow");
var slideItems;

function init() {
  // alert('hello world');
  window.addEventListener("mousemove", showCursorLocation);
  window.addEventListener("mouseout", e => {
    indicators.style.transform = "translateX(0)";
  });
  window.addEventListener('keyup', detectKey);

  function showCursorLocation(e) {
    let percent = Math.round((e.pageX / window.innerWidth) * 100);

    let moveX = (percent - 50) * -1;
    indicators.style.transform = `translateX(${moveX}%)`;
  }

  slideItems = slideshow.querySelectorAll(".slide-item");
  slideItems.forEach((e, i) => {
  });

  slideTitles = indicators.querySelectorAll("a.slide-title");

    
  slideTitles.forEach((e, i) => {
    e.addEventListener("click", evt => {
      removeClassActive();
      slideItems[i].classList.add("active");
    });
  });

  function detectKey(e) {
    let index = detectClassActive();
    switch (e.key) {
      case 'ArrowLeft':
      if (index <= 0) return;
      removeClassActive();
      slideItems[index-1].classList.add("active");
      break;
      
      case 'ArrowRight':
      console.log('right');
      if (index >= 3) return;
      removeClassActive();
      slideItems[index+1].classList.add("active");
      break;
    }
  }

  function detectClassActive() {
    let activeIndex;
    // this function returns index of active class removed
    slideItems.forEach((evt, i) => {
      evt.classList.value.split(" ").forEach(e => {
        if (e == "active") {
          // remove active class
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
          // remove active class
          evt.classList.remove("active");
        }
      });
    });
  }
  
}


