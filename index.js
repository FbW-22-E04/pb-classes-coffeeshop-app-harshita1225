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

  dueAmount() {
    console.log(
      "------------------------------------------------",
      this.orders
    );
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
    this.orders === []
      ? console.log(`All orders have been fulfilled!`)
      : console.log(`The ${this.orders[0]} is ready!`);
  }

  listOrders() {
    console.log("List of orders: __________", this.orders || []);
  }
}

const milchkaffee = new CoffeeShop("Milchkaffee");
milchkaffee.listOrders();
milchkaffee.addOrder("donut");
milchkaffee.addOrder("lemonade");
milchkaffee.addOrder("coffeecookie");
milchkaffee.fullfillOrder();
milchkaffee.listOrders();

console.log(milchkaffee.drinksOnly());
console.log(milchkaffee.foodOnly());

console.log(milchkaffee.cheapestProduct());

milchkaffee.dueAmount();
