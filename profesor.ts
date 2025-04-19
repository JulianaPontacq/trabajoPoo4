import { Persona } from "./persona";

export class Profesor extends Persona {
  constructor(nombre: string, edad: number, public especialidad: string) {
    super(nombre, edad);
  }

  presentarse(): string {
    return `Hola, soy ${this.nombre}, profesor de ${this.especialidad}.`;
  }
}
