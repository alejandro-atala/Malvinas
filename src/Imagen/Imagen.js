import React from 'react';

function Imagen() {
    return (
        <div className="container-fluid p-0 position-relative">
            <img src="https://eltigredepapel.com/wp-content/uploads/2020/11/Malvinas.jpg" className="img-fluid" alt="Imagen principal" style={{ height: '500px', width: '100%', objectFit: 'cover', marginTop: '0px' }} />
            <div className="position-absolute start-50 translate-middle text-center text-black" style={{ top: '100px' }}>
                <h1>Historias en primera persona</h1>
                <h3>Narradas por quienes estuvieron allí</h3>
            </div>
        </div>
    );
}

export default Imagen;
