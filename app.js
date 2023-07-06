

const order1 = new Order('sigarette',10, 4.80)

const order2 = new Order('accendini',3,1.20)

const order3 = new Order('glock 19', 14, 399.99)


const order4 = new Order('caramelle',103, 0.99)

const order5 = new Order('apple vision pro',1,4000)

const client1 = new Client('gianni','pinotto',new Date(1993,4,29),'m', 'age', 'via capodelmondo 9', this.orders)
const client2 = new Client('elonio','muschio', new Date (1843,5,18), 'm', 'age', 'corso america 8', this.orders)


client1.addOrder(order1)
client1.addOrder(order2)
client1.addOrder(order3)


client2.addOrder(order4)
client2.addOrder(order5)


const employee = new Employee('pippo', 'plutozzi', new Date(1512,8,6), 'm', 34, 'vendite');
const dob = new Date(1978,2,2)
person2= new Person('andrea', 'asioli', dob, 'male')
employee.addClient(client1);
employee.addClient(client2);

console.log(employee.toString())
const bestClientofGianni = employee.bestClient()
console.log(bestClientofGianni)

