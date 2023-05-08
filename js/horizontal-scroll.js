var item = document.getElementById("main");

window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollWidth += 100;
    else item.scrollWidth -= 100;
});