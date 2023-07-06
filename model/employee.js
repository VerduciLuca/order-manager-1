class Employee extends Person{
    constructor(name, surname, dob, gender, age, department){
        super(name,surname, dob, gender, age);
        this.department = department;
        this.clients = [] ;
    }

    toString(){
        return 'Dipendente:\n' + super.toString() +
        'Miglior Cliente: ' + this.bestClient() + '\n' +
        ' guadagno totale: ' + this.totalEarning() + '\n';
    }


    addClient(client){
        this.clients.push(client)
    }

    bestClient(){
        let maxOrders = 0;
        let bestClient = null;
        for (const client of this.clients) {
        if (client.orders.length > maxOrders) {
            maxOrders = client.orders.length;
            bestClient = client;
        }
    }
    // console.log(bestClient.name);
    return bestClient.name;
} 

    totalEarning(){
        const totalEarning= this.clients.reduce((a,c) => a+c.totalExpenses,0)
    }
}
