import logo from "./logo.svg";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data.js";
import { useState } from "react";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0){
    return(
      <div className="refresh h-[100vh] flex items-center justify-center flex-col"> 
        <h2 className="font-extrabold text-[1.2rem]">No Tours Left</h2>
        <button className="mt-[18px] py-[10px] px-[80px] border-white border-2 rounded-md
        bg-gray-100 hover:bg-gray-200 transition-all duration-200"
        onClick={()=> setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

    return (
      <div>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    );
}

export default App;
