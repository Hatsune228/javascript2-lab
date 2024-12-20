import Product from "./product.js";

export default class Cart {
    constructor() {
        this.items = new Map(); // ID болон тоо хэмжээг хадгална.
    }

    addProduct(productId) {
        const currentCount = this.items.get(productId) || 0;
        this.items.set(productId, currentCount + 1);
    }

    removeProduct(productId) {
        if (this.items.has(productId)) {
            const newCount = this.items.get(productId) - 1;
            if (newCount > 0) {
                this.items.set(productId, newCount);
            } else {
                this.items.delete(productId);
            }
        }
    }

    clearCart() {
        this.items.clear();
    }

    render() {
        if (this.items.size === 0) {
            return `<p>Сагс хоосон байна.</p>`;
        }

        let cartHTML = "";
        this.items.forEach((quantity, id) => {
            const product = new Product(app.products.get(id));
            cartHTML += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 1vh;">
                    ${product.renderCompact()}
                    <span> x${quantity}</span>
                    <button onclick="app.cart.removeProduct(${id}); app.refreshCart();">❌</button>
                </div>`;
        });

        return cartHTML;
    }
}