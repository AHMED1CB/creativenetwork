
import { gsap } from "gsap";

gsap.from(".hero .info h1", {
     x: -500,
     opacity: 0,
     stagger: 0.2,
})
gsap.to(".hero .info h1", {
     duration: 1,
     x: 0,
     opacity: 1,
     stagger: 0.2,
})

gsap.from(".hero .info p", {
     x: -500,
     opacity: 0,
     stagger: 0.2,
})
gsap.to(".hero .info p", {
     duration: 3,
     x: 0,
     opacity: 1,
     stagger: 0.2,
})
gsap.from(".hero .btn-container a", {
     opacity: 0,
     stagger: 0.2,
})
gsap.to(".hero .btn-container a", {
     duration: 3,
     x: 0,
     opacity: 1,
     stagger: 0.2,
})
gsap.from(".hero .logo img", {
     opacity: 0,
     stagger: 0.2,
})
gsap.to(".hero .logo img", {
     duration: 6,
     x: 0,
     opacity: 1,
     stagger: 0.2,
})
gsap.fromTo("#card1",
     {
       y: 5,            // Starting position (slightly down)
     },
     {
       y: -5,           // Move 10px up
       opacity: 1,       // Fade in to full opacity
       duration: 3,      // Duration of one cycle
       stagger: {
         amount: 20,       // Total time for the staggered animation
         from: "start",   // Stagger starting from the first element
         axis: "y",       // Stagger along the Y-axis
       },
       repeat: -1,       // Infinite repeat
       yoyo: true,       // Reverse the animation for smooth up and down
       ease: "power4.inOut", // Smooth easing
     }
   );
   
   gsap.fromTo("#card2",
     {
       y: 5,            // Starting position (slightly down)
     },
     {
       y: -5,           // Move 10px up
       opacity: 1,       // Fade in to full opacity
       duration: 2,      // Duration of one cycle
       stagger: {
         amount: 20,       // Total time for the staggered animation
         from: "start",   // Stagger starting from the first element
         axis: "y",       // Stagger along the Y-axis
       },
       repeat: -1,       // Infinite repeat
       yoyo: true,       // Reverse the animation for smooth up and down
       ease: "power4.inOut", // Smooth easing
     }
   );
   gsap.fromTo("#card3",
     {
       y: 5,            // Starting position (slightly down)
     },
     {
       y: -5,           // Move 10px up
       opacity: 1,       // Fade in to full opacity
       duration: 5,      // Duration of one cycle
       stagger: {
         amount: 20,       // Total time for the staggered animation
         from: "start",   // Stagger starting from the first element
         axis: "y",       // Stagger along the Y-axis
       },
       repeat: -1,       // Infinite repeat
       yoyo: true,       // Reverse the animation for smooth up and down
       ease: "power4.inOut", // Smooth easing
     }
   );


const menu = document.querySelector('.nav-container');

function toggle(){
     menu.classList.toggle('show');

}