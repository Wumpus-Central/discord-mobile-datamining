// discord_app/modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationModal.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import useNavigation from "../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import native from "../../../../../design/assets/native.tsx";
import SafetyWarningUtils from "../../../shared/SafetyWarningUtils.tsx";
import ChannelSafetyWarningsActionCreators from "../../../ChannelSafetyWarningsActionCreators.tsx";
import SafetyTipsSectionDefault from "../../../shared/native/SafetyTipsSection.tsx";
import TakeActionScreenDefault from "TakeActionScreen.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function IntroScreen(arg0) {
  ({ warningId: require, senderId: importDefault, trackAnalyticsEvent: dependencyMap } = arg0);
  const tmp = closure_15();
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(senderId));
  let obj1 = UserUtilsDefault;
  const name = obj1.getName(stateFromStores);
  let obj2 = useNavigation;
  closure_3 = obj2.useNavigation();
  obj = { style: tmp.container, children: null };
  const items1 = [closure_13(native.TrafficConeSpotIllustration, {}), ,];
  obj = { style: tmp.warningText, children: null };
  obj1 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.sSMgC6);
  const items2 = [closure_13(Text_Text.Text, obj1)];
  obj2 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
  const intl2 = util.intl;
  obj2.children = intl2.format(util.t.q2QrTY, { username: name });
  items2[1] = closure_13(Text_Text.Text, obj2);
  obj.children = items2;
  items1[1] = closure_14(closure_7, obj);
  const obj3 = { style: tmp.ctaContainer, children: null };
  const obj4 = { variant: "primary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t["+o4Q7e"]);
  obj4.onPress = function onPress() {
    closure_3.push("TAKE_ACTION", { warningId, senderId });
    dependencyMap(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
  };
  const items3 = [closure_13(components_Button_Button.Button, obj4)];
  const obj5 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t.xLkGzP);
  obj5.onPress = function onPress() {
    closure_3.push("SAFETY_TIPS");
    dependencyMap(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS);
  };
  items3[1] = closure_13(components_Button_Button.Button, obj5);
  obj3.children = items3;
  items1[2] = closure_14(closure_7, obj3);
  obj.children = items1;
  return closure_14(closure_7, obj);
}
function TakeActionScreen(arg0) {
  ({ senderId, isReported, channelId, setReported, trackAnalyticsEvent } = arg0);
  const tmp = closure_15();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.warningText, children: null };
  obj = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["mWO+ys"]);
  const items = [map1(Text_Text.Text, obj)];
  const obj1 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.S0XtKF);
  items[1] = map1(Text_Text.Text, obj1);
  obj.children = items;
  const items1 = [
    closure_1_14(React5, obj),
    map1(TakeActionScreenDefault, { senderId, channelId, isReported, setReported, trackAnalyticsEvent }),
  ];
  obj.children = items1;
  return closure_1_14(React5, obj);
}
function SafetyTipsScreen() {
  const tmp = closure_15();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.safetyTips, children: null };
  obj = { showHeader: true, description: null, safetyTips: null };
  const intl = util.intl;
  obj.description = intl.string(util.t.DJMZX6);
  const tmp2 = SafetyTipsSectionDefault;
  obj.safetyTips = closure_1_12().map((children, index) =>
    closure_1_13(Text_Text.Text, { variant: "text-sm/medium", children }, index),
  );
  obj.children = map1(tmp2, obj);
  obj.children = map1(React5, obj);
  return map1(React5, obj);
}
function CrisisTextLineScreen(trackAnalyticsEvent) {
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  const tmp = closure_15();
  let obj = { style: tmp.container, children: null };
  const items = [closure_13(trackAnalyticsEvent(5692).SafetyChatSpotIllustration, {}), ,];
  obj = { style: tmp.warningText, children: null };
  obj = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
  const intl = trackAnalyticsEvent(1114).intl;
  obj.children = intl.string(trackAnalyticsEvent(1114).t.NUMAsF);
  const items1 = [closure_13(trackAnalyticsEvent(4556).Text, obj)];
  const obj1 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
  const intl2 = trackAnalyticsEvent(1114).intl;
  obj1.children = intl2.string(trackAnalyticsEvent(1114).t.uicS5l);
  items1[1] = closure_13(trackAnalyticsEvent(4556).Text, obj1);
  obj.children = items1;
  items[1] = closure_14(closure_7, obj);
  const obj2 = { style: tmp.ctaContainer, children: null };
  const obj3 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = trackAnalyticsEvent(1114).intl;
  obj3.text = intl3.string(trackAnalyticsEvent(1114).t.lkUb4S);
  obj3.onPress = function onPress() {
    timestampProducer.openURL(React7);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_SMS);
  };
  const items2 = [closure_13(trackAnalyticsEvent(4975).Button, obj3)];
  const obj4 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = trackAnalyticsEvent(1114).intl;
  obj4.text = intl4.string(trackAnalyticsEvent(1114).t.ogLlvy);
  obj4.onPress = function onPress() {
    timestampProducer.openURL(closure_2_10);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_WEB);
  };
  items2[1] = closure_13(trackAnalyticsEvent(4975).Button, obj4);
  obj2.children = items2;
  items[2] = closure_14(closure_7, obj2);
  obj.children = items;
  return closure_14(closure_7, obj);
}
const useState = fn(19).useState;
get_ActivityIndicator = fn(17);
({ Linking: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(11363);
({
  CRISIS_TEXT_LINE_SMS_URI: closure_9,
  CRISIS_TEXT_LINE_URL: c10,
  TAKEOVER_MODAL_KEY: closure_11,
  getInappropriateConversationsSafetyTips: closure_12,
} = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  warningText: null,
  ctaContainer: null,
  takeoverHeader: null,
  takeoverDescription: null,
  safetyTips: null,
};
createStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_16,
  height: "100%",
};
createStyles.container = createStyles;
createStyles.warningText = {
  marginBottom: nativeDefault.space.PX_16,
  display: "flex",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
let obj1 = {
  marginBottom: nativeDefault.space.PX_16,
  display: "flex",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
createStyles.ctaContainer = {
  display: "flex",
  alignItems: "center",
  alignSelf: "stretch",
  gap: nativeDefault.space.PX_16,
};
createStyles.takeoverHeader = { textAlign: "center", maxWidth: 268 };
createStyles.takeoverDescription = { textAlign: "center" };
createStyles.safetyTips = { alignSelf: "stretch" };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationModal.tsx",
);

export default function InappropriateConversationModal(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const senderId = channelId.senderId;
  let memo;
  [tmp2, tmp3] = senderId(memo(false), 2);
  let obj = channelId(warningType[19]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  noop = tmp4;
  let items = [channelId, warningId, warningType, senderId, tmp4];
  memo = noop.useMemo(() => ({ channelId, senderId, warningId, warningType, isNudgeWarning }), items);
  const items1 = [channelId, warningId, memo];
  const items2 = [memo];
  const callback = noop.useCallback(() => {
    let obj = ModalActionCreatorsDefault;
    obj.popWithKey(closure_2_11);
    const items = [warningId];
    const result = ChannelSafetyWarningsActionCreators.dismissChannelSafetyWarnings(channelId, items);
    obj = {};
    const merged = Object.assign(memo);
    obj.cta = SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS;
    SafetyWarningUtils.trackCtaEvent(obj);
  }, items1);
  const effect = noop.useEffect(() => {
    const obj = {};
    const merged = Object.assign(memo);
    obj.viewName = SafetyWarningUtils.ViewNameTypes.SAFETY_TAKEOVER_MODAL;
    obj.trackNamedViewEvent(obj);
  }, items2);
  const items3 = [channelId, warningId, senderId, warningType, tmp4];
  const callback1 = noop.useCallback((cta) => {
    const obj = { channelId, warningId, senderId, warningType, cta, isNudgeWarning };
    obj.trackCtaEvent(obj);
  }, items3);
  obj = { screens: null, initialRouteName: "INTRO" };
  closure_129_0 = warningId;
  closure_129_1 = senderId;
  closure_129_2 = channelId;
  closure_129_3 = tmp2;
  closure_129_4 = tmp3;
  closure_129_5 = callback;
  closure_129_6 = callback1;
  obj = { title: "", fullscreen: true, headerRight: null, headerLeft: null };
  let obj3 = channelId(warningType[18]);
  obj.headerRight = obj3.getHeaderCloseButton(() => memo());
  let obj4 = channelId(warningType[18]);
  obj.headerLeft = obj4.getHeaderBackButton();
  const obj1 = { INTRO: null, TAKE_ACTION: null, SAFETY_TIPS: null, CRISIS_TEXT_LINE: null };
  let obj2 = {};
  let merged = Object.assign(obj);
  obj2.headerLeft = function headerLeft() {
    return null;
  };
  obj2.render = function render() {
    return map1(IntroScreen, { warningId: channelId, senderId: warningId, trackAnalyticsEvent });
  };
  obj1.INTRO = obj2;
  obj3 = {};
  const merged1 = Object.assign(obj);
  obj3.render = function render() {
    return map1(TakeActionScreen, {
      senderId: warningId,
      channelId: warningType,
      isReported: senderId,
      setReported,
      trackAnalyticsEvent,
    });
  };
  obj1.TAKE_ACTION = obj3;
  obj4 = {};
  const merged2 = Object.assign(obj);
  obj4.render = function render() {
    return closure_1_13(SafetyTipsScreen, {});
  };
  obj1.SAFETY_TIPS = obj4;
  const obj5 = {};
  const merged3 = Object.assign(obj);
  obj5.render = function render() {
    return map1(CrisisTextLineScreen, { trackAnalyticsEvent });
  };
  obj1.CRISIS_TEXT_LINE = obj5;
  obj.screens = obj1;
  return closure_13(channelId(warningType[22]).Navigator, obj);
}
