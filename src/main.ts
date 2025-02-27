import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {

      const app = await NestFactory.create(AppModule, { cors: { credentials: true} });

       app.use(bodyParser.json({ limit: '50mb' }));
       app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

      //Swagger connection
       const config = new DocumentBuilder()
      .setTitle('Spotify')
      .setDescription('Spotify-clone backend')
      .setVersion('1.0')
      .addTag('Spotify')
      .addBearerAuth({ in: 'header', type: 'http' })
      .build();
       const document = SwaggerModule.createDocument(app, config);
       SwaggerModule.setup('api', app, document);

     // Server Connection
      const port = process.env.PORT ;
      await app.listen(port, async () => {
      console.log(`The server is running on ${port} port: http://localhost:${port}/api`);
  });
}
bootstrap();
