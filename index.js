const handleMenuOpacityDesktopVersion = () => {
    let width = document.body.offsetWidth;
    if(width >= 784 && document.querySelector(".opacityCount").innerHTML === "0") {
        document.querySelector(".menu").style.opacity = "1";
    }
    if(width <= 784 && document.querySelector(".opacityCount").innerHTML === "0") {
        document.querySelector(".menu").style.opacity = "0";
    }
}

const handleMenuClick = () => {
    let menu = document.querySelector("header .headerWrapper .menu");
    let dropdownArrow = document.querySelector(".dropdownArrow");
    let opacityCount = document.querySelector(".opacityCount");

    if(opacityCount.innerHTML === "0") {
        menu.style.opacity = "1";
        dropdownArrow.style.opacity = "1";
        opacityCount.innerHTML = "1";
    }
    else {
        menu.style.opacity = "0";
        dropdownArrow.style.opacity = "0";
        opacityCount.innerHTML = "0";
    }

    console.log(document.body.offsetWidth);
}