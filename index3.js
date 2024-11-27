const container = document.getElementById('botones-container');
let buttonsHTML = '';


for (let i = 0; i < 5; i++) {
    buttonsHTML += `<button id="button-${i}">Botón ${i + 1}</button>`;
}

container.innerHTML = buttonsHTML;


const buttons = document.querySelectorAll('button');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(`Botón ${index + 1} fue clickeado`);
    });
});
