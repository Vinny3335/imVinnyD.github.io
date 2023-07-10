gsap.registerPlugin(ScrollTrigger);

gsap.to(".intro-container", {
    
    y:-50,
    duration:2,
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

gsap.to(".experience", {
    
    y:-180,
    duration:4,
    opacity:1,
    scrollTrigger: {
        trigger:".svg-animation",
        start:"top 40%",
        scrub:2, //stops animation when scrolling stops(true or 2 seconds of smoothing)
        //markers: true,
        toggleActions:"restart complete reverse none",
        //             onEnter onLeave onEnterBack onLeaveBack
         end: () => `+=${document.querySelector(".svg-animation").offsetHeight}`,
        
    }

});

gsap.to(".experience", {
    
    y:-180,
    duration:4,
    opacity:1,
    scrollTrigger: {
        trigger:".svg-animation",
        start:"top 40%",
        scrub:2, //stops animation when scrolling stops(true or 2 seconds of smoothing)
        //markers: true,
        toggleActions:"restart complete reverse none",
        //             onEnter onLeave onEnterBack onLeaveBack
         end: () => `+=${document.querySelector(".svg-animation").offsetHeight}`,
        
    }

});


ScrollTrigger.create
({
    trigger:".body",
    start: "7% top",
    markers:true,
    toggleClass: {targets: ".nav-container", className: "nav-active"},

});