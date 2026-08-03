import _slicedToArray from "_slicedToArray";
import useSafetyToolsButtonTooltipForChannel from "useSafetyToolsButtonTooltipForChannel";
import { useState } from "useSafetyToolsButtonTooltipForChannel";
import get_ActivityIndicator from "SafetyTipsContainer";
import mergeGuildAvatar from "mergeGuildAvatar";
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "dismissChannelSafetyWarnings";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function IntroScreen(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ warningId: require, senderId: importDefault, trackAnalyticsEvent: dependencyMap } = arg0);
  let _slicedToArray;
  const tmp = createCacheKey();
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getUser(closure_1));
  let obj1 = importDefault(4094);
  const name = obj1.getName(stateFromStores);
  let obj2 = require(1480) /* useNavigation */;
  _slicedToArray = obj2.useNavigation();
  obj = { style: tmp.container, children: null };
  const items1 = [callback2(require(5926) /* AccountAgeTier10LargeBadge */.TrafficConeSpotIllustration, {}), , ];
  obj = { style: tmp.warningText, children: null };
  obj1 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl.string(require(1236) /* getSystemLocale */.t.sSMgC6);
  const items2 = [callback2(require(4251) /* Text */.Text, obj1), ];
  obj2 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj2[2] = intl2.format(require(1236) /* getSystemLocale */.t.q2QrTY, { username: name });
  items2[1] = callback2(require(4251) /* Text */.Text, obj2);
  obj[1] = items2;
  items1[1] = callback3(closure_7, obj);
  const obj3 = { style: tmp.ctaContainer, children: null };
  const obj4 = { variant: "primary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj4[2] = intl3.string(require(1236) /* getSystemLocale */.t["+o4Q7e"]);
  obj4[4] = function onPress() {
    callback(outer1_0(outer1_2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
  };
  const items3 = [callback2(require(4666) /* Button */.Button, obj4), ];
  const obj5 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj5[2] = intl4.string(require(1236) /* getSystemLocale */.t.xLkGzP);
  obj5[4] = function onPress() {
    callback(outer1_0(outer1_2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS);
  };
  items3[1] = callback2(require(4666) /* Button */.Button, obj5);
  obj3[1] = items3;
  items1[2] = callback3(closure_7, obj3);
  obj[1] = items1;
  return callback3(closure_7, obj);
}
function TakeActionScreen(arg0) {
  let channelId;
  let isReported;
  let senderId;
  let setReported;
  let trackAnalyticsEvent;
  ({ senderId, isReported, channelId, setReported, trackAnalyticsEvent } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.warningText, children: null };
  obj = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["mWO+ys"]);
  const items = [callback2(require(4251) /* Text */.Text, obj), ];
  const obj1 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl2.string(require(1236) /* getSystemLocale */.t.S0XtKF);
  items[1] = callback2(require(4251) /* Text */.Text, obj1);
  obj[1] = items;
  const items1 = [callback3(closure_7, obj), callback2(importDefault(14906), { senderId, channelId, isReported, setReported, trackAnalyticsEvent })];
  obj[1] = items1;
  return callback3(closure_7, obj);
}
function SafetyTipsScreen() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.safetyTips, children: null };
  obj = { showHeader: true, description: null, safetyTips: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.DJMZX6);
  const tmp2 = importDefault(10331);
  obj[2] = callback().map((children) => callback2(callback(table[12]).Text, { variant: "text-sm/medium", children }, arg1));
  obj[1] = callback2(tmp2, obj);
  obj[1] = callback2(closure_7, obj);
  return callback2(closure_7, obj);
}
function CrisisTextLineScreen(trackAnalyticsEvent) {
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  const items = [callback2(trackAnalyticsEvent(5926).SafetyChatSpotIllustration, {}), , ];
  obj = { style: tmp.warningText, children: null };
  obj = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
  const intl = trackAnalyticsEvent(1236).intl;
  obj[3] = intl.string(trackAnalyticsEvent(1236).t.NUMAsF);
  const items1 = [callback2(trackAnalyticsEvent(4251).Text, obj), ];
  const obj1 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
  const intl2 = trackAnalyticsEvent(1236).intl;
  obj1[2] = intl2.string(trackAnalyticsEvent(1236).t.uicS5l);
  items1[1] = callback2(trackAnalyticsEvent(4251).Text, obj1);
  obj[1] = items1;
  items[1] = callback3(closure_7, obj);
  const obj2 = { style: tmp.ctaContainer, children: null };
  const obj3 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = trackAnalyticsEvent(1236).intl;
  obj3[2] = intl3.string(trackAnalyticsEvent(1236).t.lkUb4S);
  obj3[4] = function onPress() {
    outer1_6.openURL(outer1_9);
    trackAnalyticsEvent(trackAnalyticsEvent(outer1_2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_CTL_SMS);
  };
  const items2 = [callback2(trackAnalyticsEvent(4666).Button, obj3), ];
  const obj4 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = trackAnalyticsEvent(1236).intl;
  obj4[2] = intl4.string(trackAnalyticsEvent(1236).t.ogLlvy);
  obj4[4] = function onPress() {
    outer1_6.openURL(outer1_10);
    trackAnalyticsEvent(trackAnalyticsEvent(outer1_2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_CTL_WEB);
  };
  items2[1] = callback2(trackAnalyticsEvent(4666).Button, obj4);
  obj2[1] = items2;
  items[2] = callback3(closure_7, obj2);
  obj[1] = items;
  return callback3(closure_7, obj);
}
({ Linking: closure_6, View: error } = get_ActivityIndicator);
({ CRISIS_TEXT_LINE_SMS_URI: c9, CRISIS_TEXT_LINE_URL: c10, TAKEOVER_MODAL_KEY: unpackModuleId, getInappropriateConversationsSafetyTips: closure_12 } = LOCATION_CONTEXT_MOBILE);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { container: null, warningText: null, ctaContainer: null, takeoverHeader: null, takeoverDescription: null, safetyTips: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", padding: require("Themes").space.PX_32, gap: require("Themes").space.PX_16, height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: require("Themes").space.PX_16, display: "flex", alignItems: "center", gap: require("Themes").space.PX_4 };
let obj1 = { marginBottom: require("Themes").space.PX_16, display: "flex", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[2] = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: require("Themes").space.PX_16 };
createCacheKey[3] = { textAlign: "center", maxWidth: 268 };
createCacheKey[4] = { textAlign: "center" };
createCacheKey[5] = { alignSelf: "stretch" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: require("Themes").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationModal.tsx");

export default function InappropriateConversationModal(channelId) {
  let tmp2;
  let tmp3;
  channelId = channelId.channelId;
  let warningId = channelId;
  warningId = channelId.warningId;
  let senderId = warningId;
  const warningType = channelId.warningType;
  channelId = warningType;
  senderId = channelId.senderId;
  let React;
  let callback;
  [tmp2, tmp3] = senderId(callback(false), 2);
  let obj = warningId(channelId[19]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  React = tmp4;
  let items = [channelId, warningId, warningType, senderId, tmp4];
  const memo = React.useMemo(() => ({ channelId: warningId, senderId, warningId: senderId, warningType: channelId, isNudgeWarning: c4 }), items);
  callback = memo;
  const items1 = [channelId, warningId, memo];
  const items2 = [memo];
  callback = React.useCallback(() => {
    let obj = senderId(channelId[20]);
    obj.popWithKey(outer1_11);
    const items = [senderId];
    const result = warningId(channelId[21]).dismissChannelSafetyWarnings(warningId, items);
    const obj2 = warningId(channelId[21]);
    obj = {};
    const merged = Object.assign(callback);
    obj.cta = warningId(channelId[15]).CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS;
    warningId(channelId[15]).trackCtaEvent(obj);
  }, items1);
  const effect = React.useEffect(() => {
    let obj = warningId(channelId[15]);
    obj = {};
    const merged = Object.assign(callback);
    obj.viewName = warningId(channelId[15]).ViewNameTypes.SAFETY_TAKEOVER_MODAL;
    obj.trackNamedViewEvent(obj);
  }, items2);
  const items3 = [channelId, warningId, senderId, warningType, tmp4];
  const callback1 = React.useCallback((cta) => {
    let obj = warningId(channelId[15]);
    obj = { channelId: warningId, warningId: senderId, senderId, warningType: channelId, cta, isNudgeWarning: c4 };
    obj.trackCtaEvent(obj);
  }, items3);
  obj = { screens: null, initialRouteName: "INTRO" };
  senderId = tmp2;
  React = tmp3;
  obj = { title: "", fullscreen: true, headerRight: null, headerLeft: null };
  let obj3 = warningId(channelId[18]);
  obj[2] = obj3.getHeaderCloseButton(() => callback());
  let obj4 = warningId(channelId[18]);
  obj[3] = obj4.getHeaderBackButton();
  const obj1 = { INTRO: null, TAKE_ACTION: null, SAFETY_TIPS: null, CRISIS_TEXT_LINE: null };
  let obj2 = {};
  let merged = Object.assign(obj);
  obj2.headerLeft = function headerLeft() {
    return null;
  };
  obj2.render = function render() {
    return outer1_13(outer1_16, { warningId, senderId, trackAnalyticsEvent: callback1 });
  };
  obj1[0] = obj2;
  obj3 = {};
  const merged1 = Object.assign(obj);
  obj3.render = function render() {
    return outer1_13(outer1_17, { senderId, channelId, isReported: senderId, setReported: c4, trackAnalyticsEvent: callback1 });
  };
  obj1[1] = obj3;
  obj4 = {};
  const merged2 = Object.assign(obj);
  obj4.render = function render() {
    return callback(closure_18, {});
  };
  obj1[2] = obj4;
  const obj5 = {};
  const merged3 = Object.assign(obj);
  obj5.render = function render() {
    return outer1_13(outer1_19, { trackAnalyticsEvent: callback1 });
  };
  obj1[3] = obj5;
  obj[0] = obj1;
  return callback2(warningId(channelId[22]).Navigator, obj);
};