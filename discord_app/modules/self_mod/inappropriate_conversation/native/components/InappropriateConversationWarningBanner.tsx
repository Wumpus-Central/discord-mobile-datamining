// === Module 11021: InappropriateConversationWarningBanner ===

// Module 11021 (InappropriateConversationWarningBanner)
import closure_3 from "noop" /* 19 */;
import closure_4 from "markAllUserIdListsStale" /* 4130 */;
import { SafetyWarningTypes } from "handleConnectionOpen" /* 10653 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
class InappropriateConversationWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    closure_3 = undefined;
    closure_4 = undefined;
    items = [, , ];
    items[0] = channelId;
    items[1] = warningId;
    items[2] = senderId;
    effect = closure_3.useEffect(() => {
      let obj = channelId(senderId[4]);
      obj = { channelId, warningId, senderId, warningType: closure_1_5.INAPPROPRIATE_CONVERSATION_TIER_2, viewName: channelId(senderId[4]).ViewNameTypes.SAFETY_WARNING_BANNER };
      obj.trackNamedViewEvent(obj);
    }, items);
    items1 = [, , ];
    items1[0] = channelId;
    items1[1] = warningId;
    items1[2] = senderId;
    callback = closure_3.useCallback((cta) => {
      let obj = channelId(senderId[4]);
      obj = { channelId, warningId, senderId, warningType: closure_1_5.INAPPROPRIATE_CONVERSATION_TIER_2, cta };
      obj.trackCtaEvent(obj);
    }, items1);
    closure_3 = callback;
    tmp3 = channelId;
    tmp4 = senderId;
    obj = require("initialize");
    items2 = [];
    items2[0] = closure_4;
    items3 = [];
    items3[0] = senderId;
    items4 = [, ];
    items4[0] = channelId;
    items4[1] = warningId;
    stateFromStores = obj.useStateFromStores(items2, () => callback1.isBlocked(senderId), items3);
    callback1 = closure_3.useCallback(() => {
      const items = [warningId];
      const result = channelId(senderId[6]).dismissChannelSafetyWarnings(channelId, items);
    }, items4);
    closure_4 = callback1;
    items5 = [, , , ];
    items5[0] = callback1;
    items5[1] = channelId;
    items5[2] = warningId;
    items5[3] = senderId;
    items6 = [, , , ];
    items6[0] = channelId;
    items6[1] = warningId;
    items6[2] = senderId;
    items6[3] = callback;
    callback2 = closure_3.useCallback(() => {
      let obj = warningId(senderId[7]);
      obj = {
        importer() {
          return closure_1_0(closure_1_2[9])(closure_1_2[8], closure_1_2.paths).then((arg0) => {
            closure_0 = arg0.default;
            return (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.channelId = closure_0;
              obj.warningId = closure_1_1;
              obj.warningType = closure_2_5.INAPPROPRIATE_CONVERSATION_TIER_2;
              obj.senderId = closure_1_2;
              obj.analyticsBlockContext = closure_2_0(closure_2_2[4]).CtaEventTypes.USER_BANNER_BLOCK_CONFIRM;
              obj.analyticsBlockAndReportContext = closure_2_0(closure_2_2[4]).CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM;
              obj.analyticsCancelContext = closure_2_0(closure_2_2[4]).CtaEventTypes.USER_BANNER_BLOCK_CANCEL;
              obj.onDismiss = closure_1_4;
              return closure_2_6(closure_0, obj);
            };
          });
        }
      };
      obj.openLazy(obj);
    }, items5);
    callback3 = closure_3.useCallback(() => {
      const result = channelId(senderId[10]).openSafetyToolsActionSheet(channelId, senderId, warningId, closure_1_5.INAPPROPRIATE_CONVERSATION_TIER_2);
      callback(channelId(senderId[4]).CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS);
    }, items6);
    tmp9 = jsx;
    obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2, header: null, description: null, onDismiss: null, buttons: null };
    tmp10 = require("SafetyWarningBanner");
    intl = require("getSystemLocale").intl;
    obj[4] = intl.string(require("getSystemLocale").t.ZzlB5p);
    intl2 = require("getSystemLocale").intl;
    obj[5] = intl2.string(require("getSystemLocale").t["D1aU+h"]);
    obj[6] = callback1;
    obj1 = { text: null, variant: "primary", onpress: null };
    intl3 = require("getSystemLocale").intl;
    obj1[0] = intl3.string(require("getSystemLocale").t.Qyu4UK);
    obj1[2] = callback3;
    items7 = [];
    items7[0] = obj1;
    if (stateFromStores) {
      items8 = [];
    } else {
      obj2 = { text: null, variant: "secondary", onpress: null };
      intl4 = require("getSystemLocale").intl;
      obj2[0] = intl4.string(require("getSystemLocale").t["7q0bNY"]);
      obj2[2] = callback2;
      items8 = [];
      items8[0] = obj2;
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items8, 1);
    obj[7] = items7;
    return tmp9(tmp10, obj);
  }
}
let result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationWarningBanner.tsx");

export default InappropriateConversationWarningBanner;
export { InappropriateConversationWarningBanner };