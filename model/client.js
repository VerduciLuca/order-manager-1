class Client extends Person{

    constructor(name, surname, dob, gender, age, address, orders){
        super(name,surname, dob, gender, age);
        this.address = address;
        this.orders = [];

    }

    toString(){
        return 'Cliente:\n' + super.toString() +
        'indirizzo: ' + this.address + '\n' +
        ' ordini: ' + this.orders + '\n';
    }

    addOrder(order){
        this.orders.push(order)
    }

    totalExpenses(){
        const totalExpenses = this.orders.reduce((a,c) => a+c.totalPrice(),0)
        return totalExpenses
    }
}