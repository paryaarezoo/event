window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const text = document.querySelectorAll("header-id")
    const text2 = document.querySelectorAll("header-id2")
    header.classList.remove("bg-gray-100");
    header.classList.add("bg-gray-500/bg-opacity-100");
    header.classList.remove("text-gray-900");
    header.classList.add("text-white");
    text2.classList.remove("text-accent")
    text2.classList.add("text-white");

    text.classList.remove("text-secondary");
    text.classList.add("text-white");


})