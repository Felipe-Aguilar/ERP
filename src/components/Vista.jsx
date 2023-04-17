import { Routes, Route } from "react-router-dom";

import BarraSuperior from "./BarraSuperior";
import DashBoard from "./DashBoard";
import Esqueleto from "./Esqueleto";

const Vista = () => {
    return ( 
        <div className="col-12 col-lg-10 p-0">
            <BarraSuperior />

            <div className="p-3 p-lg-5">

                <Routes>
                    <Route path="/" element={<DashBoard />}/>
                    <Route path='*' element={<DashBoard />}/>

                    <Route path='/ordenes' element={<Esqueleto />}/>
                    <Route path='/productos' element={<Esqueleto />}/>
                    <Route path='/ventas' element={<Esqueleto />}/>
                    <Route path='/otro' element={<Esqueleto />}/>
                    
                </Routes>
            </div>
        </div>
    );
}

export default Vista;