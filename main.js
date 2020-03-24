window.onload = init; // call the function only when the page is completely loaded
var indicators = document.querySelector('#indicators')


function init() {

    

    // alert('hello world');
    window.addEventListener('mousemove', showCursorLocation)
    console.log(window.innerWidth);

    function showCursorLocation(e) {
        let percent = Math.round((e.offsetX / window.innerWidth) * 100)
        // console.log(percent-50);
        indicators.style.transform = `translateX(${(percent-50)*-1}%)`
    }



    //transform: translateX(28%)




















}