import React, {useState} from "react";
import PorkerTile from "./PorkerTile";

function Porkers({ hogs }) {
   hogs.map(hog => {
        return (
            <PorkerTile
            key={hog.name}
        name={hog.name}
        image={hog.image}
        weight={hog.weight}
        greased={hog.greased}
        specialty={hog.specialty}
        highestMedal={hog["highest medal achieved"]}
        />
        )
    })
}



export default Porkers