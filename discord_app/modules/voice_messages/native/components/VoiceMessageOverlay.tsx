// === Module 12342: VoiceMessageOverlay ===

// Module 12342 (VoiceMessageOverlay)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import util from "util" /* 1126 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5361 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5370 */;
import LegacyTokens from "LegacyTokens" /* 5976 */;
import useRefValueDefault from "useRefValue" /* 6167 */;
import inlineStyles from "inlineStyles" /* 7559 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import apply from "module_12" /* 12 */;

const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, AppState: metroRequire } = get_ActivityIndicator);
const useVoiceMessagesUIStore = fn(11586).useVoiceMessagesUIStore;
const VoiceMessageAnimationState = fn(11587).VoiceMessageAnimationState;
const ComponentActionsKeyed = fn(1085).ComponentActionsKeyed;
const CHAT_INPUT_HEIGHT = fn(11588).CHAT_INPUT_HEIGHT;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const VoiceMessageOverlay = "VoiceMessageOverlay";
let c17 = 250;
let c18 = 100;
let c19 = 500;
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_20 = ReanimatedRexport.createAnimatedComponent(fn(1200).Icon);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_21 = ReanimatedRexport.createAnimatedComponent(fn(5087).Text);
let closure_22 = apply.memoize(() => ReanimatedRexport.createAnimatedComponent(inlineStyles.Ellipse));
let c23 = 68;
let c24 = 56;
const createStyles = fn(5091);
let closure_25 = createStyles.createStyles(() => {
  const obj = { innerContainer: { flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM }, contentContainer: { position: "absolute", bottom: 0, width: "100%", alignItems: "center", overflow: "hidden" }, contentContainerFloating: { justifyContent: "flex-end", overflow: "visible" }, floatingSendButton: null, floatingSendButtonActive: null, floatingSendButtonIconActive: null, voiceChatContainer: null, lockContainer: null, lockParentContainer: null, chevon: null };
  const size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
  obj.floatingSendButton = size;
  const obj2 = { flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM };
  obj.floatingSendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  const obj3 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj.floatingSendButtonIconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  const obj4 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  obj.voiceChatContainer = { flex: 1, height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" };
  const size1 = { height: v68, width: v56, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, display: "flex", alignItems: "center", flexDirection: "column", elevation: 12, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 36, borderWidth: LegacyTokens.DARK_0_LIGHT_1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)" };
  obj.lockContainer = size1;
  const obj5 = { flex: 1, height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" };
  obj.lockParentContainer = { position: "absolute", right: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT, width: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH };
  const size2 = { height: 16, width: 16, marginTop: 8, tintColor: nativeDefault.colors.ICON_SUBTLE };
  obj.chevon = size2;
  return obj;
});
let items = [, , , ];
({ SENDING: arr[0], CANCELLING: arr[1], LOCKING: arr[2], LOCKED: arr[3] } = VoiceMessageAnimationState);
const __initData = { code: "function VoiceMessageOverlayTsx1(){const{useReducedMotion,currWaveHeight}=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;}" };
const __initData2 = { code: "function VoiceMessageOverlayTsx2(){const{derivedCurrWaveHeight,offsetThreshold}=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;}" };
const __initData3 = { code: "function VoiceMessageOverlayTsx3(){const{voiceMessageEllipseBgColor,radius,offset}=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};}" };
const __initData4 = { code: "function VoiceMessageOverlayTsx4(){const{radius,height,offset}=this.__closure;return{position:\"absolute\",width:radius*2,height:height.get()+offset.get(),bottom:0};}" };
const __initData5 = { code: "function VoiceMessageOverlayTsx5(){const{useReducedMotion,currWaveHeight}=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;}" };
const __initData6 = { code: "function VoiceMessageOverlayTsx6(){const{derivedCurrWaveHeight,offsetThreshold}=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;}" };
const __initData7 = { code: "function VoiceMessageOverlayTsx7(){const{voiceMessageEllipseBgColor,radius,offset}=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};}" };
const __initData8 = { code: "function VoiceMessageOverlayTsx8(){const{radius,height,offset}=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};}" };
fn(558);
const __initData9 = { code: "function VoiceMessageOverlayTsx9(){const{initialAnimation,recordingAnimation}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue};}" };
const __initData10 = { code: "function VoiceMessageOverlayTsx10(){const{initialAnimation,recordingAnimation}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue};}" };
let ReactCompilerGating = fn(558);
let closure_37 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMessagePrompt(initialAnimation) {
  const cResult = c.c(9);
  initialAnimation = initialAnimation.initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  const voiceMessageState = initialAnimation.voiceMessageState;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(isUsingHoldGesture) {
      return isUsingHoldGesture.isUsingHoldGesture;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  useVoiceMessagesUIStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0) {
        return null != initialAnimation.savedVoiceMessageUploadData;
      }
    }
    cResult[1] = A;
  } else {
    class A {
      constructor(arg0) {
        return null != initialAnimation.savedVoiceMessageUploadData;
      }
    }
  }
  let tmp5Result = useVoiceMessagesUIStore(A);
  ref = noop.useRef(undefined);
  if (initialAnimation.exiting) {
    class A {
      constructor(arg0) {
        return null != initialAnimation.savedVoiceMessageUploadData;
      }
    }
    let tmp11 = tmp10;
  } else {
    class A {
      constructor(arg0) {
        return null != initialAnimation.savedVoiceMessageUploadData;
      }
    }
    if (tmp5Result) {
      class A {
        constructor(arg0) {
          return null != initialAnimation.savedVoiceMessageUploadData;
        }
      }
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        class A {
          constructor(arg0) {
            return null != initialAnimation.savedVoiceMessageUploadData;
          }
        }
        const stringResult = obj7.string(util.t["zPxm/X"]);
        let stringResult4 = stringResult;
        tmp11 = stringResult;
      }
    }
    if (tmp5Result) {
      class A {
        constructor(arg0) {
          return null != initialAnimation.savedVoiceMessageUploadData;
        }
      }
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        class A {
          constructor(arg0) {
            return null != initialAnimation.savedVoiceMessageUploadData;
          }
        }
        const stringResult1 = obj6.string(util.t.sB81Bo);
        stringResult4 = stringResult1;
        tmp11 = stringResult1;
      }
    }
    if (!tmp5Result) {
      class A {
        constructor(arg0) {
          return null != initialAnimation.savedVoiceMessageUploadData;
        }
      }
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        class A {
          constructor(arg0) {
            return null != initialAnimation.savedVoiceMessageUploadData;
          }
        }
        const stringResult2 = obj3.string(util.t.cyL7DJ);
        stringResult4 = stringResult2;
        tmp11 = stringResult2;
      }
    }
    if (!tmp5Result) {
      class A {
        constructor(arg0) {
          return null != initialAnimation.savedVoiceMessageUploadData;
        }
      }
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        class A {
          constructor(arg0) {
            return null != initialAnimation.savedVoiceMessageUploadData;
          }
        }
        const stringResult3 = obj4.string(util.t["a+A3+f"]);
        stringResult4 = stringResult3;
        tmp11 = stringResult3;
      }
    }
    if (!tmp5Result) {
      class A {
        constructor(arg0) {
          return null != initialAnimation.savedVoiceMessageUploadData;
        }
      }
      tmp5Result = voiceMessageState !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp5Result) {
      class A {
        constructor(arg0) {
          return null != initialAnimation.savedVoiceMessageUploadData;
        }
      }
      stringResult4 = obj5.string(util.t["3qvtks"]);
      tmp11 = stringResult4;
    }
  }
  if (cResult[2] !== tmp11) {
    class O {
      constructor() {
        closure_3.current = closure_2;
        return;
      }
    }
    cResult[2] = tmp11;
    cResult[3] = O;
  } else {
    class O {
      constructor() {
        closure_3.current = closure_2;
        return;
      }
    }
  }
  if (cResult[4] !== tmp11) {
    class O {
      constructor() {
        closure_3.current = closure_2;
        return;
      }
    }
    tmp19[0] = tmp11;
    cResult[4] = tmp11;
    cResult[5] = tmp19;
  } else {
    class O {
      constructor() {
        closure_3.current = closure_2;
        return;
      }
    }
  }
  const effect = noop.useEffect(O, tmp19);
  tmp10 = useRefValueDefault(noop.useRef(undefined));
  class N {
    constructor() {
      obj = { opacity: null };
      value = initialAnimation.get();
      obj.opacity = Math.min(value, recordingAnimation.get());
      return obj;
    }
  }
  N.__closure = { initialAnimation, recordingAnimation };
  N.__workletHash = 8911521148381;
  N.__initData = __initData9;
  const animatedStyle = ReanimatedRexport2.useAnimatedStyle(N);
  if (null == tmp11) {
    class O {
      constructor() {
        closure_3.current = closure_2;
        return;
      }
    }
  } else {
    class O {
      constructor() {
        closure_3.current = closure_2;
        return;
      }
    }
    const obj8 = { style: animatedStyle, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: 2, children: tmp11 };
    const tmp25 = __initData2(closure_21, obj8);
    cResult[6] = animatedStyle;
    cResult[7] = tmp11;
    cResult[8] = tmp25;
  }
  const tmpResult = ReanimatedRexport2;
}) : (function VoiceMessagePrompt(initialAnimation) {
  initialAnimation = initialAnimation.initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  const voiceMessageState = initialAnimation.voiceMessageState;
  let stringResult5;
  let tmp2 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  ref = noop.useRef(undefined);
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
  const effect = noop.useEffect(() => {
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
  C.__workletHash = 5020551202405;
  C.__initData = __initData10;
  let tmp26 = null;
  if (null != stringResult) {
    const obj2 = { style: tmp25, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: 2, children: stringResult };
    tmp26 = __initData2(closure_21, obj2);
  }
  return tmp26;
}));
const __initData11 = { code: "function VoiceMessageOverlayTsx11(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
const __initData12 = { code: "function VoiceMessageOverlayTsx12(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue_0]=voiceMessageAnimationState.get();const distance=prevValue+currValue_0;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}" };
const __initData13 = { code: "function VoiceMessageOverlayTsx13(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
const __initData14 = { code: "function VoiceMessageOverlayTsx14(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue_0]=voiceMessageAnimationState.get();const distance=prevValue+currValue_0;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}" };
ReactCompilerGating = fn(558);
let closure_42 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDerivedColors(voiceMessageAnimationState, sendingColor, cancelingColor, lockingColor, lockedColor) {
  _require = voiceMessageAnimationState;
  closure_1 = sendingColor;
  dependencyMap = cancelingColor;
  closure_3 = lockingColor;
  closure_4 = lockedColor;
  const fn = function _() {
    const obj = timing;
    return obj.withTiming(voiceMessageAnimationState.get()[1], { easing: ReanimatedRexport2.Easing.linear, duration: 150 });
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__workletHash = 1745446544851;
  fn.__initData = __initData11;
  const derivedValue = obj.useDerivedValue(fn);
  const obj2 = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  const fn2 = function u() {
    const tmp = _slicedToArray(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [closure_1, closure_1, closure_3, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, closure_2, closure_3, closure_4];
    }
    return ReanimatedRexport2.interpolateColor(derivedValue.get(), items, items1);
  };
  const obj3 = require("ReanimatedRexport");
  fn2.__closure = { voiceMessageAnimationState, sendingColor, lockingColor, lockedColor, cancelingColor, interpolateColor: require("ReanimatedRexport").interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__workletHash = 9383325401392;
  fn2.__initData = __initData12;
  return obj3.useDerivedValue(fn2);
}) : (function useDerivedColors(voiceMessageAnimationState, sendingColor, cancelingColor, lockingColor, lockedColor) {
  _require = voiceMessageAnimationState;
  closure_1 = sendingColor;
  dependencyMap = cancelingColor;
  closure_3 = lockingColor;
  closure_4 = lockedColor;
  const fn = function _() {
    const obj = timing;
    return obj.withTiming(voiceMessageAnimationState.get()[1], { easing: ReanimatedRexport2.Easing.linear, duration: 150 });
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__workletHash = 8188168463569;
  fn.__initData = __initData13;
  const derivedValue = obj.useDerivedValue(fn);
  const obj2 = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  const fn2 = function u() {
    const tmp = _slicedToArray(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [closure_1, closure_1, closure_3, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, closure_2, closure_3, closure_4];
    }
    return ReanimatedRexport2.interpolateColor(derivedValue.get(), items, items1);
  };
  const obj3 = require("ReanimatedRexport");
  fn2.__closure = { voiceMessageAnimationState, sendingColor, lockingColor, lockedColor, cancelingColor, interpolateColor: require("ReanimatedRexport").interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__workletHash = 14279891272246;
  fn2.__initData = __initData14;
  return obj3.useDerivedValue(fn2);
});
const __initData15 = { code: "function VoiceMessageOverlayTsx15(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
const __initData16 = { code: "function VoiceMessageOverlayTsx16(){const{voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue_0]=voiceMessageAnimationState.get();const distance=prevValue+currValue_0;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);}" };
const __initData17 = { code: "function VoiceMessageOverlayTsx17(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,LOCK_PILL_RESTING_HEIGHT}=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,104,104])};}" };
const __initData18 = { code: "function VoiceMessageOverlayTsx18(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_RESTING_HEIGHT,lockContainerOpacity,lockedBackgroundColor,lockPillLockedOverhang}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[lockPillWidth,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,lockPillLockedOverhang,lockPillLockedOverhang]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};}" };
const __initData19 = { code: "function VoiceMessageOverlayTsx19(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};}" };
const __initData20 = { code: "function VoiceMessageOverlayTsx20(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};}" };
const __initData21 = { code: "function VoiceMessageOverlayTsx21(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
const __initData22 = { code: "function VoiceMessageOverlayTsx22(){const{voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue_0]=voiceMessageAnimationState.get();const distance=prevValue+currValue_0;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);}" };
const __initData23 = { code: "function VoiceMessageOverlayTsx23(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,LOCK_PILL_RESTING_HEIGHT}=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,104,104])};}" };
const __initData24 = { code: "function VoiceMessageOverlayTsx24(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_RESTING_HEIGHT,lockContainerOpacity,lockedBackgroundColor,lockPillLockedOverhang}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[lockPillWidth,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,lockPillLockedOverhang,lockPillLockedOverhang]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};}" };
const __initData25 = { code: "function VoiceMessageOverlayTsx25(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};}" };
const __initData26 = { code: "function VoiceMessageOverlayTsx26(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};}" };
ReactCompilerGating = fn(558);
let closure_55 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLockStyles(voiceMessageAnimationState) {
  _require = voiceMessageAnimationState;
  const cResult = require("c").c(5);
  let obj = require("c");
  const token = require("useToken").useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_DEFAULT);
  let obj2 = require("useToken");
  const token1 = require("useToken").useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_ACTIVE);
  const tmp4 = closure_42(voiceMessageAnimationState, token, token, token1, token1);
  importDefault = tmp4;
  let obj3 = require("useToken");
  token2 = require("useToken").useToken(require("native").modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH);
  const result = -v56 - token2 / 2;
  const _slicedToArray = result;
  let obj4 = require("useToken");
  const token3 = require("useToken").useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_DEFAULT);
  const obj5 = require("useToken");
  const token4 = require("useToken").useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_ACTIVE);
  const tmp9 = closure_42(voiceMessageAnimationState, token3, token3, token4, token4);
  closure_4 = tmp9;
  const obj6 = require("useToken");
  const fn = function o() {
    const obj = timing;
    return obj.withTiming(voiceMessageAnimationState.get()[1], { easing: ReanimatedRexport2.Easing.linear, duration: 150 });
  };
  const obj7 = require("ReanimatedRexport");
  fn.__closure = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__workletHash = 10905527813847;
  fn.__initData = __initData15;
  const derivedValue = obj7.useDerivedValue(fn);
  const obj8 = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  const fn2 = function s() {
    const tmp = _slicedToArray(voiceMessageAnimationState.get(), 2);
    return ReanimatedRexport2.interpolate(derivedValue.get(), items, tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0]);
  };
  const obj9 = require("ReanimatedRexport");
  fn2.__closure = { voiceMessageAnimationState, interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__workletHash = 824453930420;
  fn2.__initData = __initData16;
  const derivedValue1 = obj9.useDerivedValue(fn2);
  const obj10 = { voiceMessageAnimationState, interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  const fn3 = function c() {
    const obj = { height: null };
    items = [c23, c23, 104, 104];
    obj.height = ReanimatedRexport2.interpolate(derivedValue.get(), items, items);
    return obj;
  };
  const obj11 = require("ReanimatedRexport");
  fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: v68 };
  fn3.__workletHash = 8323760024494;
  fn3.__initData = __initData17;
  const animatedStyle = obj11.useAnimatedStyle(fn3);
  const obj12 = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: v68 };
  const fn4 = function l() {
    const size = { width: null, height: null, opacity: null, backgroundColor: null, marginHorizontal: null, marginBottom: null };
    items = [token2, token2, c24, c24];
    size.width = ReanimatedRexport2.interpolate(derivedValue.get(), items, items);
    const items1 = [c23, c23, c24, c24];
    size.height = ReanimatedRexport2.interpolate(derivedValue.get(), items, items1);
    size.opacity = derivedValue1.get();
    size.backgroundColor = closure_1.get();
    const items2 = [0, 0, result, result];
    size.marginHorizontal = ReanimatedRexport2.interpolate(derivedValue.get(), items, items2);
    size.marginBottom = ReanimatedRexport2.interpolate(derivedValue.get(), items, [0, 0, 36, 36]);
    return size;
  };
  const obj13 = require("ReanimatedRexport");
  fn4.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: v56, LOCK_PILL_RESTING_HEIGHT: v68, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp4, lockPillLockedOverhang: result };
  fn4.__workletHash = 8413596143283;
  fn4.__initData = __initData18;
  const animatedStyle1 = obj13.useAnimatedStyle(fn4);
  const obj14 = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: v56, LOCK_PILL_RESTING_HEIGHT: v68, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp4, lockPillLockedOverhang: result };
  const fn5 = function _() {
    const size = { width: ReanimatedRexport2.interpolate(derivedValue.get(), items, [24, 24, 32, 32]), height: null, marginTop: null, tintColor: null };
    size.height = ReanimatedRexport2.interpolate(derivedValue.get(), items, [24, 24, 32, 32]);
    size.marginTop = ReanimatedRexport2.interpolate(derivedValue.get(), items, [12, 12, 10, 10]);
    size.tintColor = closure_4.get();
    return size;
  };
  const obj15 = require("ReanimatedRexport");
  fn5.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: tmp9 };
  fn5.__workletHash = 10024923786404;
  fn5.__initData = __initData19;
  const animatedStyle2 = obj15.useAnimatedStyle(fn5);
  const obj16 = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: tmp9 };
  const fn6 = function u() {
    const obj = { opacity: ReanimatedRexport2.interpolate(derivedValue.get(), items, [1, 1, 0, 0]) };
    return obj;
  };
  const obj17 = require("ReanimatedRexport");
  fn6.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn6.__workletHash = 17452673235842;
  fn6.__initData = __initData20;
  const animatedStyle3 = obj17.useAnimatedStyle(fn6);
  if (cResult[0] === animatedStyle3) {
    if (cResult[1] === animatedStyle1) {
      if (cResult[2] === animatedStyle2) {
        if (cResult[3] === animatedStyle) {
          let tmp16 = cResult[4];
        }
        return tmp16;
      }
    }
  }
  const obj19 = { lockParentContainerStyle: animatedStyle, lockContainerStyle: animatedStyle1, lockIconStyle: animatedStyle2, chevonStyle: animatedStyle3 };
  cResult[0] = animatedStyle3;
  cResult[1] = animatedStyle1;
  cResult[2] = animatedStyle2;
  cResult[3] = animatedStyle;
  cResult[4] = obj19;
  tmp16 = obj19;
}) : (function useLockStyles(voiceMessageAnimationState) {
  _require = voiceMessageAnimationState;
  const token = require("useToken").useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_DEFAULT);
  let obj = require("useToken");
  const token1 = require("useToken").useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_ACTIVE);
  const tmp3 = closure_42(voiceMessageAnimationState, token, token, token1, token1);
  importDefault = tmp3;
  let obj2 = require("useToken");
  token2 = require("useToken").useToken(require("native").modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH);
  const result = -v56 - token2 / 2;
  const _slicedToArray = result;
  let obj3 = require("useToken");
  const token3 = require("useToken").useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_DEFAULT);
  let obj4 = require("useToken");
  const token4 = require("useToken").useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_ACTIVE);
  const tmp8 = closure_42(voiceMessageAnimationState, token3, token3, token4, token4);
  closure_4 = tmp8;
  const obj5 = require("useToken");
  const fn = function o() {
    const obj = timing;
    return obj.withTiming(voiceMessageAnimationState.get()[1], { easing: ReanimatedRexport2.Easing.linear, duration: 150 });
  };
  const obj6 = require("ReanimatedRexport");
  fn.__closure = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__workletHash = 15397801189168;
  fn.__initData = __initData21;
  const derivedValue = obj6.useDerivedValue(fn);
  const obj7 = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  const fn2 = function s() {
    const tmp = _slicedToArray(voiceMessageAnimationState.get(), 2);
    return ReanimatedRexport2.interpolate(derivedValue.get(), items, tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0]);
  };
  const obj8 = require("ReanimatedRexport");
  fn2.__closure = { voiceMessageAnimationState, interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__workletHash = 13192095138643;
  fn2.__initData = __initData22;
  const derivedValue1 = obj8.useDerivedValue(fn2);
  const obj10 = { lockParentContainerStyle: null, lockContainerStyle: null, lockIconStyle: null, chevonStyle: null };
  const obj9 = { voiceMessageAnimationState, interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  const fn3 = function c() {
    const obj = { height: null };
    items = [c23, c23, 104, 104];
    obj.height = ReanimatedRexport2.interpolate(derivedValue.get(), items, items);
    return obj;
  };
  const obj11 = require("ReanimatedRexport");
  fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: v68 };
  fn3.__workletHash = 8267354587081;
  fn3.__initData = __initData23;
  obj10.lockParentContainerStyle = obj11.useAnimatedStyle(fn3);
  const obj12 = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: v68 };
  const fn4 = function l() {
    const size = { width: null, height: null, opacity: null, backgroundColor: null, marginHorizontal: null, marginBottom: null };
    items = [token2, token2, c24, c24];
    size.width = ReanimatedRexport2.interpolate(derivedValue.get(), items, items);
    const items1 = [c23, c23, c24, c24];
    size.height = ReanimatedRexport2.interpolate(derivedValue.get(), items, items1);
    size.opacity = derivedValue1.get();
    size.backgroundColor = closure_1.get();
    const items2 = [0, 0, result, result];
    size.marginHorizontal = ReanimatedRexport2.interpolate(derivedValue.get(), items, items2);
    size.marginBottom = ReanimatedRexport2.interpolate(derivedValue.get(), items, [0, 0, 36, 36]);
    return size;
  };
  const obj13 = require("ReanimatedRexport");
  fn4.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: v56, LOCK_PILL_RESTING_HEIGHT: v68, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp3, lockPillLockedOverhang: result };
  fn4.__workletHash = 17376824863644;
  fn4.__initData = __initData24;
  obj10.lockContainerStyle = obj13.useAnimatedStyle(fn4);
  const obj14 = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: v56, LOCK_PILL_RESTING_HEIGHT: v68, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp3, lockPillLockedOverhang: result };
  const fn5 = function _() {
    const size = { width: ReanimatedRexport2.interpolate(derivedValue.get(), items, [24, 24, 32, 32]), height: null, marginTop: null, tintColor: null };
    size.height = ReanimatedRexport2.interpolate(derivedValue.get(), items, [24, 24, 32, 32]);
    size.marginTop = ReanimatedRexport2.interpolate(derivedValue.get(), items, [12, 12, 10, 10]);
    size.tintColor = closure_4.get();
    return size;
  };
  const obj15 = require("ReanimatedRexport");
  fn5.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: tmp8 };
  fn5.__workletHash = 9299918606923;
  fn5.__initData = __initData25;
  obj10.lockIconStyle = obj15.useAnimatedStyle(fn5);
  const obj16 = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: tmp8 };
  const fn6 = function u() {
    const obj = { opacity: ReanimatedRexport2.interpolate(derivedValue.get(), items, [1, 1, 0, 0]) };
    return obj;
  };
  const obj17 = require("ReanimatedRexport");
  fn6.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn6.__workletHash = 8890797665540;
  fn6.__initData = __initData26;
  obj10.chevonStyle = obj17.useAnimatedStyle(fn6);
  return obj10;
});
const __initData27 = { code: "function VoiceMessageOverlayTsx27(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}" };
const __initData28 = { code: "function VoiceMessageOverlayTsx28(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}" };
const __initData29 = { code: "function VoiceMessageOverlayTsx29(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}" };
const __initData30 = { code: "function VoiceMessageOverlayTsx30(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}" };
const __initData31 = { code: "function VoiceMessageOverlayTsx31(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}" };
const __initData32 = { code: "function VoiceMessageOverlayTsx32(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}" };
ReactCompilerGating = fn(558);
let closure_62 = ReactCompilerGating.isReactCompilerEnabled() ? (function LockPill(safeAreaBottom) {
  const cResult = safeAreaBottom(voiceMessageAnimationState[19]).c(20);
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  const initialAnimation = safeAreaBottom.initialAnimation;
  voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  const tmp4 = closure_25();
  const tmp5 = ref(noop.useState(false), 2);
  let obj = safeAreaBottom(voiceMessageAnimationState[19]);
  ref = tmp5[1];
  const tmp = safeAreaBottom;
  const fn = function c() {
    return voiceMessageAnimationState.get()[1] === VoiceMessageAnimationState.LOCKED || voiceMessageAnimationState.get()[1] === tmp.LOCKING;
  };
  fn.__closure = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn.__workletHash = 12189959131839;
  fn.__initData = __initData27;
  const fn2 = function s(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(closure_3)(arg0);
    }
  };
  const obj2 = safeAreaBottom(voiceMessageAnimationState[10]);
  const obj3 = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn2.__closure = { runOnJS: safeAreaBottom(voiceMessageAnimationState[10]).runOnJS, setLocked: tmp5[1] };
  fn2.__workletHash = 12931300953463;
  fn2.__initData = __initData28;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  const obj4 = { runOnJS: safeAreaBottom(voiceMessageAnimationState[10]).runOnJS, setLocked: tmp5[1] };
  ({ lockParentContainerStyle, lockContainerStyle, lockIconStyle, chevonStyle } = closure_55(voiceMessageAnimationState));
  const tmp9Result = initialAnimation(tmp5[0] ? voiceMessageAnimationState[25] : voiceMessageAnimationState[26]);
  const tmp8 = closure_55(voiceMessageAnimationState);
  const fn3 = function f() {
    const obj = { opacity: initialAnimation.get(), bottom: null };
    const sum = safeAreaBottom + CHAT_INPUT_HEIGHT + 24;
    obj.bottom = sum + 8 * initialAnimation.get();
    return obj;
  };
  fn3.__closure = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  fn3.__workletHash = 1013957568516;
  fn3.__initData = __initData29;
  const animatedStyle = tmp(voiceMessageAnimationState[10]).useAnimatedStyle(fn3);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === lockParentContainerStyle) {
      if (cResult[2] === tmp4.lockParentContainer) {
        let tmp12 = cResult[3];
      }
      if (cResult[4] === lockContainerStyle) {
        if (cResult[5] === tmp4.lockContainer) {
          let tmp13 = cResult[6];
        }
        if (cResult[7] === lockIconStyle) {
          if (cResult[8] === tmp9Result) {
            let tmp14 = cResult[9];
          }
          if (cResult[10] === chevonStyle) {
            if (cResult[11] === tmp4.chevon) {
              let tmp18 = cResult[12];
            }
            if (cResult[13] === tmp13) {
              if (cResult[14] === tmp14) {
                if (cResult[15] === tmp18) {
                  let tmp22 = cResult[16];
                }
                if (cResult[17] === tmp12) {
                  if (cResult[18] === tmp22) {
                    let tmp25 = cResult[19];
                  }
                  return tmp25;
                }
                const obj6 = { style: tmp12, children: tmp22 };
                const tmp27 = closure_13(tmp9(tmp2[10]).View, obj6);
                cResult[17] = tmp12;
                cResult[18] = tmp22;
                cResult[19] = tmp27;
                tmp25 = tmp27;
              }
            }
            const obj7 = { style: tmp13, children: null };
            items = [tmp14, tmp18];
            obj7.children = items;
            const tmp24 = closure_14(tmp9(tmp2[10]).View, obj7);
            cResult[13] = tmp13;
            cResult[14] = tmp14;
            cResult[15] = tmp18;
            cResult[16] = tmp24;
            tmp22 = tmp24;
          }
          const obj8 = { style: null, source: null };
          const items1 = [tmp4.chevon, chevonStyle];
          obj8.style = items1;
          obj8.source = tmp9(tmp2[27]);
          const tmp21 = closure_13(closure_20, obj8);
          cResult[10] = chevonStyle;
          cResult[11] = tmp4.chevon;
          cResult[12] = tmp21;
          tmp18 = tmp21;
        }
        const obj9 = { style: lockIconStyle, source: tmp9Result };
        const tmp17 = closure_13(closure_20, obj9);
        cResult[7] = lockIconStyle;
        cResult[8] = tmp9Result;
        cResult[9] = tmp17;
        tmp14 = tmp17;
      }
      const items2 = [tmp4.lockContainer, lockContainerStyle];
      cResult[4] = lockContainerStyle;
      cResult[5] = tmp4.lockContainer;
      cResult[6] = items2;
      tmp13 = items2;
    }
  }
  const items3 = [tmp4.lockParentContainer, lockParentContainerStyle, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = lockParentContainerStyle;
  cResult[2] = tmp4.lockParentContainer;
  cResult[3] = items3;
  tmp12 = items3;
  const obj5 = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  const tmpResult = tmp(voiceMessageAnimationState[10]);
}) : (function LockPill(safeAreaBottom) {
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  const initialAnimation = safeAreaBottom.initialAnimation;
  const voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  ref = undefined;
  const tmp = closure_25();
  const tmp2 = ref(noop.useState(false), 2);
  ref = tmp3;
  const fn = function _() {
    return voiceMessageAnimationState.get()[1] === VoiceMessageAnimationState.LOCKED || voiceMessageAnimationState.get()[1] === tmp.LOCKING;
  };
  fn.__closure = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn.__workletHash = 11637569602585;
  fn.__initData = __initData30;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(closure_3)(arg0);
    }
  };
  let obj = safeAreaBottom(voiceMessageAnimationState[10]);
  const obj2 = { voiceMessageAnimationState, VoiceMessageAnimationState };
  const tmp4 = safeAreaBottom;
  fn2.__closure = { runOnJS: safeAreaBottom(voiceMessageAnimationState[10]).runOnJS, setLocked: tmp2[1] };
  fn2.__workletHash = 7546249490783;
  fn2.__initData = __initData31;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const obj3 = { runOnJS: safeAreaBottom(voiceMessageAnimationState[10]).runOnJS, setLocked: tmp2[1] };
  ({ lockParentContainerStyle, lockContainerStyle, lockIconStyle, chevonStyle } = closure_55(voiceMessageAnimationState));
  const tmp7 = closure_55(voiceMessageAnimationState);
  const tmp8Result = initialAnimation(tmp2[0] ? voiceMessageAnimationState[25] : voiceMessageAnimationState[26]);
  const fn3 = function v() {
    const obj = { opacity: initialAnimation.get(), bottom: null };
    const sum = safeAreaBottom + CHAT_INPUT_HEIGHT + 24;
    obj.bottom = sum + 8 * initialAnimation.get();
    return obj;
  };
  fn3.__closure = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  fn3.__workletHash = 10073937126190;
  fn3.__initData = __initData32;
  const animatedStyle = tmp4(voiceMessageAnimationState[10]).useAnimatedStyle(fn3);
  const obj5 = { style: null, children: null };
  items = [tmp.lockParentContainer, lockParentContainerStyle, animatedStyle];
  obj5.style = items;
  const obj6 = { style: null, children: null };
  const items1 = [tmp.lockContainer, lockContainerStyle];
  obj6.style = items1;
  const items2 = [closure_13(closure_20, { style: lockIconStyle, source: tmp8Result }), ];
  const obj7 = { style: null, source: initialAnimation(voiceMessageAnimationState[27]) };
  const items3 = [tmp.chevon, chevonStyle];
  obj7.style = items3;
  items2[1] = closure_13(closure_20, obj7);
  obj6.children = items2;
  obj5.children = closure_14(initialAnimation(voiceMessageAnimationState[10]).View, obj6);
  return closure_13(initialAnimation(voiceMessageAnimationState[10]).View, obj5);
});
ReactCompilerGating = fn(558);
let closure_63 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEntryAnimationValues(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(16);
  let obj = require("c");
  const tmp = _require;
  const tmp2 = sharedValue;
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let _performance = performance;
    const nowResult = performance.now();
    cResult[0] = nowResult;
    let first = nowResult;
  } else {
    first = cResult[0];
  }
  sharedValue1.useRef(first);
  if (cResult[1] !== sharedValue) {
    const fn = function _() {
      const obj = ReanimatedRexport2;
      const obj2 = timing;
      const result = sharedValue.set(obj.withDelay(c19, obj2.withTiming(1, { easing: ReanimatedRexport2.Easing.quad, duration })));
    };
    items = [sharedValue];
    cResult[1] = sharedValue;
    cResult[2] = fn;
    cResult[3] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const effect = obj3.useEffect(tmp7, tmp8);
  if (cResult[4] === arg1) {
    if (cResult[5] === sharedValue) {
      let tmp10 = cResult[6];
      let tmp11 = cResult[7];
    }
    const effect1 = obj3.useEffect(tmp10, tmp11);
    sharedValue1 = tmp(tmp2[10]).useSharedValue(0);
    if (cResult[8] === sharedValue) {
      if (cResult[9] === arg0) {
        if (cResult[10] === sharedValue1) {
          let tmp14 = cResult[11];
          let tmp15 = cResult[12];
        }
        const effect2 = obj3.useEffect(tmp14, tmp15);
        if (cResult[13] === sharedValue) {
          if (cResult[14] === sharedValue1) {
            let tmp17 = cResult[15];
          }
          return tmp17;
        }
        const obj4 = { initialAnimation: sharedValue, recordingAnimation: sharedValue1 };
        class I {
          constructor() {
            if (closure_0) {
              tmp = closure_4;
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[24]);
              obj1 = { easing: null, duration: 200 };
              obj1.easing = closure_0(closure_2[10]).Easing.quad;
              num = 1;
              result = closure_4.set(obj.withTiming(1, obj1));
              tmp5 = globalThis;
              _performance = performance;
              tmp6 = closure_3;
              tmp7 = c19;
              if (performance.now() - closure_3.current < c19) {
                tmp8 = closure_2;
                tmp2Result = tmp2(tmp3[24]);
                obj5 = { easing: null, duration: null };
                obj5.easing = tmp2(tmp3[10]).Easing.quad;
                tmp9 = c17;
                obj5.duration = c17;
                result1 = closure_2.set(tmp2Result.withTiming(1, obj5));
              }
            }
            return;
          }
        }
        cResult[13] = sharedValue;
        cResult[14] = sharedValue1;
        cResult[15] = obj4;
        tmp17 = obj4;
      }
    }
    class I {
      constructor() {
        if (closure_0) {
          tmp = closure_4;
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[24]);
          obj1 = { easing: null, duration: 200 };
          obj1.easing = closure_0(closure_2[10]).Easing.quad;
          num = 1;
          result = closure_4.set(obj.withTiming(1, obj1));
          tmp5 = globalThis;
          _performance = performance;
          tmp6 = closure_3;
          tmp7 = c19;
          if (performance.now() - closure_3.current < c19) {
            tmp8 = closure_2;
            tmp2Result = tmp2(tmp3[24]);
            obj5 = { easing: null, duration: null };
            obj5.easing = tmp2(tmp3[10]).Easing.quad;
            tmp9 = c17;
            obj5.duration = c17;
            result1 = closure_2.set(tmp2Result.withTiming(1, obj5));
          }
        }
        return;
      }
    }
    const items1 = [sharedValue, sharedValue1, arg0];
    cResult[8] = sharedValue;
    cResult[9] = arg0;
    cResult[10] = sharedValue1;
    cResult[11] = I;
    cResult[12] = items1;
    tmp15 = items1;
    tmp14 = I;
    const tmpResult = tmp(tmp2[10]);
  }
  class S {
    constructor() {
      if (closure_1) {
        tmp = closure_2;
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[24]);
        obj1 = { easing: null, duration: null };
        obj1.easing = closure_0(closure_2[10]).Easing.quad;
        tmp4 = c18;
        obj1.duration = c18;
        num = 0;
        result = closure_2.set(obj.withTiming(0, obj1));
      }
      return;
    }
  }
  const items2 = [sharedValue, arg1];
  cResult[4] = arg1;
  cResult[5] = sharedValue;
  cResult[6] = S;
  cResult[7] = items2;
  tmp11 = items2;
  tmp10 = S;
}) : (function useEntryAnimationValues(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  initialAnimation = require("ReanimatedRexport").useSharedValue(0);
  recordingAnimation.useRef(performance.now());
  items = [initialAnimation];
  const effect = recordingAnimation.useEffect(() => {
    const obj = ReanimatedRexport2;
    const obj2 = timing;
    const result = initialAnimation.set(obj.withDelay(c19, obj2.withTiming(1, { easing: ReanimatedRexport2.Easing.quad, duration })));
  }, items);
  const items1 = [initialAnimation, arg1];
  const effect1 = recordingAnimation.useEffect(() => {
    if (closure_1) {
      const obj2 = { easing: ReanimatedRexport2.Easing.quad, duration: duration2 };
      const result = initialAnimation.set(timing.withTiming(0, obj2));
    }
  }, items1);
  let obj = require("ReanimatedRexport");
  recordingAnimation = require("ReanimatedRexport").useSharedValue(0);
  const items2 = [initialAnimation, recordingAnimation, arg0];
  const effect2 = recordingAnimation.useEffect(() => {
    if (closure_0) {
      const obj2 = { easing: ReanimatedRexport2.Easing.quad, duration: 200 };
      const result = recordingAnimation.set(timing.withTiming(1, obj2));
      const _performance = performance;
      if (performance.now() - ref.current < c19) {
        const obj3 = { easing: ReanimatedRexport2.Easing.quad, duration };
        const result1 = initialAnimation.set(timing.withTiming(1, obj3));
        const tmp2Result = timing;
      }
    }
  }, items2);
  return { initialAnimation, recordingAnimation };
});
const __initData33 = { code: "function VoiceMessageOverlayTsx33(){const{voiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1];}" };
const __initData34 = { code: "function VoiceMessageOverlayTsx34(state_0,previous){const{runOnJS,setVoiceMessageState}=this.__closure;if(state_0!==previous){runOnJS(setVoiceMessageState)(state_0);}}" };
const __initData35 = { code: "function VoiceMessageOverlayTsx35(){const{initialAnimation}=this.__closure;return{opacity:initialAnimation.get()};}" };
const __initData36 = { code: "function VoiceMessageOverlayTsx36(){const{voiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1];}" };
const __initData37 = { code: "function VoiceMessageOverlayTsx37(state_0,previous){const{runOnJS,setVoiceMessageState}=this.__closure;if(state_0!==previous){runOnJS(setVoiceMessageState)(state_0);}}" };
const __initData38 = { code: "function VoiceMessageOverlayTsx38(){const{initialAnimation}=this.__closure;return{opacity:initialAnimation.get()};}" };
ReactCompilerGating = fn(558);
let closure_70 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMessageOverlay(channelId) {
  const cResult = channelId(initialAnimation[19]).c(64);
  channelId = channelId.channelId;
  const voiceMessageAnimationState = channelId.voiceMessageAnimationState;
  let obj = channelId(initialAnimation[19]);
  const token = channelId(initialAnimation[21]).useToken(voiceMessageAnimationState(initialAnimation[16]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  const tmp6 = closure_25();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeCustomKeyboardHeight: true, includeKeyboardHeight: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const bottom = voiceMessageAnimationState(tmp2[28])(first).insets.bottom;
  let obj2 = channelId(initialAnimation[21]);
  const keyboardOpenPaddingStyle = channelId(initialAnimation[29]).useKeyboardOpenPaddingStyle();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(arg0) {
        return null != channelId.startTimeMillis;
      }
    }
    cResult[1] = N;
  } else {
    class N {
      constructor(arg0) {
        return null != channelId.startTimeMillis;
      }
    }
  }
  let tmpResult = channelId(initialAnimation[29]);
  const tmp10 = useVoiceMessagesUIStore(N);
  initialAnimation = closure_63(useVoiceMessagesUIStore(N), channelId.exiting).initialAnimation;
  const tmp11 = closure_63(useVoiceMessagesUIStore(N), channelId.exiting);
  [r10063, tmp13] = ref.useState(VoiceMessageAnimationState.SENDING);
  const _slicedToArray = tmp13;
  const tmp12 = _slicedToArray(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  const fn = function y() {
    return voiceMessageAnimationState.get()[1];
  };
  fn.__closure = { voiceMessageAnimationState };
  fn.__workletHash = 3812530446585;
  fn.__initData = __initData33;
  class V {
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
  const tmpResult4 = channelId(initialAnimation[10]);
  V.__closure = { runOnJS: channelId(initialAnimation[10]).runOnJS, setVoiceMessageState: tmp13 };
  V.__workletHash = 7697042668715;
  V.__initData = __initData34;
  const animatedReaction = tmpResult4.useAnimatedReaction(fn, V);
  ref = ref.useRef(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(arg0) {
        return null != channelId.startTimeMillis;
      }
    }
    items = [];
    cResult[2] = tmp18;
    cResult[3] = items;
    let tmp17 = items;
  } else {
    class N {
      constructor(arg0) {
        return null != channelId.startTimeMillis;
      }
    }
    tmp17 = cResult[3];
  }
  const effect = obj5.useEffect(tmp18, tmp17);
  if (cResult[4] !== channelId) {
    class F {
      constructor() {
        closure_0 = closure_1_6.addEventListener("change", function endAudioRecordingOnAppInactive(event) {
          let tmp = "inactive" !== event;
          if (tmp) {
            tmp = "background" !== event;
          }
          if (!tmp) {
            const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
            const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
            ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, closure_0, obj);
          }
        });
        return () => {
          closure_0.remove();
        };
      }
    }
    const items1 = [channelId];
    cResult[4] = channelId;
    cResult[5] = F;
    cResult[6] = items1;
    let tmp21 = items1;
  } else {
    class F {
      constructor() {
        closure_0 = closure_1_6.addEventListener("change", function endAudioRecordingOnAppInactive(event) {
          let tmp = "inactive" !== event;
          if (tmp) {
            tmp = "background" !== event;
          }
          if (!tmp) {
            const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
            const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
            ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, closure_0, obj);
          }
        });
        return () => {
          closure_0.remove();
        };
      }
    }
    tmp21 = cResult[6];
  }
  const effect1 = obj5.useEffect(F, tmp21);
  const obj4 = { runOnJS: channelId(initialAnimation[10]).runOnJS, setVoiceMessageState: tmp13 };
  const fn2 = function z() {
    return { opacity: initialAnimation.get() };
  };
  fn2.__closure = { initialAnimation };
  fn2.__workletHash = 11189242449741;
  fn2.__initData = __initData35;
  const animatedStyle = channelId(initialAnimation[10]).useAnimatedStyle(fn2);
  const tmpResult5 = channelId(initialAnimation[10]);
  const wakeLock = channelId(initialAnimation[34]).useWakeLock(VoiceMessageOverlay);
  if (cResult[7] !== bottom) {
    class F {
      constructor() {
        closure_0 = closure_1_6.addEventListener("change", function endAudioRecordingOnAppInactive(event) {
          let tmp = "inactive" !== event;
          if (tmp) {
            tmp = "background" !== event;
          }
          if (!tmp) {
            const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
            const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
            ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, closure_0, obj);
          }
        });
        return () => {
          closure_0.remove();
        };
      }
    }
    tmp26[0] = bottom;
    cResult[7] = bottom;
    cResult[8] = tmp26;
  } else {
    class F {
      constructor() {
        closure_0 = closure_1_6.addEventListener("change", function endAudioRecordingOnAppInactive(event) {
          let tmp = "inactive" !== event;
          if (tmp) {
            tmp = "background" !== event;
          }
          if (!tmp) {
            const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
            const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
            ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, closure_0, obj);
          }
        });
        return () => {
          closure_0.remove();
        };
      }
    }
  }
  if (cResult[9] === keyboardOpenPaddingStyle) {
    class F {
      constructor() {
        closure_0 = closure_1_6.addEventListener("change", function endAudioRecordingOnAppInactive(event) {
          let tmp = "inactive" !== event;
          if (tmp) {
            tmp = "background" !== event;
          }
          if (!tmp) {
            const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
            const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
            ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, closure_0, obj);
          }
        });
        return () => {
          closure_0.remove();
        };
      }
    }
    if (cResult[12] === animatedStyle) {
      class F {
        constructor() {
          closure_0 = closure_1_6.addEventListener("change", function endAudioRecordingOnAppInactive(event) {
            let tmp = "inactive" !== event;
            if (tmp) {
              tmp = "background" !== event;
            }
            if (!tmp) {
              const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
              const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
              ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, closure_0, obj);
            }
          });
          return () => {
            closure_0.remove();
          };
        }
      }
    }
    const items2 = [tmp6.contentContainer, tmp26, animatedStyle, tmp27];
    cResult[12] = animatedStyle;
    cResult[13] = tmp6.contentContainer;
    cResult[14] = tmp26;
    cResult[15] = tmp27;
    cResult[16] = items2;
  }
  const items3 = [tmp6.contentContainerFloating, keyboardOpenPaddingStyle];
  cResult[9] = keyboardOpenPaddingStyle;
  cResult[10] = tmp6.contentContainerFloating;
  cResult[11] = items3;
  const tmpResult6 = channelId(initialAnimation[34]);
}) : (function VoiceMessageOverlay(channelId) {
  channelId = channelId.channelId;
  const voiceMessageAnimationState = channelId.voiceMessageAnimationState;
  const exiting = channelId.exiting;
  let initialAnimation;
  ref = undefined;
  const token = channelId(initialAnimation[21]).useToken(voiceMessageAnimationState(initialAnimation[16]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  const tmp5 = closure_25();
  const bottom = voiceMessageAnimationState(initialAnimation[28])({ includeCustomKeyboardHeight: true, includeKeyboardHeight: true }).insets.bottom;
  let obj = channelId(initialAnimation[21]);
  const tmp3 = voiceMessageAnimationState;
  const keyboardOpenPaddingStyle = channelId(initialAnimation[29]).useKeyboardOpenPaddingStyle();
  const tmp7 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  const tmp8 = closure_63(tmp7, exiting);
  initialAnimation = tmp8.initialAnimation;
  let obj2 = channelId(initialAnimation[29]);
  [tmp11, tmp12] = ref(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  ref = tmp12;
  const tmp10 = ref(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  class I {
    constructor() {
      return closure_1.get()[1];
    }
  }
  I.__closure = { voiceMessageAnimationState };
  I.__workletHash = 15178370404028;
  I.__initData = __initData36;
  class A {
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
  const obj3 = channelId(initialAnimation[10]);
  A.__closure = { runOnJS: channelId(initialAnimation[10]).runOnJS, setVoiceMessageState: tmp12 };
  A.__workletHash = 5930838449128;
  A.__initData = __initData37;
  const animatedReaction = obj3.useAnimatedReaction(I, A);
  ref = ref.useRef(null);
  const effect = ref.useEffect(() => {
    if (obj.getIsScreenReaderEnabled()) {
      const obj2 = { ref };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
      const tmpResult = setAccessibilityFocus;
    }
    obj = useIsScreenReaderEnabled;
  }, []);
  items = [channelId];
  const effect1 = ref.useEffect(() => {
    closure_0 = closure_1_6.addEventListener("change", function endAudioRecordingOnAppInactive(event) {
      let tmp = "inactive" !== event;
      if (tmp) {
        tmp = "background" !== event;
      }
      if (!tmp) {
        const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
        const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
        ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, closure_0, obj);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items);
  const obj4 = { runOnJS: channelId(initialAnimation[10]).runOnJS, setVoiceMessageState: tmp12 };
  const fn = function b() {
    return { opacity: initialAnimation.get() };
  };
  fn.__closure = { initialAnimation };
  fn.__workletHash = 1456339431040;
  fn.__initData = __initData38;
  const animatedStyle = channelId(initialAnimation[10]).useAnimatedStyle(fn);
  const obj5 = channelId(initialAnimation[10]);
  const wakeLock = channelId(initialAnimation[34]).useWakeLock(VoiceMessageOverlay);
  const obj7 = { style: null, children: null };
  const items1 = [tmp5.contentContainer, { bottom }, animatedStyle, ];
  const items2 = [tmp5.contentContainerFloating, keyboardOpenPaddingStyle];
  items1[3] = items2;
  obj7.style = items1;
  const items3 = [closure_13(channelId(initialAnimation[35]).ChatInputScrimGradient, { gradientHeight: token, inline: true }), closure_13(closure_37, { initialAnimation, recordingAnimation: tmp8.recordingAnimation, voiceMessageState: tmp11, exiting }), ];
  const obj8 = { style: tmp5.innerContainer, children: null };
  const obj9 = { style: tmp5.voiceChatContainer, children: null };
  const obj10 = { isRecording: tmp7, initialAnimation, leftAccessory: null, rightAccessory: null };
  const obj6 = channelId(initialAnimation[34]);
  const obj11 = { icon: voiceMessageAnimationState(initialAnimation[38]), variant: null, size: "sm", maxFontSizeMultiplier: 2, accessibilityLabel: null, onPressIn: null, onPress: null };
  let str = "tertiary";
  if (tmp11 === VoiceMessageAnimationState.CANCELLING) {
    str = "destructive";
  }
  obj11.variant = str;
  const intl = tmp(tmp2[23]).intl;
  obj11.accessibilityLabel = intl.string(channelId(initialAnimation[23]).t.RdK9sV);
  obj11.onPressIn = function onPressIn() {
    return channelId(initialAnimation[36]).triggerHaptic();
  };
  obj11.onPress = function onPress() {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, channelId, { isCancelling: true });
  };
  obj10.leftAccessory = closure_13(channelId(initialAnimation[37]).IconButton, obj11);
  const obj13 = { ref, active: null, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null };
  let tmp25 = tmp11 === VoiceMessageAnimationState.SENDING;
  const tmp23 = voiceMessageAnimationState(initialAnimation[42]);
  if (!tmp25) {
    tmp25 = tmp11 === VoiceMessageAnimationState.LOCKED;
  }
  obj13.active = tmp25;
  ({ floatingSendButton: obj12.style, floatingSendButtonActive: obj12.activeStyle, floatingSendButtonIconActive: obj12.activeIconStyle } = tmp5);
  if (!tmp7) {
    if (!exiting) {
      let SendMessageIcon = tmp(tmp2[40]).MicrophoneIcon;
    }
    const obj14 = { children: null };
    obj13.IconComponent = SendMessageIcon;
    const intl2 = tmp(tmp2[23]).intl;
    obj13.accessibilityLabel = intl2.string(tmp(tmp2[23]).t["+8GStU"]);
    obj13.onPress = function onPress() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, channelId, { isCancelling: false });
    };
    obj10.rightAccessory = closure_13(tmp3Result, obj13);
    obj9.children = closure_13(tmp23, obj10);
    obj8.children = closure_13(closure_5, obj9);
    items3[2] = closure_13(closure_5, obj8);
    obj7.children = items3;
    const items4 = [closure_14(voiceMessageAnimationState(initialAnimation[10]).View, obj7), ];
    const obj23 = { safeAreaBottom: bottom, initialAnimation, voiceMessageAnimationState };
    items4[1] = closure_13(closure_62, obj23);
    obj14.children = items4;
    return closure_14(closure_15, obj14);
  }
  SendMessageIcon = tmp(tmp2[39]).SendMessageIcon;
  tmp3Result = tmp3(initialAnimation[41]);
}));
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMessageEllipse(radius) {
  const cResult = radius(offsetThreshold[19]).c(11);
  radius = radius.radius;
  ({ opacity, height } = radius);
  offsetThreshold = radius.offsetThreshold;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [derivedValue1];
    const fn = function o() {
      return derivedValue1.useReducedMotion;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const obj = radius(offsetThreshold[19]);
  const stateFromStores = radius(offsetThreshold[20]).useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        return radius.currWaveHeight;
      }
    }
    cResult[3] = C;
  } else {
    class C {
      constructor(arg0) {
        return radius.currWaveHeight;
      }
    }
  }
  const tmp10 = useVoiceMessagesUIStore(C);
  closure_4 = tmp10;
  const tmpResult = radius(offsetThreshold[20]);
  const fn2 = function h() {
    let num = 0.5;
    if (!stateFromStores) {
      let num2;
      if (closure_4 != null) {
        num2 = closure_4.get();
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    return num;
  };
  fn2.__closure = { useReducedMotion: stateFromStores, currWaveHeight: tmp10 };
  fn2.__workletHash = 2925868096827;
  fn2.__initData = __initData;
  const derivedValue = radius(offsetThreshold[10]).useDerivedValue(fn2);
  const tmpResult6 = radius(offsetThreshold[10]);
  const token = radius(offsetThreshold[21]).useToken(height(tmp2[16]).colors.BACKGROUND_BRAND);
  const tmp14 = closure_42(radius.voiceMessageAnimationState, token, height(offsetThreshold[16]).unsafe_rawColors.RED_400, token, token);
  closure_6 = tmp14;
  const tmpResult7 = radius(offsetThreshold[21]);
  const fn3 = function v() {
    return derivedValue.get() * offsetThreshold;
  };
  fn3.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  fn3.__workletHash = 7278593580538;
  fn3.__initData = __initData2;
  derivedValue1 = radius(offsetThreshold[10]).useDerivedValue(fn3);
  const tmpResult8 = radius(offsetThreshold[10]);
  class M {
    constructor() {
      obj = { fill: closure_6.get(), ry: radius + closure_7.get(), rx: radius, cy: radius + closure_7.get(), cx: radius };
      return obj;
    }
  }
  M.__closure = { voiceMessageEllipseBgColor: tmp14, radius, offset: derivedValue1 };
  M.__workletHash = 12489173275515;
  M.__initData = __initData3;
  const animatedProps = radius(offsetThreshold[10]).useAnimatedProps(M);
  const tmpResult9 = radius(offsetThreshold[10]);
  const fn4 = function f() {
    const size = { position: "absolute", width: 2 * radius, height: null, bottom: 0 };
    value = height.get();
    size.height = value + derivedValue1.get();
    return size;
  };
  fn4.__closure = { radius, height, offset: derivedValue1 };
  fn4.__workletHash = 15958652124498;
  fn4.__initData = __initData4;
  const animatedStyle = radius(offsetThreshold[10]).useAnimatedStyle(fn4);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        return radius.currWaveHeight;
      }
    }
    const tmp19 = closure_22();
    cResult[4] = tmp19;
    const tmp18 = tmp19;
  } else {
    class C {
      constructor(arg0) {
        return radius.currWaveHeight;
      }
    }
  }
  if (cResult[5] === animatedProps) {
    class C {
      constructor(arg0) {
        return radius.currWaveHeight;
      }
    }
    if (cResult[8] === animatedStyle) {
      class C {
        constructor(arg0) {
          return radius.currWaveHeight;
        }
      }
      return tmp22;
    }
    const obj2 = { style: animatedStyle, children: tmp20 };
    const tmp24 = closure_13(height(tmp2[10]).View, obj2);
    cResult[8] = animatedStyle;
    cResult[9] = tmp20;
    cResult[10] = tmp24;
    tmp22 = tmp24;
  }
  const tmpResult10 = radius(offsetThreshold[10]);
  const tmp21 = closure_13(radius(offsetThreshold[14]).Svg, { children: closure_13(tmp18, { animatedProps, opacity }) });
  cResult[5] = animatedProps;
  cResult[6] = opacity;
  cResult[7] = tmp21;
  const obj3 = { children: closure_13(tmp18, { animatedProps, opacity }) };
}) : (function VoiceMessageEllipse(opacity) {
  const radius = opacity.radius;
  const height = opacity.height;
  const offsetThreshold = opacity.offsetThreshold;
  let derivedValue1;
  items = [derivedValue1];
  const stateFromStores = radius(offsetThreshold[20]).useStateFromStores(items, () => derivedValue1.useReducedMotion, []);
  const tmp2 = useVoiceMessagesUIStore((currWaveHeight) => currWaveHeight.currWaveHeight);
  closure_4 = tmp2;
  const obj = radius(offsetThreshold[20]);
  const fn = function _() {
    let num = 0.5;
    if (!stateFromStores) {
      let num2;
      if (closure_4 != null) {
        num2 = closure_4.get();
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    return num;
  };
  fn.__closure = { useReducedMotion: stateFromStores, currWaveHeight: tmp2 };
  fn.__workletHash = 34566049215;
  fn.__initData = __initData5;
  const derivedValue = radius(offsetThreshold[10]).useDerivedValue(fn);
  const obj2 = radius(offsetThreshold[10]);
  const token = radius(offsetThreshold[21]).useToken(height(offsetThreshold[16]).colors.BACKGROUND_BRAND);
  const tmp5 = closure_42(opacity.voiceMessageAnimationState, token, height(offsetThreshold[16]).unsafe_rawColors.RED_400, token, token);
  closure_6 = tmp5;
  const obj3 = radius(offsetThreshold[21]);
  class S {
    constructor() {
      return closure_5.get() * offsetThreshold;
    }
  }
  S.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  S.__workletHash = 4387291532926;
  S.__initData = __initData6;
  derivedValue1 = radius(offsetThreshold[10]).useDerivedValue(S);
  const obj4 = radius(offsetThreshold[10]);
  class E {
    constructor() {
      obj = { fill: closure_6.get(), ry: radius + closure_7.get(), rx: radius, cy: radius + closure_7.get(), cx: radius };
      return obj;
    }
  }
  E.__closure = { voiceMessageEllipseBgColor: tmp5, radius, offset: derivedValue1 };
  E.__workletHash = 9597871227903;
  E.__initData = __initData7;
  const animatedProps = radius(offsetThreshold[10]).useAnimatedProps(E);
  const obj5 = radius(offsetThreshold[10]);
  class A {
    constructor() {
      size = { position: "absolute", width: 2 * radius, height: null, bottom: 0 };
      value = height.get();
      size.height = value + closure_7.get();
      return size;
    }
  }
  A.__closure = { radius, height, offset: derivedValue1 };
  A.__workletHash = 7120108587518;
  A.__initData = __initData8;
  const animatedStyle = radius(offsetThreshold[10]).useAnimatedStyle(A);
  const obj6 = radius(offsetThreshold[10]);
  const obj7 = { style: animatedStyle, children: null };
  const tmp9 = closure_22();
  obj7.children = closure_13(radius(offsetThreshold[14]).Svg, { children: closure_13(closure_22(), { animatedProps, opacity: opacity.opacity }) });
  return closure_13(height(offsetThreshold[10]).View, obj7);
}));
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMessageOverlayGuard(channelId) {
  const cResult = channelId(576).c(12);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(showRecordingOverlay) {
      return showRecordingOverlay.showRecordingOverlay;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useVoiceMessagesUIStore(first);
  closure_1 = tmp6;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    items = [ChannelStore];
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== channelId) {
    class E {
      constructor() {
        return closure_8.getChannel(channelId);
      }
    }
    cResult[2] = channelId;
    cResult[3] = E;
  } else {
    class E {
      constructor() {
        return closure_8.getChannel(channelId);
      }
    }
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(tmp7, E);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        return channelId.voiceMessageAnimationState;
      }
    }
    cResult[4] = I;
  } else {
    class I {
      constructor(arg0) {
        return channelId.voiceMessageAnimationState;
      }
    }
  }
  useVoiceMessagesUIStore(I);
  const tmpResult = channelId(504);
  [r10052, dependencyMap] = noop.useState(tmp6);
  if (cResult[5] !== tmp6) {
    class O {
      constructor() {
        if (closure_1) {
          tmp3 = closure_2;
          flag = true;
          tmp4 = closure_2(true);
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          tmp2 = closure_1_18;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_18);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    const items1 = [tmp6];
    cResult[5] = tmp6;
    cResult[6] = O;
    cResult[7] = items1;
    let tmp15 = items1;
  } else {
    class O {
      constructor() {
        if (closure_1) {
          tmp3 = closure_2;
          flag = true;
          tmp4 = closure_2(true);
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          tmp2 = closure_1_18;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_18);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    tmp15 = cResult[7];
  }
  const effect = noop.useEffect(O, tmp15);
  if (stateFromStores != null) {
    class O {
      constructor() {
        if (closure_1) {
          tmp3 = closure_2;
          flag = true;
          tmp4 = closure_2(true);
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          tmp2 = closure_1_18;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_18);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
  }
  if (undefined) {
    class O {
      constructor() {
        if (closure_1) {
          tmp3 = closure_2;
          flag = true;
          tmp4 = closure_2(true);
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          tmp2 = closure_1_18;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_18);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
  } else {
    class O {
      constructor() {
        if (closure_1) {
          tmp3 = closure_2;
          flag = true;
          tmp4 = closure_2(true);
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          tmp2 = closure_1_18;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_18);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    return null;
  }
  const tmp13 = _slicedToArray(noop.useState(tmp6), 2);
}) : (function VoiceMessageOverlayGuard(channelId) {
  channelId = channelId.channelId;
  const tmp = useVoiceMessagesUIStore((showRecordingOverlay) => showRecordingOverlay.showRecordingOverlay);
  closure_1 = tmp;
  items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp2 = useVoiceMessagesUIStore((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  const tmp3 = _slicedToArray(noop.useState(tmp), 2);
  dependencyMap = tmp3[1];
  const items1 = [tmp];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      closure_2(true);
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(false), duration2);
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
        const obj2 = { channelId, voiceMessageAnimationState: tmp2, exiting: !tmp };
        tmp7 = closure_13(closure_70, obj2);
      }
    }
    tmp6 = tmp7;
  }
  return tmp6;
}));
export const VoiceMessageEllipse = memoResult;