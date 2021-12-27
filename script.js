// Criando um input de texto a ser exibido no container:

const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

// Criando evento para carregamento da imagem do upload a ser exibida no container:

const imageSelected = document.querySelector('#meme-insert');
const imageContainer = document.querySelector('#meme-image');

imageSelected.addEventListener('change', () => {
  const containerImage = imageContainer;
  containerImage.src = URL.createObjectURL(imageSelected.files[0]);
});

// Criando 3 botões/eventos para alteração da borda do container:

const container = document.querySelector('#meme-image-container');
const buttonFire = document.createElement('button');
container.appendChild(buttonFire);
buttonFire.id = 'fire';
buttonFire.innerHTML = 'Fire';

const buttonWater = document.createElement('button');
container.appendChild(buttonWater);
buttonWater.id = 'water';
buttonWater.innerHTML = 'Water';

const buttonEarth = document.createElement('button');
container.appendChild(buttonEarth);
buttonEarth.id = 'earth';
buttonEarth.innerHTML = 'Earth';

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

buttonFire.addEventListener('click', bordaFire);
buttonWater.addEventListener('click', bordaWater);
buttonEarth.addEventListener('click', bordaEarth);

// Criando 4 mini imagens de memes a serem selecionadas para exibição no container:

const imageMeme1 = document.getElementById('meme-1');
imageMeme1.addEventListener('click', () => {
  const imageContain = imageContainer;
  imageContain.src = 'imgs/meme1.png';
});

const imageMeme2 = document.getElementById('meme-2');
imageMeme2.addEventListener('click', () => {
  const imageContain = imageContainer;
  imageContain.src = 'imgs/meme2.png';
});

const imageMeme3 = document.getElementById('meme-3');
imageMeme3.addEventListener('click', () => {
  const imageContain = imageContainer;
  imageContain.src = 'imgs/meme3.png';
});

const imageMeme4 = document.getElementById('meme-4');
imageMeme4.addEventListener('click', () => {
  const imageContain = imageContainer;
  imageContain.src = 'imgs/meme4.png';
});
