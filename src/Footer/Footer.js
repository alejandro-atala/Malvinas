import React from 'react';

function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Acerca de</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5>Contacto</h5>
                        <address>
                            123 Calle Principal<br />
                            Ciudad, País<br />
                            Teléfono: (123) 456-7890<br />
                            Email: info@example.com
                        </address>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-muted">&copy; 2024 Malvinas. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <button className="btn btn-primary">Suscribirse</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ">
                        <p>Malvinas 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
