function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}
  
// function addMenuItem(restaurantName, foodItem) {
//   for (var i = 0; i < restaurantName.menus.length; i++) {
//     if (restaurantName.menus[foodItem.type] === i) {
//       return restaurantName.menus;
//     }
//   }
//   restaurantName.menus[foodItem.type].push(foodItem);
//   return restaurantName.menus;
// }

function addMenuItem(restaurant, foodItem) {
  for (var i = 0; i < restaurant.menus[foodItem.type].length; i++) {
    if (restaurant.menus[foodItem.type][i] === foodItem) {
      return restaurant.menus;
    }
  }
  restaurant.menus[foodItem.type].push(foodItem);
  return restaurant.menus;
}

function removeMenuItem(restaurant, foodItem, foodType) {
  for (var i = 0; i < restaurant.menus[foodType].length; i++)
   if (restaurant.menus[foodItem][i] === foodItem) {
    return restaurant.menus[foodItem.type].splice(i, 1)
   }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}