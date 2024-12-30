const input = document.querySelector("input#name-input");

const message = document.querySelector("span#name-output");

input.addEventListener("input", (event) =>
    event.currentTarget.value.trim() === "" ?
        message.textContent = 'Anonymous' :
        message.textContent = event.currentTarget.value);
