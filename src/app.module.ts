import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const mongodbOptions = 'retryWrites=true&w=majority';
const mongodbFullUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?${mongodbOptions}`;

console.log(mongodbFullUri);
@Module({
  imports: [MongooseModule.forRoot(mongodbFullUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
