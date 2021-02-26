const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value
  const label = e.target.nextElementSibling

  const range_width = getComputedStyle(e.target).
  getPropertyValue('width')
  const label_width = getComputedStyle(e.label).
  getPropertyValue('width')

  const num_width = +range_width.substring(0, range_width.length -2)

  console.log(range_width, label_width)


  label.innerHTML = value 

})