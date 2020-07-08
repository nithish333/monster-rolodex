import React from "react";
import "./Card.styles.css";

const Card = (props) => {
  return (
    <div key={props.monster.id} className="Card">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="monsters"
      />
      <h2>{props.monster.name}</h2>
      <p>
        Find me on :<b>{props.monster.website}</b>
      </p>
    </div>
  );
};
export default Card;
