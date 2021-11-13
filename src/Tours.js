import React from "react";
import Tour from "./Tour";

function Tours({ data }) {
  const [tour, setTour] = React.useState(data);
  const removeItem = (id) => {
    console.log(id);
    const newTours = tour.filter((tour) => tour.id !== id);
    setTour(newTours);
  };
  if (tour.length === 0) {
    return <Notour />;
  }
  return (
    <>
      <div className="tour-div">
        <h1 className="our-tours-heading">Our Tours</h1>
      </div>
      {tour.map((tours) => {
        return (
          <>
            <section key={tours.id} className="tour">
              <Tour tour={tours} />
              <div className="btn">
                <button
                  className="btn-remove"
                  onClick={() => removeItem(tours.id)}
                >
                  Not intrested
                </button>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
}

const Notour = () => {
  const refresh = () => {
    window.location.reload(false);
  };
  return (
    <>
      <div className="Notour">
        <h1>No Tours Left</h1>
        <div>
          <button onClick={refresh} className="refresh">
            Refresh
          </button>
        </div>
      </div>
    </>
  );
};

export default Tours;
