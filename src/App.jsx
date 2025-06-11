import { Ejercicio01 } from "./components/Ejercicio01"

import { BotonGeneral } from "./components/utils/BotonGeneral"
import { BotonCerrarSesion } from "./components/utils/BotonCerrarSesion"
import { BotonIniccioSeccion } from "./components/utils/BotonIniccioSeccion"
import Ejercicio02 from "./components/Ejercicio02"



function App() {

  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-2 text-center alert alert-success">
            hola utsh 
          </h1>
        </div>
      </div>
     <Ejercicio01/>
     <BotonGeneral/>
        <div className="recuadro-rosa d-flex flex-column flex-md-row justify-content-between align-items-center w-100 mt-5">
        <BotonIniccioSeccion />
        <BotonCerrarSesion className="mt-3 mt-md-0"/>
        
        </div>
        <Ejercicio02/>  
        </div>
    </>
  )
}

export default App
