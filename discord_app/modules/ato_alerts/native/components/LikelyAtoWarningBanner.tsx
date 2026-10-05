// === Module 9796: LikelyAtoWarningBanner ===

// Module 9796 (LikelyAtoWarningBanner)
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import intl5 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import LinkingDefault from "Linking" /* 4565 */;
import Text_Text from "Text/Text" /* 4886 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8080 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 9786 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 9798 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 9799 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 9800 */;
import LikelyAtoMoreTipsModalActionItemsDefault from "LikelyAtoMoreTipsModalActionItems" /* 9812 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 9797 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
class LikelyAtoWarningBanner {
  constructor(channelId) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items3;
    let moreTipsHeader;
    channelId = channelId.channelId;
    const warningId = channelId.warningId;
    const senderId = channelId.senderId;
    function handleLearnMore() {
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.LIKELY_ATO, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_LEARN_MORE };
      obj.trackCtaEvent(obj2);
      const obj3 = LinkingDefault;
      obj3.openURL(metroImportDefault);
    }
    react = closure_13();
    let items = [channelId, warningId, senderId];
    const effect = react.useEffect(() => {
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.LIKELY_ATO };
      obj.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_VIEWED, obj2);
    }, items);
    const items1 = [channelId, warningId];
    const onDismiss = react.useCallback(() => {
      const items = [warningId];
      const obj = ChannelSafetyWarningsActionCreators;
      const result = obj.dismissChannelSafetyWarnings(channelId, items);
      const obj2 = ModalActionCreatorsDefault;
      obj2.popWithKey(metroRequire);
    }, items1);
    const items2 = [channelId, senderId, warningId, onDismiss];
    let closure_5 = react.useCallback((cta) => {
      const obj = MuteSettingsUtils;
      const obj2 = { channelId, guildId: null, muteDurationSeconds: MuteUntilSeconds.ALWAYS };
      const result = obj.handleMuteSettingPress(obj2);
      const obj3 = SafetyToastsActionCreatorsDefault;
      obj3.showMuteSuccessToast(senderId, channelId);
      const obj4 = SafetyWarningUtils;
      const obj5 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.LIKELY_ATO, cta };
      obj4.trackCtaEvent(obj5);
      callback();
    }, items2);
    let obj = { channelId, warningId, senderId, warningType: onDismiss.LIKELY_ATO, header: intl.string(channelId(senderId[15]).t.R8UsiI), description: intl2.string(channelId(senderId[15]).t.lI8nQl), onDismiss, buttons: items3 };
    const tmp3 = warningId(senderId[14]);
    intl = channelId(senderId[15]).intl;
    intl2 = channelId(senderId[15]).intl;
    let obj2 = {
      text: intl3.string(channelId(senderId[15]).t.tC1pvL),
      variant: "primary",
      onpress() {
        let Text;
        let arr;
        let intl;
        let intl2;
        let obj2;
        let obj3;
        let obj4;
        const pushLazy = ModalActionCreatorsDefault.pushLazy;
        let obj = {
          modalKey: metroRequire,
          headerStyle: moreTipsHeader.moreTipsHeader,
          channelId,
          warningId,
          senderId,
          description: intl.string(intl5.t["/uid3p"]),
          safetyTips: arr.map((children, index) => {
            let items;
            const obj = { children: items };
            items = [, ];
            const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.title };
            items[0] = closure_1_10(channelId(senderId[18]).Text, obj2, index);
            const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: children.description };
            items[1] = closure_1_10(channelId(senderId[18]).Text, obj3, index);
            return closure_1_12(closure_1_11, obj);
          }),
          actionItems: authStore(LikelyAtoMoreTipsModalActionItemsDefault, obj2),
          learnMore: authStore(Text, obj3)
        };
        ModalActionCreatorsDefault;
        const tmp2 = asyncRequire(9805, dependencyMap.paths);
        intl = intl5.intl;
        obj2 = {
          senderId,
          handleMutePressed() {
            return closure_1_5(channelId(senderId[8]).CtaEventTypes.USER_MODAL_MUTE);
          }
        };
        arr = hasOwnProperty();
        obj3 = { variant: "text-sm/normal", color: "text-link", children: intl2.format(intl5.t.UkH122, obj4) };
        Text = Text_Text.Text;
        intl2 = intl5.intl;
        obj4 = { learnMoreLink: handleLearnMore };
        pushLazy(tmp2, obj, metroRequire);
        const obj5 = SafetyWarningUtils;
        const obj6 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.LIKELY_ATO, cta: SafetyWarningUtils.CtaEventTypes.OPEN_MORE_TIPS };
        obj5.trackCtaEvent(obj6);
      }
    };
    intl3 = channelId(senderId[15]).intl;
    items3 = [obj2, ];
    let obj3 = {
      text: intl4.string(channelId(senderId[15]).t.ftIK2A),
      variant: "secondary",
      onpress() {
        return closure_5(SafetyWarningUtils.CtaEventTypes.USER_BANNER_MUTE);
      }
    };
    intl4 = channelId(senderId[15]).intl;
    items3[1] = obj3;
    return closure_10(tmp3, obj);
  }
}
let react = react_mod;
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
({ getLikelyAtoMoreTips: hasOwnProperty, LIKELY_ATO_MORE_TIPS_MODAL_KEY: metroRequire, LEARN_MORE_HC_ARTICLE: metroImportDefault } = Constants);
const AnalyticEvents = Constants2.AnalyticEvents;
const MuteUntilSeconds = UserSettingsConstants.MuteUntilSeconds;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { moreTipsHeader: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoWarningBanner.tsx");

export default LikelyAtoWarningBanner;
export { LikelyAtoWarningBanner };