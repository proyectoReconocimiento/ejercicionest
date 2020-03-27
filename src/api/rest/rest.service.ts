import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Libro } from '../libro/libro';

@Injectable()
export class RestService {
  libro : Libro[];

  constructor(@InjectModel('Libro') private readonly modelo: Model<Libro>) {
    this.libro = [];
  }

  async findAll(): Promise<Libro[]> {
    return await this.modelo.find().exec();
  }

  getLibros() : Libro[] {
    return this.libro;
  }

  addLibro(l : Libro){
    this.libro.push(l);
  }
}
