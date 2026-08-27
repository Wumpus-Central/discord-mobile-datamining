// === Module 11147: trackOpen ===

// Module 11147 (trackOpen)
import noopAll from "noop" /* 19 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closeActionSheetDefault from "closeActionSheet" /* 11148 */;
import { NotificationUserFeedbackReasons as closure_3 } from "NotificationUserFeedbackReasons" /* 11125 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function trackOpen() {
  expandEventPropertiesDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Notification Feedback Sheet", source: "Notification End" });
}
noopAll;
const result = require("set").fileFinishedImporting("modules/notifications/native/NotificationSurveyActionSheet.tsx");

export default function NotificationSurveyActionSheet(arg0) {
  ({ notificationType: require, location: importDefault, messageId: dependencyMap } = arg0);
  let obj = { value: constants.TOO_MANY, label: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.pLeQp0);
  const items = [obj, , ];
  obj = { value: constants.IRRELEVANT, label: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.tuwPcC);
  items[1] = obj;
  obj = { value: constants.DISLIKE_CONTENT, label: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.glUMhg);
  items[2] = obj;
  obj1 = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, trackOpen: null, trackReport: null };
  const intl4 = getSystemLocale.intl;
  obj1[0] = intl4.string(getSystemLocale.t.wGioO1);
  const intl5 = getSystemLocale.intl;
  obj1[3] = intl5.string(getSystemLocale.t.Yzl7Or);
  const intl6 = getSystemLocale.intl;
  obj1[4] = intl6.string(getSystemLocale.t.g1q5fr);
  obj1[5] = items;
  obj1[6] = trackOpen;
  obj1[7] = function trackReport(arg0) {
    ({ rating, reason } = arg0);
    if (null != rating) {
      let value = null;
      if (null != reason) {
        value = reason.value;
      }
      const obj = { reason: null, rating: null, notification_type: null, location: null, message_id: null };
      obj[0] = value;
      obj[1] = rating;
      obj[2] = closure_0;
      obj[3] = closure_1;
      obj[4] = closure_2;
      closure_1_1(closure_1_2[5]).track(closure_1_4.NOTIFICATION_REPORT_SUBMITTED, obj);
      const obj4 = closure_1_1(closure_1_2[5]);
      closure_1_0(closure_1_2[7]).handleSurveyCleanup();
      const obj2 = closure_1_0(closure_1_2[7]);
      closure_1_0(closure_1_2[8]).presentFeedbackSent();
      const obj3 = closure_1_0(closure_1_2[8]);
    }
  };
  return jsx(closeActionSheetDefault, { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, trackOpen: null, trackReport: null });
};