import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Mengaktifkan CORS untuk semua origin
  app.enableCors();

  // Menambahkan ValidationPipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  // Menambahkan global prefix '/api'
  app.setGlobalPrefix('api', {
    exclude: [
      'health',  // /health
      'metrics', // /metrics
      // ... route lain yang ingin di-exclude
    ],
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}
bootstrap();
