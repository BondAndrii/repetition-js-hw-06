const inputRef = document.querySelector("#validation-input");

const onGood = () => {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
};

const onFail = () => {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
}

const inputColorize = (event) => {
    event.preventDefault();
    
    const inputLength = event.currentTarget.value.length;
    
    inputLength === Number(inputRef.dataset.length) ? onGood() : onFail();
};

inputRef.addEventListener("blur", inputColorize);