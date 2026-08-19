// discord_app/modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import expandEventPropertiesDefault from "../../../../../utils/AnalyticsUtils.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import presentAddedFriendToast from "../../../../toast/native/ToastUtils.tsx";
import shuffleProblems from "../../../../feedback/FeedbackUtils.tsx";
import closeActionSheetDefault from "../../../../feedback/native/FeedbackActionSheet.tsx";
import getInAppReportsFeedbackOptionsDefault from "../../../getInAppReportsFeedbackOptions.tsx";
import newGetEnglishMessageText from "../../../../../intl/migration.tsx";
import trackInAppReportsFeedbackDefault from "../../../trackInAppReportsFeedback.tsx";
import { AnalyticEvents } from "../../../../../Constants.tsx";
import { FeedbackType } from "../../../../feedback/Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

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