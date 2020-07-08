import React from "react";
import "./CardList.styles.css";
import Card from "../Card/Card";
const CardList = (props) => {
  //console.log(props);

  return (
    <div className="cardList">
      {props.monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
