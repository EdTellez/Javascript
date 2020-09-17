
var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    // Se usa shift para ir quitando elementos de la lista y así llega a 0 elementos y rompe la condición
    var estudiante = estudiantes.shift();

    saludarEstudiantes(estudiante);
}