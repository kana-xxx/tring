const headerLines = document.querySelectorAll(".js-line");
const ham  = document.getElementById("hamburger");
const hamMenu = document.getElementById("hamMenu");
const hamTop = document.querySelector(".hamTop");
const hamMiddle = document.querySelector(".hamMiddle")
const hamBottom = document.querySelector(".hamBottom");
const hamBG = document.querySelector("html");

headerLines.forEach((line )=> {
    line.addEventListener('mouseover',()=> {
        line.classList.add('active-line');
    })
    line.addEventListener('mouseleave',()=> {
        line.classList.remove('active-line');
        line.classList.add('line-out');
    })

})

ham.addEventListener('click', ()=> {
    hamTop.classList.toggle("js-rotateTop");
    hamMiddle.classList.toggle("js-rotateMiddle");
    hamBottom.classList.toggle("none");
    hamMenu.classList.toggle("is-active");
    hamBG.classList.toggle("is-active");
})