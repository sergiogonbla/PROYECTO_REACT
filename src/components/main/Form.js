import React from "react";
import './Form.css';

function Form(props) {

    const envioFormulario = (event) => {
        event.preventDefault();
        const form = event.target;

        props.agregarincidencia(
            form.titulo.value,
            form.usuario.value,
            form.descripcion.value,
            form.categoria.value,
            form.nivel.value,
            form.ubicacion.value
        );
    };

    return (
        <div className="card p-4 bg-dark text-light">
            <h2 className="card-title mb-4 text-center">Registrar incidencia</h2>

            <form onSubmit={envioFormulario}>

                <div>
                    <label className="mb-3 form-label">Título incidencia</label>
                    <input 
                        className="mb-3 form-control" 
                        type="text" 
                        name="titulo" 
                        placeholder="Introduce el título" 
                        required
                    /><br/><br/>
                </div>

                <div>
                    <label className="mb-3 form-label">Usuario</label>
                    <input 
                        className="mb-3 form-control" 
                        type="text" 
                        name="usuario" 
                        required
                    /><br/><br/>
                </div>

                <div>
                    <label className="mb-3 form-label">Descripción</label>
                    <textarea 
                        className="mb-3 form-control"
                        name="descripcion"
                        placeholder="Describe la incidencia"
                        required
                    ></textarea><br/><br/>
                </div>

                <div>
                    <label className="mb-3 form-label">Categoría</label>
                    <select 
                        className="mb-3 form-control" 
                        name="categoria" 
                        required
                    >
                        <option value="">Seleccionar...</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Software">Software</option>
                        <option value="Red">Red</option>
                    </select><br/><br/>
                </div>

                <div>
                    <label className="mb-3 form-label">Nivel de urgencia</label>
                    <select 
                        className="mb-3 form-control" 
                        name="nivel" 
                        required
                    >
                        <option value="">Seleccionar...</option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baja">Baja</option>
                    </select><br/><br/>
                </div>

                <div>
                    <label className="mb-3 form-label">Ubicación</label>
                    <input 
                        className="mb-3 form-control" 
                        type="text" 
                        name="ubicacion" 
                        placeholder="Introduce el aula o lugar"
                        required
                    /><br/><br/>
                </div>

                <div className="text-center">
                    <button className="btn btn-success" type="submit">Registrar</button>
                </div>


            </form>
        </div>
    );
}

export default Form;
