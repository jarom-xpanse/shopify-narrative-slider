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

  function showCursorLocation(e) {
    let percent = Math.round((e.pageX / window.innerWidth) * 100);

    let moveX = (percent - 50) * -1;
    // console.log(moveX);
    indicators.style.transform = `translateX(${moveX}%)`;
  }

  slideItems = slideshow.querySelectorAll(".slide-item");
  slideItems.forEach((e, i) => {
    console.log(e, i);
  });

  slideTitles = indicators.querySelectorAll("a.slide-title");
  slideTitles.forEach((e, i) => {
    e.addEventListener("click", evt => {
      // detect index of clicked slide
      console.log(i);

      // remove active class
      slideItems.forEach(e => {
        e.classList.remove("active");
      });
      slideItems[i].classList.add('active');
    });
  });
}
