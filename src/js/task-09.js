function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");

const changeBtn = document.querySelector(".change-color");

const colorCode = bodyRef.querySelector(".color");

const onClick = () => {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorCode.textContent = color;

}

changeBtn.addEventListener("click", onClick);