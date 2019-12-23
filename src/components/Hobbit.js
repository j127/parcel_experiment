import React from "react";

export default function Hobbit({ name, age }) {
    return (
        <div className="hobbit">
            <h3>
                {name} ({age})
            </h3>
        </div>
    );
}
