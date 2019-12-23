import React from "react";

export default function App() {
    return (
        <nav className="navbar is-info">
            <div className="navbar-brand">
                <a id="logo" className="navbar-item" href="/">
                    App
                </a>
                <div
                    className="navbar-burger burger"
                    data-target="navMenuColorinfo-example"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navMenuColorinfo-example" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="#">
                        Link
                    </a>
                    <a className="navbar-item" href="#">
                        Link
                    </a>
                    <a className="navbar-item" href="#">
                        Link
                    </a>
                </div>
            </div>
        </nav>
    );
}
