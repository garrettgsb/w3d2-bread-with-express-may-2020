function coffeeView(coffee) {
  const { id, name, origin, roast, price } = coffee;
  return `
       <h1>${name}</h1>
       <p><strong>Origin:</strong> ${origin}</p>
       <p><strong>Roast:</strong> ${roast}</p>
       <p><strong>Price:</strong> $${price / 100}</p>
       <form method='POST' action='/coffees/${id}/delete'>
        <button>Delete</button>
       </form>

       <form method='POST' action='/coffees/${id}'>
        <label for='name'>Name</label>
        <input id='name' name='name'>
        <label for='origin'>Origin</label>
        <input id='origin' name='origin'>
        <button>Edit</button>
       </form>
    `;
}

module.exports = {
  coffeeView,
}
