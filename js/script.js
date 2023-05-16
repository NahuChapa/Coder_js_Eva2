// array

const zapatillas = [

  { id: 1, nombre: "Nike", precio: 81000},

  { id: 2, nombre: "Jordan", precio: 99000},

  { id: 3, nombre: "Adidas", precio: 61000},

  { id: 4, nombre: "Converse", precio: 27000},

  { id: 5, nombre: "Vans", precio: 60000},

  { id: 6, nombre: "Pumas", precio: 60000},
];

//funciones

function modelo(nombre, precio) {

  this.id = zapatillas.length + 1;

  this.nombre = nombre;

  this.precio = parseFloat(precio);

}

//funciones de filtrado

console.log(zapatillas);

function buscarPorNombre(arr, filtro){
    
  const encontrado= arr.find((modelo)=>{

      return modelo.nombre.includes(filtro);   

    })

    return encontrado;
}

//filtrado

function filtrarPorNombre(arr, filtro){

  return arr.filter((modelo)=>{

    return modelo.nombre.includes(filtro);   

  })

}

function filtrarPorPrecio(arr, filtro){

  return arr.filter((modelo)=>{

    return modelo.precio <= parseFloat(filtro);   

  })
  
}

let buscar = prompt("Ingresa el precio del servicio")

const filtrado = filtrarPorPrecio(zapatillas,buscar )

console.log(filtrado); 

const masBaratoTodavia= filtrarPorPrecio(filtrado, 4000)

console.log(masBaratoTodavia);

const carrito=[]
