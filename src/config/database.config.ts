import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2025',
  database: 'mydb',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true, // Hati-hati! Jangan gunakan synchronize: true di production
}; 