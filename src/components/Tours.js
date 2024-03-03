import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div>
      <div>
        <h2>Plan with Aayush</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
          //spread op to pass a clone of tours
        })}
      </div>
    </div>
  );
}

export default Tours;
