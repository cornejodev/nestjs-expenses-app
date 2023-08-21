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
import { ReportType } from 'src/db';
import {
        ReportDto,
        ReportResponseDto,
        UpdateReportDto,
} from 'src/dtos/report.dto';
import { ReportService } from './report.service';
@Controller('report/:type')
export class ReportController {
        constructor(private readonly reportService: ReportService) {}

        @Get()
        getAllReports(
                @Param('type', new ParseEnumPipe(ReportType)) type: string,
        ): ReportResponseDto[] {
                const reportType =
                        type === 'income'
                                ? ReportType.INCOME
                                : ReportType.EXPENSE;

                return this.reportService.getAllReports(reportType);
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

                return this.reportService.getReportById(reportType, id);
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

                return this.reportService.createReport(reportType, body);
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
                return this.reportService.updateReport(reportType, id, body);
        }

        @HttpCode(204)
        @Delete(':id')
        deleteReport(@Param('id', ParseUUIDPipe) id: string) {
                return this.reportService.deleteReport(id);
        }
}
