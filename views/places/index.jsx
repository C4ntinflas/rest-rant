const React = require('react')
const Def = require('../default')

function Index (data) {
let placesFormatted = data.places.map((place) => {
  return (
    <div className="col-sm-6">
      <h2>{place.name}</h2>
      <p>
        {place.cuisines}
      </p>
      <img className='img-fluid' src={place.pic} alt={place.name} />
      <p>
        Located in {place.city}, {place.state}
      </p>
    </div>
  )
})
return (
    <Def>
        <main>
             <h1>Places to Rant or Rant About</h1>
             <div className="row">
             {placesFormatted}
             </div>
        </main>
    </Def>
)
}

module.exports = Index;