
function MiLista(props){

    return(
        <div className="container mt-3">
            <ul>
                {props.incidencias.map((i) => (
                    <div key={i.id_incidencia} className="mb-4 pb-2 border-bottom">
                        <li className="text-titulopersonalizado-azul">
                            <strong>Título: </strong>{i.titulo}<br/><br/>
                        </li>

                        <li className="mb-1 text-muted">
                            <strong>Descripción: </strong>{i.descripcion}<br/><br/>
                        </li>

                        <li className="mb-0">
                            <strong>Usuario: </strong>{i.usuario}<br/><br/>
                        </li>

                        <li className="mb-0">
                            <strong>Urgencia: </strong>{i.nivel_urgencia}<br/><br/>
                        </li>

                        <li className="mb-0">
                            <strong>Ubicación: </strong>{i.ubicacion}<br/><br/><br/>
                        </li>

                    </div>
                ))}
            </ul>
        </div>
    );
}

export default MiLista;


