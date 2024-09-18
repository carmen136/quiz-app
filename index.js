"use strict";

console.clear();

const bookmark1 = document.querySelector('[data-js="bookmark1"]');
const bookmark2 = document.querySelector('[data-js="bookmark2"]');
const bookmark3 = document.querySelector('[data-js="bookmark3"]');


//  TOGGLE BOOKMARK

bookmark1.addEventListener("click", () => {
    bookmark1.classList.toggle("bookmark--active");
});

bookmark2.addEventListener("click", () => {
    bookmark2.classList.toggle("bookmark--active");
});

bookmark3.addEventListener("click", () => {
    bookmark3.classList.toggle("bookmark--active");
});


//  TOGGLE ANSWER

const showAnswer1 = document.querySelector('[data-js="showAnswer1"]');
const showAnswer2 = document.querySelector('[data-js="showAnswer2"]');
const showAnswer3 = document.querySelector('[data-js="showAnswer3"]');


const answer1 = document.querySelector('[data-js="answer1"]');
const answer2 = document.querySelector('[data-js="answer2"]');
const answer3 = document.querySelector('[data-js="answer3"]');


showAnswer1.addEventListener("click", () => {
    answer1.classList.toggle("hidden");

    if(answer1.classList.contains("hidden")) {
        showAnswer1.textContent = "Show Answer";
    } else {
        showAnswer1.textContent = "Hide Answer";
    }
});



showAnswer2.addEventListener("click", () => {
    answer2.classList.toggle("hidden");

    if(answer2.classList.contains("hidden")) {
        showAnswer2.textContent = "Show Answer";
    } else {
        showAnswer2.textContent = "Hide Answer";
    }
});



showAnswer3.addEventListener("click", () => {
    answer3.classList.toggle("hidden");

    if(answer3.classList.contains("hidden")) {
        showAnswer3.textContent = "Show Answer";
    } else {
        showAnswer3.textContent = "Hide Answer";
    }
});

