import React from 'react'

const Navbarheader = ({ handleShow }) => {
    return (
        <div>
            <nav className="navbar container navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Products</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbarheader;
