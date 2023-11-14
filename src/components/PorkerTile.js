import React from "react";


function PorkerTile({ name, image, weight, specialty, greased, highestMedal }) {
    return (
        <div className="pigTile">
            <h3>{name}</h3>
            <img width={250} src={image} />
            <div>
                <p>Weight:{weight}</p>
                <p>specialty:{specialty}</p>
                <p>greased:{greased}</p>
                <p>highestMedal:{highestMedal}</p>
            </div>
        </div>
    )
}


export default PorkerTile