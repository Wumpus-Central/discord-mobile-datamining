// === Module 16569: ActivityFeedbackReasons ===

// Module 16569 (ActivityFeedbackReasons)
import noopAll from "noop" /* 19 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import closeActionSheetDefault from "closeActionSheet" /* 10832 */;
import getActivityReportOptionsDefault from "getActivityReportOptions" /* 16570 */;
import trackActivityProblemDefault from "trackActivityProblem" /* 16571 */;
import { ActivityFeedbackReasons } from "items3" /* 4481 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { FeedbackType } from "FeedbackRating" /* 10811 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
const items = [, , ];
({ OTHER: arr[0], ADS: arr[1], NOT_FUN: arr[2] } = ActivityFeedbackReasons);
const result = require("obj132").fileFinishedImporting("modules/activities/native/ActivityFeedbackActionSheet.tsx");

export default function ActivityFeedbackActionSheet(activityApplication) {
  activityApplication = activityApplication.activityApplication;
  ({ channel: importDefault, embeddedActivityLocation: dependencyMap, analyticsData: ActivityFeedbackReasons } = activityApplication);
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (embeddedActivityConfig != null) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  const tmp2 = getActivityReportOptionsDefault(true, true === prop);
  const intl = activityApplication(1236).intl;
  let obj = { applicationName: activityApplication.name };
  obj[0] = intl.formatToPlainString(activityApplication(1236).t.QXYwoD, obj);
  const intl2 = activityApplication(1236).intl;
  obj[2] = intl2.string(activityApplication(1236).t["9hk2KF"]);
  const intl3 = activityApplication(1236).intl;
  obj[3] = intl3.string(activityApplication(1236).t.g1q5fr);
  obj[4] = tmp2;
  obj[5] = items;
  obj[6] = ActivityFeedbackReasons.OTHER;
  obj[7] = function trackOpen() {
    const obj = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
    obj.track(AnalyticEvents.OPEN_POPOUT, obj);
  };
  obj[8] = function trackReport(dontShowAgain) {
    ({ rating, reason, feedback } = dontShowAgain);
    let value = null;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain.dontShowAgain) {
      let obj = { application_id: null, rating: null };
      obj[0] = activityApplication.id;
      obj[1] = rating;
      obj.track(AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, obj);
      obj = { feedbackType: null, location: "ActivityFeedbackActionSheet" };
      obj[0] = FeedbackType.ACTIVITY;
      activityApplication(dependencyMap[9]).processOptOut(obj);
      const obj3 = activityApplication(dependencyMap[9]);
    }
    if (null != rating) {
      activityApplication(dependencyMap[10]).presentFeedbackSent();
      obj1 = { problem: null, channel: null, embeddedActivityLocation: null, feedback: null, activityApplication: null, analyticsData: null, location: "Activity End", rating: null };
      obj1[0] = value;
      obj1[1] = closure_1;
      obj1[2] = closure_2;
      const obj5 = activityApplication(dependencyMap[10]);
      if (feedback == null) {
        feedback = "";
      }
      obj1[3] = feedback;
      obj1[4] = activityApplication;
      obj1[5] = closure_3;
      obj1[7] = rating;
      trackActivityProblemDefault(obj1);
    }
  };
  return jsx(closeActionSheetDefault, { applicationName: activityApplication.name });
};