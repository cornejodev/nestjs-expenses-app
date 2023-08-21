import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
        controllers: [ReportController],
        providers: [ReportService],
        // here we are choosing which services will be accessible upon import to other modules
        exports: [ReportService],
})
export class ReportModule {}
