import { Persona } from "./persona";

export class Estudiante extends Persona {
  constructor(nombre: string, edad: number, public curso: string) {
    super(nombre, edad);
  }

  presentarse(): string {
    return `Hola, soy ${this.nombre}, estudiante de ${this.curso}.`;
  }
}
