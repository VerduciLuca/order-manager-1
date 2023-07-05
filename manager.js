class Manager{
    constructor(orderArray = []){
        this.orderArray = orderArray;
    }

    addOrder(order){
        this.orderArray.push(order);
    }
}