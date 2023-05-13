const copyBtn = document.querySelector(".copyBtn")
const email = "danielrossinatti15@gmail.com"
console.log(email)
copyBtn.addEventListener("click", function (e) {
    navigator.clipboard.writeText(email)
    copyBtn.classList.add("active")
    window.getSelection().removeAllRanges()
    setTimeout(function () {
        copyBtn.classList.remove("active")
    },3000)
})