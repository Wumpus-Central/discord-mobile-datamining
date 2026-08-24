// discord_app/modules/ato_alerts/native/components/LikelyAtoWarningBanner.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { SafetyWarningTypes } from "../../../self_mod/ChannelSafetyWarningsStore.tsx";
import LIKELY_ATO_MORE_TIPS_MODAL_KEY from "../../Constants.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { MuteUntilSeconds } from "../../../user_settings/UserSettingsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
class LikelyAtoWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    handleLearnMore = function handleLearnMore() {
      let obj = channelId(senderId[8]);
      obj = { channelId, warningId, senderId, warningType: callback.LIKELY_ATO, cta: channelId(senderId[8]).CtaEventTypes.USER_MODAL_LEARN_MORE };
      obj.trackCtaEvent(obj);
      warningId(senderId[13]).openURL(closure_1_7);
    };
    closure_3 = closure_13();
    items = [, , ];
    items[0] = channelId;
    items[1] = warningId;
    items[2] = senderId;
    effect = closure_3.useEffect(() => {
      let obj = channelId(senderId[8]);
      obj = { channelId, warningId, senderId, warningType: callback.LIKELY_ATO };
      obj.trackViewedEvent(closure_1_8.SAFETY_WARNING_VIEWED, obj);
    }, items);
    items1 = [, ];
    items1[0] = channelId;
    items1[1] = warningId;
    callback = closure_3.useCallback(() => {
      const items = [warningId];
      const result = channelId(senderId[9]).dismissChannelSafetyWarnings(channelId, items);
      const obj = channelId(senderId[9]);
      warningId(senderId[10]).popWithKey(handleLearnMore);
    }, items1);
    closure_4 = callback;
    items2 = [, , , ];
    items2[0] = channelId;
    items2[1] = senderId;
    items2[2] = warningId;
    items2[3] = callback;
    closure_5 = closure_3.useCallback((cta) => {
      let obj = channelId(senderId[11]);
      obj = { channelId, guildId: null, muteDurationSeconds: closure_1_9.ALWAYS };
      const result = obj.handleMuteSettingPress(obj);
      warningId(senderId[12]).showMuteSuccessToast(senderId, channelId);
      const obj3 = warningId(senderId[12]);
      obj = { channelId, warningId, senderId, warningType: callback.LIKELY_ATO, cta };
      channelId(senderId[8]).trackCtaEvent(obj);
      callback();
    }, items2);
    obj = { channelId, warningId, senderId, warningType: closure_4.LIKELY_ATO, header: null, description: null, onDismiss: null, buttons: null };
    tmp3 = require("SafetyWarningBanner");
    intl = require("getSystemLocale").intl;
    obj[4] = intl.string(require("getSystemLocale").t.R8UsiI);
    intl2 = require("getSystemLocale").intl;
    obj[5] = intl2.string(require("getSystemLocale").t.lI8nQl);
    obj[6] = callback;
    obj = { text: null, variant: "primary", onpress: null };
    intl3 = require("getSystemLocale").intl;
    obj[0] = intl3.string(require("getSystemLocale").t.tC1pvL);
    obj[2] = function onpress() {
      let obj = warningId(senderId[10]);
      obj = { modalKey: handleLearnMore, headerStyle: moreTipsHeader.moreTipsHeader, channelId, warningId, senderId, description: null, safetyTips: null, actionItems: null, learnMore: null };
      const intl = channelId(senderId[15]).intl;
      obj[5] = intl.string(channelId(senderId[15]).t["/uid3p"]);
      const tmp = channelId(senderId[17])(senderId[16], senderId.paths);
      obj[6] = callback().map((children) => {
        let obj = { children: null };
        obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.title };
        const items = [callback3(callback(4739).Text, obj, arg1), ];
        obj = { variant: "text-xs/medium", color: "text-subtle", children: children.description };
        items[1] = callback3(callback(4739).Text, obj, arg1);
        obj[0] = items;
        return callback4(closure_11, obj);
      });
      obj = {
        senderId,
        handleMutePressed() {
          return callback2(closure_1_0(closure_1_2[8]).CtaEventTypes.USER_MODAL_MUTE);
        }
      };
      obj[7] = closure_1_10(warningId(senderId[19]), obj);
      obj1 = { variant: "text-sm/normal", color: "text-link", children: null };
      const intl2 = channelId(senderId[15]).intl;
      obj1[2] = intl2.format(channelId(senderId[15]).t.UkH122, { learnMoreLink: handleLearnMore });
      obj[8] = closure_1_10(channelId(senderId[18]).Text, obj1);
      obj.pushLazy(tmp, obj, handleLearnMore);
      const arr = callback();
      const obj2 = { learnMoreLink: handleLearnMore };
      const obj6 = channelId(senderId[8]);
      obj6.trackCtaEvent({ channelId, warningId, senderId, warningType: callback.LIKELY_ATO, cta: channelId(senderId[8]).CtaEventTypes.OPEN_MORE_TIPS });
    };
    items3 = [, ];
    items3[0] = obj;
    obj1 = { text: null, variant: "secondary", onpress: null };
    intl4 = require("getSystemLocale").intl;
    obj1[0] = intl4.string(require("getSystemLocale").t.ftIK2A);
    obj1[2] = function onpress() {
      return callback(channelId(senderId[8]).CtaEventTypes.USER_BANNER_MUTE);
    };
    items3[1] = obj1;
    obj[7] = items3;
    return jsx(tmp3, obj);
  }
}
({ getLikelyAtoMoreTips: c5, LIKELY_ATO_MORE_TIPS_MODAL_KEY: closure_6, LEARN_MORE_HC_ARTICLE: error } = LIKELY_ATO_MORE_TIPS_MODAL_KEY);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { moreTipsHeader: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoWarningBanner.tsx");

export default LikelyAtoWarningBanner;
export { LikelyAtoWarningBanner };