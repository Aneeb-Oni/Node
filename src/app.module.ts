import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';
import { Song } from './songs/song.entity';
import { Artist } from './artists/artist.entity';
import { User } from './users/user.entity';
import { Playlist } from './playlists/playlist.entity';
import { PlayListModule } from './playlists/playlists.module';
// import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ArtistsModule } from './artists/artists.module';
import { dataSourceOptions, typeOrmAsyncConfig } from 'db/data-source';
import { SeedModule } from './seed/seed.module';
import {envSchema} from "./config/schema/env.schema";
import {ConfigModule,ConfigService} from "@nestjs/config";

import { validate } from 'env.validation';

@Module({
  imports: [
    SongsModule,
    PlayListModule,
    AuthModule,
    UsersModule,
    ArtistsModule,
    SeedModule,
    ConfigModule.forRoot({
      envFilePath: [".env.development"],
      isGlobal: true,
      expandVariables: true,
      // load: [configuration],
      validationSchema: envSchema,
    }), 

        // Database connection
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => ({
            type: "postgres",
            host: configService.get("DATABASE_HOST"),
            port: parseInt(configService.get("DATABASE_PORT"), 10),
            username: configService.get("DATABASE_USERNAME"),
            password: configService.get("DATABASE_PASSWORD"),
            database: configService.get("DATABASE_NAME"),
            entities: [User,Song,Playlist,Artist],
            synchronize: false,
          }),
          inject: [ConfigService]
        }),
        // TypeOrmModule.forRootAsync(typeOrmAsyncConfig),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(/*private dataSource: DataSource*/) {
  //   // console.log('dbName ', dataSource.driver.database);
  // }
  // configure(consumer: MiddlewareConsumer) {
  //   // consumer.apply(LoggerMiddleware).forRoutes('songs'); // option no 1
  //   // consumer
  //   //   .apply(LoggerMiddleware)
  //   //   .forRoutes({ path: 'songs', method: RequestMethod.POST }); //option no 2

  //   consumer.apply(LoggerMiddleware).forRoutes(SongsController); //option no 3
  // }
}
