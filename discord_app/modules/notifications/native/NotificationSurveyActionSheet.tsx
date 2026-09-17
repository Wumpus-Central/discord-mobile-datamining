// === Module 11796: NotificationSurveyActionSheet ===

// Module 11796 (NotificationSurveyActionSheet)
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastUtils from "ToastUtils" /* 4337 */;
import PushFeedbackActions from "PushFeedbackActions" /* 11777 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 11797 */;
import noop from "module_19" /* 19 */;

require = fn;
function trackOpen() {
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Notification Feedback Sheet", source: "Notification End" });
}
const constants = fn(11774).NotificationUserFeedbackReasons;
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
  let obj2 = { value: constants.IRRELEVANT, label: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.tuwPcC);
  items[1] = obj2;
  let obj3 = { value: constants.DISLIKE_CONTENT, label: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.glUMhg);
  items[2] = obj3;
  let obj4 = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, trackOpen: null, trackReport: null };
  const intl4 = util.intl;
  obj4.headerLabel = intl4.string(util.t.wGioO1);
  const intl5 = util.intl;
  obj4.ratingsBodyLabel = intl5.string(util.t.Yzl7Or);
  const intl6 = util.intl;
  obj4.reasonsHeaderLabel = intl6.string(util.t.g1q5fr);
  obj4.reasons = items;
  obj4.trackOpen = trackOpen;
  obj4.trackReport = function trackReport(arg0) {
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