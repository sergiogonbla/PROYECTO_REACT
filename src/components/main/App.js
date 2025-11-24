
import fondo from '../imagenes/fondo.jpg'; 
import MiLista from '../lista/MiLista';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import React, { useState } from 'react';
import Form from './Form.js';

function App() {


    const [incidencias, setIncidencias] = useState([
        {
            id_incidencias: 1,
            id_usuario: "sergiogb85",
            titulo: "Proyecto averia",
            descripcion: "Proyecto averiado en el aula 2",
            categoria: "Hardware",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-20",
            estado: "Abierto",
            ubicacion: "B205"
        },
        {
            id_incidencias: 2,
            id_usuario: "sergiogb85",
            titulo: "Proyecto averia",
            descripcion: "Ordenador no enciende",
            categoria: "Hardware",
            nivel_urgencia: "Baja",
            fecha_registro: "2025-10-20",
            estado: "Abierto",
            ubicacion: "B205"
        },
        {
            id_incidencias: 3,
            id_usuario: "sergiogb85",
            titulo: "Proyecto averia",
            descripcion: "Impresora sin conexion",
            categoria: "Hardware",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-20",
            estado: "Abierto",
            ubicacion: "B205"
        }
    ]);


    const agregarincidencia = (
        titulo_nuevo,
        usuario_nuevo,
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

        const nueva_incidencia = {
            id_incidencias: incidencias.length + 1,
            id_usuario: usuario_nuevo,
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
                <div className="col-6">
                    <Form agregarincidencia={agregarincidencia} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
