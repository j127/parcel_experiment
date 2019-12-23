import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Hobbit from "./components/Hobbit";
import { hobbits } from "./data/hobbits.js";

function App() {
    return (
        <div>
            <Header />
            <section className="section">
                <div className="container content">
                    <h1 className="title is-1">Saluton Mondo</h1>
                    <p>
                        Elit porro ut beatae quaerat voluptates debitis
                        obcaecati nam. Ex officiis reprehenderit repellat
                        provident doloribus Consequuntur soluta corrupti tempora
                        magnam est Tempore enim voluptas vero iure quidem
                        Incidunt voluptas dolore.
                    </p>
                    <hr />
                    <h2 className="title is-2">Components</h2>
                    {hobbits.map(h => (
                        <Hobbit name={h.name} age={h.age} />
                    ))}
                </div>
            </section>
            <footer className="footer">footer</footer>
        </div>
    );
}

const AppContainer = document.getElementById("app");

ReactDOM.render(<App />, AppContainer);
