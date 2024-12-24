// find categories in file
const categories = document.querySelectorAll(".item");

console.log("Number of categories:", categories.length);

// construction the function for one category
const view = c => {
    /// find title text
    const Title = c.querySelector("h2");
    // find item in category
    const list = c.querySelector("ul");
    const items = list.querySelectorAll("li");
    // output to the console
    console.log("Category: ", Title.textContent);
    console.log("Elements: ", items.length);
   
}

categories.forEach(view);
