class InventarioViejo {
  private items: any[] = [];

  public agregarItem(item: any): void {
    this.items.push(item);
  }

  public obtenerItems(): any[] {
    return this.items;
  }
}

interface Inventario {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): any[];
}

class AdaptadorInventario implements Inventario {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    const equipo = { nombre, tipo, estado };
    this.inventarioViejo.agregarItem(equipo);
  }

  public listarEquipos(): any[] {
    return this.inventarioViejo.obtenerItems();
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]