// === Module 16577: trackInAppReportsFeedback ===

// Module 16577 (trackInAppReportsFeedback)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/in_app_reports/trackInAppReportsFeedback.tsx");

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
  expandEventPropertiesDefault.track(AnalyticEvents.IAR_FEEDBACK_SUBMITTED, { reason: problem, report_type: reportType, report_id: reportId, rating, feedback, dont_show_again: dont_show_again.dontShowAgain });
};