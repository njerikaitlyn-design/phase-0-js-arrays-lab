// Write your code here
let products = ['Laptop', 'Phone', 'Headphones', 'Monitor'];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName) {
  products.push(productName);
}

function updateProductName(index, newName) {
  products[index] = newName;
}

function removeLastProduct() {
  products.pop();
}
logFirstProduct(); // Logs 'Laptop'
addProduct('Keyboard');
updateProductName(1, 'Smartphone');
removeLastProduct();


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
