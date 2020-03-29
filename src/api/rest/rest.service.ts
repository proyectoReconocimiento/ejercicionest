import { Logger, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Libro } from '../libro/libro';

@Injectable()
export class RestService {
  libro : Libro[];
  private readonly logger = new Logger(RestService.name);

  constructor(@InjectModel('Libro') private readonly modelo: Model<Libro>) {
    this.libro = [];

  }

  async findAll(): Promise<Libro[]> {
    const promesa = this.modelo.find().exec();
    this.logger.log(promesa);
    return promesa;
  }

  async create(lib: Libro): Promise<Libro> {
    const createdLibro = new this.modelo(lib);
    return await createdLibro.save();
  }

  getLibros() : Libro[] {
    return this.libro;
  }

  addLibro(l : Libro){
    this.libro.push(l);
  }

  getElementById(id: number): Libro {
    let ret: Libro;
    ret = this.libro.find(value => value.id == id);
    this.logger.log('ret:' + ret);
    if (ret === undefined) {
      return new Libro();
    }
    return  ret;
  }

  async findById(id: string): Promise<Libro> {
    return await this.modelo.findById(id);
  }

  async updateById(id: string, lib: Libro): Promise<Libro> {
    await this.modelo.updateOne({ _id : id }, lib);
    return await this.modelo.findById(id);
  }

  async patchById(id: string, lib: Libro): Promise<Libro> {
    const objetoGuardado = await this.modelo.findById(id);
    if (lib.titulo != null) {
      objetoGuardado.titulo = lib.titulo;
    }
    if (lib.autor != null) {
      objetoGuardado.autor = lib.autor;
    }
    if (lib.fecha != null) {
      objetoGuardado.fecha = lib.fecha;
    }
    await this.modelo.updateOne({ _id : id }, lib);
    return await this.modelo.findById(id);
  }

  async delete(id: string): Promise<Libro> {
    const datoGuardado = await this.modelo.findById(id);
    await this.modelo.findOneAndRemove({ _id : id });
    return datoGuardado;
  }
}
