import React from 'react';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.cartoonnetwork.com.ar/">
                <img src="images/cartoonLogo.png" className="Imagen-Cards" alt="Un Show Mas" style={{ width: '150px', height: 'auto' }} />
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="https://www.cartoonnetwork.com.ar/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.cartoonnetwork.com.ar/">Juegos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.cartoonnetwork.com.ar/">Sobre nosotros</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default NavBar