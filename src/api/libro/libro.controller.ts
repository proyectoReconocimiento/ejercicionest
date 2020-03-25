import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Libro } from './libro';

@Controller('libro')
export class LibroController {

  @Get() //Listado de libros
  findAll() : Libro[] {
    //buscar los datos en la BD
    return [];
  }

  @Post() //Añade un libro y lo devuelve
  addOne(@Body() l1 : Libro) : Libro {
    //recoger el objeto Libro y meterlo en la BD
    const lc = new Libro();
    lc.id = 1;
    lc.titulo = l1.titulo;
    lc.autor = l1.autor;
    lc.fecha = l1.fecha;
    return lc;
  }

  @Get('/:id') //Obtiene libro por identificador
  getById(@Param() params) : Libro {
    //Capturar el id y consultar a la BD
    const lib = new Libro();
    lib.id = params.id;
    lib.titulo = 'Madame Bovary';
    lib.autor = 'Faubert';
    lib.fecha= '1981';
    return lib;


  }

  @Put('/:id')
  modifyById(@Param() params, @Body() lib : Libro) : Libro {
    //Captular el id, buscarlo en la BD y guardar los cambios
    const lc = new Libro();
    lc.id = params.id;
    lc.titulo = lib.titulo;
    lc.autor = lib.autor;
    lc.fecha = lib.fecha;
    return lc;
  }

  @Delete('/:id')
  deleteById(@Param() params) : Libro {
    //
    const lc = new Libro();
    lc.id = params.id;
    lc.titulo = 'titulo BORRADO';
    lc.autor = 'autor BORRADO';
    lc.fecha = 'libro BORRADO';
    return lc;
  }

}
