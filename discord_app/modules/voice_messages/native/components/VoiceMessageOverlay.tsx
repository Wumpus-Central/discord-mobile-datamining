// discord_app/modules/voice_messages/native/components/VoiceMessageOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import util from "../../../../intl/index.native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import LegacyTokens from "../../../../design/migrations/native/LegacyTokens.tsx";
import useRefValueDefault from "../../../../hooks/useRefValue.tsx";
import inlineStyles from "../../../../../_runtime/08453_inlineStyles.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import apply from "../../../../../_runtime/metro/00012__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function LockPill(safeAreaBottom) {
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  const initialAnimation = safeAreaBottom.initialAnimation;
  const voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  _slicedToArray = undefined;
  let tmp = closure_21();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp3;
  safeAreaBottom(voiceMessageAnimationState[10]);
  const fn = function _() {
    return (
      voiceMessageAnimationState.get()[1] === VoiceMessageAnimationState.LOCKED ||
      voiceMessageAnimationState.get()[1] === tmp.LOCKING
    );
  };
  let obj = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn.__closure = obj;
  fn.__workletHash = 11711445602143;
  fn.__initData = __initData14;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(closure_3)(arg0);
    }
  };
  obj = { runOnJS: safeAreaBottom(voiceMessageAnimationState[10]).runOnJS, setLocked: tmp3 };
  fn2.__closure = obj;
  fn2.__workletHash = 7476668458521;
  fn2.__initData = __initData15;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  closure_129_0 = voiceMessageAnimationState;
  let obj3 = safeAreaBottom(voiceMessageAnimationState[19]);
  const token = obj3.useToken(
    initialAnimation(voiceMessageAnimationState[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_DEFAULT,
  );
  let obj4 = safeAreaBottom(voiceMessageAnimationState[19]);
  const token1 = obj4.useToken(
    initialAnimation(voiceMessageAnimationState[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_ACTIVE,
  );
  closure_130_0 = voiceMessageAnimationState;
  closure_130_1 = token;
  closure_130_2 = token;
  closure_130_3 = token1;
  closure_130_4 = token1;
  let obj5 = safeAreaBottom(voiceMessageAnimationState[10]);
  const fn3 = function _() {
    const obj = { easing: ReanimatedRexport2.Easing.linear, duration: 150 };
    return obj.withTiming(radius.get()[1], obj);
  };
  fn3.__closure = {
    voiceMessageAnimationState,
    withTiming: safeAreaBottom(voiceMessageAnimationState[22]).withTiming,
    Easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing,
  };
  fn3.__workletHash = 8516919791077;
  fn3.__initData = __initData6;
  const derivedValue = obj5.useDerivedValue(fn3);
  closure_130_5 = derivedValue;
  let obj7 = safeAreaBottom(voiceMessageAnimationState[10]);
  const fn4 = function u() {
    const tmp = _slicedToArray(radius.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [height, height, stateFromStores, closure_4];
      let items1 = items;
    } else {
      items1 = [height, offsetThreshold, stateFromStores, closure_4];
    }
    return ReanimatedRexport2.interpolateColor(derivedValue.get(), items, items1);
  };
  const obj1 = {
    voiceMessageAnimationState,
    withTiming: safeAreaBottom(voiceMessageAnimationState[22]).withTiming,
    Easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing,
  };
  const tmp4 = safeAreaBottom;
  fn4.__closure = {
    voiceMessageAnimationState,
    sendingColor: token,
    lockingColor: token1,
    lockedColor: token1,
    cancelingColor: token,
    interpolateColor: safeAreaBottom(voiceMessageAnimationState[10]).interpolateColor,
    timing: derivedValue,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  fn4.__workletHash = 4463544053380;
  fn4.__initData = __initData7;
  const derivedValue1 = obj7.useDerivedValue(fn4);
  closure_129_1 = derivedValue1;
  let obj9 = safeAreaBottom(voiceMessageAnimationState[19]);
  const token2 = obj9.useToken(
    initialAnimation(voiceMessageAnimationState[16]).modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH,
  );
  closure_129_2 = token2;
  const result = -v56 - token2 / 2;
  closure_129_3 = result;
  let obj10 = safeAreaBottom(voiceMessageAnimationState[19]);
  const token3 = obj10.useToken(
    initialAnimation(voiceMessageAnimationState[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_DEFAULT,
  );
  let obj11 = safeAreaBottom(voiceMessageAnimationState[19]);
  const token4 = obj11.useToken(
    initialAnimation(voiceMessageAnimationState[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_ACTIVE,
  );
  closure_131_0 = voiceMessageAnimationState;
  closure_131_1 = token3;
  closure_131_2 = token3;
  closure_131_3 = token4;
  closure_131_4 = token4;
  let obj12 = safeAreaBottom(voiceMessageAnimationState[10]);
  const fn5 = function _() {
    const obj = { easing: ReanimatedRexport2.Easing.linear, duration: 150 };
    return obj.withTiming(radius.get()[1], obj);
  };
  obj3 = {
    voiceMessageAnimationState,
    withTiming: safeAreaBottom(voiceMessageAnimationState[22]).withTiming,
    Easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing,
  };
  fn5.__closure = obj3;
  fn5.__workletHash = 8516919791077;
  fn5.__initData = __initData6;
  const derivedValue2 = obj12.useDerivedValue(fn5);
  closure_131_5 = derivedValue2;
  let obj14 = safeAreaBottom(voiceMessageAnimationState[10]);
  const fn6 = function u() {
    const tmp = _slicedToArray(radius.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [height, height, stateFromStores, closure_4];
      let items1 = items;
    } else {
      items1 = [height, offsetThreshold, stateFromStores, closure_4];
    }
    return ReanimatedRexport2.interpolateColor(derivedValue.get(), items, items1);
  };
  obj4 = {
    voiceMessageAnimationState,
    sendingColor: token3,
    lockingColor: token4,
    lockedColor: token4,
    cancelingColor: token3,
    interpolateColor: safeAreaBottom(voiceMessageAnimationState[10]).interpolateColor,
    timing: derivedValue2,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  fn6.__closure = obj4;
  fn6.__workletHash = 4463544053380;
  fn6.__initData = __initData7;
  const derivedValue3 = obj14.useDerivedValue(fn6);
  closure_129_4 = derivedValue3;
  let obj2 = {
    voiceMessageAnimationState,
    sendingColor: token,
    lockingColor: token1,
    lockedColor: token1,
    cancelingColor: token,
    interpolateColor: safeAreaBottom(voiceMessageAnimationState[10]).interpolateColor,
    timing: derivedValue,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  const fn7 = function o() {
    const obj = { easing: ReanimatedRexport2.Easing.linear, duration: 150 };
    return obj.withTiming(safeAreaBottom.get()[1], obj);
  };
  obj5 = {
    voiceMessageAnimationState,
    withTiming: safeAreaBottom(voiceMessageAnimationState[22]).withTiming,
    Easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing,
  };
  fn7.__closure = obj5;
  fn7.__workletHash = 11443022128299;
  fn7.__initData = __initData8;
  const derivedValue4 = safeAreaBottom(voiceMessageAnimationState[10]).useDerivedValue(fn7);
  closure_129_5 = derivedValue4;
  const obj17 = safeAreaBottom(voiceMessageAnimationState[10]);
  const fn8 = function s() {
    const tmp = _slicedToArray(safeAreaBottom.get(), 2);
    return ReanimatedRexport2.interpolate(
      closure_1_5.get(),
      items,
      tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0],
    );
  };
  const obj19 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn8.__closure = {
    voiceMessageAnimationState,
    interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  fn8.__workletHash = 467806088074;
  fn8.__initData = __initData9;
  const derivedValue5 = obj19.useDerivedValue(fn8);
  closure_129_6 = derivedValue5;
  const obj6 = {
    voiceMessageAnimationState,
    interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  const fn9 = function l() {
    const obj = { height: null };
    items = [c19, c19, 104, 104];
    obj.height = ReanimatedRexport2.interpolate(closure_1_5.get(), items, items);
    return obj;
  };
  obj7 = {
    interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
    LOCK_PILL_RESTING_HEIGHT: v68,
  };
  fn9.__closure = obj7;
  fn9.__workletHash = 1225730432489;
  fn9.__initData = __initData10;
  const animatedStyle = safeAreaBottom(voiceMessageAnimationState[10]).useAnimatedStyle(fn9);
  const obj21 = safeAreaBottom(voiceMessageAnimationState[10]);
  const fn10 = function c() {
    const size = {
      width: null,
      height: null,
      opacity: null,
      backgroundColor: null,
      marginHorizontal: null,
      marginBottom: null,
    };
    items = [voiceMessageAnimationState, voiceMessageAnimationState, c20, c20];
    size.width = ReanimatedRexport2.interpolate(closure_1_5.get(), items, items);
    const items1 = [c19, c19, c20, c20];
    size.height = ReanimatedRexport2.interpolate(closure_1_5.get(), items, items1);
    size.opacity = closure_1_6.get();
    size.backgroundColor = initialAnimation.get();
    const items2 = [0, 0, closure_3, closure_3];
    size.marginHorizontal = ReanimatedRexport2.interpolate(closure_1_5.get(), items, items2);
    size.marginBottom = ReanimatedRexport2.interpolate(closure_1_5.get(), items, [0, 0, 36, 36]);
    return size;
  };
  const obj23 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn10.__closure = {
    interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
    lockPillWidth: token2,
    LOCK_PILL_LOCKED_SIZE: v56,
    LOCK_PILL_RESTING_HEIGHT: v68,
    lockContainerOpacity: derivedValue5,
    lockedBackgroundColor: derivedValue1,
    lockPillLockedOverhang: result,
  };
  fn10.__workletHash = 12418415107450;
  fn10.__initData = __initData11;
  const animatedStyle1 = obj23.useAnimatedStyle(fn10);
  const obj8 = {
    interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
    lockPillWidth: token2,
    LOCK_PILL_LOCKED_SIZE: v56,
    LOCK_PILL_RESTING_HEIGHT: v68,
    lockContainerOpacity: derivedValue5,
    lockedBackgroundColor: derivedValue1,
    lockPillLockedOverhang: result,
  };
  const fn11 = function _() {
    const size = {
      width: ReanimatedRexport2.interpolate(closure_1_5.get(), items, [24, 24, 32, 32]),
      height: null,
      marginTop: null,
      tintColor: null,
    };
    size.height = ReanimatedRexport2.interpolate(closure_1_5.get(), items, [24, 24, 32, 32]);
    size.marginTop = ReanimatedRexport2.interpolate(closure_1_5.get(), items, [12, 12, 10, 10]);
    size.tintColor = noop.get();
    return size;
  };
  obj9 = {
    interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
    lockIconColor: derivedValue3,
  };
  fn11.__closure = obj9;
  fn11.__workletHash = 10749462388463;
  fn11.__initData = __initData12;
  const animatedStyle2 = safeAreaBottom(voiceMessageAnimationState[10]).useAnimatedStyle(fn11);
  const obj25 = safeAreaBottom(voiceMessageAnimationState[10]);
  const fn12 = function u() {
    const obj = { opacity: ReanimatedRexport2.interpolate(closure_1_5.get(), items, [1, 1, 0, 0]) };
    return obj;
  };
  obj10 = {
    interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  fn12.__closure = obj10;
  fn12.__workletHash = 8995549322978;
  fn12.__initData = __initData13;
  const animatedStyle3 = safeAreaBottom(voiceMessageAnimationState[10]).useAnimatedStyle(fn12);
  const obj27 = safeAreaBottom(voiceMessageAnimationState[10]);
  const tmp7Result = initialAnimation(tmp2[0] ? voiceMessageAnimationState[23] : voiceMessageAnimationState[24]);
  class M {
    constructor() {
      obj = { opacity: initialAnimation.get(), bottom: null };
      sum = safeAreaBottom + CHAT_INPUT_HEIGHT + 24;
      obj.bottom = sum + 8 * initialAnimation.get();
      return obj;
    }
  }
  obj11 = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  M.__closure = obj11;
  M.__workletHash = 17067557493480;
  M.__initData = __initData16;
  const animatedStyle4 = tmp4(voiceMessageAnimationState[10]).useAnimatedStyle(M);
  obj12 = { style: null, children: null };
  items = [tmp.lockParentContainer, animatedStyle, animatedStyle4];
  obj12.style = items;
  const obj13 = { style: null, children: null };
  let items1 = [tmp.lockContainer, animatedStyle1];
  obj13.style = items1;
  let items2 = [closure_13(closure_16, { style: animatedStyle2, source: tmp7Result })];
  obj14 = { style: null, source: tmp7(tmp5[25]) };
  const items3 = [tmp.chevon, animatedStyle3];
  obj14.style = items3;
  items2[1] = closure_13(closure_16, obj14);
  obj13.children = items2;
  obj12.children = closure_14(initialAnimation(voiceMessageAnimationState[10]).View, obj13);
  return closure_13(initialAnimation(voiceMessageAnimationState[10]).View, obj12);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, AppState: metroRequire } = get_ActivityIndicator);
const useVoiceMessagesUIStore = fn(11960).useVoiceMessagesUIStore;
const VoiceMessageAnimationState = fn(11961).VoiceMessageAnimationState;
const ComponentActionsKeyed = fn(1074).ComponentActionsKeyed;
const CHAT_INPUT_HEIGHT = fn(11962).CHAT_INPUT_HEIGHT;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let closure_16 = ReanimatedRexport.createAnimatedComponent(fn(1178).Icon);
let closure_17 = ReanimatedRexport.createAnimatedComponent(fn(4556).Text);
let closure_18 = apply.memoize(() => ReanimatedRexport.createAnimatedComponent(inlineStyles.Ellipse));
let c19 = 68;
let c20 = 56;
const createStyles = fn(4560);
let closure_21 = createStyles.createStyles(() => {
  let obj = {
    innerContainer: null,
    contentContainer: null,
    contentContainerFloating: null,
    floatingSendButton: null,
    floatingSendButtonActive: null,
    floatingSendButtonIconActive: null,
    voiceChatContainer: null,
    lockContainer: null,
    lockParentContainer: null,
    chevon: null,
  };
  obj = {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 8,
    paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL,
    paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM,
  };
  obj.innerContainer = obj;
  obj.contentContainer = { position: "absolute", bottom: 0, width: "100%", alignItems: "center", overflow: "hidden" };
  obj.contentContainerFloating = { justifyContent: "flex-end", overflow: "visible" };
  const size = {
    width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH,
    height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT,
  };
  obj.floatingSendButton = size;
  obj = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj.floatingSendButtonActive = obj;
  obj.floatingSendButtonIconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  const obj1 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  obj.voiceChatContainer = {
    flex: 1,
    height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT,
    marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT,
    alignItems: "flex-end",
  };
  const size1 = {
    height: v68,
    width: v56,
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    elevation: 12,
    shadowColor: nativeDefault.colors.BLACK,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 36,
    borderWidth: LegacyTokens.DARK_0_LIGHT_1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.08)",
  };
  obj.lockContainer = size1;
  const obj2 = {
    flex: 1,
    height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT,
    marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT,
    alignItems: "flex-end",
  };
  obj.lockParentContainer = {
    position: "absolute",
    right: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT,
    width: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH,
  };
  const size2 = { height: 16, width: 16, marginTop: 8, tintColor: nativeDefault.colors.ICON_SUBTLE };
  obj.chevon = size2;
  return obj;
});
let items = [, , ,];
({ SENDING: arr[0], CANCELLING: arr[1], LOCKING: arr[2], LOCKED: arr[3] } = VoiceMessageAnimationState);
const __initData = {
  code: "function VoiceMessageOverlayTsx1(){const{useReducedMotion,currWaveHeight}=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;}",
};
const __initData2 = {
  code: "function VoiceMessageOverlayTsx2(){const{derivedCurrWaveHeight,offsetThreshold}=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;}",
};
const __initData3 = {
  code: "function VoiceMessageOverlayTsx3(){const{voiceMessageEllipseBgColor,radius,offset}=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};}",
};
const __initData4 = {
  code: "function VoiceMessageOverlayTsx4(){const{radius,height,offset}=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};}",
};
const __initData5 = {
  code: "function VoiceMessageOverlayTsx5(){const{initialAnimation,recordingAnimation}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue};}",
};
let closure_28 = noop.memo((initialAnimation) => {
  initialAnimation = initialAnimation.initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  const voiceMessageState = initialAnimation.voiceMessageState;
  let stringResult5;
  let tmp2 = useVoiceMessagesUIStore(
    (savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData,
  );
  let obj = noop;
  const ref = noop.useRef(undefined);
  const tmp5 = useRefValueDefault(ref);
  if (initialAnimation.exiting) {
    stringResult5 = tmp5;
    let stringResult = tmp5;
  } else {
    if (tmp2) {
      if (!tmp) {
        const intl = util.intl;
        stringResult = intl.string(util.t["m+sRVL"]);
        stringResult5 = stringResult;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl6 = util.intl;
        const stringResult1 = intl6.string(util.t["zPxm/X"]);
        stringResult5 = stringResult1;
        stringResult = stringResult1;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl5 = util.intl;
        const stringResult2 = intl5.string(util.t.sB81Bo);
        stringResult5 = stringResult2;
        stringResult = stringResult2;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl2 = util.intl;
        const stringResult3 = intl2.string(util.t.cyL7DJ);
        stringResult5 = stringResult3;
        stringResult = stringResult3;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl3 = util.intl;
        const stringResult4 = intl3.string(util.t["a+A3+f"]);
        stringResult5 = stringResult4;
        stringResult = stringResult4;
      }
    }
    if (!tmp2) {
      tmp2 = voiceMessageState !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp2) {
      const intl4 = util.intl;
      stringResult5 = intl4.string(util.t["3qvtks"]);
      stringResult = stringResult5;
    }
  }
  items = [stringResult];
  const effect = obj.useEffect(() => {
    ref.current = stringResult5;
  }, items);
  ReanimatedRexport2;
  class C {
    constructor() {
      obj = { opacity: null };
      value = initialAnimation.get();
      obj.opacity = Math.min(value, recordingAnimation.get());
      return obj;
    }
  }
  C.__closure = { initialAnimation, recordingAnimation };
  C.__workletHash = 792702950481;
  C.__initData = __initData5;
  let tmp26 = null;
  if (null != stringResult) {
    obj = {
      style: tmp25,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      maxFontSizeMultiplier: 2,
      children: stringResult,
    };
    tmp26 = map1(closure_17, obj);
  }
  return tmp26;
});
const __initData6 = {
  code: "function VoiceMessageOverlayTsx6(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}",
};
const __initData7 = {
  code: "function VoiceMessageOverlayTsx7(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}",
};
const __initData8 = {
  code: "function VoiceMessageOverlayTsx8(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}",
};
const __initData9 = {
  code: "function VoiceMessageOverlayTsx9(){const{voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);}",
};
const __initData10 = {
  code: "function VoiceMessageOverlayTsx10(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,LOCK_PILL_RESTING_HEIGHT}=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,104,104])};}",
};
const __initData11 = {
  code: "function VoiceMessageOverlayTsx11(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_RESTING_HEIGHT,lockContainerOpacity,lockedBackgroundColor,lockPillLockedOverhang}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[lockPillWidth,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,lockPillLockedOverhang,lockPillLockedOverhang]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};}",
};
const __initData12 = {
  code: "function VoiceMessageOverlayTsx12(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};}",
};
const __initData13 = {
  code: "function VoiceMessageOverlayTsx13(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};}",
};
const __initData14 = {
  code: "function VoiceMessageOverlayTsx14(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}",
};
const __initData15 = {
  code: "function VoiceMessageOverlayTsx15(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}",
};
const __initData16 = {
  code: "function VoiceMessageOverlayTsx16(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}",
};
const __initData17 = {
  code: "function VoiceMessageOverlayTsx17(){const{voiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1];}",
};
const __initData18 = {
  code: "function VoiceMessageOverlayTsx18(state,previous){const{runOnJS,setVoiceMessageState}=this.__closure;if(state!==previous){runOnJS(setVoiceMessageState)(state);}}",
};
const __initData19 = {
  code: "function VoiceMessageOverlayTsx19(){const{initialAnimation}=this.__closure;return{opacity:initialAnimation.get()};}",
};
let closure_44 = noop.memo((channelId) => {
  channelId = channelId.channelId;
  const voiceMessageAnimationState = channelId.voiceMessageAnimationState;
  const exiting = channelId.exiting;
  let sharedValue;
  _slicedToArray = undefined;
  let ref;
  let obj = channelId(sharedValue[19]);
  const token = obj.useToken(
    voiceMessageAnimationState(sharedValue[16]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT,
  );
  const tmp5 = closure_21();
  const bottom = voiceMessageAnimationState(sharedValue[26])({
    includeCustomKeyboardHeight: true,
    includeKeyboardHeight: true,
  }).insets.bottom;
  let obj1 = channelId(sharedValue[27]);
  const keyboardOpenPaddingStyle = obj1.useKeyboardOpenPaddingStyle();
  const tmp7 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  closure_129_0 = tmp7;
  closure_129_1 = exiting;
  let obj2 = channelId(sharedValue[10]);
  sharedValue = obj2.useSharedValue(0);
  closure_129_2 = sharedValue;
  closure_129_3 = ref.useRef(performance.now());
  items = [sharedValue];
  const effect = ref.useEffect(() => {
    const obj = { easing: ReanimatedRexport2.Easing.quad, duration: 250 };
    const result = sharedValue.set(obj.withDelay(500, timing.withTiming(1, obj)));
  }, items);
  const items1 = [sharedValue, exiting];
  const effect1 = ref.useEffect(() => {
    if (voiceMessageAnimationState) {
      const obj = { easing: ReanimatedRexport2.Easing.quad, duration: 100 };
      const result = sharedValue.set(obj.withTiming(0, obj));
    }
  }, items1);
  let obj3 = channelId(sharedValue[10]);
  const sharedValue1 = obj3.useSharedValue(0);
  closure_129_4 = sharedValue1;
  const items2 = [sharedValue, sharedValue1, tmp7];
  const effect2 = ref.useEffect(() => {
    if (channelId) {
      let obj = { easing: ReanimatedRexport2.Easing.quad, duration: 200 };
      const result = ref.set(obj.withTiming(1, obj));
      const _performance = performance;
      if (performance.now() - _undefined.current < 500) {
        obj = { easing: tmp2(4296).Easing.quad, duration: 250 };
        const result1 = sharedValue.set(tmp2(4561).withTiming(1, obj));
        const tmp2Result = tmp2(4561);
      }
    }
  }, items2);
  [tmp15, tmp16] = _slicedToArray(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  _slicedToArray = tmp16;
  let obj4 = channelId(sharedValue[10]);
  class A {
    constructor() {
      return closure_1.get()[1];
    }
  }
  A.__closure = { voiceMessageAnimationState };
  A.__workletHash = 2001586726975;
  A.__initData = __initData17;
  class I {
    constructor(arg0, arg1) {
      if (channelId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[10]);
        tmp3 = closure_3;
        tmp4 = obj.runOnJS(closure_3)(channelId);
      }
      return;
    }
  }
  obj = { runOnJS: channelId(sharedValue[10]).runOnJS, setVoiceMessageState: tmp16 };
  I.__closure = obj;
  I.__workletHash = 3332201719722;
  I.__initData = __initData18;
  const animatedReaction = obj4.useAnimatedReaction(A, I);
  ref = ref.useRef(null);
  const effect3 = ref.useEffect(() => {
    let obj = useIsScreenReaderEnabled;
    if (obj.getIsScreenReaderEnabled()) {
      obj = { ref };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj);
      const tmpResult = setAccessibilityFocus;
    }
  }, []);
  const items3 = [channelId];
  const effect4 = ref.useEffect(() => {
    closure_0 = closure_1_6.addEventListener("change", (event) => {
      let tmp = "inactive" !== event;
      if (tmp) {
        tmp = "background" !== event;
      }
      if (!tmp) {
        const ComponentDispatch = channelId(sharedValue[30]).ComponentDispatch;
        const obj = {
          isCancelling: true,
          cancelReason: channelId(sharedValue[31]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND,
        };
        ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, closure_0, obj);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items3);
  let obj6 = channelId(sharedValue[10]);
  class K {
    constructor() {
      obj = { opacity: closure_2.get() };
      return obj;
    }
  }
  K.__closure = { initialAnimation: sharedValue };
  K.__workletHash = 14041876681603;
  K.__initData = __initData19;
  const animatedStyle = obj6.useAnimatedStyle(K);
  let obj7 = channelId(sharedValue[32]);
  const wakeLock = obj7.useWakeLock("VoiceMessageOverlay");
  obj = { style: null, children: null };
  const items4 = [tmp5.contentContainer, { bottom }, animatedStyle];
  const items5 = [tmp5.contentContainerFloating, keyboardOpenPaddingStyle];
  items4[3] = items5;
  obj.style = items4;
  const items6 = [
    closure_13(channelId(sharedValue[33]).ChatInputScrimGradient, { gradientHeight: token, inline: true }),
    closure_13(closure_28, {
      initialAnimation: sharedValue,
      recordingAnimation: sharedValue1,
      voiceMessageState: tmp15,
      exiting,
    }),
  ];
  obj1 = { style: tmp5.innerContainer, children: null };
  obj2 = { style: tmp5.voiceChatContainer, children: null };
  obj3 = { isRecording: tmp7, initialAnimation: sharedValue, leftAccessory: null, rightAccessory: null };
  const tmp14 = _slicedToArray(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  const tmp24 = closure_15;
  const tmp26 = closure_5;
  obj4 = {
    icon: voiceMessageAnimationState(sharedValue[36]),
    variant: null,
    size: "sm",
    maxFontSizeMultiplier: 2,
    accessibilityLabel: null,
    onPressIn: null,
    onPress: null,
  };
  let str = "tertiary";
  if (tmp15 === VoiceMessageAnimationState.CANCELLING) {
    str = "destructive";
  }
  obj4.variant = str;
  const intl = tmp(tmp2[21]).intl;
  obj4.accessibilityLabel = intl.string(channelId(sharedValue[21]).t.RdK9sV);
  obj4.onPressIn = function onPressIn() {
    return channelId(sharedValue[37]).triggerHaptic();
  };
  obj4.onPress = function onPress() {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, channelId, { isCancelling: true });
  };
  obj3.leftAccessory = closure_13(channelId(sharedValue[35]).IconButton, obj4);
  const obj5 = {
    ref,
    active: null,
    style: null,
    activeStyle: null,
    activeIconStyle: null,
    IconComponent: null,
    accessibilityLabel: null,
    onPress: null,
  };
  let tmp29 = tmp15 === tmp13.SENDING;
  const tmp27 = voiceMessageAnimationState(sharedValue[34]);
  if (!tmp29) {
    tmp29 = tmp15 === tmp13.LOCKED;
  }
  obj5.active = tmp29;
  ({
    floatingSendButton: obj14.style,
    floatingSendButtonActive: obj14.activeStyle,
    floatingSendButtonIconActive: obj14.activeIconStyle,
  } = tmp5);
  if (!tmp7) {
    if (!exiting) {
      let SendMessageIcon = tmp(tmp2[40]).MicrophoneIcon;
    }
    obj6 = { children: null };
    obj5.IconComponent = SendMessageIcon;
    const intl2 = tmp(tmp2[21]).intl;
    obj5.accessibilityLabel = intl2.string(tmp(tmp2[21]).t["+8GStU"]);
    obj5.onPress = function onPress() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, channelId, { isCancelling: false });
    };
    obj3.rightAccessory = tmp25(tmp3Result, obj5);
    obj2.children = tmp25(tmp27, obj3);
    obj1.children = tmp25(voiceMessageAnimationState(sharedValue[10]).View, obj2);
    items6[2] = tmp25(tmp26, obj1);
    obj.children = items6;
    const items7 = [tmp23(voiceMessageAnimationState(sharedValue[10]).View, obj)];
    obj7 = { safeAreaBottom: bottom, initialAnimation: sharedValue, voiceMessageAnimationState };
    items7[1] = tmp25(LockPill, obj7);
    obj6.children = items7;
    return tmp23(tmp24, obj6);
  }
  SendMessageIcon = tmp(tmp2[39]).SendMessageIcon;
});
const memoResult = noop.memo((opacity) => {
  const radius = opacity.radius;
  const height = opacity.height;
  const offsetThreshold = opacity.offsetThreshold;
  const voiceMessageAnimationState = opacity.voiceMessageAnimationState;
  let derivedValue3;
  let obj = radius(offsetThreshold[18]);
  items = [derivedValue3];
  const stateFromStores = obj.useStateFromStores(items, () => derivedValue3.useReducedMotion, []);
  const tmp2 = useVoiceMessagesUIStore((currWaveHeight) => currWaveHeight.currWaveHeight);
  closure_4 = tmp2;
  let obj1 = radius(offsetThreshold[10]);
  const fn = function _() {
    let num = 0.5;
    if (!stateFromStores) {
      let num2;
      if (closure_4 != null) {
        num2 = obj.get();
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
      obj = closure_4;
    }
    return num;
  };
  fn.__closure = { useReducedMotion: stateFromStores, currWaveHeight: tmp2 };
  fn.__workletHash = 2925868096827;
  fn.__initData = __initData;
  const derivedValue = obj1.useDerivedValue(fn);
  let obj2 = radius(offsetThreshold[19]);
  const token = obj2.useToken(height(offsetThreshold[16]).colors.BACKGROUND_BRAND);
  const RED_400 = height(offsetThreshold[16]).unsafe_rawColors.RED_400;
  closure_129_0 = voiceMessageAnimationState;
  closure_129_1 = token;
  closure_129_2 = RED_400;
  closure_129_3 = token;
  closure_129_4 = token;
  const fn2 = function _() {
    const obj = { easing: ReanimatedRexport2.Easing.linear, duration: 150 };
    return obj.withTiming(radius.get()[1], obj);
  };
  obj = {
    voiceMessageAnimationState,
    withTiming: radius(offsetThreshold[22]).withTiming,
    Easing: radius(offsetThreshold[10]).Easing,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 8516919791077;
  fn2.__initData = __initData6;
  const derivedValue1 = radius(offsetThreshold[10]).useDerivedValue(fn2);
  closure_129_5 = derivedValue1;
  const obj4 = radius(offsetThreshold[10]);
  const fn3 = function u() {
    const tmp = _slicedToArray(radius.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [height, height, stateFromStores, closure_4];
      let items1 = items;
    } else {
      items1 = [height, offsetThreshold, stateFromStores, closure_4];
    }
    return ReanimatedRexport2.interpolateColor(derivedValue.get(), items, items1);
  };
  obj = {
    voiceMessageAnimationState,
    sendingColor: token,
    lockingColor: token,
    lockedColor: token,
    cancelingColor: RED_400,
    interpolateColor: radius(offsetThreshold[10]).interpolateColor,
    timing: derivedValue1,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  fn3.__closure = obj;
  fn3.__workletHash = 4463544053380;
  fn3.__initData = __initData7;
  const derivedValue2 = radius(offsetThreshold[10]).useDerivedValue(fn3);
  const obj6 = radius(offsetThreshold[10]);
  class E {
    constructor() {
      return closure_5.get() * offsetThreshold;
    }
  }
  E.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  E.__workletHash = 7278593580538;
  E.__initData = __initData2;
  derivedValue3 = radius(offsetThreshold[10]).useDerivedValue(E);
  const obj8 = radius(offsetThreshold[10]);
  class S {
    constructor() {
      obj = {
        fill: closure_6.get(),
        ry: radius + closure_7.get(),
        rx: radius,
        cy: radius + closure_7.get(),
        cx: radius,
      };
      return obj;
    }
  }
  S.__closure = { voiceMessageEllipseBgColor: derivedValue2, radius, offset: derivedValue3 };
  S.__workletHash = 12489173275515;
  S.__initData = __initData3;
  const animatedProps = radius(offsetThreshold[10]).useAnimatedProps(S);
  const obj9 = radius(offsetThreshold[10]);
  class I {
    constructor() {
      size = { position: "absolute", width: 2 * radius, height: null, bottom: 0 };
      value = height.get();
      size.height = value + closure_7.get();
      return size;
    }
  }
  I.__closure = { radius, height, offset: derivedValue3 };
  I.__workletHash = 16593476434034;
  I.__initData = __initData4;
  const animatedStyle = radius(offsetThreshold[10]).useAnimatedStyle(I);
  const obj10 = radius(offsetThreshold[10]);
  obj1 = { style: animatedStyle, children: null };
  obj2 = { children: closure_13(closure_18(), { animatedProps, opacity: opacity.opacity }) };
  obj1.children = closure_13(radius(offsetThreshold[14]).Svg, obj2);
  return closure_13(height(offsetThreshold[10]).View, obj1);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default noop.memo((channelId) => {
  channelId = channelId.channelId;
  const tmp = useVoiceMessagesUIStore((showRecordingOverlay) => showRecordingOverlay.showRecordingOverlay);
  closure_1 = tmp;
  let obj = channelId(504);
  items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp2 = useVoiceMessagesUIStore(
    (voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState,
  );
  const tmp3 = _slicedToArray(noop.useState(tmp), 2);
  dependencyMap = tmp3[1];
  const items1 = [tmp];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      closure_2(true);
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(false), 100);
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
        obj = { channelId, voiceMessageAnimationState: tmp2, exiting: !tmp };
        tmp7 = closure_13(closure_44, obj);
      }
    }
    tmp6 = tmp7;
  }
  return tmp6;
});
export const VoiceMessageEllipse = memoResult;
