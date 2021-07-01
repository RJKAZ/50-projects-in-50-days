const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett', 
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

const listItems = [];

let dragStartIndex;

createList();

// Insert List items into DOM, for this we will use the spread operator which makes a copy of the array
function createList() {
  // this line we copy the array with the spread operator
  [...richestPeople] 
  // then we took that copied array and changed it into an object with a value and a sort
    .map(a => ({ value: a, sort: Math.random() })) 
    // then we did the sort by the random value
    .sort((a, b) => a.sort - b.sort)
    // then we turn it back into an array of strings, but this time it will be scrambled
    .map(a => a.value)
    .forEach((person, index) => {
      console.log(person);
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}