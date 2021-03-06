import { Body, Controller, Delete, Get, Param,Patch, Post, Put } from '@nestjs/common';
import { RestService } from '../rest/rest.service'
import { Libro } from './libro';

@Controller('libro')
export class LibroController {

  private l : Libro[] = [];

  constructor(private readonly restService: RestService){
    this.restService.libro=[];
    //this.datos=this.restService.getDatos();
  }

  @Get() //Listado de libros
  getAll() : Promise<Libro[]> {
    //buscar los datos en la BD
    return this.restService.findAll();
  }

  @Post()
  async create(@Body() l: Libro): Promise<Libro> {
    const libroCon = await this.restService.create(l);
    return libroCon;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Libro> {
    return this.restService.findById(id);
  }

  @Post() //Añade un libro y lo devuelve
  addOne(@Body() l1 : Libro) {
    //recoger el objeto Libro y meterlo en la BD
    /* const lc = new Libro();
    lc.id = 1;
    lc.titulo = l1.titulo;
    lc.autor = l1.autor;
    lc.fecha = l1.fecha;
    return lc; */
    this.restService.addLibro(l1);
  }

  /*
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
  */
  @Put(':id')
  async update(@Param('id') id: string, @Body() lib: Libro): Promise<Libro> {
      return this.restService.updateById(id, lib);
  }

  @Patch(':id')
  async parchea(@Param('id') id: string, @Body() lib: Libro): Promise<Libro> {
      return this.restService.patchById(id, lib);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Libro> {
    return this.restService.delete(id);
  }
  /*
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
    */

}
