// discord_app/modules/activities/native/ActivityFeedbackActionSheet.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import FeedbackUtils from "../../feedback/FeedbackUtils.tsx";
import FeedbackActionSheetDefault from "../../feedback/native/FeedbackActionSheet.tsx";
import getActivityReportOptionsDefault from "../getActivityReportOptions.tsx";
import trackActivityProblemDefault from "../trackActivityProblem.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ActivityFeedbackReasons = fn(1920).ActivityFeedbackReasons;
const AnalyticEvents = fn(1074).AnalyticEvents;
const FeedbackType = fn(11626).FeedbackType;
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
  const intl = activityApplication(1114).intl;
  obj = { applicationName: activityApplication.name };
  obj.headerLabel = intl.formatToPlainString(activityApplication(1114).t.QXYwoD, obj);
  const intl2 = activityApplication(1114).intl;
  obj.ratingsBodyLabel = intl2.string(activityApplication(1114).t["9hk2KF"]);
  const intl3 = activityApplication(1114).intl;
  obj.reasonsHeaderLabel = intl3.string(activityApplication(1114).t.g1q5fr);
  obj.reasons = tmp2;
  obj.feedbackReasons = items;
  obj.otherKey = ActivityFeedbackReasons.OTHER;
  obj.trackOpen = function trackOpen() {
    const obj = {
      type: "Activity Feedback Sheet",
      application_id: activityApplication.id,
      application_name: activityApplication.name,
      game_id: activityApplication.id,
      source: "Activity End",
    };
    obj.track(AnalyticEvents.OPEN_POPOUT, obj);
  };
  obj.trackReport = function trackReport(dontShowAgain) {
    ({ rating, reason, feedback } = dontShowAgain);
    value = null;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain.dontShowAgain) {
      let obj = { application_id: activityApplication.id, rating };
      obj.track(AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, obj);
      obj = { feedbackType: FeedbackType.ACTIVITY, location: "ActivityFeedbackActionSheet" };
      FeedbackUtils.processOptOut(obj);
    }
    if (null != rating) {
      ToastUtils.presentFeedbackSent();
      const obj1 = {
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
      obj1.feedback = feedback;
      obj1.activityApplication = activityApplication;
      obj1.analyticsData = analyticsData;
      obj1.rating = rating;
      trackActivityProblemDefault(obj1);
    }
  };
  return jsx(FeedbackActionSheetDefault, { applicationName: activityApplication.name });
}
