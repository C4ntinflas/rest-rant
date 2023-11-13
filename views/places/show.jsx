const React = require('react');
const Def = require('../default');

function Show(data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-md-6">
            <img className='img-fluid my-image' src={data.place.pic} />
          </div>
          <div className="col-md-6">
            <section>
              <h1>{data.place.name}</h1>
            </section>
            <section>
              <h2>Description</h2>
              <p>
                Located at {data.place.city}, {data.place.state}, serving {data.place.cuisines}!
              </p>
            </section>
            <section>
              <h2>Rating</h2>
              <p>Currently unrated</p>
            </section>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        <section>
          <h2>Comments</h2>
          <p>No comments yet!</p>
        </section>
      </main>
    </Def>
  );
}

module.exports = Show;
