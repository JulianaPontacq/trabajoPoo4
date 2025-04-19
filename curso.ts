import { Profesor } from "./profesor";
import { Estudiante } from "./estudiante";

export class Curso {
  constructor(
    public nombre: string,
    public responsable: Profesor,
    public estudiantes: Estudiante[] = []
  ) {}

  agregarEstudiante(estudiante: Estudiante): void {
    this.estudiantes.push(estudiante);
  }

  listarInformacion(): string {
    const detallesEstudiantes = this.estudiantes.map(e => e.presentarse()).join("\n");
    return `Curso: ${this.nombre}\nResponsable: ${this.responsable.presentarse()}\nEstudiantes:\n${detallesEstudiantes}`;
  }
}
