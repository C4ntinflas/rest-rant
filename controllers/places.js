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
        // Handling validation errors
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
    .populate('comments') // Populating comments for the place
    .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// Route to update a specific place
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// Route to delete a specific place
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// Route to display the form for editing a specific place
router.get('/:id/edit', (req, res) => {
  console.log('Edit Route - Place ID:', req.params.id);
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/edit', { place })
    })
    .catch(err => {
      res.render('error404')
    })
})

// Route to add a comment to a specific place
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
        .then(comment => {
          place.comments.push(comment.id)
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
          res.render('error404')
        })
    })
    .catch(err => {
      res.render('error404')
    })
})

// Route to delete a specific rant (comment) from a place
router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router;
