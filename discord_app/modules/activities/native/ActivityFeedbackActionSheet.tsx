// === Module 17191: ActivityFeedbackReasons ===

// Module 17191 (ActivityFeedbackReasons)
import noopAll from "noop" /* 19 */;
import closeActionSheetDefault from "closeActionSheet" /* 11460 */;
import getActivityReportOptionsDefault from "getActivityReportOptions" /* 17192 */;
import { ActivityFeedbackReasons } from "items3" /* 4506 */;
import { AnalyticEvents } from "ME" /* 673 */;
import { FeedbackType } from "FeedbackRating" /* 11439 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const items = [, , ];
({ OTHER: arr[0], ADS: arr[1], NOT_FUN: arr[2] } = ActivityFeedbackReasons);
const result = require("set").fileFinishedImporting("modules/activities/native/ActivityFeedbackActionSheet.tsx");

export default function ActivityFeedbackActionSheet(activityApplication) {
  activityApplication = activityApplication.activityApplication;
  ({ channel: importDefault, embeddedActivityLocation: dependencyMap, analyticsData: ActivityFeedbackReasons } = activityApplication);
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (embeddedActivityConfig != null) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  let obj = { headerLabel: null, showHeaderCloseButton: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null };
  const tmp2 = getActivityReportOptionsDefault(true, true === prop);
  const intl = activityApplication(1233).intl;
  obj = { applicationName: activityApplication.name };
  obj[0] = intl.formatToPlainString(activityApplication(1233).t.QXYwoD, obj);
  const intl2 = activityApplication(1233).intl;
  obj[2] = intl2.string(activityApplication(1233).t["9hk2KF"]);
  const intl3 = activityApplication(1233).intl;
  obj[3] = intl3.string(activityApplication(1233).t.g1q5fr);
  obj[4] = tmp2;
  obj[5] = items;
  obj[6] = ActivityFeedbackReasons.OTHER;
  obj[7] = function trackOpen() {
    let obj = closure_1_1(closure_1_2[5]);
    obj = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
    obj.track(closure_1_4.OPEN_POPOUT, obj);
  };
  obj[8] = function trackReport(dontShowAgain) {
    ({ rating, reason, feedback } = dontShowAgain);
    let value = null;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain.dontShowAgain) {
      let obj = closure_1_1(closure_1_2[5]);
      obj = { application_id: null, rating: null };
      obj[0] = activityApplication.id;
      obj[1] = rating;
      obj.track(closure_1_4.ACTIVITY_REPORT_DONT_SHOW, obj);
      obj = { feedbackType: null, location: "ActivityFeedbackActionSheet" };
      obj[0] = closure_1_5.ACTIVITY;
      activityApplication(closure_1_2[9]).processOptOut(obj);
      const obj3 = activityApplication(closure_1_2[9]);
    }
    if (null != rating) {
      activityApplication(closure_1_2[10]).presentFeedbackSent();
      obj1 = { problem: null, channel: null, embeddedActivityLocation: null, feedback: null, activityApplication: null, analyticsData: null, location: "Activity End", rating: null };
      obj1[0] = value;
      obj1[1] = closure_1;
      obj1[2] = closure_2;
      const obj5 = activityApplication(closure_1_2[10]);
      if (feedback == null) {
        feedback = "";
      }
      obj1[3] = feedback;
      obj1[4] = activityApplication;
      obj1[5] = closure_3;
      obj1[7] = rating;
      closure_1_1(closure_1_2[11])(obj1);
      const tmp16 = closure_1_1(closure_1_2[11]);
    }
  };
  return jsx(closeActionSheetDefault, { applicationName: activityApplication.name });
};