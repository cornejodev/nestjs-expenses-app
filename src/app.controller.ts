import {
        Body,
        Controller,
        Delete,
        Get,
        HttpCode,
        Param,
        ParseEnumPipe,
        ParseUUIDPipe,
        Post,
        Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType } from './db';
import {
        ReportDto,
        ReportResponseDto,
        UpdateReportDto,
} from './dtos/report.dto';

@Controller('report/:type')
export class AppController {
        constructor(private readonly appService: AppService) {}

        @Get()
        getAllReports(
                @Param('type', new ParseEnumPipe(ReportType)) type: string,
        ): ReportResponseDto[] {
                const reportType =
                        type === 'income'
                                ? ReportType.INCOME
                                : ReportType.EXPENSE;

                return this.appService.getAllReports(reportType);
        }

        @Get(':id')
        getReportById(
                @Param('type', new ParseEnumPipe(ReportType)) type: string,
                @Param('id', ParseUUIDPipe) id: string,
        ): ReportResponseDto {
                const reportType =
                        type === 'income'
                                ? ReportType.INCOME
                                : ReportType.EXPENSE;

                return this.appService.getReportById(reportType, id);
        }

        @Post()
        createReport(
                @Body() body: ReportDto,
                @Param('type', new ParseEnumPipe(ReportType)) type: string,
        ): ReportResponseDto {
                const reportType =
                        type === 'income'
                                ? ReportType.INCOME
                                : ReportType.EXPENSE;

                return this.appService.createReport(reportType, body);
        }

        @Put(':id')
        updateReport(
                @Param('type', new ParseEnumPipe(ReportType)) type: string,
                @Param('id', ParseUUIDPipe) id: string,
                @Body() body: UpdateReportDto,
        ): ReportResponseDto {
                const reportType =
                        type === 'income'
                                ? ReportType.INCOME
                                : ReportType.EXPENSE;
                return this.appService.updateReport(reportType, id, body);
        }

        @HttpCode(204)
        @Delete(':id')
        deleteReport(@Param('id', ParseUUIDPipe) id: string) {
                return this.appService.deleteReport(id);
        }
}
