const Express = require('express');
const dataHelpers = require('./data.js');
const viewHelpers = require('./views.js');

const {
  browseCoffees,
  readCoffee,
  editCoffee,
  deleteCoffee,
} = dataHelpers;

const {
  coffeeView,
} = viewHelpers;

const App = Express();

App.use(Express.urlencoded({ extended: true }));
// App.use(Express.json());

App.use((req, res, next) => {
  console.log(req.path);
  next();
});

App.get('/', (req, res) => {
  res.redirect('/coffees');
});

App.get('/coffees', (req, res) => {
  const coffees = browseCoffees();
  res.send(`
      ${coffees.map(c => `
        <p>
          <a href='/coffees/${c.id}'>
            ${c.name}
          </a>
        </p>
      `).join('')}
  `);
});

App.get('/coffees/:id', (req, res) => {
  const { id } = req.params;
  const coffee = readCoffee(id);
  if (!coffee) {
    res.status(404).send('That is not coffee.');
  }

  res.send(coffeeView(coffee));
});

App.post('/coffees/:id/delete', (req, res) => {
  const { id } = req.params;

  deleteCoffee(id);
  res.redirect('/coffees');
});

App.post('/coffees/:id', (req, res) => {
  const { id } = req.params;
  const { name, origin } = req.body;
  editCoffee(id, 'name',  name);
  editCoffee(id, 'origin',  origin);
  res.redirect(`/coffees/${req.params.id}?submittedAThing=true`);
});

App.get('*', (req, res) => {
  res.status(404).send('You didn\'t build this yet.');
});

App.listen(8080, () => console.log('Express is listening it looks like.'));
