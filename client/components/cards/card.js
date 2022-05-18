import React from "react";
import "./card.css";

export default function Card(props) {

    return <div className="card-container">
        <h1 className="card-title">{props.name}</h1>
        <p className="card-cost">R$ {props.cost}</p>
        <p className="card-category">{props.category}</p>
        <button className="card-button" onClick={() => {
            document.getElementById("update-container").classList.add("updated-container");
            document.getElementById("app-container").classList.add("app-container-op");
            document.getElementById("register-input-name").className = "register-input-op";
            document.getElementById("register-input-cost").className = "register-input-op";
            document.getElementById("register-input-category").className = "register-input-op";
            document.getElementById("input-id").defaultValue = props.id;
            document.getElementById("input-name").defaultValue = props.name;
            document.getElementById("input-cost").defaultValue = props.cost;
            document.getElementById("input-category").defaultValue = props.category;
            document.getElementById("register-button").classList.add("register-button-op");
            }

            }>Abrir
        </button>
    </div>
}