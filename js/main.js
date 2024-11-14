const nav =document.querySelector('.navbar');

document.addEventListener('scroll', () => {
    if(window.scrollY > 20){
        nav.classList.add('header-scrolled');
    }else{
        nav.classList.remove('header-scrolled');
    }
});

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelectorAll(".navbar-collapse.collapse");

navLink.forEach(function (a) {
    a.addEventListener('click', () => {
        navCollapse.forEach(function (collapse) {
            collapse.classList.remove("show");
        });
    });
});

// Nav Tracker
let sections = document.querySelectorAll("section");
window.onscroll = () => {
    sections.forEach((sec) => {
        let sectionTop = sec.getBoundingClientRect().top;
        let sectionHeight = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight >= window.innerHeight / 2) {
            navLink.forEach((link) => link.classList.remove("active"));
            document.querySelector(`nav li a[href*="${id}"]`).classList.add("active");
        }
    });
};



// Circular Progeress 
let progressBars = document.querySelectorAll(".circular-progress");

progressBars.forEach((progressBar) => {
    let valueContainer = progressBar.querySelector(".value-container");
    let progressValue = 0;
    let progressEndValue = parseInt(progressBar.getAttribute("data-end-value"));
    let speed = 10;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(#0ef ${progressValue * 3.6}deg,#000 ${progressValue * 3.6}deg)`;

        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
});

// Scroll Animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


const typed = new Typed('.chng-text',{
    strings: ['Frontend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});