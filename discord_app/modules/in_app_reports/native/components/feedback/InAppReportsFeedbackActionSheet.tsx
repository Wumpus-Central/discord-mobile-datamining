// discord_app/modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import FeedbackUtils from "../../../../feedback/FeedbackUtils.tsx";
import FeedbackActionSheetDefault from "../../../../feedback/native/FeedbackActionSheet.tsx";
import getInAppReportsFeedbackOptionsDefault from "../../../getInAppReportsFeedbackOptions.tsx";
import intl_migration from "../../../../../intl/migration.tsx";
import trackInAppReportsFeedbackDefault from "../../../trackInAppReportsFeedback.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const FeedbackType = fn(11877).FeedbackType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx",
);

export default function InAppReportsFeedbackActionSheet(arg0) {
  ({ reportId: require, reportType: importDefault } = arg0);
  const tmp = getInAppReportsFeedbackOptionsDefault();
  const result = intl_migration.improperGetEnglishIntlMessageText("CALL_FEEDBACK_OPTION_OTHER");
  let obj2 = {
    headerLabel: null,
    showHeaderCloseButton: true,
    hideDontShowAgainCheckbox: true,
    ratingsBodyLabel: null,
    reasonsHeaderLabel: null,
    reasons: null,
    feedbackReasons: null,
    otherKey: null,
    trackOpen: null,
    trackReport: null,
  };
  const intl = util.intl;
  obj2.headerLabel = intl.string(util.t.MP5lDj);
  const intl2 = util.intl;
  obj2.ratingsBodyLabel = intl2.string(util.t["7Ct0Dj"]);
  const intl3 = util.intl;
  obj2.reasonsHeaderLabel = intl3.string(util.t.FJmoxF);
  obj2.reasons = tmp;
  const items = [result];
  obj2.feedbackReasons = items;
  obj2.otherKey = result;
  obj2.trackOpen = function trackOpen() {
    AnalyticsUtilsDefault.track(AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, { report_id, report_type });
  };
  obj2.trackReport = function trackReport(arg0) {
    ({ rating, reason, feedback, dontShowAgain } = arg0);
    value = null;
    if (null != reason) {
      value = reason.value;
    }
    const obj = { rating, problem: value, feedback: null, reportId: null, reportType: null, dontShowAgain: null };
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
      const obj3 = { feedbackType: FeedbackType.IN_APP_REPORTS, location: "InAppReportsFeedbackActionSheet" };
      FeedbackUtils.processOptOut(obj3);
    }
    if (null != rating) {
      ToastUtils.presentFeedbackSent();
    }
  };
  return jsx(FeedbackActionSheetDefault, {
    headerLabel: null,
    showHeaderCloseButton: true,
    hideDontShowAgainCheckbox: true,
    ratingsBodyLabel: null,
    reasonsHeaderLabel: null,
    reasons: null,
    feedbackReasons: null,
    otherKey: null,
    trackOpen: null,
    trackReport: null,
  });
}
