class Order {
    constructor(product, quantity, unitPrice){
    this.product = product;
    this.quantity = quantity;
    this.unitPrice = unitPrice;

    }


    totalPrice(){
        return this.quantity * this.unitPrice;
    }

    toString(){
        const card = `Product: ${this.product}
                        Quantity: ${this.quantity}
                        Price per unit: € ${this.quantity.toFixed(2)}
                        Total price: € ${this.totalPrice().toFixed(2)}`;
        return card
    }
}
