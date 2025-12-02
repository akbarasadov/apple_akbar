let pro = document.querySelector(".iphone_pro")
let pro_max = document.querySelector(".iphone_pro_max")


let first_p = document.querySelector(".first_p")

let gray = document.querySelectorAll(".gray")

let one_color = document.querySelectorAll(".one_color")
let white = document.querySelector(".white")
let orange = document.querySelector(".orange")
let blue = document.querySelector(".blue")
let text_color = document.querySelector(".text_color")

let img = document.querySelector(".img")

let memory = document.querySelectorAll(".memory")
let TB = document.querySelector(".tbtbb")

pro.onclick = () => {
    pro.classList.add("click")
    pro_max.classList.remove("click")

    first_p.textContent = "From $1099 or $45.79/mo. for 24 mo.※"

    TB.classList.add("not_TB")

    one_color.forEach(a => {
        a.classList.add("cool_color")
    })

    if (text_color.textContent !== "Color") {
        if (text_color.textContent === "Color - Silver") {
            img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch-silver?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RzRIN3Q2Z245Z1F3L1paWlRjZnl6YTF1TmpsTkNoRVRMR1N6UXlVZFBaU0NYR1ZZZnEyMVlVQUliTThGMjNyaFJFRjhVelZBVy8wUHZRSVFLRUJEWEdMR1dOZHMwa2VjYTFxU2tiQm1KKzJB&traceId=1")
        }
        if (text_color.textContent === "Color - Cosmic Orange") {
            img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch-cosmicorange?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RUlmWnJkM2NiV2hVVVF2ZE1VdGpQZWhsQTdPYWVGbmdIenAvNE9qYmZVYVFDb1F2RTNvUEVHRkpGaGtOSVFHak5NTEhXRE11VU1QNVo2eDJsWlpuWHRlLys5ZkozSXJXZWZXNk8rZDF5S0V3&traceId=1")
        }
        if (text_color.textContent === "Color - Deep Blue") {
            img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch-deepblue?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RUczK3M0RVhxWWpFZXJsZzlEU0tTSHVHdDcxbVFRSnhaQ0pnV1pOaG5KaGhNQnJMcnc4RkxJd3ZMc3hKZVVFWHNGZ0xNcmF3NFg5dGNjU0hGYnBVTUF3bXM4bU92dFpiSk1vcFRiMHNtbGRn&traceId=1")
        }
    } else {
        img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RXhsaFZBQ3Ira2kyRm5zQ1YwdHhkQ0FOL1haWCt6TDJ0UWlLb09XajVNdENYR1ZZZnEyMVlVQUliTThGMjNyaFJFRjhVelZBVy8wUHZRSVFLRUJEWEd4elZjK2s2dnRCU01ESUttTzBMSUdR&traceId=1")
    }

    white.onclick = () => {
        text_color.textContent = "Color - Silver"

        one_color.forEach(col => {
            col.classList.remove("col_click")
        })
        white.classList.add("col_click")
        img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch-silver?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RzRIN3Q2Z245Z1F3L1paWlRjZnl6YTF1TmpsTkNoRVRMR1N6UXlVZFBaU0NYR1ZZZnEyMVlVQUliTThGMjNyaFJFRjhVelZBVy8wUHZRSVFLRUJEWEdMR1dOZHMwa2VjYTFxU2tiQm1KKzJB&traceId=1")

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
        text_color.textContent = "Color - Deep Blue"
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

        img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch-deepblue?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RUczK3M0RVhxWWpFZXJsZzlEU0tTSHVHdDcxbVFRSnhaQ0pnV1pOaG5KaGhNQnJMcnc4RkxJd3ZMc3hKZVVFWHNGZ0xNcmF3NFg5dGNjU0hGYnBVTUF3bXM4bU92dFpiSk1vcFRiMHNtbGRn&traceId=1")
    }
    orange.onclick = () => {
        text_color.textContent = "Color - Cosmic Orange"
        one_color.forEach(col => {
            col.classList.remove("col_click")
        })
        orange.classList.add("col_click")

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

        img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch-cosmicorange?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RUlmWnJkM2NiV2hVVVF2ZE1VdGpQZWhsQTdPYWVGbmdIenAvNE9qYmZVYVFDb1F2RTNvUEVHRkpGaGtOSVFHak5NTEhXRE11VU1QNVo2eDJsWlpuWHRlLys5ZkozSXJXZWZXNk8rZDF5S0V3&traceId=1")
    }
}

