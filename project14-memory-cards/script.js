const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Keep track of current card

let currentActiveCard = 0;

// Store DOM CARDS
const cardsEl = [];

// Store Card Data
const cardsData = getCardsData();

// Store card data
/* const cardsData = [
  {
    question: 'What must a variable begin with?',
    answer: 'A letter, $ or _'
  },
  {
    question: 'What is a variable?',
    answer: 'Container for a piece of data'
  },
  {
    question: 'Examples of Case Sensitive Variable',
    answer: 'thisIsAVeriable'
  },
];
*/

// create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// create a single card in DOM
function createCard(data, index) {
  const card = document.createElement('div');
}

function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `
  <div class="inner-card">
    <div class="inner-card-front">
      <p>
        ${data.question}
        </p>
          </div>
                <div class="inner-card-back">
                   <p> 
                   ${data.answer}
                   </p>
                </div>
            </div>
  `;
  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  // Add to DOM Cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  updateCurrentText();

}

function updateCurrentText() {
  currentEl.innerText = `${ currentActiveCard + 1}/${cardsEl.length}`;
}

// Get Cards from local Storage]
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  return cards === null ? [] : cards;
}


createCards();

// event listeners

// Next Button 

nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left';

  currentActiveCard = currentActiveCard + 1;
  
  if(currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length -1;
  }
  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();

});

// Prev Button 
prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';

  currentActiveCard = currentActiveCard - 1;
  
  if(currentActiveCard < 0) {
    currentActiveCard = 0;
  }
  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();

});

// Show Add Container 

showBtn.addEventListener('click', () => addContainer.classList.add('show'));

// hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

// Add new card

addCardBtn.addEventListener('click', () => {
  const question = questionEl.nodeValue;
  const answer = answerEl.nodeValue;
  
  if(question.trim() && answer.trim()) {
    const newCard = { question: question, answer: answer }; 

    createCard(newCard);
  }
});

//left off at the 7:00 mark