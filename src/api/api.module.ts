import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './libro/libro.schema';
import { RestService } from './rest/rest.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Libro', schema: LibroSchema }])],
  controllers: [LibroController],
  providers: [RestService]
})
export class ApiModule {}
