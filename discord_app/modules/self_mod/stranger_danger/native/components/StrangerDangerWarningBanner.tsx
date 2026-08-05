// discord_app/modules/self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx
import MoreTipsModalScreen from "MoreTipsModalScreen";
import upsertRelationship from "upsertRelationship";
import { SafetyWarningTypes } from "handleConnectionOpen";
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE";
import { AnalyticEvents } from "ME";
import { BLOCK_CONFIRMATION_ACTION_SHEET_KEY as closure_9 } from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import { jsx } from "StrangerDangerMoreTipsModalActionItems";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
class StrangerDangerWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    MoreTipsModalScreen = undefined;
    c4 = undefined;
    f84455 = undefined;
    c6 = undefined;
    MoreTipsModalScreen = jsx();
    tmp = channelId;
    tmp2 = senderId;
    obj = require("initialize");
    items = [];
    items[0] = c4;
    items1 = [];
    items1[0] = senderId;
    items2 = [, , ];
    items2[0] = channelId;
    items2[1] = warningId;
    items2[2] = senderId;
    stateFromStores = obj.useStateFromStores(items, () => callback.isBlocked(senderId), items1);
    effect = MoreTipsModalScreen.useEffect(() => {
      let obj = channelId(senderId[10]);
      obj = { channelId, warningId, senderId, warningType: callback1.STRANGER_DANGER };
      obj.trackViewedEvent(outer1_8.SAFETY_WARNING_VIEWED, obj);
    }, items2);
    items3 = [, ];
    items3[0] = channelId;
    items3[1] = warningId;
    callback = MoreTipsModalScreen.useCallback(() => {
      const items = [warningId];
      const result = channelId(senderId[11]).dismissChannelSafetyWarnings(channelId, items);
      const obj = channelId(senderId[11]);
      warningId(senderId[12]).popWithKey(callback2);
    }, items3);
    c4 = callback;
    items4 = [, , , ];
    items4[0] = callback;
    items4[1] = channelId;
    items4[2] = warningId;
    items4[3] = senderId;
    callback1 = MoreTipsModalScreen.useCallback((arg0) => {
      let closure_0 = arg0;
      return () => {
        outer1_4();
        let obj = channelId(senderId[10]);
        obj = { channelId: closure_0, warningId: outer1_1, senderId: outer1_2, warningType: callback1.STRANGER_DANGER, cta: closure_0 };
        obj.trackCtaEvent(obj);
      };
    }, items4);
    f84455 = callback1;
    items5 = [, , , , ];
    items5[0] = callback1;
    items5[1] = callback;
    items5[2] = channelId;
    items5[3] = warningId;
    items5[4] = senderId;
    callback2 = MoreTipsModalScreen.useCallback((arg0) => {
      let closure_0 = arg0;
      return () => {
        let obj = warningId(senderId[13]);
        obj = { userId: outer1_2, channelId: closure_0, onBlock: null, onSuccess: null, onIgnore: null, impressionName: null };
        obj[2] = outer1_5(closure_0);
        obj[3] = function onSuccess() {
          return callback(table[13]).hideActionSheet();
        };
        obj[4] = function onIgnore() {
          callback2();
          let obj = outer1_0(outer1_2[10]);
          obj = { channelId: closure_0, warningId: closure_1, senderId: closure_2, warningType: outer1_5.STRANGER_DANGER, cta: outer1_0(outer1_2[10]).CtaEventTypes.USER_BANNER_IGNORE_CONFIRM };
          obj.trackCtaEvent(obj);
        };
        obj[5] = channelId(senderId[16]).ImpressionNames.BLOCK_USER_CONFIRMATION;
        obj.openLazy(channelId(senderId[15])(senderId[14], senderId.paths), outer2_9, obj);
      };
    }, items5);
    c6 = callback2;
    tmp8 = jsx;
    obj = { channelId, warningId, senderId, warningType: f84455.STRANGER_DANGER, header: null, description: null, onDismiss: null, buttons: null };
    tmp9 = require("SafetyWarningBanner");
    intl = require("getSystemLocale").intl;
    obj[4] = intl.string(require("getSystemLocale").t.iOkDpM);
    intl2 = require("getSystemLocale").intl;
    obj[5] = intl2.string(require("getSystemLocale").t.ISUbcM);
    obj[6] = callback;
    obj1 = { text: null, variant: "primary", onpress: null };
    intl3 = require("getSystemLocale").intl;
    obj1[0] = intl3.string(require("getSystemLocale").t["Qk/c48"]);
    obj1[2] = function onpress() {
      let obj = warningId(senderId[12]);
      obj = { modalKey: callback2, headerStyle: moreTipsHeader.moreTipsHeader, channelId, warningId, senderId, description: null, safetyTips: null, actionItems: null };
      const intl = channelId(senderId[18]).intl;
      obj[5] = intl.string(channelId(senderId[18]).t.DJMZX6);
      const tmp = channelId(senderId[15])(senderId[19], senderId.paths);
      obj[6] = outer1_7().map((children) => callback2(callback(table[20]).Text, { variant: "text-sm/medium", children }, arg1));
      obj = { channelId, warningId, senderId, onBlockPressed: null };
      const arr = outer1_7();
      obj[3] = callback2(channelId(senderId[10]).CtaEventTypes.USER_MODAL_BLOCK_CONFIRM);
      obj[7] = outer1_10(warningId(senderId[21]), obj);
      obj.pushLazy(tmp, obj, callback2);
      const tmp2 = warningId(senderId[21]);
      const obj4 = channelId(senderId[10]);
      obj4.trackCtaEvent({ channelId, warningId, senderId, warningType: callback1.STRANGER_DANGER, cta: channelId(senderId[10]).CtaEventTypes.OPEN_MORE_TIPS });
    };
    items6 = [];
    items6[0] = obj1;
    if (stateFromStores) {
      items7 = [];
    } else {
      obj2 = { text: null, variant: "destructive", onpress: null };
      intl4 = require("getSystemLocale").intl;
      obj2[0] = intl4.string(require("getSystemLocale").t.ie0QdN);
      obj2[2] = callback2(require("trackViewedEvent").CtaEventTypes.USER_BANNER_BLOCK_CONFIRM);
      items7 = [];
      items7[0] = obj2;
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items7, 1);
    obj[7] = items6;
    return tmp8(tmp9, obj);
  }
}
({ STRANGER_DANGER_MORE_TIPS_MODAL_KEY: closure_6, getStrangerDangerSafetyTips: error } = LOCATION_CONTEXT_MOBILE);
createCacheKey = { moreTipsHeader: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("handleConnectionOpen").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx");

export default StrangerDangerWarningBanner;
export { StrangerDangerWarningBanner };