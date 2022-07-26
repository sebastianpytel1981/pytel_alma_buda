
let entrada = prompt ("Escribí, ALMA BUDA, el nombre de la mejor marca de yoga").toUpperCase ();

while (entrada != "ALMA BUDA" ) {

 alert ("El usuario ingresado es : " + entrada)

 entrada = prompt ("El Nombre es incorrecto, ingrese ALMA BUDA, el nombre de la mejor marca de indumentaria de yoga").toUpperCase ()

} 

function bienvenido () { 
           alert ("Te damos la bienvenida al mundo de las Prendas que Iluminan");

   }
    
bienvenido();


// consulta por prácticas de Yoga

let inc = prompt ("El ideal de clases de yoga semanales es 7, cuantas clases realizás semanalmente?")
// for ( inc ; inc <= 7 ; inc++)

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


// 2da compra

let impuesto = 0.21

    class Stock {

        constructor(codigo1, cantidad, precio) {
        
        this.codigo1 = codigo1;
        
        this.cantidad = cantidad;
        
        this.precio = precio;
        
        }
        
        getCodigo1() {
        
        console.log (this.codigo1);
        
        }
        
        getCantidad() {
        
        console.log (this.cantidad);
        
        }
        
        getPrecio() {
        
        console.log (this.precio);
        
        }

        }
        
        const solicitar = () => {
        
        let codigo1 = prompt ("Ingrese el código de la segunda prenda de Yoga a comprar"); 
        
        let cantidad = parseInt(prompt ("Ingrese la cantidad del producto solicitado"));
        
        let precio = parseFloat(prompt ("Ingrese el precio del producto"));
        
        const miProducto = new Stock(codigo1, cantidad, precio);
        
        console.log ( "El codigo es:" ) + miProducto.getCodigo1()
        
        console.log ( "La cantidad solicitada es:" ) + miProducto.getCantidad();
        
        console.log ( "El precio del producto es:" ) + miProducto.getPrecio();

     
        
        let cuotas = prompt ("Ingrese el número de cuotas, el precio en cuotas tiene un incremento de 10%")
        
        if (cuotas != 1) {
            let incrementoCuotas = 1.1

        console.log ("EL precio final del poducto , código " + codigo1 + ", es $" + ( cantidad * precio * impuesto * incrementoCuotas) );
        console.log ("El precio por cuota es " + ( cantidad * precio * impuesto * incrementoCuotas / cuotas))

        } else { 
            console.log ("EL precio final del poducto, código " + codigo1 + ", es $" + ( cantidad * precio * impuesto) );
        }

        

        };
        
        solicitar();

        let cuotas = 1

        if (cuotas != 1) {



        }