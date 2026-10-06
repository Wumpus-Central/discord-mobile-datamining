// === Module 17533: ActivityFeedbackActionSheet ===

// Module 17533 (ActivityFeedbackActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Constants2 from "Constants" /* 2011 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import Constants3 from "Constants" /* 11262 */;
import FeedbackUtils from "FeedbackUtils" /* 11265 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 11283 */;
import getActivityReportOptionsDefault from "getActivityReportOptions" /* 17534 */;
import trackActivityProblemDefault from "trackActivityProblem" /* 17535 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let activityApplication;

const ActivityFeedbackReasons = Constants2.ActivityFeedbackReasons;
const AnalyticEvents = Constants.AnalyticEvents;
const FeedbackType = Constants3.FeedbackType;
const jsx = Fragment.jsx;
const items = [, , ];
({ OTHER: arr[0], ADS: arr[1], NOT_FUN: arr[2] } = ActivityFeedbackReasons);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((activityApplication) => {
  let embeddedActivityLocation;
  let tmp6;
  let obj = activityApplication(embeddedActivityLocation[7]);
  const cResult = obj.c(18);
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
    const tmp8 = channel(embeddedActivityLocation[8])(true, true === prop);
    cResult[0] = true === prop;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === activityApplication) {
    if (cResult[3] === analyticsData) {
      if (cResult[4] === channel) {
        let tmp9;
        let tmp10;
        let tmp14;
        let tmp13;
        if (cResult[5] === embeddedActivityLocation) {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== activityApplication.name) {
          const intl = tmp(tmp2[12]).intl;
          let obj2 = { applicationName: activityApplication.name };
          const formatToPlainStringResult = intl.formatToPlainString(activityApplication(embeddedActivityLocation[12]).t.QXYwoD, obj2);
          cResult[7] = activityApplication.name;
          cResult[8] = formatToPlainStringResult;
          tmp10 = formatToPlainStringResult;
        } else {
          tmp10 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[12]).intl;
          const stringResult = intl2.string(activityApplication(embeddedActivityLocation[12]).t["9hk2KF"]);
          const intl3 = tmp(tmp2[12]).intl;
          const stringResult1 = intl3.string(activityApplication(embeddedActivityLocation[12]).t.g1q5fr);
          cResult[9] = stringResult;
          cResult[10] = stringResult1;
          tmp14 = stringResult1;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[9];
          tmp14 = cResult[10];
        }
        if (cResult[11] !== activityApplication) {
          class S {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
              obj.track(AnalyticEvents.OPEN_POPOUT, obj2);
            }
          }
          cResult[11] = activityApplication;
          cResult[12] = S;
        } else {
          class S {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
              obj.track(AnalyticEvents.OPEN_POPOUT, obj2);
            }
          }
        }
        if (cResult[13] === tmp6) {
          class S {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
              obj.track(AnalyticEvents.OPEN_POPOUT, obj2);
            }
          }
        }
        cResult[13] = tmp6;
        cResult[14] = tmp10;
        cResult[15] = S;
        cResult[16] = tmp9;
        cResult[17] = jsx(channel(embeddedActivityLocation[13]), { headerLabel: tmp10, showHeaderCloseButton: true, ratingsBodyLabel: tmp13, reasonsHeaderLabel: tmp14, reasons: tmp6, feedbackReasons: items, otherKey: analyticsData.OTHER, trackOpen: S, trackReport: tmp9 });
        const tmp23 = jsx(channel(embeddedActivityLocation[13]), { headerLabel: tmp10, showHeaderCloseButton: true, ratingsBodyLabel: tmp13, reasonsHeaderLabel: tmp14, reasons: tmp6, feedbackReasons: items, otherKey: analyticsData.OTHER, trackOpen: S, trackReport: tmp9 });
      }
    }
  }
  const fn = function f(dontShowAgain) {
    let feedback;
    let rating;
    let reason;
    ({ rating, reason, feedback } = dontShowAgain);
    let value = null;
    dontShowAgain = dontShowAgain.dontShowAgain;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain) {
      const obj2 = { application_id: activityApplication.id, rating };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, obj2);
      const obj4 = { feedbackType: FeedbackType.ACTIVITY, location: "ActivityFeedbackActionSheet" };
      const obj3 = FeedbackUtils;
      obj3.processOptOut(obj4);
    }
    if (null != rating) {
      const obj5 = ToastUtils;
      obj5.presentFeedbackSent();
      const obj6 = { problem: value, channel, embeddedActivityLocation, feedback, activityApplication, analyticsData, location: "Activity End", rating };
      const tmp16 = trackActivityProblemDefault;
      if (feedback == null) {
        feedback = "";
      }
      tmp16(obj6);
    }
  };
  cResult[2] = activityApplication;
  cResult[3] = analyticsData;
  cResult[4] = channel;
  cResult[5] = embeddedActivityLocation;
  cResult[6] = fn;
  tmp9 = fn;
}) : ((activityApplication) => {
  let analyticsData;
  let channel;
  let embeddedActivityLocation;
  activityApplication = activityApplication.activityApplication;
  ({ channel: importDefault, embeddedActivityLocation: dependencyMap, analyticsData: ActivityFeedbackReasons } = activityApplication);
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (embeddedActivityConfig != null) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  const tmp2 = getActivityReportOptionsDefault(true, true === prop);
  FeedbackActionSheetDefault;
  const intl = activityApplication(1126).intl;
  let obj2 = { applicationName: activityApplication.name };
  const intl2 = activityApplication(1126).intl;
  const intl3 = activityApplication(1126).intl;
  return <tmp3 headerLabel={intl.formatToPlainString(activityApplication(1126).t.QXYwoD, obj2)} showHeaderCloseButton ratingsBodyLabel={intl2.string(activityApplication(1126).t["9hk2KF"])} reasonsHeaderLabel={intl3.string(activityApplication(1126).t.g1q5fr)} reasons={tmp2} feedbackReasons={items} otherKey={ActivityFeedbackReasons.OTHER} trackOpen={function trackOpen() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
    obj.track(AnalyticEvents.OPEN_POPOUT, obj2);
  }} trackReport={function trackReport(dontShowAgain) {
    let feedback;
    let rating;
    let reason;
    ({ rating, reason, feedback } = dontShowAgain);
    let value = null;
    dontShowAgain = dontShowAgain.dontShowAgain;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain) {
      const obj2 = { application_id: activityApplication.id, rating };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, obj2);
      const obj4 = { feedbackType: FeedbackType.ACTIVITY, location: "ActivityFeedbackActionSheet" };
      const obj3 = FeedbackUtils;
      obj3.processOptOut(obj4);
    }
    if (null != rating) {
      const obj5 = ToastUtils;
      obj5.presentFeedbackSent();
      const obj6 = { problem: value, channel: importDefault, embeddedActivityLocation: dependencyMap, feedback, activityApplication, analyticsData: ActivityFeedbackReasons, location: "Activity End", rating };
      const tmp16 = trackActivityProblemDefault;
      if (feedback == null) {
        feedback = "";
      }
      tmp16(obj6);
    }
  }} />;
});
const result = size.fileFinishedImporting("modules/activities/native/ActivityFeedbackActionSheet.tsx");

export default tmp3;