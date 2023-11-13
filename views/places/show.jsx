const React = require('react');
const Def = require('../default');

function Show({ data }) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-md-6">
            <img className='img-fluid my-image' src={data.place.pic} alt={data.place.name}/>
          </div>
          <div className="col-md-6">
            <section>
              <h1>
                {data.place.name}
            </h1>
            </section>
            <section>
              <h2>Description</h2>
              <p>
                Located in {data.place.city}, {data.place.state}
              </p>
            </section>
            <section>
              <h2>Rating</h2>
              <p>Currently unrated</p>
            </section>
          </div>
        </div>
        <section>
          <h2>Comments</h2>
          <p>No comments yet!</p>
        </section>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = Show;
