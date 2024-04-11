import React from 'react';

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
                            <img className="Imagen-Cards" src={serie.imagen} alt={serie.nombre}/>
  
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default SerieItem;
