"use strict";

console.clear();

const bookmark1 = document.querySelector('[data-js="bookmark1"]');
const bookmark2 = document.querySelector('[data-js="bookmark2"]');
const bookmark3 = document.querySelector('[data-js="bookmark3"]');


bookmark1.addEventListener("click", () => {
    bookmark1.classList.toggle("saved");
});

bookmark2.addEventListener("click", () => {
    bookmark2.classList.toggle("saved");
});

bookmark3.addEventListener("click", () => {
    bookmark3.classList.toggle("saved");
});


const showAnswer1 = document.querySelector('[data-js="showAnswer1"]');
const showAnswer2 = document.querySelector('[data-js="showAnswer2"]');
const showAnswer3 = document.querySelector('[data-js="showAnswer3"]');

const hideAnswer1 = document.querySelector('[data-js="hideAnswer1"]');
const hideAnswer2 = document.querySelector('[data-js="hideAnswer2"]');
const hideAnswer3 = document.querySelector('[data-js="hideAnswer3"]');

const answer1 = document.querySelector('[data-js="answer1"]');
const answer2 = document.querySelector('[data-js="answer2"]');
const answer3 = document.querySelector('[data-js="answer3"]');


showAnswer1.addEventListener("click", () => {
    showAnswer1.classList.add("hidden");
    hideAnswer1.classList.remove("hidden");
    answer1.classList.remove("hidden");
});

hideAnswer1.addEventListener("click", () => {
    showAnswer1.classList.remove("hidden");
    hideAnswer1.classList.add("hidden");
    answer1.classList.add("hidden");
});


showAnswer2.addEventListener("click", () => {
    showAnswer2.classList.add("hidden");
    hideAnswer2.classList.remove("hidden");
    answer2.classList.remove("hidden");
});

hideAnswer2.addEventListener("click", () => {
    showAnswer2.classList.remove("hidden");
    hideAnswer2.classList.add("hidden");
    answer2.classList.add("hidden");
});


showAnswer3.addEventListener("click", () => {
    showAnswer3.classList.add("hidden");
    hideAnswer3.classList.remove("hidden");
    answer3.classList.remove("hidden");
});

hideAnswer3.addEventListener("click", () => {
    showAnswer3.classList.remove("hidden");
    hideAnswer3.classList.add("hidden");
    answer3.classList.add("hidden");
});
