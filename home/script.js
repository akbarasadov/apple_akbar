let button = document.querySelectorAll(".button_buy")
console.log(button);

button.forEach(btn => {
    btn.onclick = () => {
        if (btn.classList.contains("pro") === true) {
            window.location.href = "/iphone_pro/apple.html"
        }

        if (btn.classList.contains("air") === true) {
            window.location.href = "/iphone_air/index.html"
        }

        if (btn.classList.contains("17") === true) {
            window.location.href = "/iphone_17/index.html"
        }
    }
})

let video_foto = document.querySelector(".video_foto")
video_foto.onclick = () => {
    window.location.href = "/video/video.html"
}