// === Module 11646: NotificationSurveyActionSheet ===

// Module 11646 (NotificationSurveyActionSheet)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import PushFeedbackActions from "PushFeedbackActions" /* 11627 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 11647 */;
import noop from "module_19" /* 19 */;

require = fn;
function trackOpen() {
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Notification Feedback Sheet", source: "Notification End" });
}
const constants = fn(11624).NotificationUserFeedbackReasons;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/native/NotificationSurveyActionSheet.tsx");

export default function NotificationSurveyActionSheet(arg0) {
  ({ notificationType: require, location: importDefault, messageId: dependencyMap } = arg0);
  let obj = { value: constants.TOO_MANY, label: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.pLeQp0);
  const items = [obj, , ];
  obj = { value: constants.IRRELEVANT, label: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.tuwPcC);
  items[1] = obj;
  obj = { value: constants.DISLIKE_CONTENT, label: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.glUMhg);
  items[2] = obj;
  const obj1 = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, trackOpen: null, trackReport: null };
  const intl4 = util.intl;
  obj1.headerLabel = intl4.string(util.t.wGioO1);
  const intl5 = util.intl;
  obj1.ratingsBodyLabel = intl5.string(util.t.Yzl7Or);
  const intl6 = util.intl;
  obj1.reasonsHeaderLabel = intl6.string(util.t.g1q5fr);
  obj1.reasons = items;
  obj1.trackOpen = trackOpen;
  obj1.trackReport = function trackReport(arg0) {
    ({ rating, reason } = arg0);
    if (null != rating) {
      value = null;
      if (null != reason) {
        value = reason.value;
      }
      const obj = { reason: value, rating, notification_type, location: _location, message_id };
      AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_REPORT_SUBMITTED, obj);
      PushFeedbackActions.handleSurveyCleanup();
      ToastUtils.presentFeedbackSent();
    }
  };
  return jsx(FeedbackActionSheetDefault, { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, trackOpen: null, trackReport: null });
};