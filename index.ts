import { cursos, estudiantes, profesores } from "./datos";
import { imprimirMensaje, listarCursos, listarEstudiantes, listarProfesores, buscarEstudiante } from "./utilidades";

console.log("Lista de Cursos:");
listarCursos(cursos);

console.log("\nLista de Estudiantes:");
listarEstudiantes(estudiantes);

console.log("\nLista de Profesores:");
listarProfesores(profesores);

// Buscar un estudiante por nombre
const estudianteBuscado = buscarEstudiante("Carlos", estudiantes);
if (estudianteBuscado) {
  imprimirMensaje(`Estudiante encontrado: ${estudianteBuscado.presentarse()}`);
} else {
  imprimirMensaje("Estudiante no encontrado.");
}
