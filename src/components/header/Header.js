import React from "react";
import Fondo from '../../components/imagenes/fondo.jpg';  
import Logo from '../../components/imagenes/logo.jpg';

class Header extends React.Component {
    render() {
        return (
            <div 
                className="card"
                style={{ 
                    backgroundImage: `url(${Fondo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    padding: '20px 0'
                }}
            >
                <div className="text-center">
                    <img 
                        src={Logo} 
                        alt="Logo" 
                        style={{ width: '150px', marginBottom: '20px' }} 
                    />
                    <h2 
                        className="card-title mt-4 bg-dark" 
                        style={{ color: 'white' }}
                    >
                        Mi aplicación
                    </h2>
                </div>
            </div>
        );
    }
}

export default Header;
