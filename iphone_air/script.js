let first_p = document.querySelector(".first_p")

let gray = document.querySelectorAll(".gray")

let one_color = document.querySelectorAll(".one_color")
let blue = document.querySelector(".blue")
let gold = document.querySelector(".gold")
let white = document.querySelector(".white")
let black = document.querySelector(".black")

let text_color = document.querySelector(".text_color")

let img = document.querySelector(".img")

let memory = document.querySelectorAll(".memory")


white.onclick = () => {
    text_color.textContent = "Color - Cloud White"

    one_color.forEach(col => {
        col.classList.remove("col_click")
    })
    white.classList.add("col_click")
    img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-air-storage-select-202509-cloudwhite?wid=5120&hei=2880&fmt=webp&qlt=90&.v=ak1sZkd3dVNNaXV6UjRtdDkxRENRY084U2hIc1dzK3R2VnN1VkU4WXRzVkVyYzJjVGJQTDZoSHllZ2NHNTZlQnF2TWlpSzUzejRCZGt2SjJUNGl1VEE4bm1RcmlWRWp2eDN1WHNkSjNmUmJhR054cGRFRjc1U1R1UThvaVVnYVQ&traceId=1")

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
                first_p.textContent = "From $1099 or $45.79/mo. for 24 mo.※"
            }

            if (m.classList.contains("512gb") === true) {
                first_p.textContent = "From $1299 or $54.12/mo. for 24 mo.※"
            }

            if (m.classList.contains("1TB") === true) {
                first_p.textContent = "From $1499 or $62.45/mo. for 24 mo.※"
            }
        }
    })

}

blue.onclick = () => {
    text_color.textContent = "Color - Sky Blue"
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
                first_p.textContent = "From $1099 or $45.79/mo. for 24 mo.※"
            }

            if (m.classList.contains("512gb") === true) {
                first_p.textContent = "From $1299 or $54.12/mo. for 24 mo.※"
            }

            if (m.classList.contains("1TB") === true) {
                first_p.textContent = "From $1499 or $62.45/mo. for 24 mo.※"
            }
        }
    })

    img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-air-storage-select-202509-skyblue?wid=5120&hei=2880&fmt=webp&qlt=90&.v=ak1sZkd3dVNNaXV6UjRtdDkxRENRY084U2hIc1dzK3R2VnN1VkU4WXRzWHZHMVc3cVlBSk9kcHFrbStPa1pyT09UVDVQbVhkcDIxQlRzeDZXVVpQSzYyL0ZSTzZrMWlpUU5CQlpuNHNUZzgyT2VnWTFONjlnTGRsaFVOZnFLa0M&traceId=1")
}

black.onclick = () => {
    text_color.textContent = "Color - Space Black"
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
                first_p.textContent = "From $999 or $41.62/mo. for 24 mo.※"
            }

            if (m.classList.contains("512gb") === true) {
                first_p.textContent = "From $1199 or $49.95/mo. for 24 mo.※"
            }

            if (m.classList.contains("1TB") === true) {
                first_p.textContent = "From $1399 or $58.29/mo. for 24 mo.※"
            }
        }
    })

    img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-air-storage-select-202509-spaceblack?wid=5120&hei=2880&fmt=webp&qlt=90&.v=ak1sZkd3dVNNaXV6UjRtdDkxRENRY084U2hIc1dzK3R2VnN1VkU4WXRzVUJreGNZazNMaE1yR1pGVzdrbnoxQXF2TWlpSzUzejRCZGt2SjJUNGl1VEE4bm1RcmlWRWp2eDN1WHNkSjNmUllBVm5iWkNuQTNqTjI2ejdzci9LNWc&traceId=1")
}


gold.onclick = () => {
    text_color.textContent = "Color - Light Gold"
    one_color.forEach(col => {
        col.classList.remove("col_click")
    })
    gold.classList.add("col_click")

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
                first_p.textContent = "From $1099 or $45.79/mo. for 24 mo.※"
            }

            if (m.classList.contains("512gb") === true) {
                first_p.textContent = "From $1299 or $54.12/mo. for 24 mo.※"
            }

            if (m.classList.contains("1TB") === true) {
                first_p.textContent = "From $1499 or $62.45/mo. for 24 mo.※"
            }
        }
    })

    img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-air-storage-select-202509-lightgold?wid=5120&hei=2880&fmt=webp&qlt=90&.v=ak1sZkd3dVNNaXV6UjRtdDkxRENRY084U2hIc1dzK3R2VnN1VkU4WXRzVjN2RDJDQUlScUZaUFZtWEtjTjBRVWd2S3NaRzcrU0dmYjNHTUFiMnlsWFUxSlgrVWMrMzU1OXo2c2JyNjJZTGhZY3gzN2cyOTdScFNCSXpDYVliM0s&traceId=1")
}



let buyBtn = document.querySelector(".buyBtn")
let purchaseDialog = document.querySelector(".purchaseDialog")
let close_dialog = document.querySelector(".close_dialog")
let bg = document.querySelector("body")

let overlay = document.querySelector(".overlay");

buyBtn.onclick = () => {
    purchaseDialog.classList.add("show");
    overlay.classList.add("show");
}

close_dialog.onclick = () => {
    purchaseDialog.classList.remove("show");
    overlay.classList.remove("show");
}
