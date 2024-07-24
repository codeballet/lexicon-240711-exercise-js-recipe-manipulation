// Part 1

// 1. What is the name of the recipe?
const recipeName = document.querySelector("#recipe-name").innerText;
console.log("\nTask 1:");
console.log(recipeName);

// 2. What HTML tag is used to display the Recipe name?
const recipeNameTag = document.querySelector("#recipe-name").tagName;
console.log("\nTask 2:");
console.log(recipeNameTag);

// 3. What is the font size of the paragraph tag with the class "description".
const descriptions = document.querySelectorAll(".description");
const descriptionFontSize = window
    .getComputedStyle(descriptions[0], null)
    .getPropertyValue("font-size");
console.log("\nTask 3:");
console.log(descriptionFontSize);

// 4. What is the value of the alt attribute on the image?
const imgAlt = document
    .querySelector(".image-container>img")
    .getAttribute("alt");
console.log("\nTask 4:");
console.log(imgAlt);

// 5. What are the dimensions and the url of the image?
const imgUrl = document
    .querySelector(".image-container>img")
    .getAttribute("src");
const imgHeight = document.querySelector(".image-container>img").clientHeight;
const imgWidth = document.querySelector(".image-container>img").clientWidth;

const imgInfo = {
    url: imgUrl,
    height: parseInt(imgHeight),
    width: parseInt(imgWidth),
};

console.log("\nTask 5:");
console.log(imgInfo);

// 6. How many ingredients has the paste?
const bottomIngredients = document.querySelector(".ingredients-list-bottom")
    .children.length;
const pasteIngredients = document.querySelector(".ingredients-list-paste")
    .children.length;
const totalIngredients = bottomIngredients + pasteIngredients;
console.log("\nTask 6:");
console.log(totalIngredients);

// 7. Which is the forth element in the list containing the ingredients for the paste?
const fourthPasteIngredient = document.querySelector(
    ".ingredients-list-paste>li:nth-child(4)"
).innerText;
console.log("\nTask 7:");
console.log(fourthPasteIngredient);

// 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
const instructions = document.querySelector(".instructions-list").children;
const instructionList = Array.from(instructions).map((instruction, index) => {
    return {
        order: index + 1,
        text: instruction.innerText,
    };
});
console.log("\nTask 8:");
console.log(instructionList);
