// Assuming you have a Place model and the corresponding schema defined in your models file

const router = require('express').Router();
const db = require('../models');

// Route to display a list of places
router.get('/', (req, res) => {
  db.Place.find({})
    .then((places) => {
      res.render('places/index', { places });
    })
    .catch((err) => {
      console.log('Error:', err);
      res.render('error404');
    });
});

// Route to handle form submission and create a new place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400';
  }

  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places');
    })
    .catch((err) => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: ';
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log('Validation error message', message);
        res.render('places/new', { message });
      } else {
        console.log('Error:', err);
        res.render('error404');
      }
    });
});

// Route to display the form for adding a new place
router.get('/new', (req, res) => {
  res.render('places/new');
});

// Route to view a specific place
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render('places/show', { place });
    })
    .catch((err) => {
      console.log('Error:', err);
      res.render('error404');
    });
});

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})


module.exports = router;
