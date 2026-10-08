// === Module 17815: ActivityFeedbackActionSheet ===

// Module 17815 (ActivityFeedbackActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import FeedbackUtils from "FeedbackUtils" /* 9605 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 9623 */;
import getActivityReportOptionsDefault from "getActivityReportOptions" /* 17816 */;
import trackActivityProblemDefault from "trackActivityProblem" /* 17817 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityFeedbackReasons = fn(2023).ActivityFeedbackReasons;
const AnalyticEvents = fn(1085).AnalyticEvents;
const FeedbackType = fn(9602).FeedbackType;
const jsx = fn(21).jsx;
const items = [, , ];
({ OTHER: arr[0], ADS: arr[1], NOT_FUN: arr[2] } = ActivityFeedbackReasons);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivityFeedbackActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityFeedbackActionSheet(activityApplication) {
  const cResult = activityApplication(embeddedActivityLocation[7]).c(18);
  activityApplication = activityApplication.activityApplication;
  const channel = activityApplication.channel;
  embeddedActivityLocation = activityApplication.embeddedActivityLocation;
  const analyticsData = activityApplication.analyticsData;
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (embeddedActivityConfig != null) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  if (cResult[0] !== (true === prop)) {
    const tmp8 = channel(tmp2[8])(true, tmp5);
    cResult[0] = tmp5;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === activityApplication) {
    if (cResult[3] === analyticsData) {
      if (cResult[4] === channel) {
        if (cResult[5] === embeddedActivityLocation) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] !== activityApplication.name) {
          const intl = tmp(tmp2[12]).intl;
          let obj2 = { applicationName: activityApplication.name };
          const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[12]).t.QXYwoD, obj2);
          cResult[7] = activityApplication.name;
          cResult[8] = formatToPlainStringResult;
          let tmp10 = formatToPlainStringResult;
        } else {
          tmp10 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[12]).intl;
          const stringResult = intl2.string(tmp(tmp2[12]).t["9hk2KF"]);
          const intl3 = tmp(tmp2[12]).intl;
          const stringResult1 = intl3.string(tmp(tmp2[12]).t.g1q5fr);
          cResult[9] = stringResult;
          cResult[10] = stringResult1;
          let tmp14 = stringResult1;
          let tmp13 = stringResult;
        } else {
          tmp13 = cResult[9];
          tmp14 = cResult[10];
        }
        if (cResult[11] !== activityApplication) {
          class S {
            constructor() {
              obj = closure_1(closure_2[5]);
              obj1 = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
              trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
              return;
            }
          }
          cResult[11] = activityApplication;
          cResult[12] = S;
        } else {
          class S {
            constructor() {
              obj = closure_1(closure_2[5]);
              obj1 = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
              trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
              return;
            }
          }
        }
        if (cResult[13] === tmp6) {
          class S {
            constructor() {
              obj = closure_1(closure_2[5]);
              obj1 = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
              trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
              return;
            }
          }
        }
        let obj3 = { headerLabel: tmp10, showHeaderCloseButton: true, ratingsBodyLabel: tmp13, reasonsHeaderLabel: tmp14, reasons: tmp6, feedbackReasons: items, otherKey: analyticsData.OTHER, trackOpen: S, trackReport: tmp9 };
        const tmp23 = jsx(channel(tmp2[13]), { headerLabel: tmp10, showHeaderCloseButton: true, ratingsBodyLabel: tmp13, reasonsHeaderLabel: tmp14, reasons: tmp6, feedbackReasons: items, otherKey: analyticsData.OTHER, trackOpen: S, trackReport: tmp9 });
        cResult[13] = tmp6;
        cResult[14] = tmp10;
        cResult[15] = S;
        cResult[16] = tmp9;
        cResult[17] = tmp23;
      }
    }
  }
  function trackReport(dontShowAgain) {
    ({ rating, reason, feedback } = dontShowAgain);
    value = null;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain.dontShowAgain) {
      const obj2 = { application_id: activityApplication.id, rating };
      AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, obj2);
      const obj4 = { feedbackType: FeedbackType.ACTIVITY, location: "ActivityFeedbackActionSheet" };
      FeedbackUtils.processOptOut(obj4);
    }
    if (null != rating) {
      ToastUtils.presentFeedbackSent();
      const obj6 = { problem: value, channel, embeddedActivityLocation, feedback: null, activityApplication: null, analyticsData: null, location: "Activity End", rating: null };
      if (feedback == null) {
        feedback = "";
      }
      obj6.feedback = feedback;
      obj6.activityApplication = activityApplication;
      obj6.analyticsData = analyticsData;
      obj6.rating = rating;
      trackActivityProblemDefault(obj6);
    }
  }
  cResult[2] = activityApplication;
  cResult[3] = analyticsData;
  cResult[4] = channel;
  cResult[5] = embeddedActivityLocation;
  cResult[6] = trackReport;
  tmp9 = trackReport;
  let obj = activityApplication(embeddedActivityLocation[7]);
}) : (function ActivityFeedbackActionSheet(activityApplication) {
  activityApplication = activityApplication.activityApplication;
  ({ channel: importDefault, embeddedActivityLocation: dependencyMap, analyticsData: ActivityFeedbackReasons } = activityApplication);
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (embeddedActivityConfig != null) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  let obj = { headerLabel: null, showHeaderCloseButton: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null };
  const tmp2 = getActivityReportOptionsDefault(true, true === prop);
  const intl = activityApplication(1126).intl;
  obj.headerLabel = intl.formatToPlainString(activityApplication(1126).t.QXYwoD, { applicationName: activityApplication.name });
  const intl2 = activityApplication(1126).intl;
  obj.ratingsBodyLabel = intl2.string(activityApplication(1126).t["9hk2KF"]);
  const intl3 = activityApplication(1126).intl;
  obj.reasonsHeaderLabel = intl3.string(activityApplication(1126).t.g1q5fr);
  obj.reasons = tmp2;
  obj.feedbackReasons = items;
  obj.otherKey = ActivityFeedbackReasons.OTHER;
  obj.trackOpen = function trackOpen() {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" });
  };
  obj.trackReport = function trackReport(dontShowAgain) {
    ({ rating, reason, feedback } = dontShowAgain);
    value = null;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain.dontShowAgain) {
      const obj2 = { application_id: activityApplication.id, rating };
      AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, obj2);
      const obj4 = { feedbackType: FeedbackType.ACTIVITY, location: "ActivityFeedbackActionSheet" };
      FeedbackUtils.processOptOut(obj4);
    }
    if (null != rating) {
      ToastUtils.presentFeedbackSent();
      const obj6 = { problem: value, channel, embeddedActivityLocation, feedback: null, activityApplication: null, analyticsData: null, location: "Activity End", rating: null };
      if (feedback == null) {
        feedback = "";
      }
      obj6.feedback = feedback;
      obj6.activityApplication = activityApplication;
      obj6.analyticsData = analyticsData;
      obj6.rating = rating;
      trackActivityProblemDefault(obj6);
    }
  };
  return jsx(FeedbackActionSheetDefault, { headerLabel: null, showHeaderCloseButton: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null });
});