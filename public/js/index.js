const hamburger = document.querySelector(".hamburger");
const hamburger2 = document.querySelector(".hamburger2");
const hammenuact = document.querySelector(".hammenu").classList;

hamburger.addEventListener("click", () => {
    hammenuact.toggle("active");
});
hamburger2.addEventListener("click", () => {
    hammenuact.toggle("active");
});
