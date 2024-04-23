//LANDING SECTION EXIT
gsap.registerPlugin(ScrollTrigger);
//Gsap is the star of the show tbh
gsap.to(".intro-container", {
    
    y:-70,
    duration:3,
    opacity:0,
    scrollTrigger: {
        trigger:".svg-animation",
        start:"top 50%",
        scrub:2, //stops animation when scrolling stops(true or 2 seconds of smoothing)
        //markers: true,
        toggleActions:"restart complete reverse none",
        //             onEnter onLeave onEnterBack onLeaveBack
         end: () => `+=${document.querySelector(".svg-animation").offsetHeight}`,
        
    }

});

// gsap.to(".cricle", {
    
//   y:170,
  
//   duration:1,
//   scrollTrigger: {
//       trigger:".svg-animation",
//       start:"top 80%",
//       scrub:1, //stops animation when scrolling stops(true or 2 seconds of smoothing)
//       markers: true,
//       toggleActions:"restart complete reverse none",
//       //             onEnter onLeave onEnterBack onLeaveBack
//        end: () => `+=${document.querySelector(".svg-animation").offsetHeight}`,
      
//   }

// });

//EXPERIENCE SECTION ENTRY
gsap.to(".experience", {
    
    y:-150,
    duration:1,
    opacity:3,
    scrollTrigger: {
        trigger:".svg-animation",
        start:"top 40%",
        scrub:3, //stops animation when scrolling stops(true or 2 seconds of smoothing)
        //markers: true,
        toggleActions:"restart complete reverse none",
        //             onEnter onLeave onEnterBack onLeaveBack
         end: () => `+=${document.querySelector(".svg-animation").offsetHeight}`,
        
    }

});

//WORK SECTION ENTRY
gsap.to(".work", {
    
  y:-150,
  duration:2.5,
  opacity:1,
  scrollTrigger: {
      trigger:".img-fluid",
      start:"bottom 63%",
      scrub:3, //stops animation when scrolling stops(true or 2 seconds of smoothing)
      //markers: true,
      toggleActions:"restart complete reverse none",
      //             onEnter onLeave onEnterBack onLeaveBack
       end: () => `+=${document.querySelector(".svg-animation").offsetHeight}`,
      
  }

});



gsap.to(".p1", {
    
  y:-10,
  duration:2,
  opacity:1,
  scrollTrigger: {
      trigger:".experience",
      start:"top 17%",
      scrub:3, //stops animation when scrolling stops(true or 2 seconds of smoothing)
      //markers: true,
      toggleActions:"restart complete reverse none",
      //             onEnter onLeave onEnterBack onLeaveBack
       end: () => `+=${document.querySelector(".svg-animation").offsetHeight}`,
      
  }

});

gsap.to(".p1", {
    
  x:-1000,
  duration:1,
  scrollTrigger: {
      trigger:".skill",
      start:"center 30%",
      scrub:1, //stops animation when scrolling stops(true or 2 seconds of smoothing)
      //markers: true,
      toggleActions:"restart complete reverse none",
      //             onEnter onLeave onEnterBack onLeaveBack
       end: () => `+=${document.querySelector(".svg-animation").offsetHeight}`,
      
  }

});

gsap.to(".skill", {
    
  x:1000,
  duration:1,
  scrollTrigger: {
      trigger:".skill",
      start:"center 30%",
      scrub:1, //stops animation when scrolling stops(true or 2 seconds of smoothing)
      //markers: true,
      toggleActions:"restart complete reverse none",
      //             onEnter onLeave onEnterBack onLeaveBack
       end: () => `+=${document.querySelector(".svg-animation").offsetHeight}`,
      
  }

});

gsap.to(".p2", {
    
  x:0,
  duration:1,
  scrollTrigger: {
      trigger:".skill",
      start:"center 30%",
      scrub:1, //stops animation when scrolling stops(true or 2 seconds of smoothing)
      //markers: true,
      toggleActions:"restart complete reverse none",
      //             onEnter onLeave onEnterBack onLeaveBack
       end: () => `+=${document.querySelector(".svg-animation").offsetHeight}`,
      
  }

});


//AFFECTS RESPONSIVENESS. WORK ON IT
// const experienceHeading = document.querySelector('.headers');

