if (document.querySelector('.hamburger') !== null){
    document.querySelector(".hamburger").addEventListener("click", function () {
        this.classList.toggle("is-active");
    }, false);
}