pro_max.onclick = () => {
    pro_max.classList.add("click")
    pro.classList.remove("click")

    first_p.textContent = "From $1199 or $49.95/mo. for 24 mo.※"

    TB.classList.remove("not_TB")

    one_color.forEach(a => {
        a.classList.add("cool_color")
    })


    if (text_color.textContent !== "Color") {
        if (text_color.textContent === "Color - Silver") {
            img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-silver?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RVRqUkJqUGFyN1pGMnlaV3JkWU9jdjF1TmpsTkNoRVRMR1N6UXlVZFBaU0NYR1ZZZnEyMVlVQUliTThGMjNyaFFxd1ZHd3R2RmlpWk50MW5LU2N1cWNxdlBsK2ZicnRLY2oza08vTDBZeXZ3&traceId=1")
        }
        if (text_color.textContent === "Color - Cosmic Orange") {
            img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch_AV1?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RUNxZ2Y2UndFVkhoZG1DQ0NWVTFWa2xjZnhHRHJyenVmME5KTm9Sd1ZaU3NqbWRhTGpRM2xxVWJRWUhSaDlCQ3E0aFZQSlZXTG00RTR2aXlYRzBpVUxlODBad1VqYUZ3RW54YkRKL2hzbXVR&traceId=1")
        }
        if (text_color.textContent === "Color - Deep Blue") {
            img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-deepblue?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RWhhOHJGRUNHdlh6a3VuZVVqdnNrNXVHdDcxbVFRSnhaQ0pnV1pOaG5KaGhNQnJMcnc4RkxJd3ZMc3hKZVVFWHREelVULzVXd2xCbVltNVMyUXhsYlBpMEowc2xaa1ByZlpMdyt3ZFlhVkhn&traceId=1")
        }
    } else {
        img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RXhsaFZBQ3Ira2kyRm5zQ1YwdHhkQ0FOL1haWCt6TDJ0UWlLb09XajVNdENYR1ZZZnEyMVlVQUliTThGMjNyaFJFRjhVelZBVy8wUHZRSVFLRUJEWEd4elZjK2s2dnRCU01ESUttTzBMSUdR&traceId=1")
    }


    white.onclick = () => {
        text_color.textContent = "Color - Silver"
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


                if (m.classList.contains("256gb") === true) {
                    first_p.textContent = "From $1199 or $49.95/mo. for 24 mo.※"
                }

                if (m.classList.contains("512gb") === true) {
                    first_p.textContent = "From $1399 or $58.29/mo. for 24 mo.※"
                }

                if (m.classList.contains("1TB") === true) {
                    first_p.textContent = "From $1599 or $66.45/mo. for 24 mo.※"
                }

                if (m.classList.contains("2TB") === true) {
                    first_p.textContent = "From $1999 or $83.29/mo. for 24 mo.※"
                }

                m.classList.add("click")
            }
        })

        img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-silver?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RVRqUkJqUGFyN1pGMnlaV3JkWU9jdjF1TmpsTkNoRVRMR1N6UXlVZFBaU0NYR1ZZZnEyMVlVQUliTThGMjNyaFFxd1ZHd3R2RmlpWk50MW5LU2N1cWNxdlBsK2ZicnRLY2oza08vTDBZeXZ3&traceId=1")
    }

    blue.onclick = () => {
        text_color.textContent = "Color - Deep Blue"
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

                if (m.classList.contains("256gb") === true) {
                    first_p.textContent = "From $1199 or $49.95/mo. for 24 mo.※"
                }

                if (m.classList.contains("512gb") === true) {
                    first_p.textContent = "From $1399 or $58.29/mo. for 24 mo.※"
                }

                if (m.classList.contains("1TB") === true) {
                    first_p.textContent = "From $1599 or $66.45/mo. for 24 mo.※"
                }

                if (m.classList.contains("2TB") === true) {
                    first_p.textContent = "From $1999 or $83.29/mo. for 24 mo.※"
                }


                m.classList.add("click")
            }
        })


        img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-deepblue?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RWhhOHJGRUNHdlh6a3VuZVVqdnNrNXVHdDcxbVFRSnhaQ0pnV1pOaG5KaGhNQnJMcnc4RkxJd3ZMc3hKZVVFWHREelVULzVXd2xCbVltNVMyUXhsYlBpMEowc2xaa1ByZlpMdyt3ZFlhVkhn&traceId=1")
    }

    orange.onclick = () => {
        text_color.textContent = "Color - Cosmic Orange"
        one_color.forEach(col => {
            col.classList.remove("col_click")
        })
        orange.classList.add("col_click")

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



                if (m.classList.contains("256gb") === true) {
                    first_p.textContent = "From $1199 or $49.95/mo. for 24 mo.※"
                }

                if (m.classList.contains("512gb") === true) {
                    first_p.textContent = "From $1399 or $58.29/mo. for 24 mo.※"
                }

                if (m.classList.contains("1TB") === true) {
                    first_p.textContent = "From $1599 or $66.45/mo. for 24 mo.※"
                }

                if (m.classList.contains("2TB") === true) {
                    first_p.textContent = "From $1999 or $83.29/mo. for 24 mo.※"
                }


                m.classList.add("click")
            }
        })

        img.setAttribute("src", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RnVrUzFnTVVSUnNLVnZUWUMxNTBGaGhsQTdPYWVGbmdIenAvNE9qYmZVYVFDb1F2RTNvUEVHRkpGaGtOSVFHak5NTEhXRE11VU1QNVo2eDJsWlpuWHQyaWthYXpzcEpXMExJLy9GTE9wWkNn&traceId=1")
    }
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