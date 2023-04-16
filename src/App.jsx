import SideBar from "./components/SideBar";
import Vista from "./components/Vista";

import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return ( 
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <Vista />
      </div>
    </div>
  );
}

export default App;