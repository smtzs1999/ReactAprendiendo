const Ejercicio02 = () => {
// LOGICA DE COMPONENTE SIEMPRE FUERA DE RETURN 
// VARIABLE - CONTANTES
// 1-.Variable -constatante
// 2-.Hooks
// 3-.Funciones 
const nombreProducto = 'Smart TV 90"';

function agregarACarritoCompras (){
    console.log('El producto: ',nombreProducto ,"Se agrego al carrito");
    
}
function eliminarDeCarrito(){
    console.log('Se elimino del carrito el procucto',nombreProducto);
    
}

  return (
    <>
    <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio 2 - Boton y Funciones
            </h2>
            <hr/>
        </div>
        <button className="w-25 btn btn-primary" onClick={agregarACarritoCompras}>

            <i class="bi bi-cart-check-fill"></i><span className="ms-2">Agregar Articulo

            </span>
        </button>
        <button className="w-25 btn btn-danger" onClick={eliminarDeCarrito}>
            <i class="bi bi-backspace-fill"></i><span className="ms-2"></span>Eliminar Producto
        </button>
    </div>
    </>
  )
}

export default Ejercicio02

