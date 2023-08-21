import { Injectable } from '@nestjs/common';

import { v4 as uuid } from 'uuid';
import { ReportType, db } from './db';

interface ReportData {
  amount: number;
  source: string;
}

// since appservice is not a function we must instantiate it in order to use it somewhere
// thats why we use the Injectable decorator
@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return db.report.filter((report) => report.type === type);
  }

  getReportById(type: ReportType, id: string) {
    return db.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
  }

  createReport(type: ReportType, data: ReportData) {
    const newReport = {
      id: uuid(),
      source: data.source,
      amount: data.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type,
    };
    // push to local DB
    db.report.push(newReport);

    return newReport;
  }

  updateReport(type: ReportType, id: string, body: ReportData) {
    const reportToUpdate = db.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) {
      return;
    }
    const reportIndex = db.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    db.report[reportIndex] = {
      ...db.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };

    return db.report[reportIndex];
  }

  deleteReport(id: string) {
    const reportIndex = db.report.findIndex((report) => report.id === id);
    // findIndex returns the value -1 if said element is not found
    if (!reportIndex) {
      return;
    }
    db.report.splice(reportIndex, 1);
    return;
  }
}
