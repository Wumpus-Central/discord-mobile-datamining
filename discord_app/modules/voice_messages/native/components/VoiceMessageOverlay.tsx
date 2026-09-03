// discord_app/modules/voice_messages/native/components/VoiceMessageOverlay.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import result2 from "../../../../design/migrations/native/LegacyTokens.tsx";
import inlineStyles from "../../../../../_runtime/08254_inlineStyles.js";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../a11y/AccessibilityStore.tsx";
import closure_8 from "../../../../stores/ChannelStore.tsx";
import { useVoiceMessagesUIStore } from "../VoiceMessagesUIStore.tsx";
import { VoiceMessageAnimationState } from "../../VoiceMessageConstants.tsx";
import { ComponentActionsKeyed } from "../../../../Constants.tsx";
import { CHAT_INPUT_HEIGHT } from "../../../chat_input/native/ChatInputConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../reanimated/ReanimatedRexport.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult2 from "../../../../../_runtime/00012_apply.js";

require = arg1;
function LockPill(safeAreaBottom) {
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  let voiceMessageAnimationState = safeAreaBottom;
  const initialAnimation = safeAreaBottom.initialAnimation;
  let token3 = initialAnimation;
  voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  token3 = voiceMessageAnimationState;
  let token4;
  let tmp = callback5();
  const tmp2 = token4(derivedValue3.useState(false), 2);
  token4 = tmp3;
  let obj = voiceMessageAnimationState(token3[10]);
  const fn = function _() {
    return token3.get()[1] === closure_1_10.LOCKED || token3.get()[1] === tmp.LOCKING;
  };
  obj = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn.__closure = obj;
  fn.__workletHash = 11711445602143;
  fn.__initData = closure_37;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      voiceMessageAnimationState(token3[10]).runOnJS(token4)(arg0);
      const obj = voiceMessageAnimationState(token3[10]);
    }
  };
  obj = { runOnJS: voiceMessageAnimationState(token3[10]).runOnJS, setLocked: tmp3 };
  fn2.__closure = obj;
  fn2.__workletHash = 7476668458521;
  fn2.__initData = closure_38;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  token3 = undefined;
  token3 = undefined;
  token4 = undefined;
  derivedValue3 = undefined;
  let derivedValue4;
  let derivedValue5;
  let obj3 = voiceMessageAnimationState(token3[19]);
  const token = obj3.useToken(token3(token3[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_DEFAULT);
  let obj4 = voiceMessageAnimationState(token3[19]);
  const token1 = obj4.useToken(token3(token3[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_ACTIVE);
  token3 = token;
  token3 = token;
  token4 = token1;
  derivedValue3 = token1;
  derivedValue4 = undefined;
  let obj5 = voiceMessageAnimationState(token3[10]);
  const fn3 = function _() {
    let obj = voiceMessageAnimationState(RED_400[22]);
    obj = { easing: voiceMessageAnimationState(RED_400[10]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  fn3.__closure = {
    voiceMessageAnimationState,
    withTiming: voiceMessageAnimationState(token3[22]).withTiming,
    Easing: voiceMessageAnimationState(token3[10]).Easing,
  };
  fn3.__workletHash = 8516919791077;
  fn3.__initData = closure_29;
  const derivedValue = obj5.useDerivedValue(fn3);
  derivedValue4 = derivedValue;
  let obj7 = voiceMessageAnimationState(token3[10]);
  const fn4 = function u() {
    const tmp = token(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [token, token, token, token];
      let items1 = items;
    } else {
      items1 = [token, RED_400, token, token];
    }
    return voiceMessageAnimationState(RED_400[10]).interpolateColor(derivedValue1.get(), closure_1_22, items1);
  };
  obj1 = {
    voiceMessageAnimationState,
    withTiming: voiceMessageAnimationState(token3[22]).withTiming,
    Easing: voiceMessageAnimationState(token3[10]).Easing,
  };
  const tmp4 = voiceMessageAnimationState;
  fn4.__closure = {
    voiceMessageAnimationState,
    sendingColor: token,
    lockingColor: token1,
    lockedColor: token1,
    cancelingColor: token,
    interpolateColor: voiceMessageAnimationState(token3[10]).interpolateColor,
    timing: derivedValue,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  fn4.__workletHash = 4463544053380;
  fn4.__initData = closure_30;
  const derivedValue1 = obj7.useDerivedValue(fn4);
  token3 = derivedValue1;
  let obj9 = voiceMessageAnimationState(token3[19]);
  const token2 = obj9.useToken(token3(token3[16]).modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH);
  token3 = token2;
  const result = -c20 - token2 / 2;
  token4 = result;
  let obj10 = voiceMessageAnimationState(token3[19]);
  token3 = obj10.useToken(token3(token3[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_DEFAULT);
  let obj11 = voiceMessageAnimationState(token3[19]);
  token4 = obj11.useToken(token3(token3[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_ACTIVE);
  derivedValue3 = token4;
  derivedValue4 = undefined;
  let obj12 = voiceMessageAnimationState(token3[10]);
  const fn5 = function _() {
    let obj = voiceMessageAnimationState(RED_400[22]);
    obj = { easing: voiceMessageAnimationState(RED_400[10]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj3 = {
    voiceMessageAnimationState,
    withTiming: voiceMessageAnimationState(token3[22]).withTiming,
    Easing: voiceMessageAnimationState(token3[10]).Easing,
  };
  fn5.__closure = obj3;
  fn5.__workletHash = 8516919791077;
  fn5.__initData = closure_29;
  const derivedValue2 = obj12.useDerivedValue(fn5);
  derivedValue4 = derivedValue2;
  let obj14 = voiceMessageAnimationState(token3[10]);
  const fn6 = function u() {
    const tmp = token(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [token, token, token, token];
      let items1 = items;
    } else {
      items1 = [token, RED_400, token, token];
    }
    return voiceMessageAnimationState(RED_400[10]).interpolateColor(derivedValue1.get(), closure_1_22, items1);
  };
  obj4 = {
    voiceMessageAnimationState,
    sendingColor: token3,
    lockingColor: token4,
    lockedColor: token4,
    cancelingColor: token3,
    interpolateColor: voiceMessageAnimationState(token3[10]).interpolateColor,
    timing: derivedValue2,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  fn6.__closure = obj4;
  fn6.__workletHash = 4463544053380;
  fn6.__initData = closure_30;
  derivedValue3 = obj14.useDerivedValue(fn6);
  let obj2 = {
    voiceMessageAnimationState,
    sendingColor: token,
    lockingColor: token1,
    lockedColor: token1,
    cancelingColor: token,
    interpolateColor: voiceMessageAnimationState(token3[10]).interpolateColor,
    timing: derivedValue,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  const fn7 = function o() {
    let obj = voiceMessageAnimationState(token3[22]);
    obj = { easing: voiceMessageAnimationState(token3[10]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj5 = {
    voiceMessageAnimationState,
    withTiming: voiceMessageAnimationState(token3[22]).withTiming,
    Easing: voiceMessageAnimationState(token3[10]).Easing,
  };
  fn7.__closure = obj5;
  fn7.__workletHash = 11443022128299;
  fn7.__initData = closure_31;
  derivedValue4 = voiceMessageAnimationState(token3[10]).useDerivedValue(fn7);
  const obj17 = voiceMessageAnimationState(token3[10]);
  const fn8 = function s() {
    const tmp = token4(voiceMessageAnimationState.get(), 2);
    return voiceMessageAnimationState(token3[10]).interpolate(
      derivedValue4.get(),
      closure_1_22,
      tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0],
    );
  };
  const obj19 = voiceMessageAnimationState(token3[10]);
  fn8.__closure = {
    voiceMessageAnimationState,
    interpolate: voiceMessageAnimationState(token3[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  fn8.__workletHash = 467806088074;
  fn8.__initData = closure_32;
  derivedValue5 = obj19.useDerivedValue(fn8);
  const obj6 = {
    voiceMessageAnimationState,
    interpolate: voiceMessageAnimationState(token3[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  const fn9 = function l() {
    const obj = {
      height: voiceMessageAnimationState(token3[10]).interpolate(derivedValue4.get(), closure_1_22, items),
    };
    items = [closure_1_19, closure_1_19, 104, 104];
    return obj;
  };
  obj7 = {
    interpolate: voiceMessageAnimationState(token3[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
    LOCK_PILL_RESTING_HEIGHT: c19,
  };
  fn9.__closure = obj7;
  fn9.__workletHash = 1225730432489;
  fn9.__initData = closure_33;
  const animatedStyle = voiceMessageAnimationState(token3[10]).useAnimatedStyle(fn9);
  const obj21 = voiceMessageAnimationState(token3[10]);
  const fn10 = function c() {
    const obj = {
      width: voiceMessageAnimationState(token3[10]).interpolate(derivedValue4.get(), closure_1_22, items),
      height: null,
      opacity: null,
      backgroundColor: null,
      marginHorizontal: null,
      marginBottom: null,
    };
    items = [token3, token3, closure_1_20, closure_1_20];
    const obj2 = voiceMessageAnimationState(token3[10]);
    const items1 = [closure_1_19, closure_1_19, closure_1_20, closure_1_20];
    obj[1] = voiceMessageAnimationState(token3[10]).interpolate(derivedValue4.get(), closure_1_22, items1);
    obj[2] = derivedValue5.get();
    obj[3] = token3.get();
    const obj3 = voiceMessageAnimationState(token3[10]);
    const items2 = [0, 0, token4, token4];
    obj[4] = voiceMessageAnimationState(token3[10]).interpolate(derivedValue4.get(), closure_1_22, items2);
    const obj4 = voiceMessageAnimationState(token3[10]);
    obj[5] = voiceMessageAnimationState(token3[10]).interpolate(derivedValue4.get(), closure_1_22, [0, 0, 36, 36]);
    return obj;
  };
  const obj23 = voiceMessageAnimationState(token3[10]);
  fn10.__closure = {
    interpolate: voiceMessageAnimationState(token3[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
    lockPillWidth: token2,
    LOCK_PILL_LOCKED_SIZE: c20,
    LOCK_PILL_RESTING_HEIGHT: c19,
    lockContainerOpacity: derivedValue5,
    lockedBackgroundColor: derivedValue1,
    lockPillLockedOverhang: result,
  };
  fn10.__workletHash = 12418415107450;
  fn10.__initData = closure_34;
  const animatedStyle1 = obj23.useAnimatedStyle(fn10);
  const obj8 = {
    interpolate: voiceMessageAnimationState(token3[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
    lockPillWidth: token2,
    LOCK_PILL_LOCKED_SIZE: c20,
    LOCK_PILL_RESTING_HEIGHT: c19,
    lockContainerOpacity: derivedValue5,
    lockedBackgroundColor: derivedValue1,
    lockPillLockedOverhang: result,
  };
  const fn11 = function _() {
    const obj = {
      width: voiceMessageAnimationState(token3[10]).interpolate(derivedValue4.get(), closure_1_22, [24, 24, 32, 32]),
      height: null,
      marginTop: null,
      tintColor: null,
    };
    const obj2 = voiceMessageAnimationState(token3[10]);
    obj[1] = voiceMessageAnimationState(token3[10]).interpolate(derivedValue4.get(), closure_1_22, [24, 24, 32, 32]);
    const obj3 = voiceMessageAnimationState(token3[10]);
    obj[2] = voiceMessageAnimationState(token3[10]).interpolate(derivedValue4.get(), closure_1_22, [12, 12, 10, 10]);
    obj[3] = derivedValue3.get();
    return obj;
  };
  obj9 = {
    interpolate: voiceMessageAnimationState(token3[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
    lockIconColor: derivedValue3,
  };
  fn11.__closure = obj9;
  fn11.__workletHash = 10749462388463;
  fn11.__initData = closure_35;
  const animatedStyle2 = voiceMessageAnimationState(token3[10]).useAnimatedStyle(fn11);
  const obj25 = voiceMessageAnimationState(token3[10]);
  const fn12 = function u() {
    const obj = {
      opacity: voiceMessageAnimationState(token3[10]).interpolate(derivedValue4.get(), closure_1_22, [1, 1, 0, 0]),
    };
    return obj;
  };
  obj10 = {
    interpolate: voiceMessageAnimationState(token3[10]).interpolate,
    timing: derivedValue4,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  fn12.__closure = obj10;
  fn12.__workletHash = 8995549322978;
  fn12.__initData = closure_36;
  const animatedStyle3 = voiceMessageAnimationState(token3[10]).useAnimatedStyle(fn12);
  const obj27 = voiceMessageAnimationState(token3[10]);
  const tmp7Result = token3(tmp2[0] ? token3[23] : token3[24]);
  class M {
    constructor() {
      obj = { opacity: closure_1.get(), bottom: sum + 8 * closure_1.get() };
      sum = closure_0 + closure_1_12 + 24;
      return obj;
    }
  }
  obj11 = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  M.__closure = obj11;
  M.__workletHash = 17067557493480;
  M.__initData = closure_39;
  const animatedStyle4 = tmp4(token3[10]).useAnimatedStyle(M);
  obj12 = { style: items, children: null };
  items = [tmp.lockParentContainer, animatedStyle, animatedStyle4];
  const obj13 = { style: items1, children: null };
  items1 = [tmp.lockContainer, animatedStyle1];
  let items2 = [callback2(closure_16, { style: animatedStyle2, source: tmp7Result })];
  obj14 = { style: items3, source: tmp7(tmp5[25]) };
  items3 = [tmp.chevon, animatedStyle3];
  items2[1] = callback2(closure_16, obj14);
  obj13[1] = items2;
  obj12[1] = callback3(token3(token3[10]).View, obj13);
  return callback2(token3(token3[10]).View, obj12);
}
let c4 = importAllResult;
({ View: c5, AppState: closure_6 } = get_ActivityIndicator);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let closure_16 = importDefaultResult.createAnimatedComponent(require("Button").Icon);
let closure_17 = importDefaultResult.createAnimatedComponent(require("Text").Text);
const importDefaultResult1 = importDefaultResult;
let closure_18 = importDefaultResult2.memoize(() => importDefaultResult.createAnimatedComponent(inlineStyles.Ellipse));
let c19 = 68;
let c20 = 56;
let closure_21 = createCacheKey.createStyles(() => {
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
    paddingHorizontal: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL,
    paddingBottom: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM,
  };
  obj[0] = obj;
  obj[1] = { position: "absolute", bottom: 0, width: "100%", alignItems: "center", overflow: "hidden" };
  obj[2] = { justifyContent: "flex-end", overflow: "visible" };
  obj = {
    width: ThemesDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH,
    height: ThemesDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT,
  };
  obj[3] = obj;
  obj[4] = { backgroundColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj1 = { backgroundColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj[5] = { tintColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  const obj2 = { tintColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  obj[6] = {
    flex: 1,
    height: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT,
    marginRight: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT,
    alignItems: "flex-end",
  };
  const obj3 = {
    flex: 1,
    height: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT,
    marginRight: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT,
    alignItems: "flex-end",
  };
  obj[7] = {
    height: c19,
    width: c20,
    borderRadius: ThemesDefault.modules.button.BORDER_RADIUS,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    elevation: 12,
    shadowColor: ThemesDefault.colors.BLACK,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 36,
    borderWidth: result2.DARK_0_LIGHT_1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.08)",
  };
  const obj4 = {
    height: c19,
    width: c20,
    borderRadius: ThemesDefault.modules.button.BORDER_RADIUS,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    elevation: 12,
    shadowColor: ThemesDefault.colors.BLACK,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 36,
    borderWidth: result2.DARK_0_LIGHT_1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.08)",
  };
  obj[8] = {
    position: "absolute",
    right: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT,
    width: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH,
  };
  const obj5 = {
    position: "absolute",
    right: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT,
    width: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH,
  };
  obj[9] = { height: 16, width: 16, marginTop: 8, tintColor: ThemesDefault.colors.ICON_SUBTLE };
  return obj;
});
let items = [, , ,];
({ SENDING: arr[0], CANCELLING: arr[1], LOCKING: arr[2], LOCKED: arr[3] } = VoiceMessageAnimationState);
let closure_23 = {
  code: "function VoiceMessageOverlayTsx1(){const{useReducedMotion,currWaveHeight}=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;}",
};
let closure_24 = {
  code: "function VoiceMessageOverlayTsx2(){const{derivedCurrWaveHeight,offsetThreshold}=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;}",
};
let closure_25 = {
  code: "function VoiceMessageOverlayTsx3(){const{voiceMessageEllipseBgColor,radius,offset}=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};}",
};
let closure_26 = {
  code: "function VoiceMessageOverlayTsx4(){const{radius,height,offset}=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};}",
};
let closure_27 = {
  code: "function VoiceMessageOverlayTsx5(){const{initialAnimation,recordingAnimation}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue};}",
};
let closure_28 = importAllResult.memo((initialAnimation) => {
  initialAnimation = initialAnimation.initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  const voiceMessageState = initialAnimation.voiceMessageState;
  let stringResult5;
  let ref;
  let tmp2 = useVoiceMessagesUIStore(
    (savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData,
  );
  let obj = importAllResult;
  ref = importAllResult.useRef(undefined);
  const tmp5 = recordingAnimation(stringResult5[20])(ref);
  if (initialAnimation.exiting) {
    stringResult5 = tmp5;
    let stringResult = tmp5;
  } else {
    if (tmp2) {
      if (!tmp) {
        const intl = initialAnimation(tmp4[21]).intl;
        stringResult = intl.string(initialAnimation(tmp4[21]).t["m+sRVL"]);
        stringResult5 = stringResult;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl6 = initialAnimation(tmp4[21]).intl;
        const stringResult1 = intl6.string(initialAnimation(tmp4[21]).t["zPxm/X"]);
        stringResult5 = stringResult1;
        stringResult = stringResult1;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl5 = initialAnimation(tmp4[21]).intl;
        const stringResult2 = intl5.string(initialAnimation(tmp4[21]).t.sB81Bo);
        stringResult5 = stringResult2;
        stringResult = stringResult2;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl2 = initialAnimation(tmp4[21]).intl;
        const stringResult3 = intl2.string(initialAnimation(tmp4[21]).t.cyL7DJ);
        stringResult5 = stringResult3;
        stringResult = stringResult3;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl3 = initialAnimation(tmp4[21]).intl;
        const stringResult4 = intl3.string(initialAnimation(tmp4[21]).t["a+A3+f"]);
        stringResult5 = stringResult4;
        stringResult = stringResult4;
      }
    }
    if (!tmp2) {
      tmp2 = voiceMessageState !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp2) {
      const intl4 = initialAnimation(tmp4[21]).intl;
      stringResult5 = intl4.string(initialAnimation(tmp4[21]).t["3qvtks"]);
      stringResult = stringResult5;
    }
  }
  items = [stringResult];
  const effect = obj.useEffect(() => {
    ref.current = stringResult5;
  }, items);
  initialAnimation(stringResult5[10]);
  class C {
    constructor() {
      obj = { opacity: null };
      value = initialAnimation.get();
      obj[0] = Math.min(value, recordingAnimation.get());
      return obj;
    }
  }
  C.__closure = { initialAnimation, recordingAnimation };
  C.__workletHash = 792702950481;
  C.__initData = closure_27;
  let tmp26 = null;
  if (null != stringResult) {
    obj = {
      style: null,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      maxFontSizeMultiplier: 2,
      children: null,
    };
    obj[0] = tmp25;
    obj[4] = stringResult;
    tmp26 = callback2(closure_17, obj);
  }
  return tmp26;
});
let closure_29 = {
  code: "function VoiceMessageOverlayTsx6(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}",
};
let closure_30 = {
  code: "function VoiceMessageOverlayTsx7(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}",
};
let closure_31 = {
  code: "function VoiceMessageOverlayTsx8(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}",
};
let closure_32 = {
  code: "function VoiceMessageOverlayTsx9(){const{voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);}",
};
let closure_33 = {
  code: "function VoiceMessageOverlayTsx10(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,LOCK_PILL_RESTING_HEIGHT}=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,104,104])};}",
};
let closure_34 = {
  code: "function VoiceMessageOverlayTsx11(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_RESTING_HEIGHT,lockContainerOpacity,lockedBackgroundColor,lockPillLockedOverhang}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[lockPillWidth,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,lockPillLockedOverhang,lockPillLockedOverhang]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};}",
};
let closure_35 = {
  code: "function VoiceMessageOverlayTsx12(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};}",
};
let closure_36 = {
  code: "function VoiceMessageOverlayTsx13(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};}",
};
let closure_37 = {
  code: "function VoiceMessageOverlayTsx14(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}",
};
let closure_38 = {
  code: "function VoiceMessageOverlayTsx15(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}",
};
let closure_39 = {
  code: "function VoiceMessageOverlayTsx16(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}",
};
let closure_41 = {
  code: "function VoiceMessageOverlayTsx17(){const{voiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1];}",
};
let closure_42 = {
  code: "function VoiceMessageOverlayTsx18(state,previous){const{runOnJS,setVoiceMessageState}=this.__closure;if(state!==previous){runOnJS(setVoiceMessageState)(state);}}",
};
let closure_43 = {
  code: "function VoiceMessageOverlayTsx19(){const{initialAnimation}=this.__closure;return{opacity:initialAnimation.get()};}",
};
let closure_44 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  let _require = channelId;
  const voiceMessageAnimationState = channelId.voiceMessageAnimationState;
  let exiting = voiceMessageAnimationState;
  exiting = channelId.exiting;
  let sharedValue;
  let callback;
  let ref;
  let obj = _require(sharedValue[19]);
  const token = obj.useToken(exiting(sharedValue[16]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  const tmp5 = callback5();
  const bottom = exiting(sharedValue[26])({ includeCustomKeyboardHeight: true, includeKeyboardHeight: true }).insets
    .bottom;
  obj1 = _require(sharedValue[27]);
  const keyboardOpenPaddingStyle = obj1.useKeyboardOpenPaddingStyle();
  const tmp7 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  _require = tmp7;
  sharedValue = undefined;
  callback = undefined;
  ref = undefined;
  let obj2 = _require(sharedValue[10]);
  sharedValue = obj2.useSharedValue(0);
  callback = ref.useRef(performance.now());
  items = [sharedValue];
  const effect = ref.useEffect(() => {
    let obj = callback(sharedValue[10]);
    obj = { easing: callback(sharedValue[10]).Easing.quad, duration: 250 };
    const result = sharedValue.set(obj.withDelay(500, callback(sharedValue[22]).withTiming(1, obj)));
  }, items);
  const items1 = [sharedValue, exiting];
  const effect1 = ref.useEffect(() => {
    if (exiting) {
      let obj = callback(sharedValue[22]);
      obj = { easing: null, duration: 100 };
      obj[0] = callback(sharedValue[10]).Easing.quad;
      const result = sharedValue.set(obj.withTiming(0, obj));
    }
  }, items1);
  let obj3 = _require(sharedValue[10]);
  const sharedValue1 = obj3.useSharedValue(0);
  ref = sharedValue1;
  const items2 = [sharedValue, sharedValue1, tmp7];
  const effect2 = ref.useEffect(() => {
    if (callback) {
      let obj = callback(sharedValue[22]);
      obj = { easing: null, duration: 200 };
      obj[0] = callback(sharedValue[10]).Easing.quad;
      const result = ref.set(obj.withTiming(1, obj));
      const _performance = performance;
      if (performance.now() - tmp16.current < 500) {
        obj = { easing: null, duration: 250 };
        obj[0] = tmp2(tmp3[10]).Easing.quad;
        const result1 = sharedValue.set(tmp2(tmp3[22]).withTiming(1, obj));
        const tmp2Result = tmp2(tmp3[22]);
      }
    }
  }, items2);
  [tmp15, tmp16] = callback(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  callback = tmp16;
  let obj4 = _require(sharedValue[10]);
  class A {
    constructor() {
      return exiting.get()[1];
    }
  }
  A.__closure = { voiceMessageAnimationState };
  A.__workletHash = 2001586726975;
  A.__initData = closure_41;
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
  obj = { runOnJS: _require(sharedValue[10]).runOnJS, setVoiceMessageState: tmp16 };
  I.__closure = obj;
  I.__workletHash = 3332201719722;
  I.__initData = closure_42;
  const animatedReaction = obj4.useAnimatedReaction(A, I);
  ref = ref.useRef(null);
  const effect3 = ref.useEffect(() => {
    let obj = callback(sharedValue[28]);
    if (obj.getIsScreenReaderEnabled()) {
      obj = { ref: null };
      obj[0] = ref;
      const result = callback(sharedValue[29]).setAccessibilityFocus(obj);
      const tmpResult = callback(sharedValue[29]);
    }
  }, []);
  const items3 = [channelId];
  const effect4 = ref.useEffect(() => {
    closure_0 = closure_1_6.addEventListener("change", (arg0) => {
      let tmp = "inactive" !== arg0;
      if (tmp) {
        tmp = "background" !== arg0;
      }
      if (!tmp) {
        const ComponentDispatch = lib(closure_1_2[30]).ComponentDispatch;
        const obj = { isCancelling: true, cancelReason: null };
        obj[1] = lib(closure_1_2[31]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
        ComponentDispatch.dispatchKeyed(closure_1_11.VOICE_MESSAGE_SEND, lib, obj);
      }
    });
    return () => {
      lib.remove();
    };
  }, items3);
  let obj6 = _require(sharedValue[10]);
  class K {
    constructor() {
      obj = { opacity: closure_2.get() };
      return obj;
    }
  }
  K.__closure = { initialAnimation: sharedValue };
  K.__workletHash = 14041876681603;
  K.__initData = closure_43;
  const animatedStyle = obj6.useAnimatedStyle(K);
  let obj7 = _require(sharedValue[32]);
  const wakeLock = obj7.useWakeLock("VoiceMessageOverlay");
  obj = { style: items4, children: null };
  items4 = [tmp5.contentContainer, { bottom }, animatedStyle];
  const items5 = [tmp5.contentContainerFloating, keyboardOpenPaddingStyle];
  items4[3] = items5;
  const items6 = [
    callback2(_require(sharedValue[33]).ChatInputScrimGradient, { gradientHeight: token, inline: true }),
    callback2(closure_28, {
      initialAnimation: sharedValue,
      recordingAnimation: sharedValue1,
      voiceMessageState: tmp15,
      exiting,
    }),
  ];
  obj1 = { style: tmp5.innerContainer, children: null };
  obj2 = { style: tmp5.voiceChatContainer, children: null };
  obj3 = { isRecording: tmp7, initialAnimation: sharedValue, leftAccessory: null, rightAccessory: null };
  const tmp14 = callback(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  const tmp24 = closure_15;
  const tmp26 = closure_5;
  const tmp3 = exiting;
  obj4 = {
    icon: exiting(sharedValue[36]),
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
  obj4[1] = str;
  const intl = tmp(tmp2[21]).intl;
  obj4[4] = intl.string(_require(sharedValue[21]).t.RdK9sV);
  obj4[5] = function onPressIn() {
    return callback(sharedValue[37]).triggerHaptic();
  };
  obj4[6] = function onPress() {
    const ComponentDispatch = callback(sharedValue[30]).ComponentDispatch;
    ComponentDispatch.dispatchKeyed(closure_1_11.VOICE_MESSAGE_SEND, callback, { isCancelling: true });
  };
  obj3[2] = callback2(_require(sharedValue[35]).IconButton, obj4);
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
  const tmp27 = exiting(sharedValue[34]);
  if (!tmp29) {
    tmp29 = tmp15 === tmp13.LOCKED;
  }
  obj5[1] = tmp29;
  ({ floatingSendButton: obj14[2], floatingSendButtonActive: obj14[3], floatingSendButtonIconActive: obj14[4] } = tmp5);
  if (!tmp7) {
    if (!exiting) {
      let SendMessageIcon = tmp(tmp2[40]).MicrophoneIcon;
    }
    obj6 = { children: null };
    obj5[5] = SendMessageIcon;
    const intl2 = tmp(tmp2[21]).intl;
    obj5[6] = intl2.string(tmp(tmp2[21]).t["+8GStU"]);
    obj5[7] = function onPress() {
      const ComponentDispatch = callback(sharedValue[30]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(closure_1_11.VOICE_MESSAGE_SEND, callback, { isCancelling: false });
    };
    obj3[3] = tmp25(tmp3Result, obj5);
    obj2[1] = tmp25(tmp27, obj3);
    obj1[1] = tmp25(exiting(sharedValue[10]).View, obj2);
    items6[2] = tmp25(tmp26, obj1);
    obj[1] = items6;
    const items7 = [tmp23(exiting(sharedValue[10]).View, obj)];
    obj7 = { safeAreaBottom: null, initialAnimation: null, voiceMessageAnimationState: null };
    obj7[0] = bottom;
    obj7[1] = sharedValue;
    obj7[2] = voiceMessageAnimationState;
    items7[1] = tmp25(LockPill, obj7);
    obj6[0] = items7;
    return tmp23(tmp24, obj6);
  }
  SendMessageIcon = tmp(tmp2[39]).SendMessageIcon;
});
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
  let obj = voiceMessageAnimationState(RED_400[18]);
  items = [derivedValue3];
  const stateFromStores = obj.useStateFromStores(items, () => derivedValue3.useReducedMotion, []);
  token = stateFromStores;
  const tmp2 = useVoiceMessagesUIStore((currWaveHeight) => currWaveHeight.currWaveHeight);
  token = tmp2;
  obj1 = voiceMessageAnimationState(RED_400[10]);
  const fn = function _() {
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
  fn.__initData = closure_23;
  const derivedValue = obj1.useDerivedValue(fn);
  derivedValue1 = derivedValue;
  let obj2 = voiceMessageAnimationState(RED_400[19]);
  token = obj2.useToken(token(RED_400[16]).colors.BACKGROUND_BRAND);
  RED_400 = token(RED_400[16]).unsafe_rawColors.RED_400;
  derivedValue1 = undefined;
  const fn2 = function _() {
    let obj = voiceMessageAnimationState(RED_400[22]);
    obj = { easing: voiceMessageAnimationState(RED_400[10]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj = {
    voiceMessageAnimationState,
    withTiming: voiceMessageAnimationState(RED_400[22]).withTiming,
    Easing: voiceMessageAnimationState(RED_400[10]).Easing,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 8516919791077;
  fn2.__initData = closure_29;
  derivedValue1 = voiceMessageAnimationState(RED_400[10]).useDerivedValue(fn2);
  const obj4 = voiceMessageAnimationState(RED_400[10]);
  const fn3 = function u() {
    const tmp = token(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [token, token, token, token];
      let items1 = items;
    } else {
      items1 = [token, RED_400, token, token];
    }
    return voiceMessageAnimationState(RED_400[10]).interpolateColor(derivedValue1.get(), closure_1_22, items1);
  };
  obj = {
    voiceMessageAnimationState,
    sendingColor: token,
    lockingColor: token,
    lockedColor: token,
    cancelingColor: RED_400,
    interpolateColor: voiceMessageAnimationState(RED_400[10]).interpolateColor,
    timing: derivedValue1,
    VOICE_MESSAGE_ANIMATION_STATES: items,
  };
  fn3.__closure = obj;
  fn3.__workletHash = 4463544053380;
  fn3.__initData = closure_30;
  derivedValue2 = voiceMessageAnimationState(RED_400[10]).useDerivedValue(fn3);
  const obj6 = voiceMessageAnimationState(RED_400[10]);
  class E {
    constructor() {
      return closure_5.get() * RED_400;
    }
  }
  E.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  E.__workletHash = 7278593580538;
  E.__initData = closure_24;
  derivedValue3 = voiceMessageAnimationState(RED_400[10]).useDerivedValue(E);
  const obj8 = voiceMessageAnimationState(RED_400[10]);
  class S {
    constructor() {
      obj = {
        fill: closure_6.get(),
        ry: closure_0 + closure_7.get(),
        rx: closure_0,
        cy: closure_0 + closure_7.get(),
        cx: closure_0,
      };
      return obj;
    }
  }
  S.__closure = { voiceMessageEllipseBgColor: derivedValue2, radius, offset: derivedValue3 };
  S.__workletHash = 12489173275515;
  S.__initData = closure_25;
  const animatedProps = voiceMessageAnimationState(RED_400[10]).useAnimatedProps(S);
  const obj9 = voiceMessageAnimationState(RED_400[10]);
  class I {
    constructor() {
      obj = { position: "absolute", width: 2 * closure_0, height: null, bottom: 0 };
      value = closure_1.get();
      obj[2] = value + closure_7.get();
      return obj;
    }
  }
  I.__closure = { radius, height, offset: derivedValue3 };
  I.__workletHash = 16593476434034;
  I.__initData = closure_26;
  const animatedStyle = voiceMessageAnimationState(RED_400[10]).useAnimatedStyle(I);
  const obj10 = voiceMessageAnimationState(RED_400[10]);
  obj1 = { style: animatedStyle, children: null };
  obj2 = { children: callback2(callback4(), { animatedProps, opacity: opacity.opacity }) };
  obj1[1] = callback2(voiceMessageAnimationState(RED_400[14]).Svg, obj2);
  return callback2(token(RED_400[10]).View, obj1);
});
const memoResult1 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  closure_1 = undefined;
  dependencyMap = undefined;
  const tmp = useVoiceMessagesUIStore((showRecordingOverlay) => showRecordingOverlay.showRecordingOverlay);
  closure_1 = tmp;
  let obj = channelId(586);
  items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getChannel(channelId));
  const tmp2 = useVoiceMessagesUIStore(
    (voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState,
  );
  const tmp3 = callback(importAllResult.useState(tmp), 2);
  dependencyMap = tmp3[1];
  const items1 = [tmp];
  const effect = importAllResult.useEffect(() => {
    if (closure_1) {
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
        tmp7 = callback2(closure_44, obj);
      }
    }
    tmp6 = tmp7;
  }
  return tmp6;
});
let result = require("set").fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default memoResult1;
export const VoiceMessageEllipse = memoResult;
