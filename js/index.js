// Your code goes here
const images = document.querySelectorAll("img")
images.forEach(image => {
    image.addEventListener("click", (event) => {
        image.style.transform = "rotate(720deg)"
        image.style.transitionDuration = "2s"
        event.stopPropagation()
    })
    image.addEventListener("dblclick", (event) => {
        image.style.transform = "skew(190deg, 10deg)"
        image.style.transitionDuration = "1s"
        event.stopPropagation()
    })
});

