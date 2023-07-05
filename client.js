class Client extends Person{
    constructor(name, surname, dob, gender, age, address, orders){
        super(name,surname, dob, gender, age);
        this.address = adress;
        this.orders = orders;

    }

    toString(){
        return 'Cliente:\n' + super.toString() +
        'indirizzo: ' + this.address + '\n' +
        ' ordini: ' + this.orders + '\n';
    }


}