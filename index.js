class CoffeeShop {
  constructor(name) {
    this.name = name;
    this.menu = [
      { item: "blackcoffee", type: "drink", price: 2.75 },
      { item: "milkcoffee", type: "drink", price: 2.5 },
      { item: "coffeecookie", type: "snack", price: 2 },
      { item: "donut", type: "snack", price: 3 },
      { item: "coffeecake", type: "desert", price: 4 },
    ];
    this.orders = [];
  }

  cheapestProduct() {
    const cheap = this.menu.reduce(
      (acc, element) => (acc.price <= element.price ? acc : element),
      this.menu[0]
    );
    return [cheap.item];
  }

  foodOnly() {
    const food = this.menu.reduce((acc, curr) => {
      if (curr.type === "snack") {
        acc.push(curr.item);
      }
      return acc;
    }, []);
    return food;
  }
  drinksOnly() {
    const drinks = this.menu.reduce((acc, curr) => {
      if (curr.type === "drink") {
        acc.push(curr.item);
      }
      return acc;
    }, []);
    return drinks;
  }

  addOrder(name) {
    if (this.menu.find((element) => element.item === name)) {
      this.orders.push(name);
      console.log(`"${name}" added to orders!!`);
    } else {
      console.log(`${this.name} does not sell "${name}"!!`);
    }
  }

  fullfillOrder() {
    this.orders.length === 0
      ? console.log(`All orders have been fulfilled!`)
      : console.log(`The ${this.orders.shift()} is ready!`);
  }

  listOrders() {
    console.log("List of orders: __________", this.orders || []);
  }

  dueAmount() {
    return this.menu
      .filter((element) => this.orders.includes(element.item))
      .reduce((acc, curr) => acc + curr.price, 0);
  }
}

const milchkaffee = new CoffeeShop("Milchkaffee");
milchkaffee.listOrders();
milchkaffee.addOrder("donut");
milchkaffee.addOrder("lemonade");
milchkaffee.addOrder("coffeecookie");

milchkaffee.listOrders();

console.log("-------------------");
milchkaffee.fullfillOrder();
milchkaffee.fullfillOrder();
milchkaffee.fullfillOrder();
console.log("-------------------");

milchkaffee.addOrder("donut");
milchkaffee.addOrder("lemonade");
milchkaffee.addOrder("coffeecake");
milchkaffee.addOrder("coffeecookie");
console.log("--------------------------");
milchkaffee.listOrders();
console.log("---------------");
console.log(milchkaffee.drinksOnly());
console.log(milchkaffee.foodOnly());
console.log("----------------------");
console.log(milchkaffee.cheapestProduct());

console.log("-------------------------");
console.log("Due amount is Euro:", milchkaffee.dueAmount());
