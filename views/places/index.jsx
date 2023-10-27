const React = require('react')

function Index (data) {
    let placesFormatted = data.places.map((place) => {
    return (
      <div>
        <h1>{place.name}</h1>
        <img src={place.pic} alt={place.name}/>
      </div>
  )
})
return (
    <default>
        <main>
             <h1>Places index page</h1>
             {placesFormatted}
        </main>
    </default>
)
}

module.exports = Index;