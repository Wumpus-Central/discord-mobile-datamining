// === Module 16202: InAppReportsFeedbackActionSheet ===

// Module 16202 (InAppReportsFeedbackActionSheet)
import "noop";
import { AnalyticEvents } from "ME";
import { FeedbackType } from "FeedbackRating";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("FeedbackRating").fileFinishedImporting("modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx");

export default function InAppReportsFeedbackActionSheet(arg0) {
  let importDefault;
  let require;
  ({ reportId: require, reportType: importDefault } = arg0);
  let obj = require(16204) /* newGetEnglishMessageText */;
  const result = obj.improperGetEnglishIntlMessageText("CALL_FEEDBACK_OPTION_OTHER");
  obj = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null };
  const tmp = importDefault(16203)();
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.MP5lDj);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl2.string(require(1236) /* getSystemLocale */.t["7Ct0Dj"]);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl3.string(require(1236) /* getSystemLocale */.t.FJmoxF);
  obj[5] = tmp;
  const items = [result];
  obj[6] = items;
  obj[7] = result;
  obj[8] = function trackOpen() {
    let obj = outer1_1(outer1_2[8]);
    obj = { report_id: closure_0, report_type: closure_1 };
    obj.track(outer1_3.IAR_FEEDBACK_MODAL_VIEWED, obj);
  };
  obj[9] = function trackReport(arg0) {
    let dontShowAgain;
    let feedback;
    let rating;
    let reason;
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
    outer1_1(outer1_2[9])(obj);
    if (dontShowAgain) {
      obj = { feedbackType: null, location: "InAppReportsFeedbackActionSheet" };
      obj[0] = outer1_4.IN_APP_REPORTS;
      outer1_0(tmp2[10]).processOptOut(obj);
      const obj2 = outer1_0(tmp2[10]);
    }
    if (null != rating) {
      outer1_0(tmp2[11]).presentFeedbackSent();
      const obj4 = outer1_0(tmp2[11]);
    }
  };
  return jsx(importDefault(9553), { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null });
};