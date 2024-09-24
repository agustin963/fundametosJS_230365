
const bg ="linear-gradient(11deg,rgbs(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console =`backgroun:${bg};color:white; border-radius : 6px;padding:4px;font-sixe:1.0rem`


//Personalizacion de las salidas a cosnola 
console.warn("pracrica 05 : repaso de obejetos en Java Script");

//cariables independientes
console.log("%c1.- Variables Independientes", style_console);

//declaramos valores independientes

let Producto_Nombre="Computadora Gammer Laptop 17\"";
let Producto_Marca="ASUS"
let Producto_Modelo="TUF 17"
let Producto_Precio=15749.50;
let Producto_Disponible=true;
let Producto_SKU=Symbol("TUF707VV-HX221W")
let Producto_Stock=15
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categorias=["Electronicos","Computacion","Gamming","Promociones de Buen Fin","Mejor Valorados"];

//Accedemos a los valores de las caracteristicas del producto de manera independiente

console.log(`Los datos del producto son: \n
    Nombre: ${Producto_Nombre} , Tipo de dato <${typeof(Producto_Nombre)}>
    Nombre: ${Producto_Marca}, Tipo de dato <${typeof(Producto_Marca)}>
    Nombre: ${Producto_Modelo}, Tipo de dato <${typeof(Producto_Modelo)}>
    Nombre: ${Producto_Precio}, Tipo de dato <${typeof(Producto_Precio)}>
    Nombre: ${Producto_Disponible}, Tipo de dato <${typeof(Producto_Disponible)}>
    
    Nombre: ${Producto_Stock}, Tipo de dato <${typeof(Producto_Stock)}>
    Nombre: ${Producto_Imagen}, Tipo de dato <${typeof(Producto_Imagen)}>
    Nombre: ${Producto_Barcode}, Tipo de dato <${typeof(Producto_Barcode)}>
    Nombre: ${Producto_Categorias}, Tipo de dato <${typeof(Producto_Categorias)}>
    `);

    console.log("en el caso del SKI al ser un Symbol , no se puede conectar a la cadena de imnpresion anterior  ")
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));



    //Ahora lo declramos como un objeto
    console.log("%c2.-Objeto",style_console);
    let Producto =
    {
        Nombre:"tenis Depórtivos",
        Marca: "Nike",
        Modelo:"Jordan '24",
        Precio: 3361.25,
        Disponibilidad: false,
        Stock: 0,
        SKU:"DZ5485-612",
        Imagen: ".....",
        Barcode:null,
        Categorias:["Deportes","Juvenil"]



    }

    //Ahora leemos el obejto completo
    console.table(Producto);

    //Para acceder a las propiedades del obejeto utlizamos un "." y el nombre de la propiedad a leer.

    console.log("Accediendo a propiedades especificas del producto")
    console.log(`Nombre completo del producto : ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
    console.log(`Precio.${Producto.Precio}`)
    if(Producto.Disponibilidad == 0)
        console.log('Estatus:Agotado')
    else
    console.log(`Estatus: ${Producto_Stock} unidades disponibles`)





    console.log("%c3.- Destructuracion de Objeto",style_console);
    let Producto2 =
    {
        clave:230365,
        Nombre:"Gafas para el sol",
        Marca: "Banana",
        Modelo:"alaska",
        Precio: 3500.25,
        Disponibilidad: false,
        Stock: 5,
        SKU:"AB3485-612",
        Imagen: null,
        Barcode:null,
        Categorias:["Gafas","Sol"]



    }

    let comprador=
    {
        Clave: 230365,
        Nombre: "Agustin",
        Apellido:"Jimenez ",
        Tipo:"Frecuente",
        Correo:"230365@utxicotepec.edu.mx",
        PaisOrigen:"Mexico",
        SaldoActual:14000.00
    }

    let pedido=
    { 
        Producto_clave:230365,
        Comprador_clave:230365,
        Cantidad: 2,
        Estatus:"Carrito de compras",
        TipoPago:"Tarjeta de Credito"

    }


    // En base a los 3 obejetos necesitamos calcular el costo de la compra y si alcanza con el saldo a favor 

    let{ Precio: producto_Precio} = Producto2;
    let{Cantidad:pedido_Cantidad}= pedido;
    let{SaldoActual:Cliente_SaldoActual} = comprador;
    let Costo_Compra = Producto_Precio * pedido_Cantidad;

    console.log(`El cliente ha agregado a su carrito de compras ${pedido_Cantidad} unidades, con un costo total de:${Costo_Compra}`);
    if(Costo_Compra< Cliente_SaldoActual)
        console.log("el cliente tiene saldo suficiente");

    // Actualizar el valor de los obejetos 
    console.log("c%.- Actualizamos los valores de las propiedades de un obejeto", style_console);

    console.log(`El obejto actualmente tiene los siguinetes valores`) 
    console.log(JSON.stringify(Producto2, null,2));
    // convierte el obejto  a una cadena para evitar probleas con la referencia 
    console.log(`Por cuentiones de inlfacion el costo del producto ha cambiado y debe ser actualizado.... de $6,829 a $g,915.50`)

    // para modificar el valor de un obejto basta con igualr el numero del valor de la propiedad deseada 

    Producto2.Precio=6915.50;
    console.log(`los nuevos valores de producto son: `)
    console.log(Producto2)   

    //¿Puedo cambiar no solo el valor si n o el irpo de un dato en JavaScript?

    console.log('--------------------------------------------------------------------------------------------------------')
    console.log(`El obejto actualmente tiene los siguinetes valores  ${Producto2}`)
    let tipoDisponibilidad =typeof(Producto2.Disponibilidad)
    console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
    console.log (JSON.stringify(Producto2, null ,2));
    Producto2.Disponibilidad="Si";
    let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
    console.log(Producto2)   
    console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)

    // Agregar nuevas propiedades al obejeto
    console.log("%c5.- Agregar nuevas propiedades al objeto" , style_console);
    // Para agregar una nueva propiedad utilizaremos el nombre del obejeto los corchetes [] y el nuevo de la propiedad con su valor por defecto.
    console.log("los datos del comprador son ")
    console.table(comprador)
    comprador['Direccion']="AV.Benito Juarez No.1525 ,interior 4D, Xicotepec de Juarez, Puebla,Mexico"
    comprador['Tipo']="Nuevo Cliente"
    comprador['ActividadReciente']= true
    comprador['TotalCompras']=3516.25
    console.log("Despues de haber sido actualizado")
    console.table(comprador)




    console.log("%c6.- Eliminar propiedades existentes de un obejeto " ,style_console); 