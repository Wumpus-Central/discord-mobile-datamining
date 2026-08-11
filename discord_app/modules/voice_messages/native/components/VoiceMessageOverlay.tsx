// discord_app/modules/voice_messages/native/components/VoiceMessageOverlay.tsx
import SCREEN_READER_ENABLED_GETTER from "SCREEN_READER_ENABLED_GETTER";
import importAllResult from "result";
import get_ActivityIndicator from "createCacheKey";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import ensureGuildLoaded from "ensureGuildLoaded";
import { useVoiceMessagesUIStore } from "VoiceMessageRecordingStatus";
import { VoiceMessageAnimationState } from "VoiceMessageAnimationState";
import { ComponentActionsKeyed } from "ME";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import { CHAT_INPUT_HEIGHT } from "TextAreaCta";
import jsxProd from "map";
import importDefaultResult from "module_4042";
import importDefaultResult1 from "module_4042";
import importDefaultResult2 from "module_4042";
import createCacheKey from "createCacheKey";
import importDefaultResult3 from "Button";
import { inlineStyles } from "../../../../../_runtime/07837_inlineStyles.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { result } from "../../../../design/migrations/native/LegacyTokens.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

let c5;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let error;
const require = arg1;
function LockPill(safeAreaBottom) {
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  let voiceMessageAnimationState = safeAreaBottom;
  const initialAnimation = safeAreaBottom.initialAnimation;
  let token3 = initialAnimation;
  voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  token3 = voiceMessageAnimationState;
  let token4;
  let obj = voiceMessageAnimationState(token3[21]);
  const tmp4 = callback5(obj.useToken(token3(token3[18]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const tmp5 = token4(derivedValue3.useState(false), 2);
  token4 = tmp6;
  let obj1 = voiceMessageAnimationState(token3[11]);
  const fn = function _() {
    return token3.get()[1] === outer1_11.LOCKED || token3.get()[1] === tmp.LOCKING;
  };
  obj = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn.__closure = obj;
  fn.__workletHash = 11711445602143;
  fn.__initData = closure_42;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      voiceMessageAnimationState(token3[11]).runOnJS(token4)(arg0);
      const obj = voiceMessageAnimationState(token3[11]);
    }
  };
  obj = { runOnJS: voiceMessageAnimationState(token3[11]).runOnJS, setLocked: tmp6 };
  fn2.__closure = obj;
  fn2.__workletHash = 7476668458521;
  fn2.__initData = closure_43;
  const animatedReaction = obj1.useAnimatedReaction(fn, fn2);
  token3 = undefined;
  token3 = undefined;
  token4 = undefined;
  derivedValue3 = undefined;
  let derivedValue4;
  let derivedValue5;
  let obj4 = voiceMessageAnimationState(token3[21]);
  const token = obj4.useToken(token3(token3[18]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_DEFAULT);
  let obj5 = voiceMessageAnimationState(token3[21]);
  const token1 = obj5.useToken(token3(token3[18]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_ACTIVE);
  token3 = token;
  token3 = token;
  token4 = token1;
  derivedValue3 = token1;
  derivedValue4 = undefined;
  let obj6 = voiceMessageAnimationState(token3[11]);
  const fn3 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj1 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(token3[25]).withTiming, Easing: voiceMessageAnimationState(token3[11]).Easing };
  fn3.__closure = obj1;
  fn3.__workletHash = 8516919791077;
  fn3.__initData = closure_34;
  const derivedValue = obj6.useDerivedValue(fn3);
  derivedValue4 = derivedValue;
  let obj8 = voiceMessageAnimationState(token3[11]);
  const fn4 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_26, items1);
  };
  fn4.__closure = { voiceMessageAnimationState, sendingColor: token, lockingColor: token1, lockedColor: token1, cancelingColor: token, interpolateColor: voiceMessageAnimationState(token3[11]).interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn4.__workletHash = 4463544053380;
  fn4.__initData = closure_35;
  const derivedValue1 = obj8.useDerivedValue(fn4);
  token3 = derivedValue1;
  let obj10 = voiceMessageAnimationState(token3[21]);
  const token2 = obj10.useToken(token3(token3[18]).modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH);
  token3 = token2;
  const result = -c23 - token2 / 2;
  token4 = result;
  let obj11 = voiceMessageAnimationState(token3[21]);
  token3 = obj11.useToken(token3(token3[18]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_DEFAULT);
  let obj12 = voiceMessageAnimationState(token3[21]);
  token4 = obj12.useToken(token3(token3[18]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_ACTIVE);
  derivedValue3 = token4;
  derivedValue4 = undefined;
  let obj13 = voiceMessageAnimationState(token3[11]);
  const fn5 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  let obj2 = { voiceMessageAnimationState, sendingColor: token, lockingColor: token1, lockedColor: token1, cancelingColor: token, interpolateColor: voiceMessageAnimationState(token3[11]).interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  let tmp = voiceMessageAnimationState;
  fn5.__closure = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(token3[25]).withTiming, Easing: voiceMessageAnimationState(token3[11]).Easing };
  fn5.__workletHash = 8516919791077;
  fn5.__initData = closure_34;
  const derivedValue2 = obj13.useDerivedValue(fn5);
  derivedValue4 = derivedValue2;
  let obj3 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(token3[25]).withTiming, Easing: voiceMessageAnimationState(token3[11]).Easing };
  const fn6 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_26, items1);
  };
  obj4 = { voiceMessageAnimationState, sendingColor: token3, lockingColor: token4, lockedColor: token4, cancelingColor: token3, interpolateColor: voiceMessageAnimationState(token3[11]).interpolateColor, timing: derivedValue2, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn6.__closure = obj4;
  fn6.__workletHash = 4463544053380;
  fn6.__initData = closure_35;
  derivedValue3 = voiceMessageAnimationState(token3[11]).useDerivedValue(fn6);
  const obj16 = voiceMessageAnimationState(token3[11]);
  const fn7 = function n() {
    let obj = voiceMessageAnimationState(token3[25]);
    obj = { easing: voiceMessageAnimationState(token3[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj5 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(token3[25]).withTiming, Easing: voiceMessageAnimationState(token3[11]).Easing };
  fn7.__closure = obj5;
  fn7.__workletHash = 11443022128299;
  fn7.__initData = closure_36;
  derivedValue4 = voiceMessageAnimationState(token3[11]).useDerivedValue(fn7);
  const obj18 = voiceMessageAnimationState(token3[11]);
  const fn8 = function s() {
    const tmp = token4(voiceMessageAnimationState.get(), 2);
    return voiceMessageAnimationState(token3[11]).interpolate(derivedValue4.get(), outer1_26, tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0]);
  };
  obj6 = { voiceMessageAnimationState, interpolate: voiceMessageAnimationState(token3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn8.__closure = obj6;
  fn8.__workletHash = 467806088074;
  fn8.__initData = closure_37;
  derivedValue5 = voiceMessageAnimationState(token3[11]).useDerivedValue(fn8);
  const obj20 = voiceMessageAnimationState(token3[11]);
  const fn9 = function l() {
    const obj = { height: null };
    const items = [outer1_22, outer1_22, 104, 104];
    obj[0] = voiceMessageAnimationState(token3[11]).interpolate(derivedValue4.get(), outer1_26, items);
    return obj;
  };
  const obj22 = voiceMessageAnimationState(token3[11]);
  fn9.__closure = { interpolate: voiceMessageAnimationState(token3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: c22 };
  fn9.__workletHash = 1225730432489;
  fn9.__initData = closure_38;
  const animatedStyle = obj22.useAnimatedStyle(fn9);
  const obj7 = { interpolate: voiceMessageAnimationState(token3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: c22 };
  const fn10 = function c() {
    const obj = { width: null, height: null, opacity: null, backgroundColor: null, marginHorizontal: null, marginBottom: null };
    const items = [token3, token3, outer1_23, outer1_23];
    obj[0] = voiceMessageAnimationState(token3[11]).interpolate(derivedValue4.get(), outer1_26, items);
    const obj2 = voiceMessageAnimationState(token3[11]);
    const items1 = [outer1_22, outer1_22, outer1_23, outer1_23];
    obj[1] = voiceMessageAnimationState(token3[11]).interpolate(derivedValue4.get(), outer1_26, items1);
    obj[2] = derivedValue5.get();
    obj[3] = token3.get();
    const obj3 = voiceMessageAnimationState(token3[11]);
    const items2 = [0, 0, token4, token4];
    obj[4] = voiceMessageAnimationState(token3[11]).interpolate(derivedValue4.get(), outer1_26, items2);
    const obj4 = voiceMessageAnimationState(token3[11]);
    obj[5] = voiceMessageAnimationState(token3[11]).interpolate(derivedValue4.get(), outer1_26, [0, 0, 36, 36]);
    return obj;
  };
  obj8 = { interpolate: voiceMessageAnimationState(token3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: c23, LOCK_PILL_RESTING_HEIGHT: c22, lockContainerOpacity: derivedValue5, lockedBackgroundColor: derivedValue1, lockPillLockedOverhang: result };
  fn10.__closure = obj8;
  fn10.__workletHash = 12418415107450;
  fn10.__initData = closure_39;
  const animatedStyle1 = voiceMessageAnimationState(token3[11]).useAnimatedStyle(fn10);
  const obj24 = voiceMessageAnimationState(token3[11]);
  const fn11 = function _() {
    const obj = { width: null, height: null, marginTop: null, tintColor: null };
    obj[0] = voiceMessageAnimationState(token3[11]).interpolate(derivedValue4.get(), outer1_26, [24, 24, 32, 32]);
    const obj2 = voiceMessageAnimationState(token3[11]);
    obj[1] = voiceMessageAnimationState(token3[11]).interpolate(derivedValue4.get(), outer1_26, [24, 24, 32, 32]);
    const obj3 = voiceMessageAnimationState(token3[11]);
    obj[2] = voiceMessageAnimationState(token3[11]).interpolate(derivedValue4.get(), outer1_26, [12, 12, 10, 10]);
    obj[3] = derivedValue3.get();
    return obj;
  };
  const obj26 = voiceMessageAnimationState(token3[11]);
  fn11.__closure = { interpolate: voiceMessageAnimationState(token3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: derivedValue3 };
  fn11.__workletHash = 10749462388463;
  fn11.__initData = closure_40;
  const animatedStyle2 = obj26.useAnimatedStyle(fn11);
  const obj9 = { interpolate: voiceMessageAnimationState(token3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: derivedValue3 };
  const fn12 = function u() {
    const obj = { opacity: null };
    obj[0] = voiceMessageAnimationState(token3[11]).interpolate(derivedValue4.get(), outer1_26, [1, 1, 0, 0]);
    return obj;
  };
  obj10 = { interpolate: voiceMessageAnimationState(token3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn12.__closure = obj10;
  fn12.__workletHash = 8995549322978;
  fn12.__initData = closure_41;
  const animatedStyle3 = voiceMessageAnimationState(token3[11]).useAnimatedStyle(fn12);
  const obj28 = voiceMessageAnimationState(token3[11]);
  const tmp3Result = token3(tmp5[0] ? token3[26] : token3[27]);
  const fn13 = function v() {
    const sum = voiceMessageAnimationState + outer1_14 + 24;
    return { opacity: token3.get(), bottom: sum + 8 * token3.get() };
  };
  obj11 = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  fn13.__closure = obj11;
  fn13.__workletHash = 17067557493480;
  fn13.__initData = closure_44;
  const animatedStyle4 = tmp(token3[11]).useAnimatedStyle(fn13);
  obj12 = { style: items, children: null };
  items = [tmp4.lockParentContainer, animatedStyle, animatedStyle4];
  obj13 = { style: items1, children: null };
  items1 = [tmp4.lockContainer, animatedStyle1];
  let items2 = [callback2(closure_18, { style: animatedStyle2, source: tmp3Result }), ];
  const tmpResult = tmp(token3[11]);
  const items3 = [tmp4.chevon, animatedStyle3];
  items2[1] = callback2(closure_18, { style: items3, source: token3(token3[28]) });
  obj13[1] = items2;
  obj12[1] = callback3(token3(token3[11]).View, obj13);
  return callback2(token3(token3[11]).View, obj12);
}
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6, AppState: error } = get_ActivityIndicator);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let closure_18 = require("module_4042").createAnimatedComponent(require("Button").Icon);
let closure_19 = require("module_4042").createAnimatedComponent(require("PressableBase").PressableOpacity);
let closure_20 = require("module_4042").createAnimatedComponent(require("Text").Text);
let closure_21 = require("Button").memoize(() => ReanimatedRexport.createAnimatedComponent(inlineStyles.Ellipse));
let c22 = 68;
let c23 = 56;
let closure_24 = createCacheKey.createStyles((width) => {
  let obj = { container: null, innerContainer: null, contentContainer: null, contentContainerFloating: null, trashContainer: null, sendContainer: null, floatingSendButton: null, floatingSendButtonActive: null, floatingSendButtonIconActive: null, voiceChatContainer: null, lockContainer: null, lockParentContainer: null, chevon: null };
  obj = { alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.overflow = "hidden";
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: Themes.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: Themes.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM };
  obj[1] = obj;
  obj[2] = { position: "absolute", bottom: 0, width: "100%", alignItems: "center", overflow: "hidden" };
  obj[3] = { justifyContent: "flex-end", overflow: "visible" };
  obj[4] = { width, height: width, borderRadius: Themes.modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  const obj1 = { width, height: width, borderRadius: Themes.modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  obj[5] = { width, height: width, borderRadius: Themes.modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  const obj2 = { width, height: width, borderRadius: Themes.modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  obj[6] = { width: Themes.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: Themes.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
  const obj3 = { width: Themes.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: Themes.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
  obj[7] = { backgroundColor: Themes.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  const obj4 = { backgroundColor: Themes.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj[8] = { tintColor: Themes.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  const obj5 = { tintColor: Themes.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  obj[9] = { flex: 1, height: Themes.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: Themes.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" };
  const obj6 = { flex: 1, height: Themes.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: Themes.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" };
  obj[10] = { height: c22, width: c23, borderRadius: Themes.modules.button.BORDER_RADIUS, display: "flex", alignItems: "center", flexDirection: "column", elevation: 12, shadowColor: Themes.colors.BLACK, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 36, borderWidth: result.DARK_0_LIGHT_1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)" };
  const obj7 = { height: c22, width: c23, borderRadius: Themes.modules.button.BORDER_RADIUS, display: "flex", alignItems: "center", flexDirection: "column", elevation: 12, shadowColor: Themes.colors.BLACK, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 36, borderWidth: result.DARK_0_LIGHT_1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)" };
  obj[11] = { position: "absolute", right: Themes.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT, width: Themes.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH };
  const obj8 = { position: "absolute", right: Themes.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT, width: Themes.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH };
  obj[12] = { height: 16, width: 16, marginTop: 8, tintColor: Themes.colors.ICON_SUBTLE };
  return obj;
});
const PLUM_13 = require("Themes").unsafe_rawColors.PLUM_13;
let items = [, , , ];
({ SENDING: arr[0], CANCELLING: arr[1], LOCKING: arr[2], LOCKED: arr[3] } = VoiceMessageAnimationState);
let closure_27 = { code: "function VoiceMessageOverlayTsx1(){const{useReducedMotion,currWaveHeight}=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;}" };
let closure_28 = { code: "function VoiceMessageOverlayTsx2(){const{derivedCurrWaveHeight,offsetThreshold}=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;}" };
let closure_29 = { code: "function VoiceMessageOverlayTsx3(){const{voiceMessageEllipseBgColor,radius,offset}=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};}" };
let closure_30 = { code: "function VoiceMessageOverlayTsx4(){const{radius,height,offset}=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};}" };
const memoResult = importAllResult.memo((opacity) => {
  const radius = opacity.radius;
  let voiceMessageAnimationState = radius;
  const height = opacity.height;
  let token = height;
  const offsetThreshold = opacity.offsetThreshold;
  let RED_400 = offsetThreshold;
  voiceMessageAnimationState = opacity.voiceMessageAnimationState;
  token = undefined;
  token = undefined;
  let derivedValue1;
  let derivedValue2;
  let derivedValue3;
  let obj = voiceMessageAnimationState(RED_400[20]);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  token = stateFromStores;
  const tmp2 = useVoiceMessagesUIStore((currWaveHeight) => currWaveHeight.currWaveHeight);
  token = tmp2;
  let obj1 = voiceMessageAnimationState(RED_400[11]);
  const fn = function c() {
    let num = 0.5;
    if (!token) {
      let num2;
      if (token != null) {
        num2 = obj.get();
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
      obj = token;
    }
    return num;
  };
  fn.__closure = { useReducedMotion: stateFromStores, currWaveHeight: tmp2 };
  fn.__workletHash = 2925868096827;
  fn.__initData = closure_27;
  const derivedValue = obj1.useDerivedValue(fn);
  derivedValue1 = derivedValue;
  let obj2 = voiceMessageAnimationState(RED_400[21]);
  token = obj2.useToken(token(RED_400[18]).colors.BACKGROUND_BRAND);
  RED_400 = token(RED_400[18]).unsafe_rawColors.RED_400;
  derivedValue1 = undefined;
  const fn2 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(RED_400[25]).withTiming, Easing: voiceMessageAnimationState(RED_400[11]).Easing };
  fn2.__closure = obj;
  fn2.__workletHash = 8516919791077;
  fn2.__initData = closure_34;
  derivedValue1 = voiceMessageAnimationState(RED_400[11]).useDerivedValue(fn2);
  const obj4 = voiceMessageAnimationState(RED_400[11]);
  const fn3 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_26, items1);
  };
  obj = { voiceMessageAnimationState, sendingColor: token, lockingColor: token, lockedColor: token, cancelingColor: RED_400, interpolateColor: voiceMessageAnimationState(RED_400[11]).interpolateColor, timing: derivedValue1, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn3.__closure = obj;
  fn3.__workletHash = 4463544053380;
  fn3.__initData = closure_35;
  derivedValue2 = voiceMessageAnimationState(RED_400[11]).useDerivedValue(fn3);
  const obj6 = voiceMessageAnimationState(RED_400[11]);
  const fn4 = function u() {
    return derivedValue1.get() * RED_400;
  };
  fn4.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  fn4.__workletHash = 7278593580538;
  fn4.__initData = closure_28;
  derivedValue3 = voiceMessageAnimationState(RED_400[11]).useDerivedValue(fn4);
  const obj8 = voiceMessageAnimationState(RED_400[11]);
  class A {
    constructor() {
      obj = { fill: c6.get(), ry: radius + offsetThreshold.get(), rx: radius, cy: radius + offsetThreshold.get(), cx: radius };
      return obj;
    }
  }
  A.__closure = { voiceMessageEllipseBgColor: derivedValue2, radius, offset: derivedValue3 };
  A.__workletHash = 12489173275515;
  A.__initData = closure_29;
  const animatedProps = voiceMessageAnimationState(RED_400[11]).useAnimatedProps(A);
  const obj9 = voiceMessageAnimationState(RED_400[11]);
  class C {
    constructor() {
      obj = { position: "absolute", width: 2 * radius, height: null, bottom: 0 };
      value = height.get();
      obj[2] = value + offsetThreshold.get();
      return obj;
    }
  }
  C.__closure = { radius, height, offset: derivedValue3 };
  C.__workletHash = 16593476434034;
  C.__initData = closure_30;
  const animatedStyle = voiceMessageAnimationState(RED_400[11]).useAnimatedStyle(C);
  const obj10 = voiceMessageAnimationState(RED_400[11]);
  obj1 = { style: animatedStyle, children: null };
  obj2 = { children: null };
  obj2[0] = callback2(callback4(), { animatedProps, opacity: opacity.opacity });
  obj1[1] = callback2(voiceMessageAnimationState(RED_400[16]).Svg, obj2);
  return callback2(token(RED_400[11]).View, obj1);
});
let closure_32 = { code: "function VoiceMessageOverlayTsx5(){const{initialAnimation,recordingAnimation,chatInputFloating,INITIAL_SHIFT}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue,marginBottom:chatInputFloating?0:-INITIAL_SHIFT*(1-animationValue)};}" };
let closure_33 = importAllResult.memo((initialAnimation) => {
  initialAnimation = initialAnimation.initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  const voiceMessageState = initialAnimation.voiceMessageState;
  let stringResult5;
  let chatInputFloating;
  let ref;
  let tmp2 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  let obj = initialAnimation(stringResult5[22]);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "VoiceMessagePrompt" });
  chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  ref = ref.useRef(undefined);
  const tmp7 = recordingAnimation(stringResult5[23])(ref);
  if (initialAnimation.exiting) {
    stringResult5 = tmp7;
    let stringResult = tmp7;
  } else {
    if (tmp2) {
      if (!tmp) {
        const intl = tmp3(tmp4[24]).intl;
        stringResult = intl.string(tmp3(tmp4[24]).t["m+sRVL"]);
        stringResult5 = stringResult;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl6 = tmp3(tmp4[24]).intl;
        const stringResult1 = intl6.string(tmp3(tmp4[24]).t["zPxm/X"]);
        stringResult5 = stringResult1;
        stringResult = stringResult1;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl5 = tmp3(tmp4[24]).intl;
        const stringResult2 = intl5.string(tmp3(tmp4[24]).t.sB81Bo);
        stringResult5 = stringResult2;
        stringResult = stringResult2;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl2 = tmp3(tmp4[24]).intl;
        const stringResult3 = intl2.string(tmp3(tmp4[24]).t.cyL7DJ);
        stringResult5 = stringResult3;
        stringResult = stringResult3;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl3 = tmp3(tmp4[24]).intl;
        const stringResult4 = intl3.string(tmp3(tmp4[24]).t["a+A3+f"]);
        stringResult5 = stringResult4;
        stringResult = stringResult4;
      }
    }
    if (!tmp2) {
      tmp2 = voiceMessageState !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp2) {
      const intl4 = tmp3(tmp4[24]).intl;
      stringResult5 = intl4.string(tmp3(tmp4[24]).t["3qvtks"]);
      stringResult = stringResult5;
    }
  }
  const items = [stringResult];
  const effect = ref.useEffect(() => {
    ref.current = stringResult5;
  }, items);
  initialAnimation(stringResult5[11]);
  class N {
    constructor() {
      value = initialAnimation.get();
      bound = Math.min(value, recordingAnimation.get());
      obj = { opacity: bound, marginBottom: null };
      num = 0;
      if (!chatInputFloating) {
        num2 = 1;
        num3 = -8;
        num = -8 * (1 - bound);
      }
      obj[1] = num;
      return obj;
    }
  }
  N.__closure = { initialAnimation, recordingAnimation, chatInputFloating, INITIAL_SHIFT: 8 };
  N.__workletHash = 14418895843940;
  N.__initData = closure_32;
  if (null == stringResult) {
    return null;
  } else {
    obj = { style: null, variant: null, color: null };
    obj[0] = tmp21;
    let str = "text-sm/medium";
    if (chatInputFloating) {
      str = "text-xs/medium";
    }
    obj[1] = str;
    let str2 = "text-overlay-light";
    if (chatInputFloating) {
      str2 = "interactive-text-default";
    }
    obj[2] = str2;
    const tmp24 = mobileVisualRefreshConfig.enabled ? { maxFontSizeMultiplier: 2 } : {};
    const merged = Object.assign(tmp24);
    obj.children = stringResult;
    closure_15(closure_20, obj);
    const tmp22 = closure_15;
    const tmp23 = closure_20;
  }
});
let closure_34 = { code: "function VoiceMessageOverlayTsx6(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
let closure_35 = { code: "function VoiceMessageOverlayTsx7(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}" };
let closure_36 = { code: "function VoiceMessageOverlayTsx8(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
let closure_37 = { code: "function VoiceMessageOverlayTsx9(){const{voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);}" };
let closure_38 = { code: "function VoiceMessageOverlayTsx10(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,LOCK_PILL_RESTING_HEIGHT}=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,104,104])};}" };
let closure_39 = { code: "function VoiceMessageOverlayTsx11(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_RESTING_HEIGHT,lockContainerOpacity,lockedBackgroundColor,lockPillLockedOverhang}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[lockPillWidth,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,lockPillLockedOverhang,lockPillLockedOverhang]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};}" };
let closure_40 = { code: "function VoiceMessageOverlayTsx12(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};}" };
let closure_41 = { code: "function VoiceMessageOverlayTsx13(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};}" };
let closure_42 = { code: "function VoiceMessageOverlayTsx14(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}" };
let closure_43 = { code: "function VoiceMessageOverlayTsx15(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}" };
let closure_44 = { code: "function VoiceMessageOverlayTsx16(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}" };
let closure_46 = { code: "function VoiceMessageOverlayTsx17(){const{voiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1];}" };
let closure_47 = { code: "function VoiceMessageOverlayTsx18(state,previous){const{runOnJS,setVoiceMessageState}=this.__closure;if(state!==previous){runOnJS(setVoiceMessageState)(state);}}" };
let closure_48 = { code: "function VoiceMessageOverlayTsx19(){const{INITIAL_SHIFT,initialAnimation,trashContainerBgColor}=this.__closure;return{marginLeft:INITIAL_SHIFT*2*(1-initialAnimation.get()),marginRight:8-INITIAL_SHIFT*2*(1-initialAnimation.get()),backgroundColor:trashContainerBgColor.get()};}" };
let closure_49 = { code: "function VoiceMessageOverlayTsx20(){const{trashIconColor}=this.__closure;return{tintColor:trashIconColor.get()};}" };
let closure_50 = { code: "function VoiceMessageOverlayTsx21(){const{recordingAnimation,sendContainerBgColor}=this.__closure;return{opacity:0.5+0.5*recordingAnimation.get(),backgroundColor:sendContainerBgColor.get()};}" };
let closure_51 = { code: "function VoiceMessageOverlayTsx22(){const{sendIconColor}=this.__closure;return{tintColor:sendIconColor.get()};}" };
let closure_52 = { code: "function VoiceMessageOverlayTsx23(){const{initialAnimation}=this.__closure;return{opacity:initialAnimation.get()};}" };
let closure_53 = { code: "function VoiceMessageOverlayTsx24(){const{exiting,INITIAL_SHIFT,initialAnimation,keyboardHeight}=this.__closure;const shift=exiting?INITIAL_SHIFT*3:INITIAL_SHIFT*1.5;return{opacity:initialAnimation.get(),bottom:keyboardHeight-shift*(1-initialAnimation.get())};}" };
let closure_54 = { code: "function VoiceMessageOverlayTsx25(){const{insetsNoKeyboard,CHAT_INPUT_HEIGHT,recordingAnimation}=this.__closure;return insetsNoKeyboard.bottom+CHAT_INPUT_HEIGHT*(1.6+0.3*recordingAnimation.get());}" };
let closure_55 = { code: "function VoiceMessageOverlayTsx26(){const{insetsNoKeyboard,CHAT_INPUT_HEIGHT}=this.__closure;return insetsNoKeyboard.bottom+CHAT_INPUT_HEIGHT*1.6;}" };
let closure_56 = importAllResult.memo((channelId) => {
  let tmp18;
  let tmp19;
  channelId = channelId.channelId;
  let voiceMessageAnimationState = channelId;
  voiceMessageAnimationState = channelId.voiceMessageAnimationState;
  let importDefault = voiceMessageAnimationState;
  const exiting = channelId.exiting;
  let WHITE7 = exiting;
  let WHITE8;
  let importAllResult;
  let derivedValue8;
  let sharedValue1;
  let c7;
  let ref;
  let derivedValue3;
  let derivedValue5;
  let derivedValue7;
  let derivedValue9;
  let stringResult = WHITE7;
  let obj = voiceMessageAnimationState(WHITE7[22]);
  const chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "VoiceMessageOverlay" }).chatInputFloating;
  let obj1 = voiceMessageAnimationState(WHITE7[21]);
  const token = obj1.useToken(importDefault(WHITE7[18]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj2 = voiceMessageAnimationState(WHITE7[21]);
  const token1 = obj2.useToken(importDefault(WHITE7[18]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  const tmp6 = callback5(token);
  const insets = importDefault(WHITE7[29])({ includeCustomKeyboardHeight: true, includeKeyboardHeight: true }).insets;
  const tmp7 = importDefault(WHITE7[30])();
  WHITE8 = tmp7;
  const diff = insets.bottom - tmp7.bottom;
  importAllResult = diff;
  const bottom = insets.bottom;
  let obj3 = voiceMessageAnimationState(WHITE7[31]);
  const keyboardOpenPaddingStyle = obj3.useKeyboardOpenPaddingStyle();
  const tmp10 = derivedValue5((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  voiceMessageAnimationState = tmp10;
  importDefault = exiting;
  WHITE7 = undefined;
  WHITE8 = undefined;
  importAllResult = undefined;
  let obj4 = voiceMessageAnimationState(WHITE7[11]);
  const sharedValue = obj4.useSharedValue(0);
  WHITE7 = sharedValue;
  WHITE8 = importAllResult.useRef(performance.now());
  let items = [sharedValue];
  const effect = importAllResult.useEffect(() => {
    let obj = voiceMessageAnimationState(WHITE7[11]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.quad, duration: 250 };
    const result = WHITE7.set(obj.withDelay(500, voiceMessageAnimationState(WHITE7[25]).withTiming(1, obj)));
  }, items);
  let items1 = [sharedValue, exiting];
  const effect1 = importAllResult.useEffect(() => {
    if (closure_1) {
      let obj = voiceMessageAnimationState(WHITE7[25]);
      obj = { easing: null, duration: 100 };
      obj[0] = voiceMessageAnimationState(WHITE7[11]).Easing.quad;
      const result = WHITE7.set(obj.withTiming(0, obj));
    }
  }, items1);
  let obj5 = voiceMessageAnimationState(WHITE7[11]);
  sharedValue1 = obj5.useSharedValue(0);
  importAllResult = sharedValue1;
  const items2 = [sharedValue, sharedValue1, tmp10];
  const effect2 = importAllResult.useEffect(() => {
    if (voiceMessageAnimationState) {
      let obj = voiceMessageAnimationState(WHITE7[25]);
      obj = { easing: null, duration: 200 };
      obj[0] = voiceMessageAnimationState(WHITE7[11]).Easing.quad;
      const result = closure_4.set(obj.withTiming(1, obj));
      const _performance = performance;
      if (performance.now() - WHITE8.current < 500) {
        obj = { easing: null, duration: 250 };
        obj[0] = tmp2(tmp3[11]).Easing.quad;
        const result1 = WHITE7.set(tmp2(tmp3[25]).withTiming(1, obj));
        const tmp2Result = tmp2(tmp3[25]);
      }
    }
  }, items2);
  derivedValue8 = sharedValue;
  [tmp18, tmp19] = WHITE8(importAllResult.useState(derivedValue7.SENDING), 2);
  c7 = tmp19;
  let obj6 = voiceMessageAnimationState(WHITE7[11]);
  class S {
    constructor() {
      return closure_1.get()[1];
    }
  }
  S.__closure = { voiceMessageAnimationState };
  S.__workletHash = 2001586726975;
  S.__initData = closure_46;
  const fn = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      voiceMessageAnimationState(WHITE7[11]).runOnJS(c7)(arg0);
      const obj = voiceMessageAnimationState(WHITE7[11]);
    }
  };
  obj = { runOnJS: voiceMessageAnimationState(WHITE7[11]).runOnJS, setVoiceMessageState: tmp19 };
  fn.__closure = obj;
  fn.__workletHash = 3332201719722;
  fn.__initData = closure_47;
  const animatedReaction = obj6.useAnimatedReaction(S, fn);
  ref = importAllResult.useRef(null);
  const effect3 = importAllResult.useEffect(() => {
    let obj = voiceMessageAnimationState(WHITE7[32]);
    if (obj.getIsScreenReaderEnabled()) {
      obj = { ref: null };
      obj[0] = ref;
      const result = voiceMessageAnimationState(WHITE7[33]).setAccessibilityFocus(obj);
      const tmpResult = voiceMessageAnimationState(WHITE7[33]);
    }
  }, []);
  const items3 = [channelId];
  const effect4 = importAllResult.useEffect(() => {
    let closure_0 = _undefined.addEventListener("change", (arg0) => {
      let tmp = "inactive" !== arg0;
      if (tmp) {
        tmp = "background" !== arg0;
      }
      if (!tmp) {
        const ComponentDispatch = lib(outer1_2[34]).ComponentDispatch;
        const obj = { isCancelling: true, cancelReason: null };
        obj[1] = lib(outer1_2[35]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
        ComponentDispatch.dispatchKeyed(outer1_12.VOICE_MESSAGE_SEND, lib, obj);
      }
    });
    return () => {
      lib.remove();
    };
  }, items3);
  let result = 5 * importDefault(WHITE7[36])().width;
  const BRAND_600 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  const RED_500 = importDefault(WHITE7[18]).unsafe_rawColors.RED_500;
  const BRAND_6002 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  const BRAND_6003 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  importDefault = BRAND_600;
  WHITE7 = RED_500;
  WHITE8 = BRAND_6002;
  importAllResult = BRAND_6003;
  derivedValue8 = undefined;
  let obj8 = voiceMessageAnimationState(WHITE7[11]);
  const fn2 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(WHITE7[25]).withTiming, Easing: voiceMessageAnimationState(WHITE7[11]).Easing };
  fn2.__closure = obj;
  fn2.__workletHash = 8516919791077;
  fn2.__initData = closure_34;
  const derivedValue = obj8.useDerivedValue(fn2);
  derivedValue8 = derivedValue;
  let obj10 = voiceMessageAnimationState(WHITE7[11]);
  const fn3 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_26, items1);
  };
  obj1 = { voiceMessageAnimationState, sendingColor: BRAND_600, lockingColor: BRAND_6002, lockedColor: BRAND_6003, cancelingColor: RED_500, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn3.__closure = obj1;
  fn3.__workletHash = 4463544053380;
  fn3.__initData = closure_35;
  const derivedValue1 = obj10.useDerivedValue(fn3);
  const BRAND_6004 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  const WHITE = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  const BRAND_6005 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  const BRAND_6006 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  importDefault = BRAND_6004;
  WHITE7 = WHITE;
  WHITE8 = BRAND_6005;
  importAllResult = BRAND_6006;
  derivedValue8 = undefined;
  let obj12 = voiceMessageAnimationState(WHITE7[11]);
  const fn4 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj2 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(WHITE7[25]).withTiming, Easing: voiceMessageAnimationState(WHITE7[11]).Easing };
  fn4.__closure = obj2;
  fn4.__workletHash = 8516919791077;
  fn4.__initData = closure_34;
  const derivedValue2 = obj12.useDerivedValue(fn4);
  derivedValue8 = derivedValue2;
  let obj14 = voiceMessageAnimationState(WHITE7[11]);
  const fn5 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_26, items1);
  };
  obj3 = { voiceMessageAnimationState, sendingColor: BRAND_6004, lockingColor: BRAND_6005, lockedColor: BRAND_6006, cancelingColor: WHITE, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue2, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn5.__closure = obj3;
  fn5.__workletHash = 4463544053380;
  fn5.__initData = closure_35;
  derivedValue3 = obj14.useDerivedValue(fn5);
  let obj16 = voiceMessageAnimationState(WHITE7[11]);
  const fn6 = function j() {
    return { marginLeft: 16 * (1 - derivedValue8.get()), marginRight: 8 - 16 * (1 - derivedValue8.get()), backgroundColor: derivedValue3.get() };
  };
  fn6.__closure = { INITIAL_SHIFT: 8, initialAnimation: sharedValue, trashContainerBgColor: derivedValue3 };
  fn6.__workletHash = 15948042246766;
  fn6.__initData = closure_48;
  const animatedStyle = obj16.useAnimatedStyle(fn6);
  const WHITE2 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  const RED_5002 = importDefault(WHITE7[18]).unsafe_rawColors.RED_500;
  const WHITE3 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  const WHITE4 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  importDefault = WHITE2;
  WHITE7 = RED_5002;
  WHITE8 = WHITE3;
  importAllResult = WHITE4;
  derivedValue8 = undefined;
  let obj17 = voiceMessageAnimationState(WHITE7[11]);
  const fn7 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj4 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(WHITE7[25]).withTiming, Easing: voiceMessageAnimationState(WHITE7[11]).Easing };
  fn7.__closure = obj4;
  fn7.__workletHash = 8516919791077;
  fn7.__initData = closure_34;
  const derivedValue4 = obj17.useDerivedValue(fn7);
  derivedValue8 = derivedValue4;
  let obj19 = voiceMessageAnimationState(WHITE7[11]);
  const fn8 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_26, items1);
  };
  obj5 = { voiceMessageAnimationState, sendingColor: WHITE2, lockingColor: WHITE3, lockedColor: WHITE4, cancelingColor: RED_5002, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn8.__closure = obj5;
  fn8.__workletHash = 4463544053380;
  fn8.__initData = closure_35;
  derivedValue5 = obj19.useDerivedValue(fn8);
  let obj21 = voiceMessageAnimationState(WHITE7[11]);
  const fn9 = function q() {
    return { tintColor: derivedValue5.get() };
  };
  fn9.__closure = { trashIconColor: derivedValue5 };
  fn9.__workletHash = 13617789026314;
  fn9.__initData = closure_49;
  const animatedStyle1 = obj21.useAnimatedStyle(fn9);
  const WHITE5 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  const RED_5003 = importDefault(WHITE7[18]).unsafe_rawColors.RED_500;
  const BRAND_6007 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  const WHITE6 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  importDefault = WHITE5;
  WHITE7 = RED_5003;
  WHITE8 = BRAND_6007;
  importAllResult = WHITE6;
  derivedValue8 = undefined;
  let obj22 = voiceMessageAnimationState(WHITE7[11]);
  const fn10 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj6 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(WHITE7[25]).withTiming, Easing: voiceMessageAnimationState(WHITE7[11]).Easing };
  fn10.__closure = obj6;
  fn10.__workletHash = 8516919791077;
  fn10.__initData = closure_34;
  const derivedValue6 = obj22.useDerivedValue(fn10);
  derivedValue8 = derivedValue6;
  let obj24 = voiceMessageAnimationState(WHITE7[11]);
  const fn11 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_26, items1);
  };
  const tmp17 = WHITE8(importAllResult.useState(derivedValue7.SENDING), 2);
  fn11.__closure = { voiceMessageAnimationState, sendingColor: WHITE5, lockingColor: BRAND_6007, lockedColor: WHITE6, cancelingColor: RED_5003, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue6, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn11.__workletHash = 4463544053380;
  fn11.__initData = closure_35;
  derivedValue7 = obj24.useDerivedValue(fn11);
  let obj26 = voiceMessageAnimationState(WHITE7[11]);
  const fn12 = function $() {
    return { opacity: 0.5 + 0.5 * sharedValue1.get(), backgroundColor: derivedValue7.get() };
  };
  fn12.__closure = { recordingAnimation: sharedValue1, sendContainerBgColor: derivedValue7 };
  fn12.__workletHash = 1182209047769;
  fn12.__initData = closure_50;
  const animatedStyle2 = obj26.useAnimatedStyle(fn12);
  WHITE7 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  WHITE8 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  importDefault = PLUM_13;
  importAllResult = PLUM_13;
  derivedValue8 = undefined;
  let obj27 = voiceMessageAnimationState(WHITE7[11]);
  const fn13 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj8 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(WHITE7[25]).withTiming, Easing: voiceMessageAnimationState(WHITE7[11]).Easing };
  fn13.__closure = obj8;
  fn13.__workletHash = 8516919791077;
  fn13.__initData = closure_34;
  derivedValue8 = obj27.useDerivedValue(fn13);
  let obj29 = voiceMessageAnimationState(WHITE7[11]);
  const fn14 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_26, items1);
  };
  const obj7 = { voiceMessageAnimationState, sendingColor: WHITE5, lockingColor: BRAND_6007, lockedColor: WHITE6, cancelingColor: RED_5003, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue6, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn14.__closure = { voiceMessageAnimationState, sendingColor: PLUM_13, lockingColor: WHITE8, lockedColor: PLUM_13, cancelingColor: WHITE7, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue8, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn14.__workletHash = 4463544053380;
  fn14.__initData = closure_35;
  derivedValue9 = obj29.useDerivedValue(fn14);
  const obj9 = { voiceMessageAnimationState, sendingColor: PLUM_13, lockingColor: WHITE8, lockedColor: PLUM_13, cancelingColor: WHITE7, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue8, VOICE_MESSAGE_ANIMATION_STATES: items };
  function se() {
    return { tintColor: derivedValue9.get() };
  }
  se.__closure = { sendIconColor: derivedValue9 };
  se.__workletHash = 11803398391592;
  se.__initData = closure_51;
  const animatedStyle3 = voiceMessageAnimationState(WHITE7[11]).useAnimatedStyle(se);
  const obj32 = voiceMessageAnimationState(WHITE7[11]);
  function le() {
    return { opacity: derivedValue8.get() };
  }
  le.__closure = { initialAnimation: sharedValue };
  le.__workletHash = 3172271260010;
  le.__initData = closure_52;
  const animatedStyle4 = voiceMessageAnimationState(WHITE7[11]).useAnimatedStyle(le);
  const obj33 = voiceMessageAnimationState(WHITE7[11]);
  function ce() {
    let num = 12;
    if (WHITE7) {
      num = 24;
    }
    return { opacity: derivedValue8.get(), bottom: closure_4 - num * (1 - derivedValue8.get()) };
  }
  ce.__closure = { exiting, INITIAL_SHIFT: 8, initialAnimation: sharedValue, keyboardHeight: diff };
  ce.__workletHash = 14230726903757;
  ce.__initData = closure_53;
  const animatedStyle5 = voiceMessageAnimationState(WHITE7[11]).useAnimatedStyle(ce);
  const obj34 = voiceMessageAnimationState(WHITE7[11]);
  const wakeLock = voiceMessageAnimationState(WHITE7[37]).useWakeLock("VoiceMessageOverlay");
  const obj35 = voiceMessageAnimationState(WHITE7[37]);
  class Oe {
    constructor() {
      return WHITE.bottom + outer1_14 * (1.6 + 0.3 * c6.get());
    }
  }
  obj10 = { insetsNoKeyboard: tmp7, CHAT_INPUT_HEIGHT, recordingAnimation: sharedValue1 };
  Oe.__closure = obj10;
  Oe.__workletHash = 9742816578861;
  Oe.__initData = closure_54;
  const derivedValue10 = voiceMessageAnimationState(WHITE7[11]).useDerivedValue(Oe);
  voiceMessageAnimationState(WHITE7[11]);
  class Ne {
    constructor() {
      return WHITE.bottom + 1.6 * outer1_14;
    }
  }
  Ne.__closure = { insetsNoKeyboard: tmp7, CHAT_INPUT_HEIGHT };
  Ne.__workletHash = 6826213025558;
  Ne.__initData = closure_55;
  let tmp45Result = null;
  if (!chatInputFloating) {
    let result1 = result / 2;
    const obj11 = { style: null, pointerEvents: "none", children: null };
    const items4 = [tmp6.container, animatedStyle5];
    obj11[0] = items4;
    obj12 = { height: null, offsetThreshold: 60, opacity: 0.24, radius: null, voiceMessageAnimationState: null };
    obj12[0] = derivedValue10;
    obj12[3] = result1;
    obj12[4] = voiceMessageAnimationState;
    const items5 = [callback2(closure_31, obj12), ];
    const obj13 = { height: null, offsetThreshold: 30, radius: null, voiceMessageAnimationState: null };
    obj13[0] = tmp44;
    obj13[2] = result1;
    obj13[3] = voiceMessageAnimationState;
    items5[1] = callback2(closure_31, obj13);
    obj11[2] = items5;
    tmp45Result = tmp45(tmp3(stringResult[11]).View, obj11);
  }
  const items6 = [tmp45Result, , ];
  const items7 = [tmp6.contentContainer, { bottom }, animatedStyle4, ];
  let tmp51;
  if (chatInputFloating) {
    const items8 = [tmp6.contentContainerFloating, keyboardOpenPaddingStyle];
    tmp51 = items8;
  }
  obj14 = { style: items7, children: null };
  items7[3] = tmp51;
  let tmp52 = null;
  if (chatInputFloating) {
    const obj15 = { gradientHeight: null, inline: true };
    obj15[0] = token1;
    tmp52 = callback2(tmp(stringResult[38]).ChatInputScrimGradient, obj15);
  }
  const items9 = [tmp52, callback2(closure_33, { initialAnimation: sharedValue, recordingAnimation: sharedValue1, voiceMessageState: tmp18, exiting }), ];
  obj16 = { style: tmp6.innerContainer, children: null };
  if (chatInputFloating) {
    obj17 = { style: null, children: null };
    obj17[0] = tmp6.voiceChatContainer;
    let obj18 = { isRecording: null, initialAnimation: null, leftAccessory: null, rightAccessory: null };
    obj18[0] = tmp10;
    obj18[1] = sharedValue;
    let tmp3Result = tmp3(stringResult[39]);
    obj19 = { icon: null, variant: null, size: "sm", maxFontSizeMultiplier: 2, accessibilityLabel: null, onPressIn: null, onPress: null };
    obj19[0] = tmp3(stringResult[41]);
    let str = "tertiary";
    if (tmp18 === tmp16.CANCELLING) {
      str = "destructive";
    }
    obj19[1] = str;
    const intl3 = tmp(stringResult[24]).intl;
    obj19[4] = intl3.string(tmp(stringResult[24]).t.RdK9sV);
    obj19[5] = function onPressIn() {
      return voiceMessageAnimationState(WHITE7[42]).triggerHaptic();
    };
    obj19[6] = function onPress() {
      const ComponentDispatch = voiceMessageAnimationState(WHITE7[34]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(derivedValue9.VOICE_MESSAGE_SEND, voiceMessageAnimationState, { isCancelling: true });
    };
    obj18[2] = tmp54(tmp(stringResult[40]).IconButton, obj19);
    let obj20 = { ref: null, active: null, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null };
    obj20[0] = ref;
    let tmp61 = tmp18 === tmp16.SENDING;
    tmp3Result = tmp3(stringResult[43]);
    if (!tmp61) {
      tmp61 = tmp18 === tmp16.LOCKED;
    }
    obj20[1] = tmp61;
    ({ floatingSendButton: obj54[2], floatingSendButtonActive: obj54[3], floatingSendButtonIconActive: obj54[4] } = tmp6);
    if (!tmp10) {
      if (!exiting) {
        let SendMessageIcon = tmp(stringResult[45]).MicrophoneIcon;
      }
      obj20[5] = SendMessageIcon;
      const intl4 = tmp(stringResult[24]).intl;
      stringResult = intl4.string(tmp(stringResult[24]).t["+8GStU"]);
      obj20[6] = stringResult;
      obj20[7] = function onPress() {
        const ComponentDispatch = voiceMessageAnimationState(WHITE7[34]).ComponentDispatch;
        ComponentDispatch.dispatchKeyed(derivedValue9.VOICE_MESSAGE_SEND, voiceMessageAnimationState, { isCancelling: false });
      };
      obj20 = tmp54(tmp3Result, obj20);
      obj18[3] = obj20;
      obj18 = tmp54(tmp3Result, obj18);
      obj17[1] = obj18;
      tmp54(tmp3(stringResult[11]).View, obj17);
    }
    SendMessageIcon = tmp(stringResult[44]).SendMessageIcon;
  } else {
    obj21 = { style: null, androidRippleConfig: null, accessibilityRole: "button", accessibilityLabel: null, onPressIn: null, onPress: null, children: null };
    const items10 = [tmp6.trashContainer, animatedStyle];
    obj21[0] = items10;
    obj21[1] = ANDROID_FOREGROUND_RIPPLE;
    const intl = tmp(stringResult[24]).intl;
    obj21[3] = intl.string(tmp(stringResult[24]).t.RdK9sV);
    obj21[4] = function onPressIn() {
      return voiceMessageAnimationState(WHITE7[42]).triggerHaptic();
    };
    obj21[5] = function onPress() {
      const ComponentDispatch = voiceMessageAnimationState(WHITE7[34]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(derivedValue9.VOICE_MESSAGE_SEND, voiceMessageAnimationState, { isCancelling: true });
    };
    obj22 = { style: null, source: null, size: null };
    obj22[0] = animatedStyle1;
    obj22[1] = tmp3(stringResult[41]);
    obj22[2] = tmp(stringResult[12]).Icon.Sizes.MEDIUM;
    obj21[6] = tmp54(closure_18, obj22);
    const items11 = [tmp54(closure_19, obj21), , ];
    const obj23 = { style: null, children: null };
    obj23[0] = tmp6.voiceChatContainer;
    obj24 = { isRecording: null, initialAnimation: null, backgroundColor: null };
    obj24[0] = tmp10;
    obj24[1] = sharedValue;
    obj24[2] = derivedValue1;
    obj23[1] = tmp54(tmp3(stringResult[39]), obj24);
    items11[1] = tmp54(tmp3(stringResult[11]).View, obj23);
    const obj25 = { ref: null, style: null, androidRippleConfig: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    obj25[0] = ref;
    const items12 = [tmp6.sendContainer, animatedStyle2];
    obj25[1] = items12;
    obj25[2] = ANDROID_FOREGROUND_RIPPLE;
    const intl2 = tmp(stringResult[24]).intl;
    obj25[4] = intl2.string(tmp(stringResult[24]).t["+8GStU"]);
    obj25[5] = function onPress() {
      const ComponentDispatch = voiceMessageAnimationState(WHITE7[34]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(derivedValue9.VOICE_MESSAGE_SEND, voiceMessageAnimationState, { isCancelling: false });
    };
    obj26 = { style: null, source: null, size: null };
    obj26[0] = animatedStyle3;
    obj27 = { children: null };
    obj26[1] = tmp3(tmp10 ? stringResult[46] : stringResult[47]);
    obj26[2] = tmp(stringResult[12]).Icon.Sizes.MEDIUM;
    obj25[6] = tmp54(closure_18, obj26);
    items11[2] = tmp54(closure_19, obj25);
    obj27[0] = items11;
    const obj28 = { children: null };
    obj16[1] = tmp45(tmp46, obj27);
    items9[2] = tmp54(tmp55, obj16);
    obj14[1] = items9;
    items6[1] = tmp45(tmp3(stringResult[11]).View, obj14);
    obj29 = { safeAreaBottom: null, initialAnimation: null, voiceMessageAnimationState: null };
    obj29[0] = bottom;
    obj29[1] = sharedValue;
    obj29[2] = voiceMessageAnimationState;
    items6[2] = tmp54(LockPill, obj29);
    obj28[0] = items6;
    return tmp45(tmp46, obj28);
  }
});
const memoResult1 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  let c1;
  let dependencyMap;
  const tmp = useVoiceMessagesUIStore((showRecordingOverlay) => showRecordingOverlay.showRecordingOverlay);
  c1 = tmp;
  let obj = channelId(589);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getChannel(channelId));
  const tmp2 = useVoiceMessagesUIStore((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  const tmp3 = callback(importAllResult.useState(tmp), 2);
  dependencyMap = tmp3[1];
  const items1 = [tmp];
  const effect = importAllResult.useEffect(() => {
    if (c1) {
      callback(true);
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => callback(false), 100);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items1);
  let isForumLikeChannelResult;
  if (stateFromStores != null) {
    isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
  }
  let tmp6 = null;
  if (!isForumLikeChannelResult) {
    let tmp7 = null;
    if (null != tmp2) {
      tmp7 = null;
      if (tmp3[0]) {
        obj = { channelId: null, voiceMessageAnimationState: null, exiting: null };
        obj[0] = channelId;
        obj[1] = tmp2;
        obj[2] = !tmp;
        tmp7 = callback2(closure_56, obj);
      }
    }
    tmp6 = tmp7;
  }
  return tmp6;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default memoResult1;
export const VoiceMessageEllipse = memoResult;