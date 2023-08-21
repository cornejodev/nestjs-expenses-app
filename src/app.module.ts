import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
        imports: [],
        controllers: [AppController],
        providers: [
                AppService,
                {
                        //interceptors are basically the same as middleware but in Nestjs
                        // we provide a built in interceptor here
                        provide: APP_INTERCEPTOR,
                        // and specify what type of interceptor we need, in this case the one that will transform
                        // our incoming and outgoing data into DTO's
                        useClass: ClassSerializerInterceptor,

                        // this was for the example
                        // useClass: CustomInterceptor,
                },
        ],
})
export class AppModule {}
