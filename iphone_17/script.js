let first_p = document.querySelector(".first_p")

let gray = document.querySelectorAll(".gray")

let one_color = document.querySelectorAll(".one_color")
let blue = document.querySelector(".blue")
let white = document.querySelector(".white")
let black = document.querySelector(".black")
let pink = document.querySelector(".pink")
let green = document.querySelector(".green")

let text_color = document.querySelector(".text_color")

let img = document.querySelector(".img")

let memory = document.querySelectorAll(".memory")

let buyBtn = document.querySelector(".buyBtn")
let purchaseDialog = document.querySelector(".purchaseDialog")
let close_dialog = document.querySelector(".close_dialog")
let bg = document.querySelector("body")
let overlay = document.querySelector(".overlay");



white.onclick = () => {
    text_color.textContent = "Color - White"

    one_color.forEach(col => {
        col.classList.remove("col_click")
    })
    white.classList.add("col_click")

    gray.forEach(g => {
        g.classList.remove("gray")
    })

    memory.forEach(m => {
        m.classList.add("active_memory")
        m.onclick = () => {
            buyBtn.classList.remove("hide")
            memory.forEach(me => {
                me.classList.remove("click")
            })

            m.classList.add("click")

            if (m.classList.contains("256gb") === true) {
                first_p.textContent = "From $799 or $33.29/mo. for 24 mo.※"
            }

            if (m.classList.contains("512gb") === true) {
                first_p.textContent = "From $999 or $41.62/mo. for 24 mo.※"
            }
            buyBtn.onclick = () => {
                purchaseDialog.classList.add("show");
                overlay.classList.add("show");
            }

            close_dialog.onclick = () => {
                purchaseDialog.classList.remove("show");
                overlay.classList.remove("show");
            }
        }
    })

    img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-storage-select-202509-white?wid=5120&hei=2880&fmt=webp&qlt=90&.v=cVgyTFRHeEI2NnFsOEV6aTB4OG83NFVVTEF4WTZKMHBlZ3U4MnlNZ3c1azhVUkp0MjdUS1RYNitOS3F5TDJoSTg5ZFJsR0hrQnFVeEVSbnU0TWlpU0xrMVI0NlJMSGE3di9kc01Wd2tWbmhYOEhtZ21TUFNOMy9TcnhMR0p1UGY&traceId=1")
}

blue.onclick = () => {
    text_color.textContent = "Color - Mist Blue"
    one_color.forEach(col => {
        col.classList.remove("col_click")
    })
    blue.classList.add("col_click")

    gray.forEach(g => {
        g.classList.remove("gray")
    })

    memory.forEach(m => {
        m.classList.add("active_memory")
        m.onclick = () => {
            buyBtn.classList.remove("hide")
            memory.forEach(me => {
                me.classList.remove("click")
            })

            m.classList.add("click")

            if (m.classList.contains("256gb") === true) {
                first_p.textContent = "From $799 or $33.29/mo. for 24 mo.※"
            }

            if (m.classList.contains("512gb") === true) {
                first_p.textContent = "From $999 or $41.62/mo. for 24 mo.※"
            }
            buyBtn.onclick = () => {
                purchaseDialog.classList.add("show");
                overlay.classList.add("show");
            }

            close_dialog.onclick = () => {
                purchaseDialog.classList.remove("show");
                overlay.classList.remove("show");
            }
        }

    })

    img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-storage-select-202509-mistblue?wid=5120&hei=2880&fmt=webp&qlt=90&.v=cVgyTFRHeEI2NnFsOEV6aTB4OG83NFVVTEF4WTZKMHBlZ3U4MnlNZ3c1a2hVTjJxZVhnK25qc0FnY3V1UmtkNE9UVDVQbVhkcDIxQlRzeDZXVVpQSzYyL0ZSTzZrMWlpUU5CQlpuNHNUZy95d09CZVF0QlpTODFjYSttM2l5bU4&traceId=1")
}

