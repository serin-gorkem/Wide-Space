var mainToggleButton = document.querySelector(".main-toggle-button");
var mobileToggleButton = document.querySelector(".mobile-toggle-button");
var navBar = document.querySelector(".main-nav");
var logos = document.querySelectorAll(".aspects");
var pressed = false;

mainToggleButton.addEventListener("click", function () {
    if (pressed) {
        navBar.classList.add("shrink");
        navBar.classList.remove("expand");
        pressed = false;
    } else {
        pressed = true;
        navBar.classList.add("expand");
        navBar.classList.remove("shrink");
    }
});
mobileToggleButton.addEventListener("click", function () {
    if (pressed) {
        for (let i = 0; i < logos.length; i++) {
            logos[i].classList.add("appear");
            logos[i].classList.remove("hide");
        }
        pressed = false;
    } else {
        for (let i = 0; i < logos.length; i++) {
            logos[i].classList.add("hide");
            logos[i].classList.remove("appear");
        }
        pressed = true;
    }
});

var customersInfo = document.querySelectorAll(".customers-info");
var customersImage = document.querySelector(".customers-image-1");
var leftSwitch = document.querySelector(".fa-arrow-left");
var rightSwitch = document.querySelector(".fa-arrow-right");
var i = 1;
rightSwitch.addEventListener("click", function () {
    rightSwitch.classList.add("rotate-360");
    if (i !== customersInfo.length) {
        customersImage.classList.remove("customers-image-" + i);
        customersInfo[i - 1].style.display = "none";
        customersInfo[i].style.display = "block";
        customersImage.classList.add("customers-image-" + (
            i + 1
        ));
        i++;
    } else {
        customersImage.classList.remove("customers-image-" + i);
        customersInfo[i - 1].style.display = "none";
        i = 1;
        customersInfo[0].style.display = "block";
        customersImage.classList.add("customers-image-1");
    }
});

leftSwitch.addEventListener("click", function () {
    if (i !== 1) {
        i--;
        customersImage.classList.remove("customers-image-" + (
            i + 1
        ));
        customersImage.classList.add("customers-image-" + i);
        customersInfo[i].style.display = "none";
        customersInfo[i - 1].style.display = "block";
    } else {
        customersImage.classList.remove("customers-image-" + i);
        customersInfo[i - 1].style.display = "none";
        i = 4;
        customersInfo[i - 1].style.display = "block";
        customersImage.classList.add("customers-image-4");
    }
});

var details = document.querySelectorAll(".accordion");
for (let i = 0; i < details.length; i++) {
    details[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.display === "block")
        {
            panel.style.display = "none";
        }
        else
        {
            panel.style.display="block";
        }
    });  
}

function showInfo(number) {
    var details = document.querySelector("details-" + number);
    alert("details-" + number);
    if (showed) {
        details.style.display = "none";
        showed = false;
    } else {
        details.style.display = "block";
        showed = true;
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show");
        }
        else
        {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElements1 = document.querySelectorAll(".hidden-2");
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));