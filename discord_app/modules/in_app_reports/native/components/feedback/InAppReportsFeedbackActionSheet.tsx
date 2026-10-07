// discord_app/modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import FeedbackUtils from "../../../../feedback/FeedbackUtils.tsx";
import FeedbackActionSheetDefault from "../../../../feedback/native/FeedbackActionSheet.tsx";
import getInAppReportsFeedbackOptionsDefault from "../../../getInAppReportsFeedbackOptions.tsx";
import trackInAppReportsFeedbackDefault from "../../../trackInAppReportsFeedback.tsx";
import intl_migration from "../../../../../intl/migration.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const FeedbackType = fn(11262).FeedbackType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (reportId) => {
      const cResult = reportId(576).c(15);
      reportId = reportId.reportId;
      const reportType = reportId.reportType;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = reportType(17539)();
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === reportId) {
        if (cResult[2] === reportType) {
          let tmp7 = cResult[3];
        }
        if (cResult[4] === reportId) {
          if (cResult[5] === reportType) {
            let tmp8 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const result = tmp(17541).improperGetEnglishIntlMessageText("CALL_FEEDBACK_OPTION_OTHER");
            cResult[7] = result;
            let tmp9 = result;
            const tmpResult = tmp(17541);
          } else {
            tmp9 = cResult[7];
          }
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.MP5lDj);
            cResult[8] = stringResult;
            let tmp11 = stringResult;
          } else {
            tmp11 = cResult[8];
          }
          const _Symbol3 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp(1126).t["7Ct0Dj"]);
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(tmp(1126).t.FJmoxF);
            cResult[9] = stringResult1;
            cResult[10] = stringResult2;
            let tmp14 = stringResult2;
            let tmp13 = stringResult1;
          } else {
            tmp13 = cResult[9];
            tmp14 = cResult[10];
          }
          const _Symbol4 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [tmp9];
            cResult[11] = items;
            let tmp17 = items;
          } else {
            tmp17 = cResult[11];
          }
          if (cResult[12] === tmp7) {
            if (cResult[13] === tmp8) {
              let tmp18 = cResult[14];
            }
            return tmp18;
          }
          let obj2 = {
            headerLabel: tmp11,
            showHeaderCloseButton: true,
            hideDontShowAgainCheckbox: true,
            ratingsBodyLabel: tmp13,
            reasonsHeaderLabel: tmp14,
            reasons: first,
            feedbackReasons: tmp17,
            otherKey: tmp9,
            trackOpen: tmp7,
            trackReport: tmp8,
          };
          const tmp21 = jsx(reportType(11283), {
            headerLabel: tmp11,
            showHeaderCloseButton: true,
            hideDontShowAgainCheckbox: true,
            ratingsBodyLabel: tmp13,
            reasonsHeaderLabel: tmp14,
            reasons: first,
            feedbackReasons: tmp17,
            otherKey: tmp9,
            trackOpen: tmp7,
            trackReport: tmp8,
          });
          cResult[12] = tmp7;
          cResult[13] = tmp8;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
        const fn2 = function u(arg0) {
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
        cResult[4] = reportId;
        cResult[5] = reportType;
        cResult[6] = fn2;
        tmp8 = fn2;
      }
      const fn = function b() {
        AnalyticsUtilsDefault.track(AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, {
          report_id: reportId,
          report_type: reportType,
        });
      };
      cResult[1] = reportId;
      cResult[2] = reportType;
      cResult[3] = fn;
      tmp7 = fn;
      let obj = reportId(576);
    }
  : (arg0) => {
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
    };
