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
const sections = document.querySelectorAll("section")
sections.forEach((section) => {
    section.addEventListener("contextmenu", () => {
        section.textContent = "Copying site data not prohibited"
    })
    section.addEventListener("copy", () => {
        section.textContent = "Copying site data not prohibited"
    })
})
window.addEventListener("keydown", (event) => {
    document.querySelector("body").style.backgroundImage = "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)"
})
window.addEventListener("keyup", (event) => {
    document.querySelector("body").style.backgroundImage = "linear-gradient(to left, red,orange,yellow,green,blue,indigo,violet)"

})

window.addEventListener("scroll", (event) => {
    document.querySelector(".main-navigation").style.backgroundImage = "radial-gradient(red, yellow, green)"
})

const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.5)"
        link.style.transition = "all 0.3s"
    })
    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)"
        link.style.transition = "all 0.8s"
    })
    link.addEventListener("click", (event) => {
        event.preventDefault();
    }
})
window.addEventListener("resize", (event) => {
    event.stopPropagation();
    document.querySelector("body").style.background = "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80') #fff9 no-repeat 100%/cover"
})

window.addEventListener("load", (event) => {
    let welcome = alert("welcome to funbus!")
})
