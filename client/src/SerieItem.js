import React from 'react';
//import './SerieItem.css';

function SerieItem({ serie, index }) {
    return (
        <li className="li-items">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                    >
                        {serie.nombre}
                    </button>
                </h2>
                <div className="accordion-collapse collapse" id={`collapse${index}`} data-bs-parent="#lista-series">
                    <div className="accordion-body">
                        <span className="nombre">{serie.nombre}</span>
                        <br />
                        <div className="content_image">
                            <span>{serie.sinopsis}</span>
                            <br />
                            <span className="Imagen-Cards">
                                <img src={serie.imagen} alt={serie.nombre} style={{ width: '150px', height: '200px', padding: '20px' }} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default SerieItem;
