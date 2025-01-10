import {gsap} from "gsap";
console.log(gsap);
// Example Animation
gsap.to(".card", {
  duration: 1,
  y: -50,
  opacity: 1,
  stagger: 0.2,
});
gsap.from(".dev-hero", {
   x: -500,
   opacity: 0,
   stagger: 0.2,
})
gsap.to(".dev-hero",{
   duration: 2,
   x: 0,
   opacity: 1,
   stagger: 0.2,
})

const btns = document.querySelectorAll(".select-btns");
const cardContainers = document.querySelectorAll(".cards");
console.log(btns);
btns.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("active")) return;
    btns.forEach((e) => e.classList.remove("active"));
     e.classList.add("active");
     
    const cardContainersArr = [...cardContainers]
    const itemAttr = e.getAttribute("data-name");
    if (itemAttr === "all") return cardContainersArr.forEach(card => card.classList.remove("invisible"));
    else cardContainersArr.forEach(card => card.classList.add("invisible"));
    const card = cardContainersArr.find(card => card.getAttribute("data-name") === itemAttr);
    card.classList.remove("invisible")
  });
});
