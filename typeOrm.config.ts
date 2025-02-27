import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import path from "path";

config();
const configService = new ConfigService();

export default  new DataSource({

     type: 'postgres',
     host: configService.get('DATABASE_HOST'),
     port: configService.get('DATABASE_PORT'),
     username: configService.get('DATABASE_USERNAME'),
     password: configService.get('DATABASE_PASSWORD'),
     database: configService.get('DATABASE_NAME'),
     entities: ['./src/**/schemas/*.schema{.ts,.js}'],
     migrations: ['db/migrations/*{.ts,.js}'],
    // seeds:['./src/database/seeders/*{.ts,.js}'],
     migrationsTableName: 'migrations_table',


});
