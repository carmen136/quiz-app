

// const form = document.querySelector('[data-js="form"]');
// const cardList = document.querySelector('[data-js="cardList')


// form.addEventListener("submit", (event) => {

// event.preventDefault();

// const newQuestion = (event.target.elements.newQuestion.value);
// const newAnswer = (event.target.elements.newAnswer.value);
// const newTag = (event.target.elements.tag.value);

// document.body.innerHTML += `
//                 <li class="card-list__item">
//                     <article class="card">
//                         <h2 class="card__question">${newQuestion}</h2>
//                         <button class="card__button-answer" type="button" data-js="showAnswer3" name="showAnswer" value="showAnswer">Show Answer</button>
//                         <p class="card__answer hidden" data-js="answer3">${newAnswer}</p>
//                         <ul class="card__tag-list">
//                             <li class="card__tag-list-item">#${newTag}</li>
//                             <li class="card__tag-list-item">#flexbox</li>
//                             <li class="card__tag-list-item">#css</li>
//                         </ul>
//                         <div class="card__button-bookmark">
//                             <button class="bookmark" type="button" aria-label="bookmark" data-js="bookmark3" name="bookmark" value="bookmark">
//                                 <?xml version="1.0" encoding="UTF-8"?>
//                                 <svg class="bookmark__icon" width="24px" height="24px" viewBox="0 0 24 24" fill="currentcolor" color="#FFF"  xmlns="http://www.w3.org/2000/svg"  stroke-width="1.5">
//                                     <path d="M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L13.0815 17.1953C12.4227 16.7717 11.5773 16.7717 10.9185 17.1953L5 21Z" color="#FFF"  stroke="#FFF"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
//                                     </path>
//                                 </svg>                           
//                             </button>
//                         </div>
//                     </article>
//                 </li>
// `;

// });






const form = document.querySelector('[data-js="form"]');
const cardList = document.querySelector('[data-js="cardList"]');


form.addEventListener("submit", (event) => {

event.preventDefault();

const newQuestion = (event.target.elements.question.value);
const newAnswer = (event.target.elements.answer.value);
const newTag = (event.target.elements.tag.value);


const newCard = document.createElement("li");
newCard.classList.add("card-list__item");
newCard.innerHTML = `
                    <article class="card">
                        <h2 class="card__question">${newQuestion}</h2>
                        <button class="card__button-answer" type="button" data-js="showAnswer3" name="showAnswer" value="showAnswer">Show Answer</button>
                        <p class="card__answer hidden" data-js="answer3">${newAnswer}</p>
                        <ul class="card__tag-list">
                            <li class="card__tag-list-item">#${newTag}</li>
                            <li class="card__tag-list-item">#flexbox</li>
                            <li class="card__tag-list-item">#css</li>
                        </ul>
                        <div class="card__button-bookmark">
                            <button class="bookmark" type="button" aria-label="bookmark" data-js="bookmark3" name="bookmark" value="bookmark">
                                <?xml version="1.0" encoding="UTF-8"?>
                                <svg class="bookmark__icon" width="24px" height="24px" viewBox="0 0 24 24" fill="currentcolor" color="#FFF"  xmlns="http://www.w3.org/2000/svg"  stroke-width="1.5">
                                    <path d="M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L13.0815 17.1953C12.4227 16.7717 11.5773 16.7717 10.9185 17.1953L5 21Z" color="#FFF"  stroke="#FFF"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>                           
                            </button>
                        </div>
                    </article>
`;

cardList.append(newCard);
event.target.reset();

});




const newQuestionTextarea = document.querySelector('[data-js="question"]');
const newAnswerTextarea = document.querySelector('[data-js="answer"]');

const textCounterQuestion = document.querySelector('[data-js="question-count"]');
const textCounterAnswer = document.querySelector('[data-js="answer-count"]');


// Counter-Lösung Option 1:

function setCounter() {

    const questionLength = 150 - newQuestionTextarea.value.length;
    const answerLength = 150 - newAnswerTextarea.value.length;

    textCounterQuestion.textContent = `${questionLength} characters left`;
    textCounterAnswer.textContent = `${answerLength} characters left`;
}

// Event Listener für beide Textareas hinzufügen
newQuestionTextarea.addEventListener("input", setCounter);
newAnswerTextarea.addEventListener("input", setCounter);



// Counter-Lösung Option 2:

// function setCounter(event) {
//     const counter = document.querySelector(
//       `[data-js='${event.target.name}-count']`
//     );
//     counter.textContent = `${150 - event.target.value.length} characters left`;
//   }
  
// newQuestionTextarea.addEventListener("input", setCounter);
// newAnswerTextarea.addEventListener("input", setCounter);

