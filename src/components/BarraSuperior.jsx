const BarraSuperior = () => {
    return ( 
        <div className="barra-superior d-flex justify-content-between">
            <div>
                <p>
                    Inicio 
                    <i className="bi bi-chevron-right"></i>
                    Productos
                </p>
            </div>

            <div>
                <button>
                    <i className="bi bi-person-circle"></i>
                    Usuario
                </button>
            </div>
        </div>
    );
}

export default BarraSuperior;