export abstract class Persona {
    protected constructor(public nombre: string, public edad: number) {}
  
    abstract presentarse(): string;
  }
  