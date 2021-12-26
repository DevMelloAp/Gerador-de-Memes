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
