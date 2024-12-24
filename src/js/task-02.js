const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// find node-element to inject items
const list = document.querySelector("#ingredients");

//create function who will add new element to list
const addNewElement = (ing) => {

  // create one item
  const item = document.createElement("li");
  item.classList.add('item')
  item.textContent = ing;
  return item;
 
}
//create array of items
const arrayItems = ingredients.map((ingredient) => addNewElement(ingredient));

// add new items to list
list.append(...arrayItems);




