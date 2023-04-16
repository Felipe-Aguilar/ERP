import AngelLogo from '../assets/autos-el-angel-logo.png';

const SideBar = () => {
    return ( 
        <div className="sidebar col-lg-2">

            <div className="home d-flex align-items-start">
                <button>
                    <i className="bi bi-house"></i>
                </button>
                <img src={AngelLogo} />
            </div>

            <div className='cuerpo'>
                <p>Menú Principal</p>

                <div className='buttons'>
                    <button className='activate'>
                        <i className="bi bi-grid-1x2"></i>
                        DashBoard
                    </button>
                    <button>
                        <i className="bi bi-cart3"></i>
                        Órdenes
                    </button>
                    <button>
                        <i className="bi bi-car-front"></i>
                        Productos
                    </button>
                    <button>
                        <i className="bi bi-graph-up"></i>
                        Ventas
                    </button>
                    <button>
                        <i className="bi bi-rainbow"></i>
                        Otro
                    </button>
                </div>
            </div>

            <div className='footer '>
                <div>
                    <hr/>
                    <button>
                        <i className="bi bi-people"></i>
                        Usuarios
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SideBar;