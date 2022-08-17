import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const cors = require('cors');

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.use(cors())
    const config = new DocumentBuilder()
        .setTitle('Todo')
        .setDescription('The Todo API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3001)
}

bootstrap()