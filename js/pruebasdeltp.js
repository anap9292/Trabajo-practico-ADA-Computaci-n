//array reutilizables
const vendedorasNombres = ["Ada", "Grace", "Hedy", "Sheryl","Frida","Martina"]

const ventas = [[1, new Date(2019, 1, 4), "Grace", "Centro", ["Monitor GPRS 3000", "Motherboard ASUS 1500"]], [2, new Date(2019, 0, 1), "Ada", "Centro", ["Monitor GPRS 3000", "Motherboard ASUS 1500"]], [3, new Date(2019, 0, 2), "Grace", "Caballito", ["Monitor ASC 543", "Motherboard MZI"]], [4, new Date(2019, 0, 10), "Ada", "Centro", ["Monitor ASC 543", "Motherboard ASUS 1200"]], [5, new Date(2019, 0, 12), "Grace", "Caballito", ["Monitor GPRS 3000", "Motherboard ASUS 1200"]]];
console.log(ventas)
const precios = [["Monitor GPRS 3000", 200], ['hola'], ["Motherboard ASUS 1500", 120], ["Monitor ASC 543", 250], ["Motherboard ASUS 1200", 100], ["Motherboard MZI", 30], ["HDD Toyiva", 90], ["HDD Wezter Dishital", 75], ["RAM Quinston", 110], ["RAM Quinston Fury", 230]];

const sucursal = ["Centro", "Caballito", "Adrogué","Berazategui","hola"]
/*-------------------------------------------Ventana Modal Cargar venta-------------*/



//cargar Vendedoras en modal NUEVA VENTA ok
let selectNuevaVenta = document.getElementById('selectnv')

for(let i=0; i<vendedorasNombres.length; i++){
    let optionNuevaVenta = document.createElement("OPTION")
    selectNuevaVenta.appendChild(optionNuevaVenta)
    optionNuevaVenta.innerText = `${vendedorasNombres[i]}` 
}

//cargar componentes en modal NUEVA VENTA ok 
//una funcion para para sumar los componentes y los precios.
const selectComponenteNV = document.getElementById('select-componente-nv')
const agregarComponentes=()=>{
    for (let i = 0; i < precios.length; i++) {
        const optionComponenteNV = document.createElement('option');
        selectComponenteNV.appendChild(optionComponenteNV);
        optionComponenteNV.innerText = `${precios[i][0]}`;
    }
}
agregarComponentes()


//cargar Sucursal en modal NUEVA VENTA ok

let selectSucursalNV = document.getElementById('select-sucursal-nv')

for(let i=0; i<sucursal.length; i++){
    let optionNV = document.createElement("OPTION")
    selectSucursalNV.appendChild(optionNV);
    optionNV.innerText=`${sucursal[i]}`
}

/*--------------botones*/

const btnCargarVenta = document.getElementById('btn-nueva-venta')
const modalVenta = document.querySelector('.modal-container-ventas')
const btnCerrarModalVenta = document.getElementById('cerrar-modal')

//abrir ventana

btnCargarVenta.addEventListener('click', ()=>{
    modalVenta.style.display = 'block'
})
//cerra ventana

btnCerrarModalVenta.addEventListener('click', ()=>{
    modalVenta.style.display = 'none'
})


//cerra con tecla escape
window.addEventListener('keydown',(e)=>{
     
      if(e.key === 'Escape' || e.key === 'Scape')
       { modalVenta.style.display='none' }
       return false 
})

//cargar venta
//no logro tomar el valor del option creado para poder imprimirlo en la tabla

/*-------------------------------------------------ventana modal editar venta*/
//botones ventana editar
const btnEditar = document.getElementById('abrir-editar')
const btnCerraEditar = document.getElementById('btn-cerrar-editar')
const modalEditar=document.querySelector('.modal-container-editar')
// boton cerrar editar
btnCerraEditar.addEventListener('click', ()=>{
    modalEditar.style.display='none'

})

window.addEventListener('keydown',(e)=>{
    console.log(e.key)
     if(e.key === 'Escape' || e.key === 'Scape')
      { modalEditar.style.display='none' }
      return false 
})
//boton abrir ventana editar

btnEditar.addEventListener('click',()=>{
    modalEditar.style.display='block'

})

//cargar elementos en ventana modal editar
//cargar Vendedoras ok
let selectEditar = document.getElementById('select-editar')
for(let i=0; i<vendedorasNombres.length; i++){
    let optionEditar = document.createElement("OPTION")
    selectEditar.appendChild(optionEditar)
    optionEditar.innerText = `${vendedorasNombres[i]}`
}

//una funcion para para sumar los componentes y los precios. ok
const componentesEdit=document.getElementById('componentes-edit')
const agregarCompEdit = ()=>{
    for (let i = 0; i < precios.length; i++) {
        const optioComp = document.createElement('option');
        componentesEdit.appendChild(optioComp);
        optioComp.innerText = `${precios[i][0]}`;
}
}
agregarCompEdit()

//agregar sucursales a la ventana editar ventas. ok
let selectSucursalEditVenta = document.getElementById('select-sucursal-editar')

for(let i=0; i<sucursal.length; i++){
    let optionSucursal = document.createElement("OPTION")
    selectSucursalEditVenta.appendChild(optionSucursal);
    optionSucursal.innerText=`${sucursal[i]}`
}