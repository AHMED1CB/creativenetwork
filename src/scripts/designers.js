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
const menu = document.querySelector('.nav-container');

function toggle(){
     menu.classList.toggle('show');

}