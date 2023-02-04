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
// for loop n < #elements in an array 
// if ingredientName === n element 
  //dont do anything 
// if ingredientName does not equal n element
  // foodArray.push(ingredientName)
function addIngredients(ingredientName, ingredients) {
  var foodArray = ingredients;
  // for (var i = 0; i < (foodArray.length -1); i++) {
  //   if (ingredientName !== foodArray[i]) {
      foodArray.push(ingredientName);
  //   }
  //  } 
   return foodArray;  
  };
  
  



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}

