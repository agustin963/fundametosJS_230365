// cometarios de una sola linea
/* 
   cometariosmultilinea
*/
var miNombre = "Agsutin J.";
var misApellidos ;
var miEdad = 32 ;

console.warn("----- Declaracion de variables usando VAR");
console.log("Itentando leer las variables", miNombre,misApellidos);

misApellidos = "Jimenez Castillo";
console.log("Ya que ambas fueron inicializadas vuelbo a intentar leerlas", miNombre,misApellidos);

 // una variable  puede cambiar de valor en el proceso de ejecucion del programa 
cosnole.warn("---- Declaracion de variables del tipo constante unsando  CONST");
const miUniversidad = "Universidad Tecnologica de Xicotepec de Juarez";
const miMatricula = "230365";

console.log("Hola,",miNombre,"",misApellidos," se que estudias actualmente en: "
,miUniversidad,"aignaron la matricula:",miMatricula,"y tienes una edad de :",miEdad,"años.");

console.log("Analizamos los datos puedo deducir que:")
console.log("miNombre es del tipo:", typeof(miNombre))
console.log("misApellidos es del tipo:", typeof(misApellidos))
console.log("miUniversidad es del tipo:", typeof(miUniversidad))
console.log("miMatricula es del tipo:", typeof(miMatricula))
console.log("miEdad es del tipo:", typeof(miEdad))

let miFechaNacimiento = "2005-03-04"
let miColorFavorito;

console.warn("----- Declaracion de variables usando LET")
console.log("Genial , te voy conociendo menjor, ahora se que naciste el:", miFechaNacimiento
    ," y tu color favorito es es: mmmmmmmmmmm dejame pensar....") 
miColorFavorito = "Negro";
console.log(`creo que es ${miColorFavorito} ,le atine`)
console.log("Analizando los datos puede deducir que:")
console.log("miColoFavorito es de tipo ", typeof(miColorFavorito))
console.log("miFechaDeNacimiento es de tipo ", typeof(miFechaNacimiento))