// gsap.fromTo(
//   experienceHeading,
//   { fontSize: '10rem' }, // Start with a larger font size
//   {
//     fontSize: '7rem', // Transition to the normal font size
//     scrollTrigger: {
//       trigger: '.experience', // Trigger when the experience section comes into view
//       start: 'top 40%', // Start the animation when the top of the section is 80% in view
//       end: 'top top', // End the animation when the bottom of the section is 20% in view
//       scrub: 1, // Smoothly animate the font size while scrolling
//       markers: true, // Display markers for debugging (you can remove this in production)
//     },
//   }
// );

const tl = gsap.timeline({
    scrollTrigger: {
        trigger:".svg-animation",
        start:"top 80%",
        scrub:1, //stops animation when scrolling stops(true or 2 seconds of smoothing)
        //markers: true,
        toggleActions:"restart complete reverse none",
        //             onEnter onLeave onEnterBack onLeaveBack
         end:"bottom 40%",
    }
});

tl.to(".circle", {
    
    y:400,
    x:-250,
    duration:2,
}).to(".cirlce", 
{
    x:250,
    duration:0.3
})

const t2 = gsap.timeline({
  scrollTrigger: {
      trigger:".skill",
      start:"center 40%",
      scrub:1, //stops animation when scrolling stops(true or 2 seconds of smoothing)
      //markers: true,
      toggleActions:"restart complete reverse none",
      //             onEnter onLeave onEnterBack onLeaveBack
       end:"bottom top",
  }
});

t2.to(".circle", {
  
  y:850,
  x:250,
  duration:2,
})

ScrollTrigger.create({

    trigger:".experience",
        start:"top 30%",
        end: "top 10%",
        duration:3,
        //markers: true,
        toggleActions:"restart pause reverse none",
        scrub:2,
    toggleClass: {targets: ".experienceTitle", className: "small"},
})

ScrollTrigger.create
({
    trigger:".body",
    start: "3% top",
    
    //markers:true,
    toggleClass: {targets: ".nav-container", className: "nav-active"},

});


//Buttery smooth scroll
// Smooth scroll to a section when the link is clicked
function smoothScroll(target, duration, offset) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.offsetTop - offset;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var scrollAmount = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollAmount);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing function
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Smooth scroll to experience section when the link is clicked
var experienceLink = document.querySelector('.nav-links[href="#experience"]');
experienceLink.addEventListener('click', function (event) {
  event.preventDefault();
  var navHeight = document.querySelector('.nav-container').offsetHeight + 80;
  smoothScroll('#experience', 200, navHeight);
});

// Smooth scroll to home section when the link is clicked
var homeLink = document.querySelector('.nav-links[href="#home"]');
homeLink.addEventListener('click', function (event) {
  event.preventDefault();
  smoothScroll('#home', 200, 0);
});

// Smooth scroll to work section when the link is clicked
var workLink = document.querySelector('.nav-links[href="#work"]');
workLink.addEventListener('click', function (event) {
  event.preventDefault();
  var navHeight = document.querySelector('.nav-container').offsetHeight + 80;
  smoothScroll('#work', 200, navHeight);
});

var workLink = document.querySelector('.nav-links[href="#contact"]');
workLink.addEventListener('click', function (event) {
  event.preventDefault();
  var navHeight = document.querySelector('.nav-container').offsetHeight;
  smoothScroll('#contact', 200, navHeight);
});



//The 3d ball thingie
const myTags = [
  ' PYTHON', 'JAVA', 'EC2',
  'DYNAMODB', 'C++', 'C#',
  'BOOTSTRAP', 'BULMA', 'GIT',
  'MYSQL', 'ASP.NET', 'MVC',
  'S3','LAMBDA', 'CONNECT',
];

var tagCloud = TagCloud('.content', myTags,{

// radius in px
radius: 250,

// animation speed
// slow, normal, fast
maxSpeed: 'normal',
initSpeed: 'fast',

// 0 = top
// 90 = left
// 135 = right-bottom
direction: 135,

// interact with cursor move on mouse out
keep: true

});

var color = '#C9AD7F'
document.querySelector('.content').style.color = color;

//NAV
const menuButton = document.getElementById('menu-button');
const menuExit = document.getElementById('exit-button');
const menu = document.querySelector('.popup');
const navLinks = document.querySelectorAll('.nav-links');

menuButton.addEventListener('click', () =>{
  menu.classList.toggle('active');
});

menuExit.addEventListener('click', () =>{
  menu.classList.remove('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

