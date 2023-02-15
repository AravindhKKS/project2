import { useState } from "react";
import "./animalShow.css";
import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import heart from "../svg/heart.svg";
import horse from "../svg/horse.svg";

const ImgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
export default function Animalshow({ type }) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div className="animalShow" onClick={handleClick}>
      <img className="animal" src={ImgMap[type]} alt="animal" />
      <img
        className="heart
      "
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * click }}
      />
    </div>
  );
}
