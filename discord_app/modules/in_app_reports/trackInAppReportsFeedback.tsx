// discord_app/modules/in_app_reports/trackInAppReportsFeedback.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  AnalyticsUtilsDefault.track(AnalyticEvents.IAR_FEEDBACK_SUBMITTED, {
    reason: problem,
    report_type: reportType,
    report_id: reportId,
    rating,
    feedback,
    dont_show_again: dont_show_again.dontShowAgain,
  });
}
