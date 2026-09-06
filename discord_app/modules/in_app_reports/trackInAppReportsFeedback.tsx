// === Module 17365: trackInAppReportsFeedback ===

// Module 17365 (trackInAppReportsFeedback)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/in_app_reports/trackInAppReportsFeedback.tsx");

export default function trackInAppReportsFeedback(dont_show_again) {
  let reportId = dont_show_again.reportId;
  ({ problem, feedback, reportType } = dont_show_again);
  if (reportId === undefined) {
    reportId = null;
  }
  let rating = dont_show_again.rating;
  if (rating === undefined) {
    rating = null;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.IAR_FEEDBACK_SUBMITTED, { reason: problem, report_type: reportType, report_id: reportId, rating, feedback, dont_show_again: dont_show_again.dontShowAgain });
};