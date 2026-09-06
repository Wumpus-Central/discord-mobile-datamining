// === Module 11368: LikelyAtoWarningBanner ===

// Module 11368 (LikelyAtoWarningBanner)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import LinkingDefault from "Linking" /* 4255 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8404 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 9057 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11370 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 11371 */;
import LikelyAtoMoreTipsModalActionItemsDefault from "LikelyAtoMoreTipsModalActionItems" /* 11380 */;
import noop from "module_19" /* 19 */;

require = fn;
class LikelyAtoWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    handleLearnMore = function handleLearnMore() {
      const obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.LIKELY_ATO, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_LEARN_MORE };
      obj.trackCtaEvent(obj);
      LinkingDefault.openURL(React5);
    };
    closure_3 = closure_13();
    items = [, , ];
    items[0] = channelId;
    items[1] = warningId;
    items[2] = senderId;
    effect = closure_3.useEffect(() => {
      const obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.LIKELY_ATO };
      obj.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_VIEWED, obj);
    }, items);
    items1 = [, ];
    items1[0] = channelId;
    items1[1] = warningId;
    callback = closure_3.useCallback(() => {
      const items = [warningId];
      const result = ChannelSafetyWarningsActionCreators.dismissChannelSafetyWarnings(channelId, items);
      ModalActionCreatorsDefault.popWithKey(modalKey);
    }, items1);
    closure_4 = callback;
    items2 = [, , , ];
    items2[0] = channelId;
    items2[1] = senderId;
    items2[2] = warningId;
    items2[3] = callback;
    closure_5 = closure_3.useCallback((cta) => {
      let obj = { channelId, guildId: null, muteDurationSeconds: MuteUntilSeconds.ALWAYS };
      const result = obj.handleMuteSettingPress(obj);
      SafetyToastsActionCreatorsDefault.showMuteSuccessToast(senderId, channelId);
      obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.LIKELY_ATO, cta };
      SafetyWarningUtils.trackCtaEvent(obj);
      callback();
    }, items2);
    obj = { channelId, warningId, senderId, warningType: closure_4.LIKELY_ATO, header: null, description: null, onDismiss: null, buttons: null };
    tmp3 = warningId(senderId[14]);
    intl = channelId(senderId[15]).intl;
    obj.header = intl.string(channelId(senderId[15]).t.R8UsiI);
    intl2 = channelId(senderId[15]).intl;
    obj.description = intl2.string(channelId(senderId[15]).t.lI8nQl);
    obj.onDismiss = callback;
    obj = { text: null, variant: "primary", onpress: null };
    intl3 = channelId(senderId[15]).intl;
    obj.text = intl3.string(channelId(senderId[15]).t.tC1pvL);
    obj.onpress = function onpress() {
      let obj = { modalKey, headerStyle: moreTipsHeader.moreTipsHeader, channelId, warningId, senderId, description: null, safetyTips: null, actionItems: null, learnMore: null };
      const intl = util.intl;
      obj.description = intl.string(util.t["/uid3p"]);
      const tmp = asyncRequireImpl(11375, dependencyMap.paths);
      obj.safetyTips = hasOwnProperty().map((children, index) => {
        let obj = { children: null };
        obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.title };
        const items = [closure_1_10(channelId(4556).Text, obj, index), ];
        obj = { variant: "text-xs/medium", color: "text-subtle", children: children.description };
        items[1] = closure_1_10(channelId(4556).Text, obj, index);
        obj.children = items;
        return closure_1_12(closure_1_11, obj);
      });
      obj = {
        senderId,
        handleMutePressed() {
          return closure_1_5(channelId(senderId[8]).CtaEventTypes.USER_MODAL_MUTE);
        }
      };
      obj.actionItems = closure_2_10(LikelyAtoMoreTipsModalActionItemsDefault, obj);
      const obj1 = { variant: "text-sm/normal", color: "text-link", children: null };
      const intl2 = util.intl;
      obj1.children = intl2.format(util.t.UkH122, { learnMoreLink: handleLearnMore });
      obj.learnMore = closure_2_10(Text_Text.Text, obj1);
      obj.pushLazy(tmp, obj, modalKey);
      const arr = hasOwnProperty();
      const obj2 = { learnMoreLink: handleLearnMore };
      const obj6 = SafetyWarningUtils;
      obj6.trackCtaEvent({ channelId, warningId, senderId, warningType: SafetyWarningTypes.LIKELY_ATO, cta: SafetyWarningUtils.CtaEventTypes.OPEN_MORE_TIPS });
    };
    items3 = [, ];
    items3[0] = obj;
    obj1 = { text: null, variant: "secondary", onpress: null };
    intl4 = channelId(senderId[15]).intl;
    obj1.text = intl4.string(channelId(senderId[15]).t.ftIK2A);
    obj1.onpress = function onpress() {
      return closure_5(SafetyWarningUtils.CtaEventTypes.USER_BANNER_MUTE);
    };
    items3[1] = obj1;
    obj.buttons = items3;
    return jsx(tmp3, obj);
  }
}
const SafetyWarningTypes = fn(10915).SafetyWarningTypes;
const Constants = fn(11369);
({ getLikelyAtoMoreTips: hasOwnProperty, LIKELY_ATO_MORE_TIPS_MODAL_KEY: metroRequire, LEARN_MORE_HC_ARTICLE: closure_7 } = Constants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const MuteUntilSeconds = fn(1084).MuteUntilSeconds;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { moreTipsHeader: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createStyles.moreTipsHeader = createStyles;
createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoWarningBanner.tsx");

export default LikelyAtoWarningBanner;
export { LikelyAtoWarningBanner };