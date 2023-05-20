var item = document.querySelector('html');

window.addEventListener("wheel", function (e) {
    var leftScrollAmount = -(e.wheelDeltaY * 3);
    // if (e.wheelDeltaY < 0) {
    //     leftScrollAmount = Math.max(scrollAmount += 500, scrollMax);
    // } else {
    //     leftScrollAmount = Math.min(scrollAmount -= 500, scrollMin);
    // }
    item.scrollBy({
        top: 0,
        left: leftScrollAmount,
        behavior: 'smooth'
    });
});