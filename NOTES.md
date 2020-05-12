# Coffee App

- Buy coffee
- Shop for coffee
- Shopping cart
- Order history

## Data

### Coffee
  - Name
  - Origin
  - Roast
  - Price

### Users
  - Have a persistent shopping cart
  - Order history


# Actual Lecture Notes

CRUD

Create
Read
Update
Delete

BREAD

Browse
Read
Edit
Add
Delete


## Resources

Resources are the nouns of your apps.
**Coffee**
Users
Orders
Cart
Dashboard
Recommendations


## REST

**Confusing definition:**
REpresentational State Transfer (don't remember this)

**Better definition:**
A routing plan for doing BREAD stuff to Resources


## Routes


This is a URL:

```
coffeeapp.com/coffees/3/edit
```

This is a path:

```
/coffees/3/edit
```

These are routes:

```
GET /coffees/3/edit
POST /coffees/3/edit
```

App.get('/coffees')
App.post('/coffees')


## RESTful Routing

Browse - GET `/coffees`
Read - GET `/coffees/:id` (e.g. GET `/coffees/3`)
Edit - POST `/coffees/:id`
Add - POST `/coffees`
Delete - POST `/coffees/:id/delete`


**Rejected HTTP methods**
These don't work with HTML Forms, so stay away from them until you know what you're doing.

PUT `/coffees/3`
PATCH
DELETE


# Object Destructuring

```
const coffee = {
  id: 1,
  name: 'Button Roast',
  origin: 'Guatemala',
  roast: 'light',
  price: 2400, /* $24.00 */
};

const name = coffee.name;
const origin = coffee.origin;

const { name, origin } = coffee;
```

# Where is my data hiding?

req.params
req.body
req.query
