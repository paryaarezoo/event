window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const text = document.querySelectorAll("#header-id");
    const text2 = document.querySelectorAll("#header-id2");
    header.classList.remove("bg-gray-100");
    header.classList.add("bg-gray-500");
    header.classList.remove("text-gray-900");
    header.classList.add("text-white");

    text2.forEach(element => {
        element.classList.remove("text-accent");
        element.classList.add("text-white");
    });

    text.forEach(element => {
        element.classList.remove("text-secondary");
        element.classList.add("text-white");
    });


})