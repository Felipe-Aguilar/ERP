import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Variables } from '../context/Variables';

import AngelLogo from '../assets/autos-el-angel-logo.png';

const SideBar = () => {

    const [menu, setMenu] = useState(false);
    const [buscado, setBuscado] = useState(false);

    const { setSeleccionado } = useContext(Variables);

    const seleccion = (e) => {
        const selec = e.target.innerText;
        setBuscado(true);
        setSeleccionado(selec);
        setMenu(false);
    }

    const home = (e) => {
        const selec = e.target.innerText;
        setBuscado(false);
        setSeleccionado(selec);
        setMenu(false);
    }

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

                        <NavLink className={!buscado &&'activate'} to={'/'}
                            onClick={home}
                        >
                            <i className="bi bi-grid-1x2"></i>
                            DashBoard
                        </NavLink>

                        <NavLink to={'/ordenes'}
                            onClick={seleccion}
                        >
                            <i className="bi bi-cart3"></i>
                            Órdenes
                        </NavLink>

                        <NavLink to={'/productos'}
                            onClick={seleccion}
                        >
                            <i className="bi bi-car-front"></i>
                            Productos
                        </NavLink>

                        <NavLink to={'/ventas'}
                            onClick={seleccion}
                        >
                            <i className="bi bi-graph-up"></i>
                            Ventas
                        </NavLink>

                        <NavLink to={'/otro'}
                            onClick={seleccion}
                        >
                            <i className="bi bi-rainbow"></i>
                            Otro
                        </NavLink>
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
                            <NavLink to={'/'} className={!buscado &&'activate'}
                                onClick={home}
                            >
                                <i className="bi bi-grid-1x2"></i>
                                DashBoard
                            </NavLink>
                            <NavLink to={'/ordenes'} onClick={seleccion}>
                                <i className="bi bi-cart3"></i>
                                Órdenes
                            </NavLink>
                            <NavLink to={'/productos'} onClick={seleccion}>
                                <i className="bi bi-car-front"></i>
                                Productos
                            </NavLink>
                            <NavLink to={'/ventas'} onClick={seleccion}>
                                <i className="bi bi-graph-up"></i>
                                Ventas
                            </NavLink>
                            <NavLink to={'/otro'} onClick={seleccion}>
                                <i className="bi bi-rainbow"></i>
                                Otro
                            </NavLink>
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