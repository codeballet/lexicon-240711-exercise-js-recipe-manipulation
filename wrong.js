// 1. The logo text of the site has the wrong color. Change it to the correct one.
document.querySelector(".logo-text").style.color = "#384241";

// 2. The alignment of the elements inside the header element are wrong. Change it to the correct one. Hint, check the flex properties for the correct alignment. Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
document.querySelector("header").style.justifyContent = "flex-start";

// 3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
document.querySelector("header").style.borderBottomColor = "lightgray";

// 4. The recipe name is wrong, change it to the correct one.
document.querySelector("#recipe-name").innerText = "Frozen Cheesecake";

// 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
document.querySelector(".time-container>span").classList.add("material-icons");

// 6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
document.querySelector(".time").innerText = "60+ min";

// 7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
document.querySelector(".image-container>img").src =
    "./assets/frozen-cheesecake-slice.jpg";

// 8. The background color of the ingredients list container is wrong. Fix it.
// #f9f9f9
document.querySelector(".ingredients-container").style.backgroundColor =
    "#f9f9f9";

// 9. The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.
document.querySelector(".ingredients-list-bottom>p").remove();
const ingredientsBottomRef = document.querySelector(".ingredients-list-bottom");
const liIngredientOne = document.createElement("li");
const liIngredientTwo = document.createElement("li");

liIngredientOne.innerText = "15st digestivetex";
liIngredientTwo.innerText = "Lite smör";

ingredientsBottomRef.append(liIngredientOne);
ingredientsBottomRef.append(liIngredientTwo);

// 10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
document.querySelector(".ingredients-list-paste>li:nth-child(3)").innerText =
    "3tsk vaniljsocker";

// 11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
const liIngredientFive = document.createElement("li");
liIngredientFive.innerText = "400g naturell philadelphiaost";

const ingredientsPasteRef = document.querySelector(".ingredients-list-paste");
ingredientsPasteRef.append(liIngredientFive);

// 12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
document.querySelector(".instructions").style.boxShadow = "0 0";

// 13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.
const instructionsListLiTwo = document.querySelector(
    ".instructions-list>li:nth-child(2)"
);
instructionsListLiTwo.innerText =
    "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";

const instructionsListLiNine = document.querySelector(
    ".instructions-list>li:nth-child(9)"
);
instructionsListLiNine.innerText = "Ställ in i frysen över natten.";
