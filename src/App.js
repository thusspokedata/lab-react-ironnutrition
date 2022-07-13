//import { useState, React } from "react";
import './App.css';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import Foods from './foods.json';
import "bootstrap/dist/css/bootstrap.min.css";
import FoodBox from "./components/FoodBox";


function App() {
  // const [foods, setfoods] = useState([...Foods]);
  return <div className="App">
    <h2>Food List</h2>
    {/* {foods.map(food => (
      <div key={food._id}>
        <p> {food.name} </p>
        <img src={food.image} width="200px" />
      </div>))
      } */}
      <FoodBox food={ {
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }} />
      

  </div>;
}

export default App;
