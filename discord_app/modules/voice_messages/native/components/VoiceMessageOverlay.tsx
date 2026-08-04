// discord_app/modules/voice_messages/native/components/VoiceMessageOverlay.tsx
import useSafeAreaInsets from "useSafeAreaInsets";
import importAllResult from "result";
import get_ActivityIndicator from "createCacheKey";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import ensureGuildLoaded from "ensureGuildLoaded";
import { useVoiceMessagesUIStore } from "VoiceMessageRecordingStatus";
import { VoiceMessageAnimationState } from "VoiceMessageAnimationState";
import { ComponentActionsKeyed } from "ME";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import TextAreaCta from "TextAreaCta";
import jsxProd from "map";
import importDefaultResult from "module_4054";
import importDefaultResult1 from "module_4054";
import importDefaultResult2 from "module_4054";
import createCacheKey from "createCacheKey";
import importDefaultResult3 from "Button";

let c5;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_6;
let error;
const require = arg1;
function LockPill(safeAreaBottom) {
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  let voiceMessageAnimationState = safeAreaBottom;
  const initialAnimation = safeAreaBottom.initialAnimation;
  let token1 = initialAnimation;
  voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  let derivedValue3 = voiceMessageAnimationState;
  let derivedValue4;
  let obj = voiceMessageAnimationState(derivedValue3[21]);
  const tmp4 = callback5(obj.useToken(token1(derivedValue3[18]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const tmp5 = derivedValue4(derivedValue5.useState(false), 2);
  derivedValue4 = tmp6;
  let obj1 = voiceMessageAnimationState(derivedValue3[11]);
  const fn = function _() {
    return derivedValue3.get()[1] === outer1_11.LOCKED || derivedValue3.get()[1] === tmp.LOCKING;
  };
  obj = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn.__closure = obj;
  fn.__workletHash = 16672558304670;
  fn.__initData = closure_42;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      voiceMessageAnimationState(derivedValue3[11]).runOnJS(derivedValue4)(arg0);
      const obj = voiceMessageAnimationState(derivedValue3[11]);
    }
  };
  obj = { runOnJS: voiceMessageAnimationState(derivedValue3[11]).runOnJS, setLocked: tmp6 };
  fn2.__closure = obj;
  fn2.__workletHash = 10857258354778;
  fn2.__initData = closure_43;
  const animatedReaction = obj1.useAnimatedReaction(fn, fn2);
  token1 = undefined;
  derivedValue3 = undefined;
  derivedValue4 = undefined;
  derivedValue5 = undefined;
  const tmp8 = token1(derivedValue3[26])();
  let obj4 = voiceMessageAnimationState(derivedValue3[21]);
  const token = obj4.useToken(token1(derivedValue3[18]).colors.BACKGROUND_BASE_LOWEST);
  const WHITE = token1(derivedValue3[18]).unsafe_rawColors.WHITE;
  let obj5 = voiceMessageAnimationState(derivedValue3[27]);
  let tmp10 = token;
  if (obj5.isThemeLight(tmp8)) {
    tmp10 = WHITE;
  }
  let tmpResult = tmp(tmp2[27]);
  let tmp11 = token;
  if (tmpResult.isThemeLight(tmp8)) {
    tmp11 = WHITE;
  }
  token1 = tmp10;
  derivedValue3 = tmp11;
  derivedValue4 = WHITE;
  derivedValue5 = WHITE;
  tmpResult = tmp(tmp2[11]);
  const fn3 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj1 = { voiceMessageAnimationState, withTiming: tmp(tmp2[25]).withTiming, Easing: tmp(tmp2[11]).Easing };
  fn3.__closure = obj1;
  fn3.__workletHash = 7432526131204;
  fn3.__initData = closure_34;
  const derivedValue = tmpResult.useDerivedValue(fn3);
  let derivedValue2 = derivedValue;
  const fn4 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_25, items1);
  };
  const tmp12 = closure_34;
  const tmpResult1 = voiceMessageAnimationState(derivedValue3[11]);
  fn4.__closure = { voiceMessageAnimationState, sendingColor: tmp10, lockingColor: WHITE, lockedColor: WHITE, cancelingColor: tmp11, interpolateColor: voiceMessageAnimationState(derivedValue3[11]).interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn4.__workletHash = 8474040050475;
  fn4.__initData = closure_35;
  const derivedValue1 = tmpResult1.useDerivedValue(fn4);
  token1 = derivedValue1;
  let obj2 = { voiceMessageAnimationState, sendingColor: tmp10, lockingColor: WHITE, lockedColor: WHITE, cancelingColor: tmp11, interpolateColor: voiceMessageAnimationState(derivedValue3[11]).interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  const tmp15 = closure_35;
  const tmpResult2 = voiceMessageAnimationState(derivedValue3[21]);
  const tmpResult3 = voiceMessageAnimationState(derivedValue3[27]);
  const colors = tmp3(tmp2[18]).colors;
  token1 = tmpResult2.useToken(voiceMessageAnimationState(derivedValue3[27]).isThemeLight(tmp8) ? colors.INTERACTIVE_TEXT_DEFAULT : colors.INTERACTIVE_TEXT_ACTIVE);
  const isThemeLightResult = voiceMessageAnimationState(derivedValue3[27]).isThemeLight(tmp8);
  const token2 = voiceMessageAnimationState(derivedValue3[21]).useToken(tmp3(tmp2[18]).colors.STATUS_POSITIVE);
  derivedValue3 = token1;
  derivedValue4 = token2;
  derivedValue5 = token2;
  derivedValue2 = undefined;
  const tmpResult4 = voiceMessageAnimationState(derivedValue3[21]);
  const fn5 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  const tmpResult5 = voiceMessageAnimationState(derivedValue3[11]);
  fn5.__closure = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(derivedValue3[25]).withTiming, Easing: voiceMessageAnimationState(derivedValue3[11]).Easing };
  fn5.__workletHash = 7432526131204;
  fn5.__initData = tmp12;
  derivedValue2 = tmpResult5.useDerivedValue(fn5);
  let obj3 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(derivedValue3[25]).withTiming, Easing: voiceMessageAnimationState(derivedValue3[11]).Easing };
  const fn6 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_25, items1);
  };
  obj4 = { voiceMessageAnimationState, sendingColor: token1, lockingColor: token2, lockedColor: token2, cancelingColor: token1, interpolateColor: tmp(tmp2[11]).interpolateColor, timing: derivedValue2, VOICE_MESSAGE_ANIMATION_STATES: tmp14 };
  fn6.__closure = obj4;
  fn6.__workletHash = 8474040050475;
  fn6.__initData = tmp15;
  derivedValue3 = voiceMessageAnimationState(derivedValue3[11]).useDerivedValue(fn6);
  const tmpResult6 = voiceMessageAnimationState(derivedValue3[11]);
  const fn7 = function n() {
    let obj = voiceMessageAnimationState(derivedValue3[25]);
    obj = { easing: voiceMessageAnimationState(derivedValue3[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj5 = { voiceMessageAnimationState, withTiming: tmp(tmp2[25]).withTiming, Easing: tmp(tmp2[11]).Easing };
  fn7.__closure = obj5;
  fn7.__workletHash = 11385805572554;
  fn7.__initData = closure_36;
  derivedValue4 = voiceMessageAnimationState(derivedValue3[11]).useDerivedValue(fn7);
  const tmpResult7 = voiceMessageAnimationState(derivedValue3[11]);
  const fn8 = function s() {
    const tmp = derivedValue4(voiceMessageAnimationState.get(), 2);
    return voiceMessageAnimationState(derivedValue3[11]).interpolate(derivedValue4.get(), outer1_25, tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0]);
  };
  const tmpResult8 = voiceMessageAnimationState(derivedValue3[11]);
  fn8.__closure = { voiceMessageAnimationState, interpolate: voiceMessageAnimationState(derivedValue3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn8.__workletHash = 13564673991122;
  fn8.__initData = closure_37;
  derivedValue5 = tmpResult8.useDerivedValue(fn8);
  const obj6 = { voiceMessageAnimationState, interpolate: voiceMessageAnimationState(derivedValue3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  const fn9 = function l() {
    const obj = { height: null };
    obj[0] = voiceMessageAnimationState(derivedValue3[11]).interpolate(derivedValue4.get(), outer1_25, [68, 68, 104, 104]);
    return obj;
  };
  const tmpResult9 = voiceMessageAnimationState(derivedValue3[11]);
  fn9.__closure = { interpolate: voiceMessageAnimationState(derivedValue3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn9.__workletHash = 16239675884614;
  fn9.__initData = closure_38;
  const animatedStyle = tmpResult9.useAnimatedStyle(fn9);
  const obj7 = { interpolate: voiceMessageAnimationState(derivedValue3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  const fn10 = function c() {
    const obj = { width: null, height: null, opacity: null, backgroundColor: null, marginHorizontal: null, marginBottom: null };
    obj[0] = voiceMessageAnimationState(derivedValue3[11]).interpolate(derivedValue4.get(), outer1_25, [40, 40, 56, 56]);
    const obj2 = voiceMessageAnimationState(derivedValue3[11]);
    obj[1] = voiceMessageAnimationState(derivedValue3[11]).interpolate(derivedValue4.get(), outer1_25, [68, 68, 56, 56]);
    obj[2] = derivedValue5.get();
    obj[3] = token1.get();
    const obj3 = voiceMessageAnimationState(derivedValue3[11]);
    obj[4] = voiceMessageAnimationState(derivedValue3[11]).interpolate(derivedValue4.get(), outer1_25, [0, 0, -8, -8]);
    const obj4 = voiceMessageAnimationState(derivedValue3[11]);
    obj[5] = voiceMessageAnimationState(derivedValue3[11]).interpolate(derivedValue4.get(), outer1_25, [0, 0, 36, 36]);
    return obj;
  };
  const tmpResult10 = voiceMessageAnimationState(derivedValue3[11]);
  fn10.__closure = { interpolate: voiceMessageAnimationState(derivedValue3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockContainerOpacity: derivedValue5, lockedBackgroundColor: derivedValue1 };
  fn10.__workletHash = 16191961901595;
  fn10.__initData = closure_39;
  const animatedStyle1 = tmpResult10.useAnimatedStyle(fn10);
  const obj8 = { interpolate: voiceMessageAnimationState(derivedValue3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockContainerOpacity: derivedValue5, lockedBackgroundColor: derivedValue1 };
  const fn11 = function _() {
    const obj = { width: null, height: null, marginTop: null, tintColor: null };
    obj[0] = voiceMessageAnimationState(derivedValue3[11]).interpolate(derivedValue4.get(), outer1_25, [24, 24, 32, 32]);
    const obj2 = voiceMessageAnimationState(derivedValue3[11]);
    obj[1] = voiceMessageAnimationState(derivedValue3[11]).interpolate(derivedValue4.get(), outer1_25, [24, 24, 32, 32]);
    const obj3 = voiceMessageAnimationState(derivedValue3[11]);
    obj[2] = voiceMessageAnimationState(derivedValue3[11]).interpolate(derivedValue4.get(), outer1_25, [12, 12, 10, 10]);
    obj[3] = derivedValue3.get();
    return obj;
  };
  const tmpResult11 = voiceMessageAnimationState(derivedValue3[11]);
  fn11.__closure = { interpolate: voiceMessageAnimationState(derivedValue3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: derivedValue3 };
  fn11.__workletHash = 10256653077678;
  fn11.__initData = closure_40;
  const animatedStyle2 = tmpResult11.useAnimatedStyle(fn11);
  const obj9 = { interpolate: voiceMessageAnimationState(derivedValue3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: derivedValue3 };
  const fn12 = function u() {
    const obj = { opacity: null };
    obj[0] = voiceMessageAnimationState(derivedValue3[11]).interpolate(derivedValue4.get(), outer1_25, [1, 1, 0, 0]);
    return obj;
  };
  const tmpResult12 = voiceMessageAnimationState(derivedValue3[11]);
  fn12.__closure = { interpolate: voiceMessageAnimationState(derivedValue3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn12.__workletHash = 13143453012261;
  fn12.__initData = closure_41;
  const animatedStyle3 = tmpResult12.useAnimatedStyle(fn12);
  const obj10 = { interpolate: voiceMessageAnimationState(derivedValue3[11]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  const tmp3Result = token1(tmp5[0] ? derivedValue3[28] : derivedValue3[29]);
  const fn13 = function f() {
    const sum = voiceMessageAnimationState + outer1_14 + 24;
    return { opacity: token1.get(), bottom: sum + 8 * token1.get() };
  };
  fn13.__closure = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT: closure_14, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  fn13.__workletHash = 601776335657;
  fn13.__initData = closure_44;
  const animatedStyle4 = voiceMessageAnimationState(derivedValue3[11]).useAnimatedStyle(fn13);
  const obj12 = { style: items, children: null };
  items = [tmp4.lockParentContainer, animatedStyle, animatedStyle4];
  const obj13 = { style: items1, children: null };
  items1 = [tmp4.lockContainer, animatedStyle1];
  const items2 = [callback2(closure_19, { style: animatedStyle2, source: tmp3Result }), ];
  const obj11 = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT: closure_14, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  const tmpResult13 = voiceMessageAnimationState(derivedValue3[11]);
  const items3 = [tmp4.chevon, animatedStyle3];
  items2[1] = callback2(closure_19, { style: items3, source: token1(derivedValue3[30]) });
  obj13[1] = items2;
  obj12[1] = callback3(token1(derivedValue3[11]).View, obj13);
  return callback2(token1(derivedValue3[11]).View, obj12);
}
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6, AppState: error } = get_ActivityIndicator);
({ CHAT_INPUT_HEIGHT: closure_14, CHAT_INPUT_HORIZONTAL_PADDING: closure_15 } = TextAreaCta);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let closure_19 = require("module_4054").createAnimatedComponent(require("Button").Icon);
let closure_20 = require("module_4054").createAnimatedComponent(require("PressableBase").PressableOpacity);
let closure_21 = require("module_4054").createAnimatedComponent(require("Text").Text);
let closure_22 = require("Button").memoize(() => importDefault(4054).createAnimatedComponent(require(8541) /* inlineStyles */.Ellipse));
let closure_23 = createCacheKey.createStyles((width) => {
  let obj = { container: null, innerContainer: null, contentContainer: null, trashContainer: null, sendContainer: null, voiceChatContainer: null, lockContainer: null, lockParentContainer: null, chevon: null };
  obj = { alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.overflow = "hidden";
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: importDefault(712).modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: importDefault(712).modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM };
  obj[1] = obj;
  obj[2] = { position: "absolute", bottom: 0, width: "100%", alignItems: "center", overflow: "hidden" };
  obj[3] = { width, height: width, borderRadius: importDefault(712).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  const obj1 = { width, height: width, borderRadius: importDefault(712).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  obj[4] = { width, height: width, borderRadius: importDefault(712).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  const obj2 = { width, height: width, borderRadius: importDefault(712).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  obj[5] = { flex: 1, height: importDefault(712).modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: importDefault(712).modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" };
  const obj3 = { flex: 1, height: importDefault(712).modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: importDefault(712).modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" };
  obj[6] = { height: 68, width, borderRadius: importDefault(712).modules.button.BORDER_RADIUS, display: "flex", alignItems: "center", flexDirection: "column", elevation: 12, shadowColor: importDefault(712).colors.BLACK, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 36, borderWidth: require(5034) /* result */.DARK_0_LIGHT_1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)" };
  obj[7] = { position: "absolute", right: closure_15, width };
  const obj4 = { height: 68, width, borderRadius: importDefault(712).modules.button.BORDER_RADIUS, display: "flex", alignItems: "center", flexDirection: "column", elevation: 12, shadowColor: importDefault(712).colors.BLACK, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 36, borderWidth: require(5034) /* result */.DARK_0_LIGHT_1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)" };
  const obj5 = { position: "absolute", right: closure_15, width };
  obj[8] = { height: 16, width: 16, marginTop: 8, tintColor: importDefault(712).colors.ICON_SUBTLE };
  return obj;
});
const PLUM_13 = require("Themes").unsafe_rawColors.PLUM_13;
let items = [, , , ];
({ SENDING: arr[0], CANCELLING: arr[1], LOCKING: arr[2], LOCKED: arr[3] } = VoiceMessageAnimationState);
let closure_26 = { code: "function VoiceMessageOverlayTsx1(){const{useReducedMotion,currWaveHeight}=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;}" };
let closure_27 = { code: "function VoiceMessageOverlayTsx2(){const{derivedCurrWaveHeight,offsetThreshold}=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;}" };
let closure_28 = { code: "function VoiceMessageOverlayTsx3(){const{voiceMessageEllipseBgColor,radius,offset}=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};}" };
let closure_29 = { code: "function VoiceMessageOverlayTsx4(){const{radius,height,offset}=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};}" };
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
  fn.__initData = closure_26;
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
  fn2.__workletHash = 7432526131204;
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
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_25, items1);
  };
  obj = { voiceMessageAnimationState, sendingColor: token, lockingColor: token, lockedColor: token, cancelingColor: RED_400, interpolateColor: voiceMessageAnimationState(RED_400[11]).interpolateColor, timing: derivedValue1, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn3.__closure = obj;
  fn3.__workletHash = 8474040050475;
  fn3.__initData = closure_35;
  derivedValue2 = voiceMessageAnimationState(RED_400[11]).useDerivedValue(fn3);
  const obj6 = voiceMessageAnimationState(RED_400[11]);
  const fn4 = function u() {
    return derivedValue1.get() * RED_400;
  };
  fn4.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  fn4.__workletHash = 7278593580538;
  fn4.__initData = closure_27;
  derivedValue3 = voiceMessageAnimationState(RED_400[11]).useDerivedValue(fn4);
  const obj8 = voiceMessageAnimationState(RED_400[11]);
  class T {
    constructor() {
      obj = { fill: c6.get(), ry: radius + offsetThreshold.get(), rx: radius, cy: radius + offsetThreshold.get(), cx: radius };
      return obj;
    }
  }
  T.__closure = { voiceMessageEllipseBgColor: derivedValue2, radius, offset: derivedValue3 };
  T.__workletHash = 12489173275515;
  T.__initData = closure_28;
  const animatedProps = voiceMessageAnimationState(RED_400[11]).useAnimatedProps(T);
  const obj9 = voiceMessageAnimationState(RED_400[11]);
  class I {
    constructor() {
      obj = { position: "absolute", width: 2 * radius, height: null, bottom: 0 };
      value = height.get();
      obj[2] = value + offsetThreshold.get();
      return obj;
    }
  }
  I.__closure = { radius, height, offset: derivedValue3 };
  I.__workletHash = 16593476434034;
  I.__initData = closure_29;
  const animatedStyle = voiceMessageAnimationState(RED_400[11]).useAnimatedStyle(I);
  const obj10 = voiceMessageAnimationState(RED_400[11]);
  obj1 = { style: animatedStyle, children: null };
  obj2 = { children: null };
  obj2[0] = callback2(callback4(), { animatedProps, opacity: opacity.opacity });
  obj1[1] = callback2(voiceMessageAnimationState(RED_400[16]).Svg, obj2);
  return callback2(token(RED_400[11]).View, obj1);
});
let closure_31 = { code: "function VoiceMessageOverlayTsx5(){const{voiceMessageAnimationState,runOnJS,setVoiceMessageState}=this.__closure;if(voiceMessageAnimationState.get()==null)return;runOnJS(setVoiceMessageState)(voiceMessageAnimationState.get()[1]);return voiceMessageAnimationState.get();}" };
let closure_32 = { code: "function VoiceMessageOverlayTsx6(){const{initialAnimation,recordingAnimation,INITIAL_SHIFT}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue,marginBottom:-INITIAL_SHIFT*(1-animationValue)};}" };
let closure_33 = importAllResult.memo((initialAnimation) => {
  let tmp5;
  let tmp6;
  initialAnimation = initialAnimation.initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  let dependencyMap;
  let callback;
  let stringResult5;
  let ref;
  const tmp = useVoiceMessagesUIStore((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  dependencyMap = tmp;
  let obj = stringResult5;
  const tmp2 = useVoiceMessagesUIStore((isUsingHoldGesture) => isUsingHoldGesture.isUsingHoldGesture);
  [tmp5, tmp6] = callback(stringResult5.useState(VoiceMessageAnimationState.SENDING), 2);
  callback = tmp6;
  let tmp7 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  const tmp4 = callback(stringResult5.useState(VoiceMessageAnimationState.SENDING), 2);
  let obj2 = initialAnimation(1348);
  const fn = function c() {
    if (null != _undefined.get()) {
      const obj2 = initialAnimation(_undefined[11]);
      initialAnimation(_undefined[11]).runOnJS(c3)(obj.get()[1]);
      return obj.get();
    }
  };
  obj = { voiceMessageAnimationState: tmp, runOnJS: initialAnimation(4054).runOnJS, setVoiceMessageState: tmp6 };
  fn.__closure = obj;
  fn.__workletHash = 8577984959763;
  fn.__initData = closure_31;
  const derivedValue = initialAnimation(4054).useDerivedValue(fn);
  ref = stringResult5.useRef(undefined);
  const tmp12 = recordingAnimation(5182)(ref);
  if (initialAnimation.exiting) {
    stringResult5 = tmp12;
    let stringResult = tmp12;
  } else {
    if (tmp7) {
      if (!tmp2) {
        const intl = tmp8(1236).intl;
        stringResult = intl.string(tmp8(1236).t["m+sRVL"]);
        stringResult5 = stringResult;
      }
    }
    if (tmp7) {
      if (tmp5 === tmp3.SENDING) {
        const intl6 = tmp8(1236).intl;
        const stringResult1 = intl6.string(tmp8(1236).t["zPxm/X"]);
        stringResult5 = stringResult1;
        stringResult = stringResult1;
      }
    }
    if (tmp7) {
      if (tmp5 === tmp3.CANCELLING) {
        const intl5 = tmp8(1236).intl;
        const stringResult2 = intl5.string(tmp8(1236).t.sB81Bo);
        stringResult5 = stringResult2;
        stringResult = stringResult2;
      }
    }
    if (!tmp7) {
      if (tmp5 === tmp3.SENDING) {
        const intl2 = tmp8(1236).intl;
        const stringResult3 = intl2.string(tmp8(1236).t.cyL7DJ);
        stringResult5 = stringResult3;
        stringResult = stringResult3;
      }
    }
    if (!tmp7) {
      if (tmp5 === tmp3.CANCELLING) {
        const intl3 = tmp8(1236).intl;
        const stringResult4 = intl3.string(tmp8(1236).t["a+A3+f"]);
        stringResult5 = stringResult4;
        stringResult = stringResult4;
      }
    }
    if (!tmp7) {
      tmp7 = tmp5 !== tmp3.LOCKING;
    }
    if (!tmp7) {
      const intl4 = tmp8(1236).intl;
      stringResult5 = intl4.string(tmp8(1236).t["3qvtks"]);
      stringResult = stringResult5;
    }
  }
  const items = [stringResult];
  const effect = obj.useEffect(() => {
    ref.current = stringResult5;
  }, items);
  initialAnimation(4054);
  const fn2 = function y() {
    const value = initialAnimation.get();
    const bound = Math.min(value, recordingAnimation.get());
    return { opacity: bound, marginBottom: -8 * (1 - bound) };
  };
  fn2.__closure = { initialAnimation, recordingAnimation, INITIAL_SHIFT: 8 };
  fn2.__workletHash = 60645179998;
  fn2.__initData = closure_32;
  if (null == stringResult) {
    return null;
  } else {
    obj = { style: null, variant: "text-sm/medium", color: "text-overlay-light" };
    obj[0] = tmp21;
    const tmp24 = obj2.useMobileVisualRefreshConfig({ location: "VoiceMessagePrompt" }).enabled ? { maxFontSizeMultiplier: 2 } : {};
    const merged = Object.assign(tmp24);
    obj.children = stringResult;
    closure_16(closure_21, obj);
    const tmp22 = closure_16;
    const tmp23 = closure_21;
  }
});
let closure_34 = { code: "function VoiceMessageOverlayTsx7(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
let closure_35 = { code: "function VoiceMessageOverlayTsx8(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}" };
let closure_36 = { code: "function VoiceMessageOverlayTsx9(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
let closure_37 = { code: "function VoiceMessageOverlayTsx10(){const{voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);}" };
let closure_38 = { code: "function VoiceMessageOverlayTsx11(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[68,68,104,104])};}" };
let closure_39 = { code: "function VoiceMessageOverlayTsx12(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockContainerOpacity,lockedBackgroundColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[40,40,56,56]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[68,68,56,56]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,-8,-8]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};}" };
let closure_40 = { code: "function VoiceMessageOverlayTsx13(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};}" };
let closure_41 = { code: "function VoiceMessageOverlayTsx14(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};}" };
let closure_42 = { code: "function VoiceMessageOverlayTsx15(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}" };
let closure_43 = { code: "function VoiceMessageOverlayTsx16(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}" };
let closure_44 = { code: "function VoiceMessageOverlayTsx17(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}" };
let closure_46 = { code: "function VoiceMessageOverlayTsx18(){const{INITIAL_SHIFT,initialAnimation,trashContainerBgColor}=this.__closure;return{marginLeft:INITIAL_SHIFT*2*(1-initialAnimation.get()),marginRight:8-INITIAL_SHIFT*2*(1-initialAnimation.get()),backgroundColor:trashContainerBgColor.get()};}" };
let closure_47 = { code: "function VoiceMessageOverlayTsx19(){const{trashIconColor}=this.__closure;return{tintColor:trashIconColor.get()};}" };
let closure_48 = { code: "function VoiceMessageOverlayTsx20(){const{recordingAnimation,sendContainerBgColor}=this.__closure;return{opacity:0.5+0.5*recordingAnimation.get(),backgroundColor:sendContainerBgColor.get()};}" };
let closure_49 = { code: "function VoiceMessageOverlayTsx21(){const{sendIconColor}=this.__closure;return{tintColor:sendIconColor.get()};}" };
let closure_50 = { code: "function VoiceMessageOverlayTsx22(){const{initialAnimation}=this.__closure;return{opacity:initialAnimation.get()};}" };
let closure_51 = { code: "function VoiceMessageOverlayTsx23(){const{exiting,INITIAL_SHIFT,initialAnimation,keyboardHeight}=this.__closure;const shift=exiting?INITIAL_SHIFT*3:INITIAL_SHIFT*1.5;return{opacity:initialAnimation.get(),bottom:keyboardHeight-shift*(1-initialAnimation.get())};}" };
let closure_52 = { code: "function VoiceMessageOverlayTsx24(){const{insetsNoKeyboard,CHAT_INPUT_HEIGHT,recordingAnimation}=this.__closure;return insetsNoKeyboard.bottom+CHAT_INPUT_HEIGHT*(1.6+0.3*recordingAnimation.get());}" };
let closure_53 = { code: "function VoiceMessageOverlayTsx25(){const{insetsNoKeyboard,CHAT_INPUT_HEIGHT}=this.__closure;return insetsNoKeyboard.bottom+CHAT_INPUT_HEIGHT*1.6;}" };
let closure_54 = importAllResult.memo((channelId) => {
  let exiting;
  let voiceMessageAnimationState;
  channelId = channelId.channelId;
  voiceMessageAnimationState = channelId;
  ({ voiceMessageAnimationState, exiting } = channelId);
  let importDefault = exiting;
  let WHITE7;
  let WHITE8;
  let importAllResult;
  let derivedValue8;
  let ref;
  let derivedValue3;
  let derivedValue5;
  let derivedValue7;
  let derivedValue9;
  let stringResult = WHITE7;
  let obj = voiceMessageAnimationState(WHITE7[21]);
  const token = obj.useToken(importDefault(WHITE7[18]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmp5 = callback5(token);
  const insets = importDefault(WHITE7[31])({ includeCustomKeyboardHeight: true, includeKeyboardHeight: true }).insets;
  const tmp6 = importDefault(WHITE7[32])();
  WHITE7 = tmp6;
  const diff = insets.bottom - tmp6.bottom;
  WHITE8 = diff;
  const bottom = insets.bottom;
  const tmp8 = derivedValue9((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  voiceMessageAnimationState = tmp8;
  importDefault = exiting;
  WHITE7 = undefined;
  WHITE8 = undefined;
  importAllResult = undefined;
  let obj1 = voiceMessageAnimationState(WHITE7[11]);
  const sharedValue = obj1.useSharedValue(0);
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
  let obj2 = voiceMessageAnimationState(WHITE7[11]);
  const sharedValue1 = obj2.useSharedValue(0);
  importAllResult = sharedValue1;
  const items2 = [sharedValue, sharedValue1, tmp8];
  const effect2 = importAllResult.useEffect(() => {
    if (voiceMessageAnimationState) {
      let obj = voiceMessageAnimationState(WHITE7[25]);
      obj = { easing: null, duration: 200 };
      obj[0] = voiceMessageAnimationState(WHITE7[11]).Easing.quad;
      const result = store.set(obj.withTiming(1, obj));
      const _performance = performance;
      if (performance.now() - WHITE8.current < 500) {
        obj = { easing: null, duration: 250 };
        obj[0] = tmp2(tmp3[11]).Easing.quad;
        const result1 = WHITE7.set(tmp2(tmp3[25]).withTiming(1, obj));
        const tmp2Result = tmp2(tmp3[25]);
      }
    }
  }, items2);
  importAllResult = sharedValue;
  derivedValue8 = sharedValue1;
  ref = importAllResult.useRef(null);
  const effect3 = importAllResult.useEffect(() => {
    let obj = voiceMessageAnimationState(WHITE7[33]);
    if (obj.getIsScreenReaderEnabled()) {
      obj = { ref: null };
      obj[0] = ref;
      const result = voiceMessageAnimationState(WHITE7[34]).setAccessibilityFocus(obj);
      const tmpResult = voiceMessageAnimationState(WHITE7[34]);
    }
  }, []);
  const items3 = [channelId];
  const effect4 = importAllResult.useEffect(() => {
    let closure_0 = derivedValue3.addEventListener("change", (arg0) => {
      let tmp = "inactive" !== arg0;
      if (tmp) {
        tmp = "background" !== arg0;
      }
      if (!tmp) {
        const ComponentDispatch = lib(outer1_2[35]).ComponentDispatch;
        const obj = { isCancelling: true, cancelReason: null };
        obj[1] = lib(outer1_2[36]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
        ComponentDispatch.dispatchKeyed(outer1_12.VOICE_MESSAGE_SEND, lib, obj);
      }
    });
    return () => {
      lib.remove();
    };
  }, items3);
  let obj3 = voiceMessageAnimationState(WHITE7[22]);
  let result = 5 * importDefault(WHITE7[37])().width / 2;
  let obj4 = voiceMessageAnimationState(WHITE7[21]);
  const token1 = obj4.useToken(importDefault(WHITE7[18]).colors.ICON_DEFAULT);
  let obj5 = voiceMessageAnimationState(WHITE7[21]);
  let intl = obj5.useToken(importDefault(WHITE7[18]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj6 = voiceMessageAnimationState(WHITE7[21]);
  let string = obj6.useToken(importDefault(WHITE7[18]).modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE);
  let obj7 = voiceMessageAnimationState(WHITE7[21]);
  const token2 = obj7.useToken(importDefault(WHITE7[18]).colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND);
  let obj8 = voiceMessageAnimationState(WHITE7[21]);
  const token3 = obj8.useToken(importDefault(WHITE7[18]).colors.CONTROL_PRIMARY_BORDER_DEFAULT);
  let obj9 = voiceMessageAnimationState(WHITE7[21]);
  const token4 = obj9.useToken(importDefault(WHITE7[18]).colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT);
  const BRAND_600 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  const RED_500 = importDefault(WHITE7[18]).unsafe_rawColors.RED_500;
  const BRAND_6002 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  const BRAND_6003 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  importDefault = BRAND_600;
  WHITE7 = RED_500;
  WHITE8 = BRAND_6002;
  importAllResult = BRAND_6003;
  derivedValue8 = undefined;
  let obj10 = voiceMessageAnimationState(WHITE7[11]);
  const fn = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(WHITE7[25]).withTiming, Easing: voiceMessageAnimationState(WHITE7[11]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 7432526131204;
  fn.__initData = closure_34;
  const derivedValue = obj10.useDerivedValue(fn);
  derivedValue8 = derivedValue;
  let obj12 = voiceMessageAnimationState(WHITE7[11]);
  const fn2 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_25, items1);
  };
  obj = { voiceMessageAnimationState, sendingColor: BRAND_600, lockingColor: BRAND_6002, lockedColor: BRAND_6003, cancelingColor: RED_500, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__closure = obj;
  fn2.__workletHash = 8474040050475;
  fn2.__initData = closure_35;
  const derivedValue1 = obj12.useDerivedValue(fn2);
  const BRAND_6004 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  const WHITE = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  const BRAND_6005 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  const BRAND_6006 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  importDefault = BRAND_6004;
  WHITE7 = WHITE;
  WHITE8 = BRAND_6005;
  importAllResult = BRAND_6006;
  derivedValue8 = undefined;
  let obj14 = voiceMessageAnimationState(WHITE7[11]);
  const fn3 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj1 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(WHITE7[25]).withTiming, Easing: voiceMessageAnimationState(WHITE7[11]).Easing };
  fn3.__closure = obj1;
  fn3.__workletHash = 7432526131204;
  fn3.__initData = closure_34;
  const derivedValue2 = obj14.useDerivedValue(fn3);
  derivedValue8 = derivedValue2;
  let obj16 = voiceMessageAnimationState(WHITE7[11]);
  const fn4 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_25, items1);
  };
  obj2 = { voiceMessageAnimationState, sendingColor: BRAND_6004, lockingColor: BRAND_6005, lockedColor: BRAND_6006, cancelingColor: WHITE, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue2, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn4.__closure = obj2;
  fn4.__workletHash = 8474040050475;
  fn4.__initData = closure_35;
  derivedValue3 = obj16.useDerivedValue(fn4);
  let obj18 = voiceMessageAnimationState(WHITE7[11]);
  class R {
    constructor() {
      obj = { marginLeft: 16 * (1 - closure_4.get()), marginRight: 8 - 16 * (1 - closure_4.get()), backgroundColor: BRAND_600.get() };
      return obj;
    }
  }
  R.__closure = { INITIAL_SHIFT: 8, initialAnimation: sharedValue, trashContainerBgColor: derivedValue3 };
  R.__workletHash = 16442762939311;
  R.__initData = closure_46;
  const animatedStyle = obj18.useAnimatedStyle(R);
  const WHITE2 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  const RED_5002 = importDefault(WHITE7[18]).unsafe_rawColors.RED_500;
  const WHITE3 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  const WHITE4 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  importDefault = WHITE2;
  WHITE7 = RED_5002;
  WHITE8 = WHITE3;
  importAllResult = WHITE4;
  derivedValue8 = undefined;
  let obj19 = voiceMessageAnimationState(WHITE7[11]);
  const fn5 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj3 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(WHITE7[25]).withTiming, Easing: voiceMessageAnimationState(WHITE7[11]).Easing };
  fn5.__closure = obj3;
  fn5.__workletHash = 7432526131204;
  fn5.__initData = closure_34;
  const derivedValue4 = obj19.useDerivedValue(fn5);
  derivedValue8 = derivedValue4;
  let obj21 = voiceMessageAnimationState(WHITE7[11]);
  const fn6 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_25, items1);
  };
  obj4 = { voiceMessageAnimationState, sendingColor: WHITE2, lockingColor: WHITE3, lockedColor: WHITE4, cancelingColor: RED_5002, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn6.__closure = obj4;
  fn6.__workletHash = 8474040050475;
  fn6.__initData = closure_35;
  derivedValue5 = obj21.useDerivedValue(fn6);
  let obj23 = voiceMessageAnimationState(WHITE7[11]);
  class G {
    constructor() {
      obj = { tintColor: BRAND_600.get() };
      return obj;
    }
  }
  G.__closure = { trashIconColor: derivedValue5 };
  G.__workletHash = 4758994609248;
  G.__initData = closure_47;
  const animatedStyle1 = obj23.useAnimatedStyle(G);
  const WHITE5 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  const RED_5003 = importDefault(WHITE7[18]).unsafe_rawColors.RED_500;
  const BRAND_6007 = importDefault(WHITE7[18]).unsafe_rawColors.BRAND_600;
  const WHITE6 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  importDefault = WHITE5;
  WHITE7 = RED_5003;
  WHITE8 = BRAND_6007;
  importAllResult = WHITE6;
  derivedValue8 = undefined;
  let obj24 = voiceMessageAnimationState(WHITE7[11]);
  const fn7 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj5 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(WHITE7[25]).withTiming, Easing: voiceMessageAnimationState(WHITE7[11]).Easing };
  fn7.__closure = obj5;
  fn7.__workletHash = 7432526131204;
  fn7.__initData = closure_34;
  const derivedValue6 = obj24.useDerivedValue(fn7);
  derivedValue8 = derivedValue6;
  const fn8 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_25, items1);
  };
  obj6 = { voiceMessageAnimationState, sendingColor: WHITE5, lockingColor: BRAND_6007, lockedColor: WHITE6, cancelingColor: RED_5003, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue6, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn8.__closure = obj6;
  fn8.__workletHash = 8474040050475;
  fn8.__initData = closure_35;
  derivedValue7 = voiceMessageAnimationState(WHITE7[11]).useDerivedValue(fn8);
  const obj27 = voiceMessageAnimationState(WHITE7[11]);
  const fn9 = function x() {
    return { opacity: 0.5 + 0.5 * derivedValue8.get(), backgroundColor: derivedValue7.get() };
  };
  fn9.__closure = { recordingAnimation: sharedValue1, sendContainerBgColor: derivedValue7 };
  fn9.__workletHash = 2463646995928;
  fn9.__initData = closure_48;
  const animatedStyle2 = voiceMessageAnimationState(WHITE7[11]).useAnimatedStyle(fn9);
  WHITE7 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  WHITE8 = importDefault(WHITE7[18]).unsafe_rawColors.WHITE;
  importDefault = PLUM_13;
  importAllResult = PLUM_13;
  derivedValue8 = undefined;
  const obj29 = voiceMessageAnimationState(WHITE7[11]);
  const fn10 = function _() {
    let obj = voiceMessageAnimationState(WHITE7[25]);
    obj = { easing: voiceMessageAnimationState(WHITE7[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj7 = { voiceMessageAnimationState, withTiming: voiceMessageAnimationState(WHITE7[25]).withTiming, Easing: voiceMessageAnimationState(WHITE7[11]).Easing };
  fn10.__closure = obj7;
  fn10.__workletHash = 7432526131204;
  fn10.__initData = closure_34;
  derivedValue8 = voiceMessageAnimationState(WHITE7[11]).useDerivedValue(fn10);
  const obj30 = voiceMessageAnimationState(WHITE7[11]);
  const fn11 = function u() {
    const tmp = WHITE8(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, WHITE8, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, WHITE7, WHITE8, closure_4];
    }
    return voiceMessageAnimationState(WHITE7[11]).interpolateColor(derivedValue8.get(), outer1_25, items1);
  };
  obj8 = { voiceMessageAnimationState, sendingColor: PLUM_13, lockingColor: WHITE8, lockedColor: PLUM_13, cancelingColor: WHITE7, interpolateColor: voiceMessageAnimationState(WHITE7[11]).interpolateColor, timing: derivedValue8, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn11.__closure = obj8;
  fn11.__workletHash = 8474040050475;
  fn11.__initData = closure_35;
  derivedValue9 = voiceMessageAnimationState(WHITE7[11]).useDerivedValue(fn11);
  const obj32 = voiceMessageAnimationState(WHITE7[11]);
  class B {
    constructor() {
      obj = { tintColor: useEffect.get() };
      return obj;
    }
  }
  B.__closure = { sendIconColor: derivedValue9 };
  B.__workletHash = 13732877930795;
  B.__initData = closure_49;
  const animatedStyle3 = voiceMessageAnimationState(WHITE7[11]).useAnimatedStyle(B);
  const obj34 = voiceMessageAnimationState(WHITE7[11]);
  class U {
    constructor() {
      obj = { opacity: closure_4.get() };
      return obj;
    }
  }
  U.__closure = { initialAnimation: sharedValue };
  U.__workletHash = 11009128299499;
  U.__initData = closure_50;
  const animatedStyle4 = voiceMessageAnimationState(WHITE7[11]).useAnimatedStyle(U);
  const obj35 = voiceMessageAnimationState(WHITE7[11]);
  class F {
    constructor() {
      num = 12;
      if (closure_1) {
        num = 24;
      }
      obj = { opacity: closure_4.get(), bottom: WHITE - num * (1 - closure_4.get()) };
      return obj;
    }
  }
  F.__closure = { exiting, INITIAL_SHIFT: 8, initialAnimation: sharedValue, keyboardHeight: diff };
  F.__workletHash = 4588671012938;
  F.__initData = closure_51;
  const animatedStyle5 = voiceMessageAnimationState(WHITE7[11]).useAnimatedStyle(F);
  const obj36 = voiceMessageAnimationState(WHITE7[11]);
  const wakeLock = voiceMessageAnimationState(WHITE7[38]).useWakeLock("VoiceMessageOverlay");
  const obj37 = voiceMessageAnimationState(WHITE7[38]);
  class Ie {
    constructor() {
      return WHITE.bottom + outer1_14 * (1.6 + 0.3 * Easing.get());
    }
  }
  obj9 = { insetsNoKeyboard: tmp6, CHAT_INPUT_HEIGHT: closure_14, recordingAnimation: sharedValue1 };
  Ie.__closure = obj9;
  Ie.__workletHash = 14315468936108;
  Ie.__initData = closure_52;
  const derivedValue10 = voiceMessageAnimationState(WHITE7[11]).useDerivedValue(Ie);
  const obj38 = voiceMessageAnimationState(WHITE7[11]);
  function me() {
    return WHITE7.bottom + 1.6 * outer1_14;
  }
  me.__closure = { insetsNoKeyboard: tmp6, CHAT_INPUT_HEIGHT: closure_14 };
  me.__workletHash = 5416150236821;
  me.__initData = closure_53;
  const derivedValue11 = voiceMessageAnimationState(WHITE7[11]).useDerivedValue(me);
  obj10 = { style: items4, pointerEvents: "none", children: null };
  items4 = [tmp5.container, animatedStyle5];
  const items5 = [callback2(closure_30, { height: derivedValue10, offsetThreshold: 60, opacity: 0.24, radius: result, voiceMessageAnimationState }), callback2(closure_30, { height: derivedValue11, offsetThreshold: 30, radius: result, voiceMessageAnimationState })];
  obj10[2] = items5;
  const items6 = [callback3(importDefault(WHITE7[11]).View, obj10), , ];
  const obj11 = { style: items7, children: null };
  items7 = [tmp5.contentContainer, { bottom }, animatedStyle4];
  const items8 = [callback2(closure_33, { initialAnimation: sharedValue, recordingAnimation: sharedValue1, exiting }), ];
  obj12 = { style: tmp5.innerContainer, children: null };
  if (obj3.useMobileVisualRefreshConfig({ location: "VoiceMessageOverlay" }).chatInputFloating) {
    const obj13 = { style: null, children: null };
    obj13[0] = tmp5.voiceChatContainer;
    obj14 = { isRecording: null, initialAnimation: null, leftAccessory: null, rightAccessory: null };
    obj14[0] = tmp8;
    obj14[1] = sharedValue;
    let tmp3Result = tmp3(stringResult[39]);
    const obj15 = { icon: null, tintColor: null, boxSize: null, iconSize: null, accessibilityLabel: null, onPressIn: null, onPress: null };
    tmp3Result = tmp3(stringResult[40]);
    obj15[0] = tmp3(stringResult[41]);
    obj15[1] = token1;
    obj15[2] = token;
    obj15[3] = string;
    const intl4 = tmp(stringResult[24]).intl;
    obj15[4] = intl4.string(tmp(stringResult[24]).t.RdK9sV);
    obj15[5] = function onPressIn() {
      return voiceMessageAnimationState(WHITE7[42]).triggerHaptic();
    };
    obj15[6] = function onPress() {
      const ComponentDispatch = voiceMessageAnimationState(WHITE7[35]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(outer1_12.VOICE_MESSAGE_SEND, voiceMessageAnimationState, { isCancelling: true });
    };
    obj14[2] = tmp43(tmp3Result, obj15);
    obj16 = { ref: null, icon: null, tintColor: null, backgroundColor: null, borderColor: null, boxSize: null, iconSize: null, accessibilityLabel: null, onPress: null };
    obj16[0] = ref;
    obj16[1] = tmp3(tmp8 ? stringResult[43] : stringResult[44]);
    obj16[2] = token4;
    obj16[3] = token2;
    obj16[4] = token3;
    obj16[5] = intl;
    obj16[6] = string;
    intl = tmp(stringResult[24]).intl;
    string = intl.string;
    stringResult = string(tmp(stringResult[24]).t["+8GStU"]);
    obj16[7] = stringResult;
    obj16[8] = function onPress() {
      const ComponentDispatch = voiceMessageAnimationState(WHITE7[35]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(outer1_12.VOICE_MESSAGE_SEND, voiceMessageAnimationState, { isCancelling: false });
    };
    obj16 = tmp43(tmp3(stringResult[40]), obj16);
    obj14[3] = obj16;
    obj14 = tmp43(tmp3Result, obj14);
    obj13[1] = obj14;
    tmp43(tmp3(stringResult[11]).View, obj13);
    const tmp3Result1 = tmp3(stringResult[40]);
  } else {
    const obj17 = { style: null, androidRippleConfig: null, accessibilityRole: "button", accessibilityLabel: null, onPressIn: null, onPress: null, children: null };
    const items9 = [tmp5.trashContainer, animatedStyle];
    obj17[0] = items9;
    obj17[1] = ANDROID_FOREGROUND_RIPPLE;
    const intl2 = tmp(stringResult[24]).intl;
    obj17[3] = intl2.string(tmp(stringResult[24]).t.RdK9sV);
    obj17[4] = function onPressIn() {
      return voiceMessageAnimationState(WHITE7[42]).triggerHaptic();
    };
    obj17[5] = function onPress() {
      const ComponentDispatch = voiceMessageAnimationState(WHITE7[35]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(outer1_12.VOICE_MESSAGE_SEND, voiceMessageAnimationState, { isCancelling: true });
    };
    obj18 = { style: null, source: null, size: null };
    obj18[0] = animatedStyle1;
    obj18[1] = tmp3(stringResult[41]);
    obj18[2] = tmp(stringResult[12]).Icon.Sizes.MEDIUM;
    obj17[6] = tmp43(closure_19, obj18);
    const items10 = [tmp43(closure_20, obj17), , ];
    obj19 = { style: null, children: null };
    obj19[0] = tmp5.voiceChatContainer;
    const obj20 = { isRecording: null, initialAnimation: null, backgroundColor: null };
    obj20[0] = tmp8;
    obj20[1] = sharedValue;
    obj20[2] = derivedValue1;
    obj19[1] = tmp43(tmp3(stringResult[39]), obj20);
    items10[1] = tmp43(tmp3(stringResult[11]).View, obj19);
    obj21 = { ref: null, style: null, androidRippleConfig: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    obj21[0] = ref;
    const items11 = [tmp5.sendContainer, animatedStyle2];
    obj21[1] = items11;
    obj21[2] = ANDROID_FOREGROUND_RIPPLE;
    const intl3 = tmp(stringResult[24]).intl;
    obj21[4] = intl3.string(tmp(stringResult[24]).t["+8GStU"]);
    obj21[5] = function onPress() {
      const ComponentDispatch = voiceMessageAnimationState(WHITE7[35]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(outer1_12.VOICE_MESSAGE_SEND, voiceMessageAnimationState, { isCancelling: false });
    };
    const obj22 = { style: null, source: null, size: null };
    obj22[0] = animatedStyle3;
    obj23 = { children: null };
    obj22[1] = tmp3(tmp8 ? stringResult[43] : stringResult[44]);
    obj22[2] = tmp(stringResult[12]).Icon.Sizes.MEDIUM;
    obj21[6] = tmp43(closure_19, obj22);
    items10[2] = tmp43(closure_20, obj21);
    obj23[0] = items10;
    obj24 = { children: null };
    obj12[1] = tmp41(tmp42, obj23);
    items8[1] = tmp43(tmp44, obj12);
    obj11[1] = items8;
    items6[1] = tmp41(importDefault(WHITE7[11]).View, obj11);
    const obj25 = { safeAreaBottom: null, initialAnimation: null, voiceMessageAnimationState: null };
    obj25[0] = bottom;
    obj25[1] = sharedValue;
    obj25[2] = voiceMessageAnimationState;
    items6[2] = tmp43(LockPill, obj25);
    obj24[0] = items6;
    return tmp41(tmp42, obj24);
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
        tmp7 = callback2(closure_54, obj);
      }
    }
    tmp6 = tmp7;
  }
  return tmp6;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default memoResult1;
export const VoiceMessageEllipse = memoResult;