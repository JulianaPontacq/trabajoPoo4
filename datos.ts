import { Profesor } from "./profesor";
import { Estudiante } from "./estudiante";
import { Curso } from "./curso";

export const profesores: Profesor[] = [
  new Profesor("Ana", 40, "Desarrollo Web"),
  new Profesor("Luis", 35, "Bases de Datos"),
  new Profesor("Clara", 45, "Diseño UX/UI"),
  new Profesor("Javier", 38, "Seguridad Informática"),
  new Profesor("Sofía", 29, "Inteligencia Artificial"),
];

export const cursos: Curso[] = [
  new Curso("Full Stack Development", profesores[0]),
  new Curso("Administración de Bases de Datos", profesores[1]),
  new Curso("Diseño UX/UI", profesores[2]),
  new Curso("Seguridad Informática", profesores[3]),
  new Curso("Introducción a la IA", profesores[4]),
];

export const estudiantes: Estudiante[] = [
  new Estudiante("Carlos", 22, "Full Stack Development"),
  new Estudiante("Lucía", 25, "Full Stack Development"),
  new Estudiante("Pedro", 30, "Administración de Bases de Datos"),
  new Estudiante("Martina", 27, "Diseño UX/UI"),
  new Estudiante("Gabriel", 24, "Seguridad Informática"),
];
