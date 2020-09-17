var numero = 1;

switch (numero){
    case 1:
        console.log("Soy uno!");
        break;
    case 2:
        console.log("Soy dos!");
        break;

    default:
      console.log("No soy ninguna de las opciones");
}

// Juego piedra papel o tijeras

piedra = 1;
papel = 2;
tijeras = 3;
user = piedra;
cpu = papel;

switch(user-cpu){
    case -2:
        console.log("Gana usuario");
        break;
    case -1:
        console.log("Gana cpu");
        break;
    case 1:
        console.log("Gana usuario");
        break;
    case 2:
        console.log("Gana cpu");
        break;
}


function juego(user, cpu) {
    switch (true){
      case user === cpu:
          console.log("Empate");
          break;
      case (user === 1 && cpu === 3) || (user === 2 && cpu === 1) || (user === 3 && cpu === 2):
          console.log("Gana el usuario");
          break;
      default:
          console.log("Gana la máquina");
    }
}
