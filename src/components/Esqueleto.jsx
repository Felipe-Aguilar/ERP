const Esqueleto = () => {
    return ( 
        <div className="erp-cuerpo-contenedor">
            <div className="esqueleto">

                <div className="esqueleto-div w-25"></div>

                <div className="d-flex justify-content-start mt-5" style={{gap: '20px'}}>
                    <div className="esqueleto-div w-25"></div>
                    <div className="esqueleto-div w-50"></div>
                </div>

                <div className="d-flex justify-content-between mt-5" style={{gap: '20px'}}>
                    <div className="esqueleto-div w-25"></div>
                    <div className="esqueleto-div w-25"></div>
                    <div className="esqueleto-div w-25"></div>
                    <div className="esqueleto-div w-25"></div>
                </div>

                <div className="d-flex justify-content-start mt-5" style={{gap: '20px'}}>
                    <div className="esqueleto-div w-25"></div>
                    <div className="esqueleto-div w-25"></div>
                    <div className="esqueleto-div w-25"></div>
                </div>

                <div className="d-flex justify-content-start mt-5" style={{gap: '20px'}}>
                    <div className="esqueleto-div w-50 grande"></div>
                    <div className="esqueleto-div w-50 grande"></div>
                </div>

                <div className="d-flex justify-content-start mt-5" style={{gap: '20px'}}>
                    <div className="esqueleto-div w-50"></div>
                    <div className="esqueleto-div w-25"></div>
                </div>

            </div>
        </div>
    );
}

export default Esqueleto;