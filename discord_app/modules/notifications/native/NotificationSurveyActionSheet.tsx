// discord_app/modules/notifications/native/NotificationSurveyActionSheet.tsx
import "noop";
import { NotificationUserFeedbackReasons as closure_3 } from "NotificationUserFeedbackReasons";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function trackOpen() {
  require("../../../utils/AnalyticsUtils.tsx").track(AnalyticEvents.OPEN_POPOUT, { type: "Notification Feedback Sheet", source: "Notification End" });
}
const result = require("ME").fileFinishedImporting("modules/notifications/native/NotificationSurveyActionSheet.tsx");

export default function NotificationSurveyActionSheet(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ notificationType: require, location: importDefault, messageId: dependencyMap } = arg0);
  let obj = { value: constants.TOO_MANY, label: null };
  let intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.pLeQp0);
  const items = [obj, , ];
  obj = { value: constants.IRRELEVANT, label: null };
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.tuwPcC);
  items[1] = obj;
  obj = { value: constants.DISLIKE_CONTENT, label: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.glUMhg);
  items[2] = obj;
  const obj1 = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, trackOpen: null, trackReport: null };
  const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[0] = intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.wGioO1);
  const intl5 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[3] = intl5.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.Yzl7Or);
  const intl6 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[4] = intl6.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.g1q5fr);
  obj1[5] = items;
  obj1[6] = trackOpen;
  obj1[7] = function trackReport(arg0) {
    let rating;
    let reason;
    ({ rating, reason } = arg0);
    if (null != rating) {
      let value = null;
      if (null != reason) {
        value = reason.value;
      }
      let obj = { reason: null, rating: null, notification_type: null, location: null, message_id: null };
      obj[0] = value;
      obj[1] = rating;
      obj[2] = closure_0;
      obj[3] = closure_1;
      obj[4] = closure_2;
      outer1_1(outer1_2[5]).track(outer1_4.NOTIFICATION_REPORT_SUBMITTED, obj);
      const obj5 = outer1_1(outer1_2[5]);
      const tmp10 = outer1_1;
      outer1_0(outer1_2[7]).handleSurveyCleanup();
      const obj2 = outer1_0(outer1_2[7]);
      obj = { header: null };
      const tmp10Result = tmp10(outer1_2[8]);
      const intl = outer1_0(tmp11[4]).intl;
      obj[0] = intl.string(outer1_0(outer1_2[4]).t.wGioO1);
      tmp10Result.openLazy(outer1_0(outer1_2[10])(outer1_2[9], outer1_2.paths), "UserFeedbackSurvey", obj);
      const tmp8 = outer1_0(outer1_2[10])(outer1_2[9], outer1_2.paths);
    }
  };
  return jsx(require("../../feedback/native/FeedbackActionSheet.tsx"), { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, trackOpen: null, trackReport: null });
};