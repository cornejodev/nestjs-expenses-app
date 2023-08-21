import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ReportController } from './report/report.controller';
import { ReportModule } from './report/report.module';
import { ReportService } from './report/report.service';
import { SummaryController } from './summary/summary.controller';
import { SummaryModule } from './summary/summary.module';
import { SummaryService } from './summary/summary.service';

@Module({
        imports: [SummaryModule, ReportModule],
        controllers: [SummaryController, ReportController],
        providers: [
                ReportService,
                SummaryService,
                //global provider
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
