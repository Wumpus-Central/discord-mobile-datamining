// === Module 10601: InappropriateConversationBlockAndReportAlert ===

// Module 10601 (InappropriateConversationBlockAndReportAlert)
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
class InappropriateConversationBlockAndReportAlert {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    warningType = global.warningType;
    senderId = global.senderId;
    analyticsBlockContext = global.analyticsBlockContext;
    analyticsBlockAndReportContext = global.analyticsBlockAndReportContext;
    closure_5 = analyticsBlockAndReportContext;
    analyticsCancelContext = global.analyticsCancelContext;
    onDismiss = global.onDismiss;
    closure_8 = undefined;
    items = [, , , ];
    items[0] = channelId;
    items[1] = warningId;
    items[2] = senderId;
    items[3] = warningType;
    callback = senderId.useCallback((cta) => {
      channelId(warningType[2]);
      const obj = { channelId, warningId, senderId, warningType, cta };
      obj.trackCtaEvent(obj);
    }, items);
    closure_8 = callback;
    items1 = [, ];
    items1[0] = callback;
    items1[1] = analyticsCancelContext;
    items2 = [, , ];
    items2[0] = onDismiss;
    items2[1] = callback;
    items2[2] = analyticsBlockContext;
    callback1 = senderId.useCallback(() => {
      callback(analyticsCancelContext);
    }, items1);
    items3 = [, , ];
    items3[0] = onDismiss;
    items3[1] = callback;
    items3[2] = analyticsBlockAndReportContext;
    callback2 = senderId.useCallback(() => {
      if (onDismiss != null) {
        tmp();
      }
      callback(analyticsBlockContext);
    }, items2);
    callback3 = senderId.useCallback(() => {
      if (onDismiss != null) {
        tmp();
      }
      callback(analyticsBlockAndReportContext);
    }, items3);
    obj = { userId: senderId, channelId, onClose: global.onClose, onCancel: callback1, onBlock: callback2, onBlockAndReport: callback3, blockButtonVariant: "primary", description: null };
    tmp5 = require("ConfirmBlockUserAlert");
    intl = require("getSystemLocale").intl;
    obj[7] = intl.string(require("getSystemLocale").t["5NhTvu"]);
    return analyticsBlockContext(tmp5, obj);
  }
}
const result = require("obj132").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/InappropriateConversationBlockAndReportAlert.tsx");

export default InappropriateConversationBlockAndReportAlert;
export { InappropriateConversationBlockAndReportAlert };