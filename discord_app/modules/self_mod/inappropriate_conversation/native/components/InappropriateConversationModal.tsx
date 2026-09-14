// === Module 15813: InappropriateConversationModal ===

// Module 15813 (InappropriateConversationModal)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import UserUtilsDefault from "UserUtils" /* 4481 */;
import Text_Text from "Text/Text" /* 4632 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import components_Button_Button from "components/Button/Button" /* 5056 */;
import native from "native" /* 5773 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11504 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 11505 */;
import SafetyTipsSectionDefault from "SafetyTipsSection" /* 11510 */;
import TakeActionScreenDefault from "TakeActionScreen" /* 15814 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function IntroScreen(arg0) {
  ({ warningId: require, senderId: importDefault, trackAnalyticsEvent: dependencyMap } = arg0);
  const tmp = closure_15();
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => UserStore.getUser(senderId));
  const name = UserUtilsDefault.getName(stateFromStores);
  closure_3 = useNavigation.useNavigation();
  const obj4 = { style: tmp.container, children: null };
  const items1 = [closure_13(native.TrafficConeSpotIllustration, {}), , ];
  const obj5 = { style: tmp.warningText, children: null };
  const obj6 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.sSMgC6);
  const items2 = [closure_13(Text_Text.Text, obj6), ];
  const obj7 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.format(util.t.q2QrTY, { username: name });
  items2[1] = closure_13(Text_Text.Text, obj7);
  obj5.children = items2;
  items1[1] = closure_14(closure_7, obj5);
  const obj8 = { style: tmp.ctaContainer, children: null };
  const obj9 = { variant: "primary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = util.intl;
  obj9.text = intl3.string(util.t["+o4Q7e"]);
  obj9.onPress = function onPress() {
    closure_3.push("TAKE_ACTION", { warningId, senderId });
    dependencyMap(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
  };
  const items3 = [closure_13(components_Button_Button.Button, obj9), ];
  const obj10 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = util.intl;
  obj10.text = intl4.string(util.t.xLkGzP);
  obj10.onPress = function onPress() {
    closure_3.push("SAFETY_TIPS");
    dependencyMap(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS);
  };
  items3[1] = closure_13(components_Button_Button.Button, obj10);
  obj8.children = items3;
  items1[2] = closure_14(closure_7, obj8);
  obj4.children = items1;
  return closure_14(closure_7, obj4);
}
function TakeActionScreen(arg0) {
  ({ senderId, isReported, channelId, setReported, trackAnalyticsEvent } = arg0);
  const tmp = closure_15();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.warningText, children: null };
  const obj3 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["mWO+ys"]);
  const items = [map1(Text_Text.Text, obj3), ];
  const obj4 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.S0XtKF);
  items[1] = map1(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [closure_1_14(React5, obj2), map1(TakeActionScreenDefault, { senderId, channelId, isReported, setReported, trackAnalyticsEvent })];
  obj.children = items1;
  return closure_1_14(React5, obj);
}
function SafetyTipsScreen() {
  const tmp = closure_15();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.safetyTips, children: null };
  const obj3 = { showHeader: true, description: null, safetyTips: null };
  const intl = util.intl;
  obj3.description = intl.string(util.t.DJMZX6);
  const tmp2 = SafetyTipsSectionDefault;
  obj3.safetyTips = closure_1_12().map((children, index) => closure_1_13(Text_Text.Text, { variant: "text-sm/medium", children }, index));
  obj2.children = map1(tmp2, obj3);
  obj.children = map1(React5, obj2);
  return map1(React5, obj);
}
function CrisisTextLineScreen(trackAnalyticsEvent) {
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  const tmp = closure_15();
  const obj = { style: tmp.container, children: null };
  const items = [closure_13(trackAnalyticsEvent(5773).SafetyChatSpotIllustration, {}), , ];
  const obj2 = { style: tmp.warningText, children: null };
  const obj3 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
  const intl = trackAnalyticsEvent(1114).intl;
  obj3.children = intl.string(trackAnalyticsEvent(1114).t.NUMAsF);
  const items1 = [closure_13(trackAnalyticsEvent(4632).Text, obj3), ];
  const obj4 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
  const intl2 = trackAnalyticsEvent(1114).intl;
  obj4.children = intl2.string(trackAnalyticsEvent(1114).t.uicS5l);
  items1[1] = closure_13(trackAnalyticsEvent(4632).Text, obj4);
  obj2.children = items1;
  items[1] = closure_14(closure_7, obj2);
  const obj5 = { style: tmp.ctaContainer, children: null };
  const obj6 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = trackAnalyticsEvent(1114).intl;
  obj6.text = intl3.string(trackAnalyticsEvent(1114).t.lkUb4S);
  obj6.onPress = function onPress() {
    timestampProducer.openURL(React7);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_SMS);
  };
  const items2 = [closure_13(trackAnalyticsEvent(5056).Button, obj6), ];
  const obj7 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = trackAnalyticsEvent(1114).intl;
  obj7.text = intl4.string(trackAnalyticsEvent(1114).t.ogLlvy);
  obj7.onPress = function onPress() {
    timestampProducer.openURL(closure_2_10);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_WEB);
  };
  items2[1] = closure_13(trackAnalyticsEvent(5056).Button, obj7);
  obj5.children = items2;
  items[2] = closure_14(closure_7, obj5);
  obj.children = items;
  return closure_14(closure_7, obj);
}
const useState = fn(19).useState;
get_ActivityIndicator = fn(17);
({ Linking: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(11497);
({ CRISIS_TEXT_LINE_SMS_URI: closure_9, CRISIS_TEXT_LINE_URL: c10, TAKEOVER_MODAL_KEY: closure_11, getInappropriateConversationsSafetyTips: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { display: "flex", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16, height: "100%" }, warningText: null, ctaContainer: null, takeoverHeader: null, takeoverDescription: null, safetyTips: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16, height: "100%" };
obj2.warningText = { marginBottom: nativeDefault.space.PX_16, display: "flex", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj4 = { marginBottom: nativeDefault.space.PX_16, display: "flex", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.ctaContainer = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
obj2.takeoverHeader = { textAlign: "center", maxWidth: 268 };
obj2.takeoverDescription = { textAlign: "center" };
obj2.safetyTips = { alignSelf: "stretch" };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationModal.tsx");

export default function InappropriateConversationModal(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const senderId = channelId.senderId;
  let memo;
  [tmp2, tmp3] = senderId(memo(false), 2);
  const tmp = senderId(memo(false), 2);
  const tmp4 = null != channelId(warningType[19]).useSafetyToolsButtonTooltipForChannel(channelId);
  noop = tmp4;
  let items = [channelId, warningId, warningType, senderId, tmp4];
  memo = noop.useMemo(() => ({ channelId, senderId, warningId, warningType, isNudgeWarning }), items);
  const items1 = [channelId, warningId, memo];
  const items2 = [memo];
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.popWithKey(closure_2_11);
    const items = [warningId];
    const result = ChannelSafetyWarningsActionCreators.dismissChannelSafetyWarnings(channelId, items);
    const obj4 = {};
    const merged = Object.assign(memo);
    obj4.cta = SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS;
    SafetyWarningUtils.trackCtaEvent(obj4);
  }, items1);
  const effect = noop.useEffect(() => {
    const obj2 = {};
    const merged = Object.assign(memo);
    obj2.viewName = SafetyWarningUtils.ViewNameTypes.SAFETY_TAKEOVER_MODAL;
    SafetyWarningUtils.trackNamedViewEvent(obj2);
  }, items2);
  const items3 = [channelId, warningId, senderId, warningType, tmp4];
  const callback1 = noop.useCallback((cta) => {
    SafetyWarningUtils.trackCtaEvent({ channelId, warningId, senderId, warningType, cta, isNudgeWarning });
  }, items3);
  let obj2 = { screens: null, initialRouteName: "INTRO" };
  closure_129_0 = warningId;
  closure_129_1 = senderId;
  closure_129_2 = channelId;
  closure_129_3 = tmp2;
  closure_129_4 = tmp3;
  closure_129_5 = callback;
  closure_129_6 = callback1;
  const obj3 = { title: "", fullscreen: true, headerRight: null, headerLeft: null };
  let obj = channelId(warningType[19]);
  obj3.headerRight = channelId(warningType[18]).getHeaderCloseButton(() => memo());
  let obj4 = channelId(warningType[18]);
  obj3.headerLeft = channelId(warningType[18]).getHeaderBackButton();
  const obj6 = { INTRO: null, TAKE_ACTION: null, SAFETY_TIPS: null, CRISIS_TEXT_LINE: null };
  const obj7 = {};
  let merged = Object.assign(obj3);
  obj7.headerLeft = function headerLeft() {
    return null;
  };
  obj7.render = function render() {
    return map1(IntroScreen, { warningId: channelId, senderId: warningId, trackAnalyticsEvent });
  };
  obj6.INTRO = obj7;
  const obj8 = {};
  const merged1 = Object.assign(obj3);
  obj8.render = function render() {
    return map1(TakeActionScreen, { senderId: warningId, channelId: warningType, isReported: senderId, setReported, trackAnalyticsEvent });
  };
  obj6.TAKE_ACTION = obj8;
  const obj9 = {};
  const merged2 = Object.assign(obj3);
  obj9.render = function render() {
    return closure_1_13(SafetyTipsScreen, {});
  };
  obj6.SAFETY_TIPS = obj9;
  const obj10 = {};
  const merged3 = Object.assign(obj3);
  obj10.render = function render() {
    return map1(CrisisTextLineScreen, { trackAnalyticsEvent });
  };
  obj6.CRISIS_TEXT_LINE = obj10;
  obj2.screens = obj6;
  return closure_13(channelId(warningType[22]).Navigator, obj2);
};