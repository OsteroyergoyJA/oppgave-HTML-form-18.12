const convertButton = document.querySelector('#convert-button');
const fromUnit = document.querySelector('#unit');
const weight = document.querySelector('#weight');
const output = document.querySelector('#result');
const output2 = document.querySelector('#input');




convertButton.addEventListener('click', function (event) {
  event.preventDefault();

  const fromWeight = Number(weight.value);
  
  if (fromUnit.value === 'kilogram-to-pounds') {
    
    output.textContent = fromWeight * 2.2046 + " pounds";
    output2.textContent = fromWeight + " kilogram";
    
  } else if (fromUnit.value === 'pound-to-kilogram') {
    
    output.textContent = fromWeight / 2.2046 + " kilogram";
    output2.textContent = fromWeight + " pounds";
    
  } else {
    console.log('no unit selected');
  }
  
  
});

/* Kunne tenkt meg en måte å resette animasjonen på for hvert klikk*/
