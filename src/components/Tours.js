import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center">
        <h2
          className="border-purple-950 px-16 py-4 border-dashed border-8 
        font-bold text-4xl conte text-center rounded-xl my-8"
        >
          Plan With Aayush
        </h2>
      </div>
      <div
        className="flex justify-center flex-wrap max-w-[1300px]
      my-auto mx-0"
      >
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
          //key={tour.id} pass a key for good practice while using maps
          //good rule of thumb is that elements inside the map( ) call need keys.
          //here spread op used to pass a clone of tours
        })}
      </div>
    </div>
  );
}

export default Tours;
