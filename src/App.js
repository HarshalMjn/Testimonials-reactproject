import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-centre item-centre bg-gray-200">

      
      <div className="text-centre">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>

        <div className="bg-voilet-400 h-[4px] w-[1/5] mt-1"></div>

        <Testimonial reviews={reviews} />

      </div>
    


    </div>
  );
}

export default App;
