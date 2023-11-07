import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {

  // Aquí vemos una herramienta mas que nos da react-router
  // la cual funciona de forma similar a la eqtiqueta "<a>" de HTML
  // pero sin efectos secundarios, permitiendonos navegar entre las distintas rutas 
  // de nuestro proyecto 

  return (
    <>
    <Link to={"pokemon/"+data.id}> 
        <div className="card-pokemon">
          <div className="card-img">
            <img src={data.image} alt={`Pokemon ${data.name}`} />
          </div>
          <div className="card-info">
            <span className="pokemon-id">N° {data.id}</span>
            <h3>{data.name}</h3>
            <div className="card-types">
              <span className={data.type}>{data.type}</span>
            </div>
          </div>
        </div>
    </Link>
    </>
  );
};

export default Card;
