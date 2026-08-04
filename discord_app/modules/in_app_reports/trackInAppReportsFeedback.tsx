// discord_app/modules/in_app_reports/trackInAppReportsFeedback.tsx
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/in_app_reports/trackInAppReportsFeedback.tsx");

export default function trackInAppReportsFeedback(dont_show_again) {
  let feedback;
  let problem;
  let reportType;
  let reportId = dont_show_again.reportId;
  ({ problem, feedback, reportType } = dont_show_again);
  if (reportId === undefined) {
    reportId = null;
  }
  let rating = dont_show_again.rating;
  if (rating === undefined) {
    rating = null;
  }
  importDefault(698).track(AnalyticEvents.IAR_FEEDBACK_SUBMITTED, { reason: problem, report_type: reportType, report_id: reportId, rating, feedback, dont_show_again: dont_show_again.dontShowAgain });
};