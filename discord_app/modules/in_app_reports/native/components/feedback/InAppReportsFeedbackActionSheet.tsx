// === Module 16574: InAppReportsFeedbackActionSheet ===

// Module 16574 (InAppReportsFeedbackActionSheet)
import noopAll from "noop" /* 19 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import presentAddedFriendToast from "presentAddedFriendToast" /* 4093 */;
import shuffleProblems from "shuffleProblems" /* 10814 */;
import closeActionSheetDefault from "closeActionSheet" /* 10832 */;
import getInAppReportsFeedbackOptionsDefault from "getInAppReportsFeedbackOptions" /* 16575 */;
import newGetEnglishMessageText from "newGetEnglishMessageText" /* 16576 */;
import trackInAppReportsFeedbackDefault from "trackInAppReportsFeedback" /* 16577 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { FeedbackType } from "FeedbackRating" /* 10811 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx");

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
    const obj = { report_id: closure_0, report_type: closure_1 };
    obj.track(AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, obj);
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
    trackInAppReportsFeedbackDefault(obj);
    if (dontShowAgain) {
      obj = { feedbackType: null, location: "InAppReportsFeedbackActionSheet" };
      obj[0] = FeedbackType.IN_APP_REPORTS;
      shuffleProblems.processOptOut(obj);
    }
    if (null != rating) {
      presentAddedFriendToast.presentFeedbackSent();
    }
  };
  return jsx(closeActionSheetDefault, { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null });
};