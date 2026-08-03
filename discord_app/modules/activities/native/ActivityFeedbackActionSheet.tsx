import "noop";
import { ActivityFeedbackReasons } from "items3";
import { AnalyticEvents } from "ME";
import { FeedbackType } from "FeedbackRating";
import { jsx } from "jsxProd";

const require = arg1;
const items = [, , ];
({ OTHER: arr[0], ADS: arr[1], NOT_FUN: arr[2] } = ActivityFeedbackReasons);
const result = require("ME").fileFinishedImporting("modules/activities/native/ActivityFeedbackActionSheet.tsx");

export default function ActivityFeedbackActionSheet(activityApplication) {
  let ActivityFeedbackReasons;
  let dependencyMap;
  let importDefault;
  activityApplication = activityApplication.activityApplication;
  ({ channel: importDefault, embeddedActivityLocation: dependencyMap, analyticsData: ActivityFeedbackReasons } = activityApplication);
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (embeddedActivityConfig != null) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  let obj = { headerLabel: null, showHeaderCloseButton: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null };
  const tmp2 = importDefault(16262)(true, true === prop);
  const intl = activityApplication(1236).intl;
  obj = { applicationName: activityApplication.name };
  obj[0] = intl.formatToPlainString(activityApplication(1236).t.QXYwoD, obj);
  const intl2 = activityApplication(1236).intl;
  obj[2] = intl2.string(activityApplication(1236).t["9hk2KF"]);
  const intl3 = activityApplication(1236).intl;
  obj[3] = intl3.string(activityApplication(1236).t.g1q5fr);
  obj[4] = tmp2;
  obj[5] = items;
  obj[6] = ActivityFeedbackReasons.OTHER;
  obj[7] = function trackOpen() {
    let obj = outer1_1(outer1_2[5]);
    obj = { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" };
    obj.track(outer1_4.OPEN_POPOUT, obj);
  };
  obj[8] = function trackReport(dontShowAgain) {
    let feedback;
    let rating;
    let reason;
    ({ rating, reason, feedback } = dontShowAgain);
    let value = null;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain.dontShowAgain) {
      let obj = outer1_1(outer1_2[5]);
      obj = { application_id: null, rating: null };
      obj[0] = activityApplication.id;
      obj[1] = rating;
      obj.track(outer1_4.ACTIVITY_REPORT_DONT_SHOW, obj);
      obj = { feedbackType: null, location: "ActivityFeedbackActionSheet" };
      obj[0] = outer1_5.ACTIVITY;
      activityApplication(outer1_2[9]).processOptOut(obj);
      const obj3 = activityApplication(outer1_2[9]);
    }
    if (null != rating) {
      activityApplication(outer1_2[10]).presentFeedbackSent();
      const obj1 = { problem: null, channel: null, embeddedActivityLocation: null, feedback: null, activityApplication: null, analyticsData: null, location: "Activity End", rating: null };
      obj1[0] = value;
      obj1[1] = closure_1;
      obj1[2] = closure_2;
      const obj5 = activityApplication(outer1_2[10]);
      if (feedback == null) {
        feedback = "";
      }
      obj1[3] = feedback;
      obj1[4] = activityApplication;
      obj1[5] = closure_3;
      obj1[7] = rating;
      outer1_1(outer1_2[11])(obj1);
      const tmp16 = outer1_1(outer1_2[11]);
    }
  };
  return jsx(importDefault(9700), { applicationName: activityApplication.name });
};