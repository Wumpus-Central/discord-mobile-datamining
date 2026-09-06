// === Module 17362: InAppReportsFeedbackActionSheet ===

// Module 17362 (InAppReportsFeedbackActionSheet)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import FeedbackUtils from "FeedbackUtils" /* 11629 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 11647 */;
import getInAppReportsFeedbackOptionsDefault from "getInAppReportsFeedbackOptions" /* 17363 */;
import intl_migration from "intl/migration" /* 17364 */;
import trackInAppReportsFeedbackDefault from "trackInAppReportsFeedback" /* 17365 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const FeedbackType = fn(11626).FeedbackType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx");

export default function InAppReportsFeedbackActionSheet(arg0) {
  ({ reportId: require, reportType: importDefault } = arg0);
  let obj = intl_migration;
  const result = obj.improperGetEnglishIntlMessageText("CALL_FEEDBACK_OPTION_OTHER");
  obj = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null };
  const tmp = getInAppReportsFeedbackOptionsDefault();
  const intl = util.intl;
  obj.headerLabel = intl.string(util.t.MP5lDj);
  const intl2 = util.intl;
  obj.ratingsBodyLabel = intl2.string(util.t["7Ct0Dj"]);
  const intl3 = util.intl;
  obj.reasonsHeaderLabel = intl3.string(util.t.FJmoxF);
  obj.reasons = tmp;
  const items = [result];
  obj.feedbackReasons = items;
  obj.otherKey = result;
  obj.trackOpen = function trackOpen() {
    const obj = { report_id, report_type };
    obj.track(AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, obj);
  };
  obj.trackReport = function trackReport(arg0) {
    ({ rating, reason, feedback, dontShowAgain } = arg0);
    value = null;
    if (null != reason) {
      value = reason.value;
    }
    let obj = { rating, problem: value, feedback: null, reportId: null, reportType: null, dontShowAgain: null };
    if (feedback == null) {
      feedback = "";
    }
    obj.feedback = feedback;
    obj.reportId = reportId;
    obj.reportType = reportType;
    let flag = dontShowAgain;
    if (dontShowAgain == null) {
      flag = false;
    }
    obj.dontShowAgain = flag;
    trackInAppReportsFeedbackDefault(obj);
    if (dontShowAgain) {
      obj = { feedbackType: FeedbackType.IN_APP_REPORTS, location: "InAppReportsFeedbackActionSheet" };
      FeedbackUtils.processOptOut(obj);
    }
    if (null != rating) {
      ToastUtils.presentFeedbackSent();
    }
  };
  return jsx(FeedbackActionSheetDefault, { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null });
};