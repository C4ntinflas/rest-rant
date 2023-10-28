const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <a href="/places">
                <img src="/images/BeefTacos.jpg" alt="Beef Tacos-Jeswin Thomas"/>
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
