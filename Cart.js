class Cart {
    constructor (products, total){
        this.products = []
        this.total = 0
    }
    addProduct (product){
        this.products.push(product);
        this.total += product.price;
    }
    removeProduct(productToRemove){
        const indexToRemove = this.products.findIndex(product => product === productToRemove);
        if (indexToRemove === -1){
            throw new Error('Product not found in cart');
        }
        const removedProduct = this.products.splice(indexToRemove, 1)[0];
        this.total -= removedProduct.price;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const myCart = new Cart();

const product1 = new Product('Phone', 500);
const product2 = new Product('Laptop', 1000);

myCart.addProduct(product1);
myCart.addProduct(product2);

console.log(myCart.total); // Output: 1500

myCart.removeProduct(product1);

console.log(myCart.total); // Output: 1000c

module.exports = Cart;