const convertButton = document.querySelector('#convert-button');
const fromUnit = document.querySelector('#unit');
const weight = document.querySelector('#weight');

convertButton.addEventListener('click', function (event) {
  event.preventDefault();

  const fromWeight = Number(weight.value);

  if (fromUnit.value === 'kilogram-to-pounds') {
    console.log(fromWeight * 2.2046);
  } else if (fromUnit.value === 'pound-to-kilogram') {
    console.log(fromWeight / 2.2046);
  } else {
    console.log('no unit selected');
  }
});
