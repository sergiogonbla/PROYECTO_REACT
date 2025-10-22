import React from "react";

class MiLista extends React.Component {
    state={incidencias:[
        {
        id_incidencias: 1,
        id_usuario: "lucasgd98",
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
        id_usuario: "lucasgd98",
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
        id_usuario: "lucasgd98",
        titulo: "Proyecto averia",

        descripcion: "Impresora sin conexion",
        categoria: "Hardware",
        nivel_urgencia: "Media",
        fecha_registro: "2025-10-20",
        estado: "Abierto",
        ubicacion: "B205"

    },
    {
        id_incidencias: 4,
        id_usuario: "lucasgd98",
        titulo: "Proyecto averia",

        descripcion: "WIFI no disponible",
        categoria: "Hardware",
        nivel_urgencia: "Alta",
        fecha_registro: "2025-10-20",
        estado: "Abierto",
        ubicacion: "B205"
    }]
    };

    render(){
    return(
        <div ClassName='lista'>
            <ul>
                {
                    this.state.incidencias.map((i)=> (
                        <li>
                            
                            <strong>ID incidencia:</strong> {i.id_incidencias}<br></br>
                            <strong>Titulo: </strong>{i.titulo}<br></br>
                           <strong>Descripcion: </strong>{i.descripcion}<br></br>
                            <strong>Categoria: </strong>{i.categoria}<br></br>
                            <strong>Nivel de urgencia: </strong>{i.nivel_urgencia}<br></br>
                            <strong>Fecha de registro: </strong>{i.fecha_registro}<br></br>
                            <strong>Estado: </strong>{i.estado}<br></br>
                            <strong>Ubicacion: </strong>{i.ubicacion}<br></br>
                            
                        </li>
                        
                    ))

                }
            </ul>
        </div>
    );
}
}
export default MiLista;