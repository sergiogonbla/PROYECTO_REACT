
function MiLista(props) {
    return (
        <div className="container mt-3"> 
            
            <table className="table table-striped table-hover table-sm lista-incidencias-ajustada">
                <thead>
                    <tr>
                        <th style={{width: '5%'}}>ID</th> 
                        <th style={{width: '20%'}}>Título</th>
                        <th style={{width: '25%'}}>Usuario (Email)</th>
                        <th style={{width: '10%'}}>Urgencia</th>
                        <th style={{width: '10%'}}>Ubicación</th>
                        <th style={{width: '10%'}}>Estado</th>
                        <th style={{width: '15%'}}>Fecha Reg.</th>
                    </tr>
                </thead>
                <tbody>
                    {props.incidencias.map((i, index) => (
                        <tr key={i.id || index}> 
                            <td>{i.id}</td> 
                            <td>{i.titulo}</td>
                            <td className="text-truncate">{i.usuario.email}</td> 
                            <td>{i.nivel_urgencia}</td>
                            <td>{i.ubicacion}</td>
                            <td>{i.estado}</td>
                            <td>{i.fecha_registro}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MiLista;


