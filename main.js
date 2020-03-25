window.onload = init; // call the function only when the page is completely loaded
var indicators = document.querySelector("#indicators");

function init() {
  // alert('hello world');
  window.addEventListener("mousemove", showCursorLocation);
  window.addEventListener('mouseout', e=>{
    indicators.style.transform = "translateX(0)"
  })

  function showCursorLocation(e) {
    let percent = Math.round((e.pageX / window.innerWidth) * 100);

    let moveX = (percent-50)*-1
    console.log(moveX);
    indicators.style.transform = `translateX(${moveX}%)`;
  }
}
