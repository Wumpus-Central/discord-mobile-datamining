// === Module 16702: InAppReportsFeedbackActionSheet ===

// Module 16702 (InAppReportsFeedbackActionSheet)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closeActionSheetDefault from "closeActionSheet" /* 11195 */;
import getInAppReportsFeedbackOptionsDefault from "getInAppReportsFeedbackOptions" /* 16703 */;
import newGetEnglishMessageText from "newGetEnglishMessageText" /* 16704 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { FeedbackType } from "FeedbackRating" /* 11174 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx");

export default function InAppReportsFeedbackActionSheet(arg0) {
  ({ reportId: require, reportType: importDefault } = arg0);
  let obj = newGetEnglishMessageText;
  const result = obj.improperGetEnglishIntlMessageText("CALL_FEEDBACK_OPTION_OTHER");
  obj = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null };
  const tmp = getInAppReportsFeedbackOptionsDefault();
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.MP5lDj);
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(getSystemLocale.t["7Ct0Dj"]);
  const intl3 = getSystemLocale.intl;
  obj[4] = intl3.string(getSystemLocale.t.FJmoxF);
  obj[5] = tmp;
  const items = [result];
  obj[6] = items;
  obj[7] = result;
  obj[8] = function trackOpen() {
    let obj = closure_1_1(closure_1_2[8]);
    obj = { report_id: closure_0, report_type: closure_1 };
    obj.track(closure_1_3.IAR_FEEDBACK_MODAL_VIEWED, obj);
  };
  obj[9] = function trackReport(arg0) {
    ({ rating, reason, feedback, dontShowAgain } = arg0);
    let value = null;
    if (null != reason) {
      value = reason.value;
    }
    let obj = { rating, problem: value, feedback: null, reportId: null, reportType: null, dontShowAgain: null };
    if (feedback == null) {
      feedback = "";
    }
    obj[2] = feedback;
    obj[3] = closure_0;
    obj[4] = closure_1;
    let flag = dontShowAgain;
    if (dontShowAgain == null) {
      flag = false;
    }
    obj[5] = flag;
    closure_1_1(closure_1_2[9])(obj);
    if (dontShowAgain) {
      obj = { feedbackType: null, location: "InAppReportsFeedbackActionSheet" };
      obj[0] = closure_1_4.IN_APP_REPORTS;
      closure_1_0(tmp2[10]).processOptOut(obj);
      const obj2 = closure_1_0(tmp2[10]);
    }
    if (null != rating) {
      closure_1_0(tmp2[11]).presentFeedbackSent();
      const obj4 = closure_1_0(tmp2[11]);
    }
  };
  return jsx(closeActionSheetDefault, { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null });
};