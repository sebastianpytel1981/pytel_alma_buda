
// se Pide escribir el nombre de la Marca con Prompt

let entrada = prompt ("Escribí, ALMA BUDA, el nombre de la mejor marca de yoga").toUpperCase ();

while (entrada != "ALMA BUDA" ) {

 alert ("El usuario ingresado es : " + entrada)

 entrada = prompt ("El Nombre es incorrecto, ingrese ALMA BUDA, el nombre de la mejor marca de indumentaria de yoga").toUpperCase ()

}

// Función de saludo
function bienvenido () {
           alert ("Te damos la bienvenida al mundo de las Prendas que Iluminan");

   }

bienvenido();


// consulta por prácticas de Yoga - uso de IF

let inc = prompt ("El ideal de clases de yoga semanales es 7, cuantas clases realizás semanalmente?")


 if (inc >0 && inc <= 7 ) {

     console.log ( "Excelente, Realizás " + (inc) + " clases de Yoga sobre 7 ideales")

} else if (inc > 7) {

    console.log ("Muy bien, superás la cantidad de clases por semana")

} else if (inc = 0) {
    console.log ("Te recomendamos que te inicies en el increíble mundo del Yoga con prendas de Alma Buda")

} else {

    console.log ("Te recomendamos que te inicies en el increíble mundo del Yoga con prendas de Alma Buda")
}



// función para comprar por primera vez con un descuento

function compra () {
    let precio = parseInt (prompt ("Ingrese precio del primer producto, con un descuento de bienvenida"))
    let impuesto = 1.21
    let descuento = 0.05
    let cantidad = parseInt (prompt ("Ingrese la cantidad del producto"))
    let compraPrecioTotal = precio * impuesto * cantidad - ((precio * cantidad)*descuento)
    console.log("El precio final de la compra es " + compraPrecioTotal)
}

compra();


// 2da compra - USO DE CLASS / CONSTRUCTOR

let impuesto = 0.21

    class Stock {

        constructor(nombreProd, cantidad, precio) {

        this.nombreProd = nombreProd;

        this.cantidad = cantidad;

        this.precio = precio;

        }

        getNombreProd1() {

        console.log (this.nombreProd);

        }

        getCantidad() {

        console.log (this.cantidad);

        }

        getPrecio() {

        console.log (this.precio);     }

        }

        const solicitar = () => {

        let nombreProd1 = prompt ("Ingrese el Nombre de la segunda prenda de Yoga a comprar");

        let cantidad = parseInt(prompt ("Ingrese la cantidad del producto solicitado"));

        let precio = parseFloat(prompt ("Ingrese el precio del producto"));

        const miProducto = new Stock(nombreProd1, cantidad, precio);

        console.log ( "El Nombre es:" ) + miProducto.getNombreProd1()

        console.log ( "La cantidad solicitada es:" ) + miProducto.getCantidad();

        console.log ( "El precio del producto es:" ) + miProducto.getPrecio();




        let cuotas = prompt ("Ingrese el número de cuotas, el precio en cuotas tiene un incremento de 10%")

        if (cuotas != 1) {
            let incrementoCuotas = 1.1

        console.log ("EL precio final del poducto , código " + nombreProd1 + ", es $" + ( cantidad * precio * impuesto * incrementoCuotas) );
        console.log ("El precio por cuota es " + ( cantidad * precio * impuesto * incrementoCuotas / cuotas))

        } else {
            console.log ("EL precio final del poducto, código " + nombreProd1 + ", es $" + ( cantidad * precio * impuesto) );
        }

        };

        solicitar();

        

        //Incorporación de Objetos


        const Prenda1 = {
            nombre: "Ohm",
            tipo: "remera",
            tela: "algodon",
            color: "negra",

        }
        
        console.log (Prenda1)
        console.log (Prenda1.nombre)
        console.log (Prenda1["tipo"])
        console.log (Prenda1.tela)
        
        Prenda1.nombre = "Kundalini",
        Prenda1.tipo = "pantalón",
        Prenda1.tela = "frizado",
        Prenda1.color = "tostado",
        
        console.log (Prenda1)
        console.log (Prenda1.nombre)
        console.log (Prenda1["tipo"])
        console.log (Prenda1.tela)
        
        function PrendasNuevas (nombre , tipo , tela , color) {
        
            this.nombre = nombre;
            this.tipo = tipo;
            this.tela = tela;
            this.color = color;
            this.hablar = function () {console.log ("Nueva prenda incorporada: " + this.nombre)}
    }
        
        const PrendasNuevas1 = new PrendasNuevas ("Hoddie Black" , "Buzo" , "Algodón" , "Negro" );
        const PrendasNuevas2 = new PrendasNuevas ("Lavanda" , "Pantalón" , "Frizado" , "Lavanda" );
        PrendasNuevas1.hablar ();
        PrendasNuevas2.hablar ();


//1. Se declara un array vacío para mostrar un nuevo array con 5 prendas a elección


const listaNombres = []; // array vacio
let cantidad = 3;  // hasta cuanto tiene que llenarse
//Empleo de do...while para cargar nombres en el array por prompt()

do{
 let entrada = prompt("Escriba el nombre de las 3 prendas en compra mayorista, dentro de este listado: Kundalini , Yoga cada día, Pants, White Lotto, Lavanda, Hoddie Black");
 listaNombres.push(entrada.toUpperCase());
 console.log(listaNombres.length);
}   while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["Este es el listado de prendas"]);

//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));
console.log(nuevaLista.join("\n"));

alert (((nuevaLista.length) - 1) + " prendas solicitadas")
let cant = (((nuevaLista.length) - 1) + " prendas solicitadas")
console.log (cant)



// agregar elementos al arrays y contar cuantos datos existen en el array

const miArray = [nuevaLista]

miArray.push (prompt ("Agregar un cuarto producto de temporada anterior, entre estas opciones: LOTUS, REMERA OHM y CHAKRA JOGUINETA").toUpperCase ())

console.log(miArray.length) 
console.log(miArray)

//INCLUDES, para ver si el pedido fué Lotus en las prendas se solicitaron

const miArray2 = [miArray , nuevaLista ];
console.log( miArray.includes ("LOTUS") ) // ⇒ true


// Se incorpora un nuevo class / constructor

class Producto {
    constructor(nombrePrenda, precio) {
    this.nombrePrenda = nombrePrenda.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
    }
    sumaIva() {
    this.precio = this.precio * 1.21;
    }
   }

   //Declaramos un array de productos para almacenar objetos, con su precio
   const productos = [];
   productos.push(new Producto("Ohm", "1255"));
   productos.push(new Producto("Remera", "700"));
   productos.push(new Producto("Pants", "504"));

   //Iteramos el array con for...of para modificarlos a todos

   for (const producto of productos) {
    producto.sumaIva(); 
}

    console.log(productos)

    