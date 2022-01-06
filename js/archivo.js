const modalContainer = document.getElementById('modal-container')//primer modal
const ventaVenta = document.getElementById('ventana-venta')
const cerrarModal = document.getElementById('cancelar')

const modalContainerlEditar = document.getElementById('modal-general')
const editarVenta = document.getElementById('modal-editar')
const cerrarModalEditar = document.getElementById('cancelar1')

const modalElimar = document.getElementById('general-eliminar')
const ventanaEliminar = document.getElementById('modal-eliminar')
const btnCancelar2 = document.getElementById('cancelar2')



const btnNuevaVenta = document.getElementById('btnnuevaVenta') //btn nueva venta 
const btnEditarVenta = document.getElementById('editar-venta') //bt editar
const btnEliminar = document.querySelector('.fa-trash-alt')

btnNuevaVenta.addEventListener('click', ()=>{
    modalContainer.style.display = 'block'
    
})

//cerrar modal de nueva venta
cerrarModal.addEventListener('click', ()=>{
    modalContainer.style.display = 'none'
})

//abrir modal de nueva venta


/*editar venta No funciona*/ /*

btnEditarVenta.addEventListener('click', ()=>{

    modalContainerlEditar.style.display = 'block'
    editarVenta.style.display='block'
})
*/

//Agregar ventas
const vendedoras= ["Ada", "Grace", "Hedy", "Sheryl"]
