const data = {
  coffees: [
    {
      id: 1,
      name: 'Button Roast',
      origin: 'Guatemala',
      roast: 'light',
      price: 2400, /* $24.00 */
    },
    {
      id: 2,
      name: 'Citrus',
      origin: 'Kenya',
      roast: 'light',
      price: 1850, /* $24.00 */
    },
  ],
};


function browseCoffees() {
  return data.coffees;
}

function readCoffee(id) {
  return data.coffees.find(coffee => coffee.id === Number(id));
}

function editCoffee(id, property, value) {
  if (!value) return;
  const coffee = readCoffee(id);
  coffee[property] = value;
}

function addCoffee(coffee) {
  data.coffees.push(coffee);
}

function deleteCoffee(id) {
  data.coffees = data.coffees.filter(coffee => coffee.id !== Number(id));
}

module.exports = {
  browseCoffees,
  readCoffee,
  editCoffee,
  addCoffee,
  deleteCoffee,
}
