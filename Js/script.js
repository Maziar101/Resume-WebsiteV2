///////////////Change Word Animation////////////////
var words = ['طراح هستم' , 'توسعه دهنده هستم'],
part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skip_count = 0,
skip_delay = 15,
speed = 70;
var wordflick = function () {
setInterval(function () {
if (forwards) {
  if (offset >= words[i].length) {
    ++skip_count;
    if (skip_count == skip_delay) {
      forwards = false;
      skip_count = 0;
    }
  }
}
else {
  if (offset == 0) {
    forwards = true;
    i++;
    offset = 0;
    if (i >= len) {
      i = 0;
    }
  }
}
part = words[i].substr(0, offset);
if (skip_count == 0) {
  if (forwards) {
    offset++;
  }
  else {
    offset--;
  }
}
$('.word').text(part);
},speed);
};

$(document).ready(function () {
  wordflick();
});
/////////////////////////////////////////////////

var targetHeightHeader = 200;
const header = document.getElementById("desktop-header");
var targetHeightAboutMeS = 550;
var targetHeightAboutMeE = 950;

const aboutMeFix = document.getElementById("about-me-fix");
function handleScroll(){
  if(window.scrollY >= targetHeightHeader){
    header.classList.add("fixed-header");
  }else{
    header.classList.remove("fixed-header");
  }
    
  if(window.screenY >= 450 && window.scrollY <= 900){
    document.getElementById("about-nav").style.background = "#F2CC8F !important";
  }else if(window.screenY >= 900 && window.scrollY <= 1300){
    document.getElementById("services-nav").style.background = "#F2CC8F";
  }else if(window.scrollY >= 0 && window.scrollY <= 450){
    document.getElementById("home-nav").style.background = "#F2CC8F";
  }

}
window.addEventListener("scroll", handleScroll);

/////////////////////////////////////////////////

var mobileNavBar = document.getElementById("mobile-ul");
var mobileIcon = document.getElementById("open-mobile");
mobileIcon.addEventListener("click" , ()=>{
  mobileNavBar.classList.toggle("open-close");
});

/////////////////SLIDER/////////////////

let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
