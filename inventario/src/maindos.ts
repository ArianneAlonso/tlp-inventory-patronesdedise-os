interface Equipo {
  detalles(): string;
}

class Notebook implements Equipo {
  constructor(
    private nombre: string,
    private ram: string,
    private procesador: string
  ) {}

  detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop implements Equipo {
  constructor(
    private nombre: string,
    private ram: string,
    private procesador: string
  ) {}

  detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor implements Equipo {
  constructor(
    private nombre: string,
    private ram: string,
    private procesador: string
  ) {}

  detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  public crearEquipo(
    __tipo: string,
    nombre: string,
    ram: string,
    procesador: string
  ): Equipo {
    switch (__tipo.toLowerCase()) {
      case "notebook":
        return new Notebook(nombre, ram, procesador);
      case "desktop":
        return new Desktop(nombre, ram, procesador);
      case "servidor":
        return new Servidor(nombre, ram, procesador);
      default:
        throw new Error(`Tipo de equipo no reconocido: ${__tipo}`);
    }
  }
}

const factory = new EquipoFactory();
const equipo1 = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(equipo1.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7
