function calculate() {
  fetch('items.json')
  .then(res => res.json())
  //.then(data => console.log(data));
  .then(data => (document.body.innerHTML = data[0].text));
}

calculate();

// see the fetch/api/json crash course on youtube