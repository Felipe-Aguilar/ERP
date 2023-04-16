import { useState } from 'react';

import AngelLogo from '../assets/autos-el-angel-logo.png';

const SideBar = () => {

    const [menu, setMenu] = useState(false);

    return ( 
        <>
            <div className="sidebar col-lg-2 d-none d-lg-block">

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

            <div className='side-movil col-12 d-block d-lg-none'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='w-25'>
                        <img src={AngelLogo} className='img-fluid' />
                    </div>
                    <div className='button'>
                        { !menu ?
                            <button onClick={()=>setMenu(true)}>
                                <i className="bi bi-list"></i>
                            </button>
                        :
                            <button onClick={()=>setMenu(false)}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        }
                    </div>
                </div>
            </div>

            { menu &&
                <div className='sidebar movil'>
                    {/* <div className="home d-flex align-items-start">
                        <button>
                            <i className="bi bi-house"></i>
                        </button>
                        <img src={AngelLogo} />
                    </div> */}

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
            }
        </>
    );
}

export default SideBar;