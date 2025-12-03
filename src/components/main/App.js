import fondo from '../imagenes/fondo.jpg'; 
import MiLista from '../lista/MiLista';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import React, { useState, useEffect } from 'react';
import Form from './Form.js';

function App() {

    const INCIDENCIA_API_URL = 'http://localhost:3004/incidencias';
    const USUARIO_API_URL = 'http://localhost:3004/users';

    const [usuarios, setUsuarios] = useState([]);
    const [incidencias, setIncidencias] = useState([]);

    useEffect(() => {

    const obtenerIncidencias = async () => {
        try {
            let response = await fetch(INCIDENCIA_API_URL);
        if (!response.ok) {
                throw new Error("HTTP Error");
            }
            const data = await response.json();
            console.log(data);
            setIncidencias(data);
        } catch (e) {
            console.error("Error al cargar las incidencias:", e);
        }
    };

    const obtenerUsuarios = async () => {
        try {
            let response = await fetch(USUARIO_API_URL);
                if (!response.ok) {
                    throw new Error("HTTP Error");
            }
                const data = await response.json();
                console.log(data);
                 setUsuarios(data);
            } catch (e) {
                 console.error("Error al cargar los usuarios:", e);
            }
        };

        obtenerIncidencias();
        obtenerUsuarios();

    }, []);

    const agregarincidencia = (
        titulo_nuevo,
        usuario_input,
        descripcion_nuevo,
        categoria_nuevo,
        nivel_urgencia_nuevo,
        ubicacion_nuevo
    ) => {

        const fecha = new Date();
         const year = fecha.getFullYear();
        const mes = fecha.getMonth() + 1;
        const dia = fecha.getDate();
        const fecha_formateada = `${year}-${mes}-${dia}`;

        let usuarioCompleto = null;
        const inputEmail = usuario_input.email ? usuario_input.email.toLowerCase().trim() : '';

        if (inputEmail) {
            usuarioCompleto = usuarios.find(u => 
                u.email && u.email.toLowerCase() === inputEmail
            );
        }

        let usuario_para_guardar;
        if (usuarioCompleto) {
         usuario_para_guardar = usuarioCompleto;
        }
        
        const nueva_incidencia = {
            id: incidencias.length + 1,
            usuario: usuario_para_guardar, 
            titulo: titulo_nuevo,
            descripcion: descripcion_nuevo,
            categoria: categoria_nuevo,
            nivel_urgencia: nivel_urgencia_nuevo,
            ubicacion: ubicacion_nuevo,
            fecha_registro: fecha_formateada,
            estado: "Abierto"
        };

    setIncidencias([...incidencias, nueva_incidencia]);
    };

    return (
        <div className='card' style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <Header />
            <div className="container d-flex">
                 <div className="col-6">
                 <MiLista incidencias={incidencias} />
                </div>
                <div className="col-5 offset-1"> 
                <Form agregarincidencia={agregarincidencia} />
                </div>
            </div>

        <Footer />
    </div>
  );
}

export default App;

