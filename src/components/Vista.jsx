import BarraSuperior from "./BarraSuperior";
import DashBoard from "./DashBoard";

const Vista = () => {
    return ( 
        <div className="col-12 col-lg-10 p-0">
            <BarraSuperior />

            <div className="p-5">
                <DashBoard />
            </div>
        </div>
    );
}

export default Vista;