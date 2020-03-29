import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ApiModule, MongooseModule.forRoot('mongodb://localhost:27017/test',
{ useNewUrlParser: true, useUnifiedTopology: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