black.onclick = () => {
    text_color.textContent = "Color - Black"
    one_color.forEach(col => {
        col.classList.remove("col_click")
    })
    black.classList.add("col_click")

    gray.forEach(g => {
        g.classList.remove("gray")
    })

    memory.forEach(m => {
        m.classList.add("active_memory")
        m.onclick = () => {
            buyBtn.classList.remove("hide")
            memory.forEach(me => {
                me.classList.remove("click")
            })

            m.classList.add("click")

            if (m.classList.contains("256gb") === true) {
                first_p.textContent = "From $799 or $33.29/mo. for 24 mo.※"
            }

            if (m.classList.contains("512gb") === true) {
                first_p.textContent = "From $999 or $41.62/mo. for 24 mo.※"
            }
            buyBtn.onclick = () => {
                purchaseDialog.classList.add("show");
                overlay.classList.add("show");
            }

            close_dialog.onclick = () => {
                purchaseDialog.classList.remove("show");
                overlay.classList.remove("show");
            }
        }
    })

    img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-storage-select-202509-black?wid=5120&hei=2880&fmt=webp&qlt=90&.v=cVgyTFRHeEI2NnFsOEV6aTB4OG83NFVVTEF4WTZKMHBlZ3U4MnlNZ3c1azBHUk0xampKNG9lbGhBOGJDblFiazg5ZFJsR0hrQnFVeEVSbnU0TWlpU0xrMVI0NlJMSGE3di9kc01Wd2tWbmprVng1NUJWemlmcmcyb3RHc0wxY3g&traceId=1")
}


green.onclick = () => {
    text_color.textContent = "Color - Sage"
    one_color.forEach(col => {
        col.classList.remove("col_click")
    })
    green.classList.add("col_click")

    gray.forEach(g => {
        g.classList.remove("gray")
    })

    memory.forEach(m => {
        m.classList.add("active_memory")
        m.onclick = () => {
            buyBtn.classList.remove("hide")

            memory.forEach(me => {
                me.classList.remove("click")
            })

            m.classList.add("click")

            if (m.classList.contains("256gb") === true) {
                first_p.textContent = "From $799 or $33.29/mo. for 24 mo.※"
            }

            if (m.classList.contains("512gb") === true) {
                first_p.textContent = "From $999 or $41.62/mo. for 24 mo.※"
            }

            buyBtn.onclick = () => {
                purchaseDialog.classList.add("show");
                overlay.classList.add("show");
            }

            close_dialog.onclick = () => {
                purchaseDialog.classList.remove("show");
                overlay.classList.remove("show");
            }
        }
    })

    img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-storage-select-202509-sage?wid=5120&hei=2880&fmt=webp&qlt=90&.v=cVgyTFRHeEI2NnFsOEV6aTB4OG83NFVVTEF4WTZKMHBlZ3U4MnlNZ3c1bVQxUngzQk9NT0tyOE5HTXNLN0YyOUR1ak1SbkZpQ0hqY2xBWWtPMjVFUWJGN0wzL0h1ekhqbXlQVUw3clJ1VkVSTVBIb2MxczhBYWxQS1VteVlBcnM&traceId=1")
}

pink.onclick = () => {
    text_color.textContent = "Color - Lavender"

    one_color.forEach(col => {
        col.classList.remove("col_click")
    })
    pink.classList.add("col_click")

    gray.forEach(g => {
        g.classList.remove("gray")
    })

    memory.forEach(m => {
        m.classList.add("active_memory")
        m.onclick = () => {
            buyBtn.classList.remove("hide")
            memory.forEach(me => {
                me.classList.remove("click")
            })

            m.classList.add("click")

            if (m.classList.contains("256gb") === true) {
                first_p.textContent = "From $799 or $33.29/mo. for 24 mo.※"
            }

            if (m.classList.contains("512gb") === true) {
                first_p.textContent = "From $999 or $41.62/mo. for 24 mo.※"
            }

            buyBtn.onclick = () => {
                purchaseDialog.classList.add("show");
                overlay.classList.add("show");
            }

            close_dialog.onclick = () => {
                purchaseDialog.classList.remove("show");
                overlay.classList.remove("show");
            }
        }

    })

    img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-storage-select-202509-lavender?wid=5120&hei=2880&fmt=webp&qlt=90&.v=cVgyTFRHeEI2NnFsOEV6aTB4OG83NFVVTEF4WTZKMHBlZ3U4MnlNZ3c1bnc4bDh0UGRxS01IRnFtemFqWkZvUE9UVDVQbVhkcDIxQlRzeDZXVVpQSzYyL0ZSTzZrMWlpUU5CQlpuNHNUZzhlajhISkY5elJWVnpwRVp4UkxFTEk&traceId=1")
}