import React, { useEffect, useState } from "react";
import Meteor from "./Meteor";

function MeteorShower() {
  const [meteorList, setMeteorList] = useState([]);
  const [countMeteors, setCountMeteors] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 80) + 5;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = generateRandomNumber();
      const newMeteor = <Meteor key={Date.now()} position={newPosition} />;
      setMeteorList((prevList) => [...prevList, newMeteor]);
      setCountMeteors((prevCount) => prevCount + 1);
    }, 4500);

    // Pulisce l'intervallo quando il numero di meteori raggiunge 15
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Controlla se il numero di meteori è maggiore di 15
    if (countMeteors > 15) {
      // Rimuovi il meteor più vecchio dalla lista
      setMeteorList((prevList) => prevList.slice(1));
      // Decrementa il conteggio dei meteori
      setCountMeteors((prevCount) => prevCount - 1);
      console.log("IN", meteorList);
      console.log("IN", countMeteors);
    }
    console.log(meteorList);
    console.log(countMeteors);
  }, [countMeteors]);

  return (
    <div>
      {meteorList.map((meteor, index) => (
        <div key={index}>{meteor}</div>
      ))}
    </div>
  );
}

export default MeteorShower;
