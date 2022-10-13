import React from "react";
import ShopCard from "./components/ShopCard/ShopCard";

// import Greeting from "./components/Greeting";
// import Counter from "./components/Counter";

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: `Men\\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.`,
  price: 399,
  currency: '£'
}


function App() {
  return <div>
    {/* <Greeting />   */}
    {/* <Counter />  */}
    <ShopCard item={item} />
  </div>
}
export default App;
