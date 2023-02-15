import "./animal.css";
import { useState } from "react";
import Animalshow from "../animalshow/Animalshow";

function getRandomAnimal() {
  const animals = ["cow", "bird", "cat", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

// console.log(getRandomAnimal());

export const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const handler = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animals, index) => {
    return <Animalshow type={animals} key={index} />;
  });
  return (
    <div className="animals">
      <button onClick={handler}>Add Animals</button>
      <div className="animalList"> {renderedAnimals}</div>
    </div>
  );
};

// reactjs.org/docs/events.html ----website of differnt type of events example mouseIn mouseOver
