import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
        const app = await NestFactory.create(AppModule);
        app.useGlobalPipes(
                // needed in order to enable DTO validation decorators
                new ValidationPipe({
                        //is used to keep strictness of DTO
                        whitelist: true,
                        // is used to allow DTO transformation in order to send ResponseDTO to client
                        transform: true,
                        transformOptions: {
                                enableImplicitConversion: true,
                        },
                }),
        );
        await app.listen(3000);
}
bootstrap();
