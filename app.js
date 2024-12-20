import Product from "./product.js";
import Cart from "./cart.js";
import Data from "./data.js";

const data = new Data("https://dummyjson.com/products");
const cart = new Cart();


const app = window.app || {};

const initializeApp = async () => {
    app.cart = cart;
    app.products = await data.refreshData();

    const productsHTML = Array.from(app.products.values())
        .map(prod => new Product(prod).render())
        .join("");

    document.getElementById("prodSection").innerHTML = productsHTML;
    app.refreshCart();
};
app.refreshCart = () => {
    document.getElementById("cart").innerHTML = app.cart.render();
};

initializeApp();
