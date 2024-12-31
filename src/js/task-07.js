const inputRangeRef = document.querySelector("#font-size-control");

const message = document.querySelector("#text");

const onChange = (event) => {
    message.style.fontSize  = event.currentTarget.value + "px";
}

inputRangeRef.addEventListener("input", onChange);