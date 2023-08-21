export enum ReportType {
        INCOME = 'income',
        EXPENSE = 'expense',
}

export const db: Data = {
        report: [
                {
                        id: 'uuid1',
                        source: 'salary',
                        amount: 5000,
                        created_at: new Date(),
                        updated_at: new Date(),
                        type: ReportType.INCOME,
                },
                {
                        id: 'uuid3',
                        source: 'salary',
                        amount: 4000,
                        created_at: new Date(),
                        updated_at: new Date(),
                        type: ReportType.INCOME,
                },
                {
                        id: 'uuid2',
                        source: 'salary',
                        amount: 500,
                        created_at: new Date(),
                        updated_at: new Date(),
                        type: ReportType.EXPENSE,
                },
        ],
};

interface Data {
        report: {
                id: string;
                source: string;
                amount: number;
                created_at: Date;
                updated_at: Date;
                type: ReportType;
        }[];
}

// data.report.push({
//   id: 'uuid1',
//   source: 'salary',
//   amount: 5000,
//   created_at: new Date(),
//   updated_at: new Date(),
//   type: ReportType.INCOME,
// });

// data.report.push({
//   id: 'uuid2',
//   source: 'salary',
//   amount: 7500,
//   created_at: new date(),
//   updated_at: new date(),
//   type: reporttype.expense,
// });

// data.report.push({
//   id: 'uuid3',
//   source: 'salary',
//   amount: 40000,
//   created_at: new Date(),
//   updated_at: new Date(),
//   type: ReportType.INCOME,
// });
