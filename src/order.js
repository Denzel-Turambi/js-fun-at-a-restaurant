function takeOrder(orderNum, deliveryOrders) {
  if (deliveryOrders.length >= 3) {
    return deliveryOrders;
  }
  deliveryOrders.push(orderNum);
  return deliveryOrders;
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === orderNumber) {
      return deliveryOrders.splice(i, 1)
    }
  }
}

function listItems (item) {
  var newString = ''
  for (var i = 0; i < item.length; i++) {
    newString += item[i].item
    if (i !== item.length -1)
      newString += `, `
  }
  return newString
}

function searchOrder(deliveryOrders, itemName) {
for (var i = 0; i < deliveryOrders.length; i++) 
  if (deliveryOrders[i].item === itemName) {
    return true
  }
  return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}