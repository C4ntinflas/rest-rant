require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes
app.use('/places', require('./controllers/places'));

// Home Route
app.get('/', (req, res) => {
  res.render('home');
});

// 404 Route
app.get('*', (req, res) => {
  res.render('error404');
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
