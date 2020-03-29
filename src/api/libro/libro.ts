export class Libro {
  id: number;
  titulo: String;
  autor: String;
  fecha: String;

  constructor(id: number = 0, titulo: String = '', autor: String = '', fecha: String = ''){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.fecha = fecha;
  }
}
