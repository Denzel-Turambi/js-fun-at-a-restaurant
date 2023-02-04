// function nameMenuItem() {
//   var food = "Pizza"
//   return (`Delicious ${food}`);
// };
function nameMenuItem(foodName) {
  var food = foodName;
  return (`Delicious ${food}`);
};

// nameMenuItem("French Toast");

function createMenuItem(itemName, itemPrice, itemType) {
  var menuItem = {
    name: itemName,
    price: itemPrice,
    type: itemType
    }
    return menuItem;
  };

// console.log(createMenuItem())

// function addIngredients(ingredientName, ingredients) {
//   var foodArray = ingredients;
//   // for (var i = 0; i < (foodArray.length -1); i++) {
//   //   if (ingredientName !== foodArray[i]) {
//       foodArray.push(ingredientName);
//   //   }
//   //  } 
//    return foodArray;  
//   };
  
function addIngredients(ingredients, ingredientList) {
  if(ingredientList.includes(ingredients) === false) {
      return ingredientList.push(ingredients);
    } 
};
  
function formatPrice(cost, fullcost) {
  return fullcost = `$${cost}`
};

function decreasePrice(price, reducedPrice) {
  return reducedPrice = price * .9
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

