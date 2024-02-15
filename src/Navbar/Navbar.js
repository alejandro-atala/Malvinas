import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand mr-auto" href="#">MALVINAS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Acerca</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center">
                    {/* Aquí colocar los logos de las redes sociales */}
                    <i className="fab fa-facebook-f text-white mx-2"></i>
                    <i className="fab fa-twitter text-white mx-2"></i>
                    <i className="fab fa-instagram text-white mx-2"></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
