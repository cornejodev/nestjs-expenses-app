import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';

// an interceptor is an entity within NestJS
// therefore we must create a class in order to instantiate them

// here it basically reads like "i will create a custom interceptor and i want it to be
// implemented like the NestInterceptor
// in order to accomplish the implementation we should comply with the fields that the
// NestJS interceptor interface has

export class CustomInterceptor implements NestInterceptor {
        intercept(context: ExecutionContext, handler: CallHandler) {
                console.log('THIS IS INTERCEPTING THE REQUEST');
                console.log({ context });

                return handler.handle().pipe(
                        map((data) => {
                                const response = {
                                        ...data,
                                        createdAt: data.created_at,
                                };
                                delete response.updated_at;
                                delete response.created_at;
                                return response;
                        }),
                );
        }
}
