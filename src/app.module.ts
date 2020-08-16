import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const mongodbDBName = 'lifestyle-management';
const mongodbUserName = 'test';
const mongodbPassword = 'qosHek-fivcug-hichy2';
const mongodbBasicUri = 'cluster0.mmfgl.mongodb.net';
const mongodbOptions = 'retryWrites=true&w=majority';
const mongodbFullUri = `mongodb+srv://${mongodbUserName}:${mongodbPassword}@${mongodbBasicUri}/${mongodbDBName}?${mongodbOptions}`;

@Module({
  imports: [MongooseModule.forRoot(mongodbFullUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
