// === Module 16648: InAppReportsFeedbackActionSheet ===

// Module 16648 (InAppReportsFeedbackActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import Constants2 from "Constants" /* 11249 */;
import FeedbackUtils from "FeedbackUtils" /* 11252 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 11270 */;
import getInAppReportsFeedbackOptionsDefault from "getInAppReportsFeedbackOptions" /* 16649 */;
import trackInAppReportsFeedbackDefault from "trackInAppReportsFeedback" /* 16650 */;
import intl_migration from "intl/migration" /* 16651 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let reportId;

const AnalyticEvents = Constants.AnalyticEvents;
const FeedbackType = Constants2.FeedbackType;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((reportId) => {
  let first;
  let obj = reportId(576);
  const cResult = obj.c(15);
  reportId = reportId.reportId;
  const reportType = reportId.reportType;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = reportType(16649)();
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === reportId) {
    let tmp7;
    if (cResult[2] === reportType) {
      tmp7 = cResult[3];
    }
    if (cResult[4] === reportId) {
      let tmp8;
      let tmp9;
      let tmp11;
      let tmp14;
      let tmp13;
      let tmp17;
      if (cResult[5] === reportType) {
        tmp8 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = reportId(16651);
        const result = tmpResult.improperGetEnglishIntlMessageText("CALL_FEEDBACK_OPTION_OTHER");
        cResult[7] = result;
        tmp9 = result;
      } else {
        tmp9 = cResult[7];
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(reportId(1126).t.MP5lDj);
        cResult[8] = stringResult;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[8];
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(reportId(1126).t["7Ct0Dj"]);
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(reportId(1126).t.FJmoxF);
        cResult[9] = stringResult1;
        cResult[10] = stringResult2;
        tmp14 = stringResult2;
        tmp13 = stringResult1;
      } else {
        tmp13 = cResult[9];
        tmp14 = cResult[10];
      }
      const _Symbol4 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [tmp9];
        cResult[11] = items;
        tmp17 = items;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] === tmp7) {
        let tmp18;
        if (cResult[13] === tmp8) {
          tmp18 = cResult[14];
        }
        return tmp18;
      }
      const tmp21 = jsx(reportType(11270), { headerLabel: tmp11, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: tmp13, reasonsHeaderLabel: tmp14, reasons: first, feedbackReasons: tmp17, otherKey: tmp9, trackOpen: tmp7, trackReport: tmp8 });
      cResult[12] = tmp7;
      cResult[13] = tmp8;
      cResult[14] = tmp21;
      tmp18 = tmp21;
    }
    const fn2 = function u(arg0) {
      let dontShowAgain;
      let feedback;
      let flag;
      let rating;
      let reason;
      ({ rating, reason, feedback, dontShowAgain } = arg0);
      let value = null;
      if (null != reason) {
        value = reason.value;
      }
      const obj = { rating, problem: value, feedback, reportId, reportType, dontShowAgain: flag };
      const tmp3 = trackInAppReportsFeedbackDefault;
      if (feedback == null) {
        feedback = "";
      }
      flag = dontShowAgain;
      if (dontShowAgain == null) {
        flag = false;
      }
      tmp3(obj);
      if (dontShowAgain) {
        const obj3 = { feedbackType: FeedbackType.IN_APP_REPORTS, location: "InAppReportsFeedbackActionSheet" };
        const obj2 = FeedbackUtils;
        obj2.processOptOut(obj3);
      }
      if (null != rating) {
        const obj4 = ToastUtils;
        obj4.presentFeedbackSent();
      }
    };
    cResult[4] = reportId;
    cResult[5] = reportType;
    cResult[6] = fn2;
    tmp8 = fn2;
  }
  const fn = function b() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { report_id: reportId, report_type: reportType };
    obj.track(AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, obj2);
  };
  cResult[1] = reportId;
  cResult[2] = reportType;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((arg0) => {
  ({ reportId: require, reportType: importDefault } = arg0);
  const tmp = getInAppReportsFeedbackOptionsDefault();
  let obj = intl_migration;
  const result = obj.improperGetEnglishIntlMessageText("CALL_FEEDBACK_OPTION_OTHER");
  let tmp3 = FeedbackActionSheetDefault;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const intl3 = intl4.intl;
  const items = [result];
  return <tmp3 headerLabel={intl.string(intl4.t.MP5lDj)} showHeaderCloseButton hideDontShowAgainCheckbox ratingsBodyLabel={intl2.string(intl4.t["7Ct0Dj"])} reasonsHeaderLabel={intl3.string(intl4.t.FJmoxF)} reasons={tmp} feedbackReasons={items} otherKey={result} trackOpen={function trackOpen() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { report_id, report_type };
    obj.track(AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, obj2);
  }} trackReport={function trackReport(arg0) {
    let dontShowAgain;
    let feedback;
    let flag;
    let rating;
    let reason;
    ({ rating, reason, feedback, dontShowAgain } = arg0);
    let value = null;
    if (null != reason) {
      value = reason.value;
    }
    const obj = { rating, problem: value, feedback, reportId, reportType, dontShowAgain: flag };
    const tmp3 = trackInAppReportsFeedbackDefault;
    if (feedback == null) {
      feedback = "";
    }
    flag = dontShowAgain;
    if (dontShowAgain == null) {
      flag = false;
    }
    tmp3(obj);
    if (dontShowAgain) {
      const obj3 = { feedbackType: FeedbackType.IN_APP_REPORTS, location: "InAppReportsFeedbackActionSheet" };
      const obj2 = FeedbackUtils;
      obj2.processOptOut(obj3);
    }
    if (null != rating) {
      const obj4 = ToastUtils;
      obj4.presentFeedbackSent();
    }
  }} />;
});
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx");

export default tmp3;