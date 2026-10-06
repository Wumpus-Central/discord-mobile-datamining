// === Module 11282: NotificationSurveyActionSheet ===

// Module 11282 (NotificationSurveyActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import intl7 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import Constants2 from "Constants" /* 11260 */;
import PushFeedbackActions from "PushFeedbackActions" /* 11263 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 11283 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let notificationType;

function trackOpen() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Notification Feedback Sheet", source: "Notification End" });
}
const constants = Constants2.NotificationUserFeedbackReasons;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((notificationType) => {
  let first;
  let intl;
  let intl2;
  let intl3;
  let messageId;
  let obj = notificationType(messageId[7]);
  const cResult = obj.c(10);
  notificationType = notificationType.notificationType;
  const _location = notificationType.location;
  messageId = notificationType.messageId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { value: constants.TOO_MANY, label: intl.string(notificationType(messageId[4]).t.pLeQp0) };
    intl = tmp(tmp2[4]).intl;
    const items = [obj2, , ];
    let obj3 = { value: constants.IRRELEVANT, label: intl2.string(notificationType(messageId[4]).t.tuwPcC) };
    intl2 = tmp(tmp2[4]).intl;
    items[1] = obj3;
    const obj4 = { value: constants.DISLIKE_CONTENT, label: intl3.string(notificationType(messageId[4]).t.glUMhg) };
    intl3 = tmp(tmp2[4]).intl;
    items[2] = obj4;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === _location) {
    if (cResult[2] === messageId) {
      let tmp6;
      let tmp7;
      let tmp10;
      let tmp9;
      let tmp13;
      if (cResult[3] === notificationType) {
        tmp6 = cResult[4];
      }
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(tmp2[4]).intl;
        const stringResult = intl4.string(notificationType(messageId[4]).t.wGioO1);
        cResult[5] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[5];
      }
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(tmp2[4]).intl;
        const stringResult1 = intl5.string(notificationType(messageId[4]).t.Yzl7Or);
        const intl6 = tmp(tmp2[4]).intl;
        const stringResult2 = intl6.string(notificationType(messageId[4]).t.g1q5fr);
        cResult[6] = stringResult1;
        cResult[7] = stringResult2;
        tmp10 = stringResult2;
        tmp9 = stringResult1;
      } else {
        tmp9 = cResult[6];
        tmp10 = cResult[7];
      }
      if (cResult[8] !== tmp6) {
        const tmp17 = jsx(_location(messageId[10]), { headerLabel: tmp7, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: tmp9, reasonsHeaderLabel: tmp10, reasons: first, trackOpen, trackReport: tmp6 });
        cResult[8] = tmp6;
        cResult[9] = tmp17;
        tmp13 = tmp17;
      } else {
        tmp13 = cResult[9];
      }
      return tmp13;
    }
  }
  const fn = function b(arg0) {
    let rating;
    let reason;
    ({ rating, reason } = arg0);
    if (null != rating) {
      let value = null;
      const track = AnalyticsUtilsDefault.track;
      const NOTIFICATION_REPORT_SUBMITTED = AnalyticEvents.NOTIFICATION_REPORT_SUBMITTED;
      AnalyticsUtilsDefault;
      if (null != reason) {
        value = reason.value;
      }
      const obj = { reason: value, rating, notification_type: notificationType, location: _location, message_id: messageId };
      track(NOTIFICATION_REPORT_SUBMITTED, obj);
      const obj2 = PushFeedbackActions;
      obj2.handleSurveyCleanup();
      const obj3 = ToastUtils;
      obj3.presentFeedbackSent();
    }
  };
  cResult[1] = _location;
  cResult[2] = messageId;
  cResult[3] = notificationType;
  cResult[4] = fn;
  tmp6 = fn;
}) : ((arg0) => {
  let _location;
  let intl;
  let intl2;
  let intl3;
  let message_id;
  let notification_type;
  ({ notificationType: require, location: importDefault, messageId: dependencyMap } = arg0);
  let obj = { value: constants.TOO_MANY, label: intl.string(intl7.t.pLeQp0) };
  intl = intl7.intl;
  const items = [obj, , ];
  let obj2 = { value: constants.IRRELEVANT, label: intl2.string(intl7.t.tuwPcC) };
  intl2 = intl7.intl;
  items[1] = obj2;
  let obj3 = { value: constants.DISLIKE_CONTENT, label: intl3.string(intl7.t.glUMhg) };
  intl3 = intl7.intl;
  items[2] = obj3;
  FeedbackActionSheetDefault;
  const intl4 = intl7.intl;
  const intl5 = intl7.intl;
  const intl6 = intl7.intl;
  return <tmp headerLabel={intl4.string(intl7.t.wGioO1)} showHeaderCloseButton hideDontShowAgainCheckbox ratingsBodyLabel={intl5.string(intl7.t.Yzl7Or)} reasonsHeaderLabel={intl6.string(intl7.t.g1q5fr)} reasons={items} trackOpen={trackOpen} trackReport={function trackReport(arg0) {
    let rating;
    let reason;
    ({ rating, reason } = arg0);
    if (null != rating) {
      let value = null;
      const track = AnalyticsUtilsDefault.track;
      const NOTIFICATION_REPORT_SUBMITTED = AnalyticEvents.NOTIFICATION_REPORT_SUBMITTED;
      AnalyticsUtilsDefault;
      if (null != reason) {
        value = reason.value;
      }
      const obj = { reason: value, rating, notification_type: require, location: importDefault, message_id: dependencyMap };
      track(NOTIFICATION_REPORT_SUBMITTED, obj);
      const obj2 = PushFeedbackActions;
      obj2.handleSurveyCleanup();
      const obj3 = ToastUtils;
      obj3.presentFeedbackSent();
    }
  }} />;
});
const result = size.fileFinishedImporting("modules/notifications/native/NotificationSurveyActionSheet.tsx");

export default tmp3;