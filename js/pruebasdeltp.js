/*Ventana Modal Cargar venta*/
//cargar Vendedoras
let select = document.getElementById('select')
const arr = ["Ada", "Grace", "Hedy", "Sheryl","Frida","Martina"]
for(let i=0; i<arr.length; i++){
    let option = document.createElement("OPTION")
    txt = document.createTextNode(arr[i])
    option.appendChild(txt)
    select.insertBefore(option,select.lastChild)
}
//cargar componentes
let select1 = document.getElementById('select1')
const componente = ["Monitor GPRS 3000", "Motherboard ASUS 1500", "Monitor ASC 543", "Motherboard ASUS 1200","Motherboard MZI","HDD Toyiva"]
for(let i=0; i<componente.length; i++){
    let option1 = document.createElement("OPTION")
    txt1 = document.createTextNode(componente[i])
    option1.appendChild(txt1)
    select1.insertBefore(option1,select1.lastChild)
}
//cargar Sucursal
let select2 = document.getElementById('select2')
const sucursal = ["Centro", "Caballito", "Adrogué","Berazategui"]
for(let i=0; i<sucursal.length; i++){
    let option2 = document.createElement("OPTION")
    txt2 = document.createTextNode(sucursal[i])
    option2.appendChild(txt2)
    select2.insertBefore(option2,select2.lastChild)
}

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

/*ventana modal editar venta*/
const btnEditar = document.getElementById('abrir-editar')
const btnCerraEditar = document.getElementById('btn-cerrar-editar')
const modalEditar=document.querySelector('.modal-container-editar')
//cerrar editar
btnCerraEditar.addEventListener('click', ()=>{
    modalEditar.style.display='none'

})

window.addEventListener('keydown',(e)=>{
    console.log(e.key)
     if(e.key === 'Escape' || e.key === 'Scape')
      { modalEditar.style.display='none' }
      return false 
})
//abrir ventana editar

btnEditar.addEventListener('click',()=>{
    modalEditar.style.display='block'

})

//cargar elementos en ventana modal editar
//cargar Vendedoras
let selectEditar = document.getElementById('select-editar')
const arrayEditar = ["Ada", "Grace", "Hedy", "Sheryl","Frida","Martina"]
for(let i=0; i<arrayEditar.length; i++){
    let optionEditar = document.createElement("OPTION")
    let texto= innerHTML.arrayEditar[i]
    selectEditar.appendChild(texto)
}
