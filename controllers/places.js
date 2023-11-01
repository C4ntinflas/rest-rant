const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
      name: '¡HTMLocos Cantina!',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Mexican',
      pic: '/Images/Torta.jpg'
    }, {
      name: 'Sunny Bites Diner',
      city: 'Miami',
      state: 'FL',
      cuisines: 'American, Breakfast',
      pic: '/Images/Breakfast.jpg'
    }]
      
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/places/:id', (req, res) => {
  res.render('places/')
})

module.exports = router

