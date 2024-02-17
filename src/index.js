import './style.css';
// import icon from './icon.png'; To load some image for the code

function main() {
  const formElement = document.getElementById('form');
  const submitBtn = document.getElementById('submit-btn');

  formElement.addEventListener('submit', () => {
    const correctFormText = document.createElement('p');
    correctFormText.classList.add('correct-message');
    correctFormText.innerHTML = "Form has been submitted correctly, Thanks!";
    formElement.innerHTML = "";

    formElement.appendChild(correctFormText);
  })

  submitBtn.addEventListener('click', () => {
    formElement.classList.add('submitted');
  })
}

window.addEventListener('load', main);