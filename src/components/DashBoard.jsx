import carro from '../assets/carro.jpg';

const DashBoard = () => {
    return ( 
        <div className="erp-cuerpo-contenedor">
            
            <div className="title">
                <h5>Aritículos</h5>
            </div>

            <hr/>

            <div className="cuerpo">
                <form>
                    <div className="d-flex justify-content-between">

                        <div>
                            <label>Clave</label>
                            <input type="text" />
                        </div>

                        <div className="w-25">
                            <label>Nombre</label>
                            <input type="text" />
                        </div>

                    </div>

                    <div className="d-flex justify-content-between mt-4">

                        <div>
                            <label>Clase de Vehículo</label>
                            <select name="" id="">
                                <option>Deportivo</option>
                                <option>Clásico</option>
                                <option>Todo Terreno</option>
                            </select>
                        </div>
                        
                        <div>
                            <label>Tipo de Vehículo</label>
                            <select name="" id="">
                                <option>Nuevo</option>
                                <option>SemiNuevo</option>
                            </select>
                        </div>

                        <div>
                            <label>Marca</label>
                            <select name="" id="">
                                <option>VOLKSWAGEN</option>
                                <option>TOYOTA</option>
                                <option>RENAULT</option>
                                <option>NISSAN</option>
                            </select>
                        </div>

                        <div>
                            <label>Version</label>
                            <input type="text" />
                        </div>

                    </div>

                    <div className="d-flex justify-content-start mt-4" style={{gap: '30px'}}>
                        <div>
                            <label>Km Entrada</label>
                            <input type="number" />
                        </div>

                        <div>
                            <label>Matrícula</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Precio</label>
                            <input type="number" />
                        </div>
                    </div>

                    <div className="mt-4 w-25">
                        <label>Imagen</label>
                        <img src={carro} className='img-fluid' />

                        <label>Imagen 2</label>
                        <input type="file" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DashBoard;