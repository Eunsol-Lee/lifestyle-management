import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// It loads .env
import { config } from 'dotenv';
config();

// console.log(process.env.USERNAME);
// console.log(process.env.PWD);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
