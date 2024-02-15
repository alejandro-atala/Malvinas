import React from 'react';


function Cards({ historias }) {
    return (
        <div className="container mt-4">
            <h2>Historias de Usuarios</h2>
            <div className="row mt-4">
                {historias.map((historia, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                           
                            <img src={historia.imagen} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{historia.titulo}</h5>
                                <p className="card-text">{historia.descripcion}</p>
                            </div>

                            <div className="d-flex align-items-center p-3">
                                <img src={historia.fotoAutor} className="rounded-circle mr-3" alt="Foto del autor" style={{ width: '50px', height: '50px' }} />
                                <div className='m-3 '>
                                    <h5 className="mb-0">{historia.autor}</h5>
                                    <p className="text-muted">Fecha de publicación: {historia.fecha}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
