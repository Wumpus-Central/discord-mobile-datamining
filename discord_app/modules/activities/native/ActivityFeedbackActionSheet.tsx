// discord_app/modules/activities/native/ActivityFeedbackActionSheet.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import FeedbackUtils from "../../feedback/FeedbackUtils.tsx";
import FeedbackActionSheetDefault from "../../feedback/native/FeedbackActionSheet.tsx";
import getActivityReportOptionsDefault from "../getActivityReportOptions.tsx";
import trackActivityProblemDefault from "../trackActivityProblem.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ActivityFeedbackReasons = fn(2004).ActivityFeedbackReasons;
const AnalyticEvents = fn(1074).AnalyticEvents;
const FeedbackType = fn(11964).FeedbackType;
const jsx = fn(21).jsx;
const items = [, ,];
({ OTHER: arr[0], ADS: arr[1], NOT_FUN: arr[2] } = ActivityFeedbackReasons);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivityFeedbackActionSheet.tsx");

export default function ActivityFeedbackActionSheet(activityApplication) {
  activityApplication = activityApplication.activityApplication;
  ({
    channel: importDefault,
    embeddedActivityLocation: dependencyMap,
    analyticsData: ActivityFeedbackReasons,
  } = activityApplication);
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (embeddedActivityConfig != null) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  let obj = {
    headerLabel: null,
    showHeaderCloseButton: true,
    ratingsBodyLabel: null,
    reasonsHeaderLabel: null,
    reasons: null,
    feedbackReasons: null,
    otherKey: null,
    trackOpen: null,
    trackReport: null,
  };
  const tmp2 = getActivityReportOptionsDefault(true, true === prop);
  const intl = activityApplication(1115).intl;
  obj.headerLabel = intl.formatToPlainString(activityApplication(1115).t.QXYwoD, {
    applicationName: activityApplication.name,
  });
  const intl2 = activityApplication(1115).intl;
  obj.ratingsBodyLabel = intl2.string(activityApplication(1115).t["9hk2KF"]);
  const intl3 = activityApplication(1115).intl;
  obj.reasonsHeaderLabel = intl3.string(activityApplication(1115).t.g1q5fr);
  obj.reasons = tmp2;
  obj.feedbackReasons = items;
  obj.otherKey = ActivityFeedbackReasons.OTHER;
  obj.trackOpen = function trackOpen() {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, {
      type: "Activity Feedback Sheet",
      application_id: activityApplication.id,
      application_name: activityApplication.name,
      game_id: activityApplication.id,
      source: "Activity End",
    });
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
      const obj6 = {
        problem: value,
        channel,
        embeddedActivityLocation,
        feedback: null,
        activityApplication: null,
        analyticsData: null,
        location: "Activity End",
        rating: null,
      };
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
  return jsx(FeedbackActionSheetDefault, {
    headerLabel: null,
    showHeaderCloseButton: true,
    ratingsBodyLabel: null,
    reasonsHeaderLabel: null,
    reasons: null,
    feedbackReasons: null,
    otherKey: null,
    trackOpen: null,
    trackReport: null,
  });
}
