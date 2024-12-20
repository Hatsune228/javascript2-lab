import Product from "./product.js";
import Cart from "./cart.js";
import Data from "./data.js";

const data = new Data("https://dummyjson.com/products");
const cart = new Cart();

app.cart = cart; 
app.products = await data.refreshData(); 

let productsHTML = "";
app.products.forEach((prod) => {
    const product = new Product(prod);
    productsHTML += product.render();
});

document.getElementById("prodSection").innerHTML = productsHTML;

// Сагсыг дахин сэргээх функц
app.refreshCart = () => {
    document.getElementById("cart").innerHTML = app.cart.render();
};
app.refreshCart();
