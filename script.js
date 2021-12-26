const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

const imageSelected = document.querySelector('#meme-insert');
const imageContainer = document.querySelector('#meme-image');

imageSelected.addEventListener('change', (event) => {
  imageContainer.src = event.value;
});

const container = document.querySelector('#meme-image-container');

const button1 = document.createElement('button');
container.appendChild(button1);
button1.id = 'fire';
button1.innerHTML = 'Fire';

const button2 = document.createElement('button');
container.appendChild(button2);
button2.id = 'water';
button2.innerHTML = 'Water';

const button3 = document.createElement('button');
container.appendChild(button3);
button3.id = 'earth';
button3.innerHTML = 'Earth';

function bordaFire() {
  const containerBordaFire = container;
  containerBordaFire.style.border = '3px dashed red';
}

function bordaWater() {
  const containerBordaWater = container;
  containerBordaWater.style.border = '5px double blue';
}

function bordaEarth() {
  const containerBordaEarth = container;
  containerBordaEarth.style.border = '6px groove green';
}

button1.addEventListener('click', bordaFire);
button2.addEventListener('click', bordaWater);
button3.addEventListener('click', bordaEarth);
