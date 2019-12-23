import React from "react";
import ReactDOM from "react-dom";

export default function Hobbit({ name, age }) {
    return (
        <div className="hobbit">
            <h3>
                {name} ({age})
            </h3>
        </div>
    );
}
