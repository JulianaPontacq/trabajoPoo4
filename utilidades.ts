import { Estudiante } from "./estudiante";
import { Curso } from "./curso";
import { Profesor } from "./profesor";

export function imprimirMensaje(mensaje: string): void {
  console.log(mensaje);
}

export function buscarEstudiante(nombre: string, estudiantes: Estudiante[]): Estudiante | undefined {
  return estudiantes.find(estudiante => estudiante.nombre.toLowerCase() === nombre.toLowerCase());
}

export function listarEstudiantes(estudiantes: Estudiante[]): void {
  estudiantes.forEach(estudiante => imprimirMensaje(`Estudiante: ${estudiante.nombre}, Curso: ${estudiante.curso}`));
}

export function listarCursos(cursos: Curso[]): void {
  cursos.forEach(curso => imprimirMensaje(`Curso: ${curso.nombre}, Profesor: ${curso.responsable.nombre}`));
}

export function listarProfesores(profesores: Profesor[]): void {
  profesores.forEach(profesor => imprimirMensaje(`Profesor: ${profesor.nombre}, Especialidad: ${profesor.especialidad}`));
}
