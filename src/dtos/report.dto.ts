import { Exclude, Expose } from 'class-transformer';
import {
        IsNotEmpty,
        IsNumber,
        IsOptional,
        IsPositive,
        IsString,
} from 'class-validator';
import { ReportType } from 'src/db';

export class ReportDto {
        @IsNumber()
        @IsPositive()
        amount: number;

        @IsString()
        @IsNotEmpty()
        source: string;
}

export class UpdateReportDto {
        @IsOptional()
        @IsNumber()
        @IsPositive()
        amount: number;

        @IsOptional()
        @IsString()
        @IsNotEmpty()
        source: string;
}

export class ReportResponseDto {
        //allows for the transformation to DTO even if it only partially has the fields. Note: it does not allow the aggregation of
        // new fields
        constructor(partial: Partial<ReportResponseDto>) {
                Object.assign(this, partial);
        }

        id: string;
        source: string;
        amount: number;

        @Exclude()
        created_at: Date;

        @Exclude()
        updated_at: Date;
        type: ReportType;

        @Expose({ name: 'createdAt' })
        transformCreatedAt() {
                return this.created_at;
        }
}
