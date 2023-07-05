class Employee extends Person{
    constructor(name, surname, dob, gender, age, department, clients){
        super(name,surname, dob, gender, age);
        this.department = department;
        this.clients = [];
    }

    toString(){
        return 'Dipendente:\n' + super.toString() +
        'Miglior Cliente: ' + this.bestClient + '\n' +
        ' guadagno totale: ' + this.totalEarning + '\n';
    }


    addClients(client){
        this.clients.push(client)
    }

    bestClient(employee){
        let bestClient=Math.max(...client.orders);
        return bestClient
    }
}