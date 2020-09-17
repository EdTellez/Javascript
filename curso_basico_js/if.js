edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}


// operador terniario: If y else en una misma linea
// Sintaxis: condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno"



// Piedra, papel o tijera
var piedra = "piedra";
var papel = "papel";
var tijera = "tijeras";

var winner = function(user, cpu){
  if (user != cpu){
      if( user === piedra && cpu === tijera ){
        console.log("Gana el usuario con " + user);
      } else if( user === papel && cpu === piedra){
        console.log("Gana el usuario con " + user);
      } else if( user === tijera && cpu === papel){
        wiconsole.log("Gana el usuario con " + user);
      }else{
        console.log("Gana el CPU con " + cpu);
      }
  } else {
      console.log("Es un empate");
  }
}

winner("piedra", "tijeras");
