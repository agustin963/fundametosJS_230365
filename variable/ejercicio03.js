
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`


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





    console.log("%c3.- Destructuracion de Objeto", style_console);
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
        ID:5816,
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



    // Eliminar propiedades existentes de un Objeto
    console.log( "%c6.- Eliminar propiedades existentes de un Objeto", style_console );
    console.log("La estructura y valores del objeto PEDIDO son previos a la modificación: ")
    console.table(pedido)
    delete pedido.TipoPago
    console.log("Después de la modifcación...")
    console.table(pedido)







    console.log("%c7.- Metodos  para controlar la mutabilidad de los objetos, congelacion(FREEZE)",style_console);
     
    console.log(`La estructura catual del obejeto comprador es:`)
    console.table(comprador)
    Object.freeze(comprador)
    //Intentamos agregar , eliminar o modificar los valores de sus propiedades 
    comprador.FechaUltimaCompra="05/09/2024 10:15:25"
    delete comprador.Tipo;
    comprador.Direccion="Calle 16 de septiembre #102, Col. Manantiales, Huachinango, Puebla , Mexico";
    console.log('Verificamos si se realizamos los cambios en el objeto comprador ')
    console.table(comprador)

    console.log("%c8 .- Metodos para controlador la mutabilidad de los Objetos, Sellado(SEAL)", style_console);
    // Sin embargo, en el casso que debamos poder podificar los valores de las propiedades del Objeto, pero no su estructura , usaremos SEAL

    console.log("Objetos antes de ser modificado ")
    console.log(pedido)
    //Sellamos el objeto
    Object.seal(pedido)
    // Intentamos modificar su estructura
    pedido['fechaPedido']="25/09/2024 11:05:03"
    delete pedido['Cantidad']
    console.log('Verificamos si se realizaran los cambios en el objeto PEDIDO')
    console.log(pedido)
    //Ahora intentamos modificar el valor de las propiedades 
    pedido.Cantidad=5
    console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO:')
    console.table(pedido)

    // Desestructuracion de 2 o mas objetos
     // DESTRUCTURACION DE 2 O MAS OBJETOS
     console.log("%c9-. Destructuración de 2 o más Objetos" ,style_console);

     let {Precio: productoPrecio, Marca: productoMarca} = Producto
     let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = comprador
 
     // TRANSFORMAR VALORES CUANTITATIVOS EN CUALITATIVOS
 
     if(productoPrecio>200)
         productoPrecio = "Caro"
 
     else
         productoPrecio = "Barato"
 
      if(clienteSaldo> 0)
         clienteSaldo = "A favor"
 
     else if (clienteSaldo <0)
         clienteSaldo = "En contra"
 
     else 
         clienteSaldo = "Sin deuda"
 
     // TRANSFORMAR VALORES CUALITATIVOS EN CUANTITATIVOS
 
     let clienteNivel;
 
     if(clienteTipo == "Premium")
         clienteNivel = 1
     if(clienteTipo == "Premium")
         clienteNivel = 2
      if(clienteTipo == "No identificado")
         clienteNivel = 3
 
     // CLASIFICAMOS AL CLIENTE POR SU PAIS DE ORIGEN
     if (clientePais == "México")
         clientePais = "Nacional"
     else
         clientePais = "Extranjero"
 
     // OLE - OBJECT Literal ENHACEMENT
     let datosClientePromociones = {clienteCorreo, clientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio}
 
     // EL NUEVO OBJECTO QUE CREAMOS SERIA UN EJEMPLO DE LA INFORMACION QUE ENVIAREMOS AL AREA DE MARKETING PARA LA DIFUSION DE PROMPCIONES
     console.log("Los datos del cliente y sus de compra son:")
     console.table(datosClientePromociones)
 
     // OPERACIONES SOBRE OBJETOS
     // UNION DE OBJETOS


//Operaciones sobre objetos
console.log("%c10-. Unión de objetos usando el metodo de asignación (ASSING", style_console);

    console.log("Imprimimos la estructura y valores del Objecto PRODUCTO")
    console.table(Producto);

    console.log("Imprimimos la estructura y valores del Objecto PEDIDO")
    console.table(pedido);
     
    // SUPUNIENDO QUE EL USUARIO YA REALIZO EL PAGO EL PEDIDO SE CONVERTRA EN UNA VENTA QUE REQUIERE INFORMACION DE AMBOS OBJECTOS
    // IMPORTANTE: ASSING NO SOLO PERMITE LA FUSION DE DOS O MAS 

    const Venta = Object.assign(Producto, pedido);
    console.log("Consultamos este nuevo objeto VENTA ")
    console.table(Venta)

    // UNION DE OBJETOS USANDO SPEAD OPERATOR PARA EVITAR LA PERDIDA DE INFORMACION CON OBJETOS QUE CONCATENEN EL MISMO NOMBRE EN SUS PROPIEDADES
    console.log("%c11.- Unión de Objetos usando SPEAD OPERATOR (...)", style_console);
     // PARCHAMOS EL ERROR, REINICIANDO EL VALOR DEL PRODUCTO ID AL ORIGINAL 
     //PRODUCTO.ID=100;

     console.table(Producto)
     console.table(comprador)
     console.table(pedido)

     const Venta2 =
     {
        Producto: {...Producto},
        comprador: {...comprador},
        pedido: {...pedido}
     }

     console.log("FUusionamos los 3 Objetos en uno nuevo, sin perdida de información")
     console.log(Venta2)
     console.table(Venta2)

 

    console.log("%c12.- Mutabilidad POST Unión de Objetos", style_console);


    //VAMOS A VERFIFICAR EL STATUS DE MUTABLIDIDAD DE LOS OBJETOS

    console.log("Vamos a verificar la mutabilidad del objeto PEDIDOO")
    console.log(`Esta el objeto de Pedido Congelado?: ${Object.isFrozen(pedido)}`);
    console.log(`Esta el objeto de Pedido Sellado?: ${Object.isSealed(pedido)}`);

    console.log("Vamos a verificar la mutabilidad del objeto COMPRADOR")
    console.log(`Esta el objeto de Pedido Congelado?: ${Object.isFrozen(comprador)}`);
    console.log(`Esta el objeto de Pedido Sellado?: ${Object.isSealed(comprador)}`);


    console.log("Vamos a verificar la mutabilidad del objeto PRODUCTO")
    console.log(`Esta el objeto de Pedido Congelado?: ${Object.isFrozen(Producto)}`);
    console.log(`Esta el objeto de Pedido Sellado?: ${Object.isSealed(Producto)}`);

    // MODIFICAMOS LA ESTRUCTURA DEL PRODUCTO, AGREGANDO UNA NUEVA PROPIEDAD

    Producto[`isLegacy`] = false
    console.log(Producto)
    console.log(Venta2);
    


