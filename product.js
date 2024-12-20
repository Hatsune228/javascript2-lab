export default class Product {
    constructor(prod) {
        this.id = prod.id;
        this.name = prod.title;
        this.price = prod.price;
        this.description = prod.description;
    }

    renderCompact() {
        return `<span>${this.name} (${this.price}₮)</span>`;
    }

    render() {
        return `
            <div style="width:25vw; border:1px #ccc solid; margin:2vh; padding:2vw;">
                <h3>${this.name}</h3>
                <p>${this.price}₮</p>
                <p>${this.description}</p>
                <button onclick="app.cart.addProduct(${this.id}); app.refreshCart();">🛒 Add to Cart</button>
            </div>`;
    }
}
