// discord_app/modules/voice_messages/native/components/VoiceMessageOverlay.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import intl7 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import LegacyTokens from "../../../../design/migrations/native/LegacyTokens.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import react_native from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import useRefValueDefault from "../../../../hooks/useRefValue.tsx";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
import VoiceMessagesUIStore from "../VoiceMessagesUIStore.tsx";
import VoiceMessageConstants from "../../VoiceMessageConstants.tsx";
import ChatInputConstants from "../../../chat_input/native/ChatInputConstants.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native2 from "../../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import 00012__ from "../../../../../_runtime/metro/00012__.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ReanimatedRexport_mod = ReanimatedRexport2;
let _require, channelId, dependencyMap, importDefault, ref, set, set2;

let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, AppState: metroRequire } = react_native2);
const useVoiceMessagesUIStore = VoiceMessagesUIStore.useVoiceMessagesUIStore;
const VoiceMessageAnimationState = VoiceMessageConstants.VoiceMessageAnimationState;
const ComponentActionsKeyed = Constants.ComponentActionsKeyed;
const CHAT_INPUT_HEIGHT = ChatInputConstants.CHAT_INPUT_HEIGHT;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
const VoiceMessageOverlay = "VoiceMessageOverlay";
let c17 = 250;
let c18 = 100;
let c19 = 500;
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_20 = ReanimatedRexport.createAnimatedComponent(native.Icon);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_21 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
let closure_22 = module_12.memoize(() => {
  const obj = ReanimatedRexport;
  return obj.createAnimatedComponent(inlineStyles.Ellipse);
});
let c23 = 68;
let c24 = 56;
let closure_25 = createStyles.createStyles(() => {
  let size1;
  let size2;
  const obj = { innerContainer: { flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM }, contentContainer: { position: "absolute", bottom: 0, width: "100%", alignItems: "center", overflow: "hidden" }, contentContainerFloating: { justifyContent: "flex-end", overflow: "visible" }, floatingSendButton: size, floatingSendButtonActive: { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND }, floatingSendButtonIconActive: { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT }, voiceChatContainer: { flex: 1, height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" }, lockContainer: size1, lockParentContainer: { position: "absolute", right: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT, width: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH }, chevon: size2 };
  ({ flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM });
  size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
  ({ backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND });
  ({ tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT });
  ({ flex: 1, height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" });
  size1 = { height, width, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, display: "flex", alignItems: "center", flexDirection: "column", elevation: 12, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 36, borderWidth: LegacyTokens.DARK_0_LIGHT_1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)" };
  ({ position: "absolute", right: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT, width: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH });
  size2 = { height: 16, width: 16, marginTop: 8, tintColor: nativeDefault.colors.ICON_SUBTLE };
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
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData9 = { code: "function VoiceMessageOverlayTsx9(){const{initialAnimation,recordingAnimation}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue};}" };
const __initData10 = { code: "function VoiceMessageOverlayTsx10(){const{initialAnimation,recordingAnimation}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue};}" };
const memo2 = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((radius) => {
  let derivedValue1;
  let offsetThreshold;
  let opacity;
  let tmp18;
  let tmp22;
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = radius(offsetThreshold[19]);
  const cResult = obj.c(11);
  radius = radius.radius;
  ({ opacity, height } = radius);
  offsetThreshold = radius.offsetThreshold;
  const voiceMessageAnimationState = radius.voiceMessageAnimationState;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [derivedValue1];
    const fn = function o() {
      return derivedValue1.useReducedMotion;
    };
    const items1 = [];
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = radius(offsetThreshold[20]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(currWaveHeight) {
        return currWaveHeight.currWaveHeight;
      }
    }
    cResult[3] = C;
  } else {
    class C {
      constructor(currWaveHeight) {
        return currWaveHeight.currWaveHeight;
      }
    }
  }
  const tmp10 = useVoiceMessagesUIStore(C);
  let closure_4 = tmp10;
  const tmpResult6 = radius(offsetThreshold[10]);
  class O {
    constructor() {
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
    }
  }
  O.__closure = { useReducedMotion: stateFromStores, currWaveHeight: tmp10 };
  O.__workletHash = 2925868096827;
  O.__initData = __initData;
  const derivedValue = tmpResult6.useDerivedValue(O);
  const tmpResult7 = radius(offsetThreshold[21]);
  const token = tmpResult7.useToken(height(tmp2[16]).colors.BACKGROUND_BRAND);
  const tmp14 = closure_42(voiceMessageAnimationState, token, height(offsetThreshold[16]).unsafe_rawColors.RED_400, token, token);
  let closure_6 = tmp14;
  const fn2 = function v() {
    return derivedValue.get() * offsetThreshold;
  };
  fn2.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  fn2.__workletHash = 7278593580538;
  fn2.__initData = __initData2;
  const tmpResult8 = radius(offsetThreshold[10]);
  derivedValue1 = tmpResult8.useDerivedValue(fn2);
  const tmpResult9 = radius(offsetThreshold[10]);
  class M {
    constructor() {
      const obj = { fill: closure_6.get(), ry: radius + derivedValue1.get(), rx: radius, cy: radius + derivedValue1.get(), cx: radius };
      return obj;
    }
  }
  M.__closure = { voiceMessageEllipseBgColor: tmp14, radius, offset: derivedValue1 };
  M.__workletHash = 12489173275515;
  M.__initData = __initData3;
  const animatedProps = tmpResult9.useAnimatedProps(M);
  const fn3 = function f() {
    let value;
    size = { position: "absolute", width: 2 * radius, height: value + derivedValue1.get(), bottom: 0 };
    value = height.get();
    return size;
  };
  fn3.__closure = { radius, height, offset: derivedValue1 };
  fn3.__workletHash = 15958652124498;
  fn3.__initData = __initData4;
  const tmpResult10 = radius(offsetThreshold[10]);
  const animatedStyle = tmpResult10.useAnimatedStyle(fn3);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(currWaveHeight) {
        return currWaveHeight.currWaveHeight;
      }
    }
    const tmp19 = closure_22();
    cResult[4] = tmp19;
    tmp18 = tmp19;
  } else {
    class C {
      constructor(currWaveHeight) {
        return currWaveHeight.currWaveHeight;
      }
    }
  }
  if (cResult[5] === animatedProps) {
    class C {
      constructor(currWaveHeight) {
        return currWaveHeight.currWaveHeight;
      }
    }
    if (cResult[8] === animatedStyle) {
      class C {
        constructor(currWaveHeight) {
          return currWaveHeight.currWaveHeight;
        }
      }
      return tmp22;
    }
    const obj2 = { style: animatedStyle, children: tmp20 };
    const tmp24 = closure_13(height(offsetThreshold[10]).View, obj2);
    cResult[8] = animatedStyle;
    cResult[9] = tmp20;
    cResult[10] = tmp24;
    tmp22 = tmp24;
  }
  const obj3 = { children: closure_13(tmp18, { animatedProps, opacity }) };
  const Svg = tmp(tmp2[14]).Svg;
  cResult[5] = animatedProps;
  cResult[6] = opacity;
  cResult[7] = closure_13(Svg, obj3);
  const tmp21 = closure_13(Svg, obj3);
}) : ((radius) => {
  let Svg;
  let obj8;
  radius = radius.radius;
  height = radius.height;
  const offsetThreshold = radius.offsetThreshold;
  const voiceMessageAnimationState = radius.voiceMessageAnimationState;
  let derivedValue1;
  const opacity = radius.opacity;
  let obj = radius(offsetThreshold[20]);
  items = [derivedValue1];
  const stateFromStores = obj.useStateFromStores(items, () => derivedValue1.useReducedMotion, []);
  const tmp2 = useVoiceMessagesUIStore((currWaveHeight) => currWaveHeight.currWaveHeight);
  let closure_4 = tmp2;
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
  const obj2 = radius(offsetThreshold[10]);
  const derivedValue = obj2.useDerivedValue(fn);
  const obj3 = radius(offsetThreshold[21]);
  const token = obj3.useToken(height(offsetThreshold[16]).colors.BACKGROUND_BRAND);
  const tmp5 = closure_42(voiceMessageAnimationState, token, height(offsetThreshold[16]).unsafe_rawColors.RED_400, token, token);
  let closure_6 = tmp5;
  const obj4 = radius(offsetThreshold[10]);
  class S {
    constructor() {
      return derivedValue.get() * offsetThreshold;
    }
  }
  S.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  S.__workletHash = 4387291532926;
  S.__initData = __initData6;
  derivedValue1 = obj4.useDerivedValue(S);
  const obj5 = radius(offsetThreshold[10]);
  class E {
    constructor() {
      const obj = { fill: closure_6.get(), ry: radius + derivedValue1.get(), rx: radius, cy: radius + derivedValue1.get(), cx: radius };
      return obj;
    }
  }
  E.__closure = { voiceMessageEllipseBgColor: tmp5, radius, offset: derivedValue1 };
  E.__workletHash = 9597871227903;
  E.__initData = __initData7;
  const animatedProps = obj5.useAnimatedProps(E);
  const obj6 = radius(offsetThreshold[10]);
  class A {
    constructor() {
      let value;
      size = { position: "absolute", width: 2 * radius, height: value + derivedValue1.get(), bottom: 0 };
      value = height.get();
      return size;
    }
  }
  A.__closure = { radius, height, offset: derivedValue1 };
  A.__workletHash = 7120108587518;
  A.__initData = __initData8;
  const animatedStyle = obj6.useAnimatedStyle(A);
  const obj7 = { style: animatedStyle, children: closure_13(Svg, obj8) };
  const tmp9 = closure_22();
  const View = height(offsetThreshold[10]).View;
  obj8 = { children: closure_13(tmp9, { animatedProps, opacity }) };
  Svg = radius(offsetThreshold[14]).Svg;
  return closure_13(View, obj7);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((initialAnimation) => {
  let first;
  let tmp11;
  let obj = react2;
  const cResult = obj.c(9);
  initialAnimation = initialAnimation.initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  const voiceMessageState = initialAnimation.voiceMessageState;
  const exiting = initialAnimation.exiting;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(isUsingHoldGesture) {
      return isUsingHoldGesture.isUsingHoldGesture;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  useVoiceMessagesUIStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(savedVoiceMessageUploadData) {
        return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
      }
    }
    cResult[1] = A;
  } else {
    class A {
      constructor(savedVoiceMessageUploadData) {
        return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
      }
    }
  }
  let tmp5Result = useVoiceMessagesUIStore(A);
  ref = react.useRef(undefined);
  const tmp10 = useRefValueDefault(ref);
  if (exiting) {
    class A {
      constructor(savedVoiceMessageUploadData) {
        return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
      }
    }
    tmp11 = tmp10;
  } else {
    let stringResult4;
    class A {
      constructor(savedVoiceMessageUploadData) {
        return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
      }
    }
    if (tmp5Result) {
      class A {
        constructor(savedVoiceMessageUploadData) {
          return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
        }
      }
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        class A {
          constructor(savedVoiceMessageUploadData) {
            return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
          }
        }
        const stringResult = obj7.string(intl7.t["zPxm/X"]);
        stringResult4 = stringResult;
        tmp11 = stringResult;
      }
    }
    if (tmp5Result) {
      class A {
        constructor(savedVoiceMessageUploadData) {
          return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
        }
      }
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        class A {
          constructor(savedVoiceMessageUploadData) {
            return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
          }
        }
        const stringResult1 = obj6.string(intl7.t.sB81Bo);
        stringResult4 = stringResult1;
        tmp11 = stringResult1;
      }
    }
    if (!tmp5Result) {
      class A {
        constructor(savedVoiceMessageUploadData) {
          return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
        }
      }
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        class A {
          constructor(savedVoiceMessageUploadData) {
            return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
          }
        }
        const stringResult2 = obj3.string(intl7.t.cyL7DJ);
        stringResult4 = stringResult2;
        tmp11 = stringResult2;
      }
    }
    if (!tmp5Result) {
      class A {
        constructor(savedVoiceMessageUploadData) {
          return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
        }
      }
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        class A {
          constructor(savedVoiceMessageUploadData) {
            return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
          }
        }
        const stringResult3 = obj4.string(intl7.t["a+A3+f"]);
        stringResult4 = stringResult3;
        tmp11 = stringResult3;
      }
    }
    if (!tmp5Result) {
      class A {
        constructor(savedVoiceMessageUploadData) {
          return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
        }
      }
      tmp5Result = voiceMessageState !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp5Result) {
      class A {
        constructor(savedVoiceMessageUploadData) {
          return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
        }
      }
      stringResult4 = obj5.string(intl7.t["3qvtks"]);
      tmp11 = stringResult4;
    }
  }
  if (cResult[2] !== tmp11) {
    class A {
      constructor(savedVoiceMessageUploadData) {
        return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
      }
    }
    cResult[2] = tmp11;
    cResult[3] = tmp18;
  } else {
    class A {
      constructor(savedVoiceMessageUploadData) {
        return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
      }
    }
  }
  if (cResult[4] !== tmp11) {
    class A {
      constructor(savedVoiceMessageUploadData) {
        return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
      }
    }
    tmp20[0] = tmp11;
    cResult[4] = tmp11;
    cResult[5] = tmp20;
  } else {
    class A {
      constructor(savedVoiceMessageUploadData) {
        return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
      }
    }
  }
  const effect = react.useEffect(tmp18, tmp20);
  const tmpResult = ReanimatedRexport2;
  class N {
    constructor() {
      let min;
      let value;
      const obj = { opacity: min(value, recordingAnimation.get()) };
      min = Math.min;
      value = initialAnimation.get();
      return obj;
    }
  }
  N.__closure = { initialAnimation, recordingAnimation };
  N.__workletHash = 8911521148381;
  N.__initData = __initData9;
  const animatedStyle = tmpResult.useAnimatedStyle(N);
  if (null != tmp11) {
    class A {
      constructor(savedVoiceMessageUploadData) {
        return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
      }
    }
    const obj8 = { style: animatedStyle, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: 2, children: tmp11 };
    cResult[6] = animatedStyle;
    cResult[7] = tmp11;
    cResult[8] = map1(closure_21, obj8);
    const tmp26 = map1(closure_21, obj8);
  }
  return null;
}) : ((initialAnimation) => {
  let stringResult;
  initialAnimation = initialAnimation.initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  const voiceMessageState = initialAnimation.voiceMessageState;
  let stringResult5;
  const exiting = initialAnimation.exiting;
  const tmp = useVoiceMessagesUIStore((isUsingHoldGesture) => isUsingHoldGesture.isUsingHoldGesture);
  let tmp2 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  ref = react.useRef(undefined);
  const tmp5 = useRefValueDefault(ref);
  if (exiting) {
    stringResult5 = tmp5;
    stringResult = tmp5;
  } else {
    if (tmp2) {
      if (!tmp) {
        const intl = intl7.intl;
        stringResult = intl.string(intl7.t["m+sRVL"]);
        stringResult5 = stringResult;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl6 = intl7.intl;
        const stringResult1 = intl6.string(intl7.t["zPxm/X"]);
        stringResult5 = stringResult1;
        stringResult = stringResult1;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl5 = intl7.intl;
        const stringResult2 = intl5.string(intl7.t.sB81Bo);
        stringResult5 = stringResult2;
        stringResult = stringResult2;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl2 = intl7.intl;
        const stringResult3 = intl2.string(intl7.t.cyL7DJ);
        stringResult5 = stringResult3;
        stringResult = stringResult3;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl3 = intl7.intl;
        const stringResult4 = intl3.string(intl7.t["a+A3+f"]);
        stringResult5 = stringResult4;
        stringResult = stringResult4;
      }
    }
    if (!tmp2) {
      tmp2 = voiceMessageState !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp2) {
      const intl4 = intl7.intl;
      stringResult5 = intl4.string(intl7.t["3qvtks"]);
      stringResult = stringResult5;
    }
  }
  items = [stringResult];
  const effect = react.useEffect(() => {
    ref.current = stringResult5;
  }, items);
  ReanimatedRexport2;
  class C {
    constructor() {
      let min;
      let value;
      const obj = { opacity: min(value, recordingAnimation.get()) };
      min = Math.min;
      value = initialAnimation.get();
      return obj;
    }
  }
  C.__closure = { initialAnimation, recordingAnimation };
  C.__workletHash = 5020551202405;
  C.__initData = __initData10;
  let tmp26 = null;
  if (null != stringResult) {
    const obj2 = { style: tmp25, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: 2, children: stringResult };
    tmp26 = map1(closure_21, obj2);
  }
  return tmp26;
}));
const __initData11 = { code: "function VoiceMessageOverlayTsx11(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
const __initData12 = { code: "function VoiceMessageOverlayTsx12(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue_0]=voiceMessageAnimationState.get();const distance=prevValue+currValue_0;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}" };
const __initData13 = { code: "function VoiceMessageOverlayTsx13(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
const __initData14 = { code: "function VoiceMessageOverlayTsx14(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue_0]=voiceMessageAnimationState.get();const distance=prevValue+currValue_0;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_42 = ReactCompilerGating.isReactCompilerEnabled() ? ((voiceMessageAnimationState, sendingColor, cancelingColor, lockingColor, lockedColor) => {
  _require = voiceMessageAnimationState;
  let closure_1 = sendingColor;
  dependencyMap = cancelingColor;
  let closure_3 = lockingColor;
  let closure_4 = lockedColor;
  let obj = require("ReanimatedRexport");
  const fn = function _() {
    const tmp = voiceMessageAnimationState.get()[1];
    const obj = timing;
    const obj2 = { easing: ReanimatedRexport2.Easing.linear, duration: 150 };
    return obj.withTiming(tmp, obj2);
  };
  let obj2 = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__closure = obj2;
  fn.__workletHash = 1745446544851;
  fn.__initData = __initData11;
  const derivedValue = obj.useDerivedValue(fn);
  const fn2 = function u() {
    let items1;
    const tmp = _slicedToArray(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [sendingColor, sendingColor, lockingColor, lockedColor];
      items1 = items;
    } else {
      items1 = [sendingColor, cancelingColor, lockingColor, lockedColor];
    }
    const obj = ReanimatedRexport2;
    return obj.interpolateColor(derivedValue.get(), items, items1);
  };
  const obj3 = require("ReanimatedRexport");
  fn2.__closure = { voiceMessageAnimationState, sendingColor, lockingColor, lockedColor, cancelingColor, interpolateColor: require("ReanimatedRexport").interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__workletHash = 9383325401392;
  fn2.__initData = __initData12;
  ({ voiceMessageAnimationState, sendingColor, lockingColor, lockedColor, cancelingColor, interpolateColor: require("ReanimatedRexport").interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items });
  return obj3.useDerivedValue(fn2);
}) : ((voiceMessageAnimationState, sendingColor, cancelingColor, lockingColor, lockedColor) => {
  _require = voiceMessageAnimationState;
  let closure_1 = sendingColor;
  dependencyMap = cancelingColor;
  let closure_3 = lockingColor;
  let closure_4 = lockedColor;
  let obj = require("ReanimatedRexport");
  const fn = function _() {
    const tmp = voiceMessageAnimationState.get()[1];
    const obj = timing;
    const obj2 = { easing: ReanimatedRexport2.Easing.linear, duration: 150 };
    return obj.withTiming(tmp, obj2);
  };
  let obj2 = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__closure = obj2;
  fn.__workletHash = 8188168463569;
  fn.__initData = __initData13;
  const derivedValue = obj.useDerivedValue(fn);
  const fn2 = function u() {
    let items1;
    const tmp = _slicedToArray(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [sendingColor, sendingColor, lockingColor, lockedColor];
      items1 = items;
    } else {
      items1 = [sendingColor, cancelingColor, lockingColor, lockedColor];
    }
    const obj = ReanimatedRexport2;
    return obj.interpolateColor(derivedValue.get(), items, items1);
  };
  const obj3 = require("ReanimatedRexport");
  fn2.__closure = { voiceMessageAnimationState, sendingColor, lockingColor, lockedColor, cancelingColor, interpolateColor: require("ReanimatedRexport").interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__workletHash = 14279891272246;
  fn2.__initData = __initData14;
  ({ voiceMessageAnimationState, sendingColor, lockingColor, lockedColor, cancelingColor, interpolateColor: require("ReanimatedRexport").interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items });
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_55 = ReactCompilerGating.isReactCompilerEnabled() ? ((voiceMessageAnimationState) => {
  let closure_1;
  let token2;
  _require = voiceMessageAnimationState;
  let obj = require("react");
  const cResult = obj.c(5);
  let obj2 = require("useToken");
  const token = obj2.useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_DEFAULT);
  let obj3 = require("useToken");
  const token1 = obj3.useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_ACTIVE);
  const tmp4 = closure_42(voiceMessageAnimationState, token, token, token1, token1);
  importDefault = tmp4;
  let obj4 = require("useToken");
  token2 = obj4.useToken(require("native").modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH);
  const result = -v56 - token2 / 2;
  const _slicedToArray = result;
  let obj5 = require("useToken");
  const token3 = obj5.useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_DEFAULT);
  const obj6 = require("useToken");
  const token4 = obj6.useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_ACTIVE);
  const tmp9 = closure_42(voiceMessageAnimationState, token3, token3, token4, token4);
  let closure_4 = tmp9;
  const fn = function o() {
    const tmp = voiceMessageAnimationState.get()[1];
    const obj = timing;
    const obj2 = { easing: ReanimatedRexport2.Easing.linear, duration: 150 };
    return obj.withTiming(tmp, obj2);
  };
  const obj7 = require("ReanimatedRexport");
  fn.__closure = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__workletHash = 10905527813847;
  fn.__initData = __initData15;
  ({ voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing });
  const derivedValue = obj7.useDerivedValue(fn);
  const fn2 = function s() {
    const tmp = _slicedToArray(voiceMessageAnimationState.get(), 2);
    const tmp2 = tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0];
    const obj = ReanimatedRexport2;
    return obj.interpolate(derivedValue.get(), items, tmp2);
  };
  const obj9 = require("ReanimatedRexport");
  fn2.__closure = { voiceMessageAnimationState, interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__workletHash = 824453930420;
  fn2.__initData = __initData16;
  ({ voiceMessageAnimationState, interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items });
  const derivedValue1 = obj9.useDerivedValue(fn2);
  const fn3 = function c() {
    let obj2;
    const obj = { height: obj2.interpolate(derivedValue.get(), items, items) };
    items = [c23, c23, 104, 104];
    obj2 = ReanimatedRexport2;
    return obj;
  };
  const obj11 = require("ReanimatedRexport");
  fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: v68 };
  fn3.__workletHash = 8323760024494;
  fn3.__initData = __initData17;
  ({ interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: v68 });
  const animatedStyle = obj11.useAnimatedStyle(fn3);
  const fn4 = function l() {
    let items1;
    let items2;
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    size = { width: obj2.interpolate(derivedValue.get(), items, items), height: obj3.interpolate(derivedValue.get(), items, items1), opacity: derivedValue1.get(), backgroundColor: closure_1.get(), marginHorizontal: obj4.interpolate(derivedValue.get(), items, items2), marginBottom: obj5.interpolate(derivedValue.get(), items, [0, 0, 36, 36]) };
    items = [token2, token2, c24, c24];
    items1 = [c23, c23, c24, c24];
    obj2 = ReanimatedRexport2;
    items2 = [0, 0, _slicedToArray, _slicedToArray];
    obj3 = ReanimatedRexport2;
    obj4 = ReanimatedRexport2;
    obj5 = ReanimatedRexport2;
    return size;
  };
  const obj13 = require("ReanimatedRexport");
  fn4.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: v56, LOCK_PILL_RESTING_HEIGHT: v68, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp4, lockPillLockedOverhang: result };
  fn4.__workletHash = 8413596143283;
  fn4.__initData = __initData18;
  ({ interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: v56, LOCK_PILL_RESTING_HEIGHT: v68, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp4, lockPillLockedOverhang: result });
  const animatedStyle1 = obj13.useAnimatedStyle(fn4);
  const fn5 = function _() {
    let obj2;
    let obj3;
    let obj4;
    size = { width: obj2.interpolate(derivedValue.get(), items, [24, 24, 32, 32]), height: obj3.interpolate(derivedValue.get(), items, [24, 24, 32, 32]), marginTop: obj4.interpolate(derivedValue.get(), items, [12, 12, 10, 10]), tintColor: closure_4.get() };
    obj2 = ReanimatedRexport2;
    obj3 = ReanimatedRexport2;
    obj4 = ReanimatedRexport2;
    return size;
  };
  const obj15 = require("ReanimatedRexport");
  fn5.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: tmp9 };
  fn5.__workletHash = 10024923786404;
  fn5.__initData = __initData19;
  ({ interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: tmp9 });
  const animatedStyle2 = obj15.useAnimatedStyle(fn5);
  const fn6 = function u() {
    let obj2;
    const obj = { opacity: obj2.interpolate(derivedValue.get(), items, [1, 1, 0, 0]) };
    obj2 = ReanimatedRexport2;
    return obj;
  };
  const obj17 = require("ReanimatedRexport");
  fn6.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn6.__workletHash = 17452673235842;
  fn6.__initData = __initData20;
  ({ interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items });
  const animatedStyle3 = obj17.useAnimatedStyle(fn6);
  if (cResult[0] === animatedStyle3) {
    if (cResult[1] === animatedStyle1) {
      if (cResult[2] === animatedStyle2) {
        let tmp16;
        if (cResult[3] === animatedStyle) {
          tmp16 = cResult[4];
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
}) : ((voiceMessageAnimationState) => {
  let closure_1;
  let fn3;
  let fn4;
  let fn5;
  let fn6;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let token2;
  _require = voiceMessageAnimationState;
  let obj = require("useToken");
  const token = obj.useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_DEFAULT);
  let obj2 = require("useToken");
  const token1 = obj2.useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_ACTIVE);
  const tmp3 = closure_42(voiceMessageAnimationState, token, token, token1, token1);
  importDefault = tmp3;
  let obj3 = require("useToken");
  token2 = obj3.useToken(require("native").modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH);
  const result = -v56 - token2 / 2;
  const _slicedToArray = result;
  let obj4 = require("useToken");
  const token3 = obj4.useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_DEFAULT);
  let obj5 = require("useToken");
  const token4 = obj5.useToken(require("native").colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_ACTIVE);
  const tmp8 = closure_42(voiceMessageAnimationState, token3, token3, token4, token4);
  let closure_4 = tmp8;
  const fn = function o() {
    const tmp = voiceMessageAnimationState.get()[1];
    const obj = timing;
    const obj2 = { easing: ReanimatedRexport2.Easing.linear, duration: 150 };
    return obj.withTiming(tmp, obj2);
  };
  const obj6 = require("ReanimatedRexport");
  fn.__closure = { voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__workletHash = 15397801189168;
  fn.__initData = __initData21;
  ({ voiceMessageAnimationState, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing });
  const derivedValue = obj6.useDerivedValue(fn);
  const fn2 = function s() {
    const tmp = _slicedToArray(voiceMessageAnimationState.get(), 2);
    const tmp2 = tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0];
    const obj = ReanimatedRexport2;
    return obj.interpolate(derivedValue.get(), items, tmp2);
  };
  const obj8 = require("ReanimatedRexport");
  fn2.__closure = { voiceMessageAnimationState, interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__workletHash = 13192095138643;
  fn2.__initData = __initData22;
  ({ voiceMessageAnimationState, interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items });
  const derivedValue1 = obj8.useDerivedValue(fn2);
  const obj10 = { lockParentContainerStyle: obj11.useAnimatedStyle(fn3), lockContainerStyle: obj13.useAnimatedStyle(fn4), lockIconStyle: obj15.useAnimatedStyle(fn5), chevonStyle: obj17.useAnimatedStyle(fn6) };
  fn3 = function c() {
    let obj2;
    const obj = { height: obj2.interpolate(derivedValue.get(), items, items) };
    items = [c23, c23, 104, 104];
    obj2 = ReanimatedRexport2;
    return obj;
  };
  obj11 = require("ReanimatedRexport");
  fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: v68 };
  fn3.__workletHash = 8267354587081;
  fn3.__initData = __initData23;
  ({ interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: v68 });
  fn4 = function l() {
    let items1;
    let items2;
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    size = { width: obj2.interpolate(derivedValue.get(), items, items), height: obj3.interpolate(derivedValue.get(), items, items1), opacity: derivedValue1.get(), backgroundColor: closure_1.get(), marginHorizontal: obj4.interpolate(derivedValue.get(), items, items2), marginBottom: obj5.interpolate(derivedValue.get(), items, [0, 0, 36, 36]) };
    items = [token2, token2, c24, c24];
    items1 = [c23, c23, c24, c24];
    obj2 = ReanimatedRexport2;
    items2 = [0, 0, _slicedToArray, _slicedToArray];
    obj3 = ReanimatedRexport2;
    obj4 = ReanimatedRexport2;
    obj5 = ReanimatedRexport2;
    return size;
  };
  obj13 = require("ReanimatedRexport");
  fn4.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: v56, LOCK_PILL_RESTING_HEIGHT: v68, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp3, lockPillLockedOverhang: result };
  fn4.__workletHash = 17376824863644;
  fn4.__initData = __initData24;
  ({ interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: v56, LOCK_PILL_RESTING_HEIGHT: v68, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp3, lockPillLockedOverhang: result });
  fn5 = function _() {
    let obj2;
    let obj3;
    let obj4;
    size = { width: obj2.interpolate(derivedValue.get(), items, [24, 24, 32, 32]), height: obj3.interpolate(derivedValue.get(), items, [24, 24, 32, 32]), marginTop: obj4.interpolate(derivedValue.get(), items, [12, 12, 10, 10]), tintColor: closure_4.get() };
    obj2 = ReanimatedRexport2;
    obj3 = ReanimatedRexport2;
    obj4 = ReanimatedRexport2;
    return size;
  };
  obj15 = require("ReanimatedRexport");
  fn5.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: tmp8 };
  fn5.__workletHash = 9299918606923;
  fn5.__initData = __initData25;
  ({ interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: tmp8 });
  fn6 = function u() {
    let obj2;
    const obj = { opacity: obj2.interpolate(derivedValue.get(), items, [1, 1, 0, 0]) };
    obj2 = ReanimatedRexport2;
    return obj;
  };
  obj17 = require("ReanimatedRexport");
  fn6.__closure = { interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn6.__workletHash = 8890797665540;
  fn6.__initData = __initData26;
  ({ interpolate: require("ReanimatedRexport").interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items });
  return obj10;
});
const __initData27 = { code: "function VoiceMessageOverlayTsx27(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}" };
const __initData28 = { code: "function VoiceMessageOverlayTsx28(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}" };
const __initData29 = { code: "function VoiceMessageOverlayTsx29(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}" };
const __initData30 = { code: "function VoiceMessageOverlayTsx30(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}" };
const __initData31 = { code: "function VoiceMessageOverlayTsx31(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}" };
const __initData32 = { code: "function VoiceMessageOverlayTsx32(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_62 = ReactCompilerGating.isReactCompilerEnabled() ? ((safeAreaBottom) => {
  let chevonStyle;
  let closure_3;
  let items1;
  let lockContainerStyle;
  let lockIconStyle;
  let lockParentContainerStyle;
  let voiceMessageAnimationState;
  let tmp2 = voiceMessageAnimationState;
  const tmp = safeAreaBottom;
  let obj = safeAreaBottom(voiceMessageAnimationState[19]);
  const cResult = obj.c(20);
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  const initialAnimation = safeAreaBottom.initialAnimation;
  voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  const tmp4 = closure_25();
  const tmp5 = ref(react.useState(false), 2);
  const first = tmp5[0];
  const fn = function c() {
    const tmp2 = voiceMessageAnimationState.get()[1] === VoiceMessageAnimationState.LOCKED || voiceMessageAnimationState.get()[1] === tmp.LOCKING;
    return tmp2;
  };
  const obj3 = { voiceMessageAnimationState, VoiceMessageAnimationState };
  ref = tmp5[1];
  fn.__closure = obj3;
  fn.__workletHash = 12189959131839;
  fn.__initData = __initData27;
  const fn2 = function s(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(closure_3)(arg0);
    }
  };
  const obj2 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn2.__closure = { runOnJS: safeAreaBottom(voiceMessageAnimationState[10]).runOnJS, setLocked: tmp5[1] };
  fn2.__workletHash = 12931300953463;
  fn2.__initData = __initData28;
  ({ runOnJS: safeAreaBottom(voiceMessageAnimationState[10]).runOnJS, setLocked: tmp5[1] });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  ({ lockParentContainerStyle, lockContainerStyle, lockIconStyle, chevonStyle } = closure_55(voiceMessageAnimationState));
  closure_55(voiceMessageAnimationState);
  const tmp10Result = initialAnimation(first ? tmp2[25] : tmp2[26]);
  const fn3 = function f() {
    let sum;
    const obj = { opacity: initialAnimation.get(), bottom: sum + 8 * initialAnimation.get() };
    sum = safeAreaBottom + CHAT_INPUT_HEIGHT + 24;
    return obj;
  };
  const obj5 = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  fn3.__closure = obj5;
  fn3.__workletHash = 1013957568516;
  fn3.__initData = __initData29;
  const tmpResult = tmp(tmp2[10]);
  const animatedStyle = tmpResult.useAnimatedStyle(fn3);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === lockParentContainerStyle) {
      let tmp13;
      if (cResult[2] === tmp4.lockParentContainer) {
        tmp13 = cResult[3];
      }
      if (cResult[4] === lockContainerStyle) {
        let tmp14;
        if (cResult[5] === tmp4.lockContainer) {
          tmp14 = cResult[6];
        }
        if (cResult[7] === lockIconStyle) {
          let tmp15;
          if (cResult[8] === tmp10Result) {
            tmp15 = cResult[9];
          }
          if (cResult[10] === chevonStyle) {
            let tmp19;
            if (cResult[11] === tmp4.chevon) {
              tmp19 = cResult[12];
            }
            if (cResult[13] === tmp14) {
              if (cResult[14] === tmp15) {
                let tmp23;
                if (cResult[15] === tmp19) {
                  tmp23 = cResult[16];
                }
                if (cResult[17] === tmp13) {
                  let tmp26;
                  if (cResult[18] === tmp23) {
                    tmp26 = cResult[19];
                  }
                  return tmp26;
                }
                const obj6 = { style: tmp13, children: tmp23 };
                const tmp28 = closure_13(initialAnimation(tmp2[10]).View, obj6);
                cResult[17] = tmp13;
                cResult[18] = tmp23;
                cResult[19] = tmp28;
                tmp26 = tmp28;
              }
            }
            const obj7 = { style: tmp14, children: items };
            items = [tmp15, tmp19];
            const tmp25 = closure_14(initialAnimation(tmp2[10]).View, obj7);
            cResult[13] = tmp14;
            cResult[14] = tmp15;
            cResult[15] = tmp19;
            cResult[16] = tmp25;
            tmp23 = tmp25;
          }
          const obj8 = { style: items1, source: initialAnimation(tmp2[27]) };
          items1 = [tmp4.chevon, chevonStyle];
          const tmp22 = closure_13(closure_20, obj8);
          cResult[10] = chevonStyle;
          cResult[11] = tmp4.chevon;
          cResult[12] = tmp22;
          tmp19 = tmp22;
        }
        const obj9 = { style: lockIconStyle, source: tmp10Result };
        const tmp18 = closure_13(closure_20, obj9);
        cResult[7] = lockIconStyle;
        cResult[8] = tmp10Result;
        cResult[9] = tmp18;
        tmp15 = tmp18;
      }
      const items2 = [tmp4.lockContainer, lockContainerStyle];
      cResult[4] = lockContainerStyle;
      cResult[5] = tmp4.lockContainer;
      cResult[6] = items2;
      tmp14 = items2;
    }
  }
  const items3 = [tmp4.lockParentContainer, lockParentContainerStyle, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = lockParentContainerStyle;
  cResult[2] = tmp4.lockParentContainer;
  cResult[3] = items3;
  tmp13 = items3;
}) : ((safeAreaBottom) => {
  let View2;
  let chevonStyle;
  let closure_3;
  let items1;
  let items2;
  let items3;
  let lockContainerStyle;
  let lockIconStyle;
  let lockParentContainerStyle;
  let obj6;
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  const initialAnimation = safeAreaBottom.initialAnimation;
  const voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  ref = undefined;
  const tmp = closure_25();
  let tmp2 = ref(react.useState(false), 2);
  ref = tmp4;
  const first = tmp2[0];
  let obj = safeAreaBottom(voiceMessageAnimationState[10]);
  const fn = function _() {
    const tmp2 = voiceMessageAnimationState.get()[1] === VoiceMessageAnimationState.LOCKED || voiceMessageAnimationState.get()[1] === tmp.LOCKING;
    return tmp2;
  };
  const obj2 = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn.__closure = obj2;
  fn.__workletHash = 11637569602585;
  fn.__initData = __initData30;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(closure_3)(arg0);
    }
  };
  fn2.__closure = { runOnJS: safeAreaBottom(voiceMessageAnimationState[10]).runOnJS, setLocked: tmp2[1] };
  fn2.__workletHash = 7546249490783;
  fn2.__initData = __initData31;
  ({ runOnJS: safeAreaBottom(voiceMessageAnimationState[10]).runOnJS, setLocked: tmp2[1] });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  ({ lockParentContainerStyle, lockContainerStyle, lockIconStyle, chevonStyle } = closure_55(voiceMessageAnimationState));
  closure_55(voiceMessageAnimationState);
  const fn3 = function v() {
    let sum;
    const obj = { opacity: initialAnimation.get(), bottom: sum + 8 * initialAnimation.get() };
    sum = safeAreaBottom + CHAT_INPUT_HEIGHT + 24;
    return obj;
  };
  const obj4 = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  fn3.__closure = obj4;
  fn3.__workletHash = 10073937126190;
  fn3.__initData = __initData32;
  const tmp9Result = initialAnimation(first ? voiceMessageAnimationState[25] : voiceMessageAnimationState[26]);
  const tmp5Result = safeAreaBottom(voiceMessageAnimationState[10]);
  const animatedStyle = tmp5Result.useAnimatedStyle(fn3);
  const obj5 = { style: items, children: closure_14(View2, obj6) };
  items = [tmp.lockParentContainer, lockParentContainerStyle, animatedStyle];
  const View = tmp9(tmp6[10]).View;
  obj6 = { style: items1, children: items2 };
  items1 = [tmp.lockContainer, lockContainerStyle];
  View2 = tmp9(tmp6[10]).View;
  items2 = [closure_13(closure_20, { style: lockIconStyle, source: tmp9Result }), ];
  const obj7 = { style: items3, source: initialAnimation(voiceMessageAnimationState[27]) };
  items3 = [tmp.chevon, chevonStyle];
  items2[1] = closure_13(closure_20, obj7);
  return closure_13(View, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_63 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let sharedValue;
  let sharedValue1;
  let tmp7;
  let tmp8;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(16);
  let obj2 = require("ReanimatedRexport");
  const tmp2 = sharedValue;
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let _performance = performance;
    const nowResult = performance.now();
    cResult[0] = nowResult;
    first = nowResult;
  } else {
    first = cResult[0];
  }
  ref = sharedValue1.useRef(first);
  if (cResult[1] !== sharedValue) {
    const fn = function _() {
      set = sharedValue.set;
      const withDelay = ReanimatedRexport2.withDelay;
      ReanimatedRexport2;
      const obj = timing;
      const obj2 = { easing: ReanimatedRexport2.Easing.quad, duration };
      const result = set(withDelay(c19, obj.withTiming(1, obj2)));
    };
    items = [sharedValue];
    cResult[1] = sharedValue;
    cResult[2] = fn;
    cResult[3] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const effect = obj3.useEffect(tmp7, tmp8);
  if (cResult[4] === arg1) {
    let tmp10;
    let tmp11;
    if (cResult[5] === sharedValue) {
      tmp10 = cResult[6];
      tmp11 = cResult[7];
    }
    const effect1 = obj3.useEffect(tmp10, tmp11);
    const tmpResult = tmp(tmp2[10]);
    sharedValue1 = tmpResult.useSharedValue(0);
    if (cResult[8] === sharedValue) {
      if (cResult[9] === arg0) {
        let tmp14;
        let tmp15;
        if (cResult[10] === sharedValue1) {
          tmp14 = cResult[11];
          tmp15 = cResult[12];
        }
        const effect2 = obj3.useEffect(tmp14, tmp15);
        if (cResult[13] === sharedValue) {
          let tmp17;
          if (cResult[14] === sharedValue1) {
            tmp17 = cResult[15];
          }
          return tmp17;
        }
        const obj4 = { initialAnimation: sharedValue, recordingAnimation: sharedValue1 };
        class I {
          constructor() {
            if (closure_0) {
              set = sharedValue1.set;
              const obj = { easing: ReanimatedRexport2.Easing.quad, duration: 200 };
              const withTiming = timing.withTiming;
              timing;
              const result = set(withTiming(1, obj));
              const _performance = performance;
              if (performance.now() - ref.current < c19) {
                set2 = sharedValue.set;
                const obj2 = { easing: ReanimatedRexport2.Easing.quad, duration };
                const withTiming2 = timing.withTiming;
                timing;
                set2(withTiming2(1, obj2));
              }
            }
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
          set = sharedValue1.set;
          const obj = { easing: ReanimatedRexport2.Easing.quad, duration: 200 };
          const withTiming = timing.withTiming;
          timing;
          const result = set(withTiming(1, obj));
          const _performance = performance;
          if (performance.now() - ref.current < c19) {
            set2 = sharedValue.set;
            const obj2 = { easing: ReanimatedRexport2.Easing.quad, duration };
            const withTiming2 = timing.withTiming;
            timing;
            set2(withTiming2(1, obj2));
          }
        }
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
  }
  class S {
    constructor() {
      if (closure_1) {
        set = sharedValue.set;
        const obj = { easing: ReanimatedRexport2.Easing.quad, duration: duration2 };
        const withTiming = timing.withTiming;
        timing;
        const result = set(withTiming(0, obj));
      }
    }
  }
  const items2 = [sharedValue, arg1];
  cResult[4] = arg1;
  cResult[5] = sharedValue;
  cResult[6] = S;
  cResult[7] = items2;
  tmp11 = items2;
  tmp10 = S;
}) : ((arg0, arg1) => {
  let closure_0;
  let initialAnimation;
  let recordingAnimation;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("ReanimatedRexport");
  initialAnimation = obj.useSharedValue(0);
  ref = recordingAnimation.useRef(performance.now());
  items = [initialAnimation];
  const effect = recordingAnimation.useEffect(() => {
    set = initialAnimation.set;
    const withDelay = ReanimatedRexport2.withDelay;
    ReanimatedRexport2;
    const obj = timing;
    const obj2 = { easing: ReanimatedRexport2.Easing.quad, duration };
    const result = set(withDelay(c19, obj.withTiming(1, obj2)));
  }, items);
  const items1 = [initialAnimation, arg1];
  const effect1 = recordingAnimation.useEffect(() => {
    if (closure_1) {
      set = initialAnimation.set;
      const obj = { easing: ReanimatedRexport2.Easing.quad, duration: duration2 };
      const withTiming = timing.withTiming;
      timing;
      const result = set(withTiming(0, obj));
    }
  }, items1);
  let obj2 = require("ReanimatedRexport");
  recordingAnimation = obj2.useSharedValue(0);
  const items2 = [initialAnimation, recordingAnimation, arg0];
  const effect2 = recordingAnimation.useEffect(() => {
    if (closure_0) {
      set = recordingAnimation.set;
      const obj = { easing: ReanimatedRexport2.Easing.quad, duration: 200 };
      const withTiming = timing.withTiming;
      timing;
      const result = set(withTiming(1, obj));
      const _performance = performance;
      if (performance.now() - ref.current < c19) {
        set2 = initialAnimation.set;
        const obj2 = { easing: ReanimatedRexport2.Easing.quad, duration };
        const withTiming2 = timing.withTiming;
        timing;
        set2(withTiming2(1, obj2));
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
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_70 = memo3(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let _slicedToArray;
  let closure_3;
  let first;
  let initialAnimation;
  let tmp13;
  let tmp17;
  let tmp20;
  let tmp = channelId;
  let obj = channelId(initialAnimation[19]);
  const cResult = obj.c(64);
  channelId = channelId.channelId;
  const voiceMessageAnimationState = channelId.voiceMessageAnimationState;
  const exiting = channelId.exiting;
  let obj2 = channelId(initialAnimation[21]);
  const token = obj2.useToken(voiceMessageAnimationState(initialAnimation[16]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  const tmp6 = closure_25();
  const tmp4 = voiceMessageAnimationState;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeCustomKeyboardHeight: true, includeKeyboardHeight: true };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const bottom = tmp4(tmp2[28])(first).insets.bottom;
  let tmpResult = tmp(tmp2[29]);
  const keyboardOpenPaddingStyle = tmpResult.useKeyboardOpenPaddingStyle();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(startTimeMillis) {
        return null != startTimeMillis.startTimeMillis;
      }
    }
    cResult[1] = N;
  } else {
    class N {
      constructor(startTimeMillis) {
        return null != startTimeMillis.startTimeMillis;
      }
    }
  }
  const tmp10 = useVoiceMessagesUIStore(N);
  initialAnimation = closure_63(tmp10, exiting).initialAnimation;
  closure_63(tmp10, exiting);
  [r10063, tmp13] = ref.useState(VoiceMessageAnimationState.SENDING);
  _slicedToArray(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  _slicedToArray = tmp13;
  const fn = function y() {
    return voiceMessageAnimationState.get()[1];
  };
  fn.__closure = { voiceMessageAnimationState };
  fn.__workletHash = 3812530446585;
  fn.__initData = __initData33;
  const tmpResult4 = tmp(initialAnimation[10]);
  class V {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport2;
        obj.runOnJS(ref)(arg0);
      }
    }
  }
  V.__closure = { runOnJS: tmp(initialAnimation[10]).runOnJS, setVoiceMessageState: tmp13 };
  V.__workletHash = 7697042668715;
  V.__initData = __initData34;
  ({ runOnJS: tmp(initialAnimation[10]).runOnJS, setVoiceMessageState: tmp13 });
  const animatedReaction = tmpResult4.useAnimatedReaction(fn, V);
  ref = ref.useRef(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        const obj = useIsScreenReaderEnabled;
        if (obj.getIsScreenReaderEnabled()) {
          const obj2 = { ref };
          const tmpResult = react_native;
          const result = tmpResult.setAccessibilityFocus(obj2);
        }
      }
    }
    items = [];
    cResult[2] = P;
    cResult[3] = items;
    tmp17 = items;
  } else {
    class P {
      constructor() {
        const obj = useIsScreenReaderEnabled;
        if (obj.getIsScreenReaderEnabled()) {
          const obj2 = { ref };
          const tmpResult = react_native;
          const result = tmpResult.setAccessibilityFocus(obj2);
        }
      }
    }
    tmp17 = cResult[3];
  }
  const effect = obj5.useEffect(P, tmp17);
  if (cResult[4] !== channelId) {
    class F {
      constructor() {
        closure_0 = closure_1_6.addEventListener("change", (event) => {
          const tmp = "inactive" !== event && "background" !== event;
          if (!tmp) {
            const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
            const dispatchKeyed = ComponentDispatch.dispatchKeyed;
            const VOICE_MESSAGE_SEND = constants.VOICE_MESSAGE_SEND;
            const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
            dispatchKeyed(VOICE_MESSAGE_SEND, closure_0, obj);
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
    tmp20 = items1;
  } else {
    class F {
      constructor() {
        closure_0 = closure_1_6.addEventListener("change", (event) => {
          const tmp = "inactive" !== event && "background" !== event;
          if (!tmp) {
            const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
            const dispatchKeyed = ComponentDispatch.dispatchKeyed;
            const VOICE_MESSAGE_SEND = constants.VOICE_MESSAGE_SEND;
            const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
            dispatchKeyed(VOICE_MESSAGE_SEND, closure_0, obj);
          }
        });
        return () => {
          closure_0.remove();
        };
      }
    }
    tmp20 = cResult[6];
  }
  const effect1 = obj5.useEffect(F, tmp20);
  const fn2 = function z() {
    const obj = { opacity: initialAnimation.get() };
    return obj;
  };
  fn2.__closure = { initialAnimation };
  fn2.__workletHash = 11189242449741;
  fn2.__initData = __initData35;
  const tmpResult5 = tmp(initialAnimation[10]);
  const animatedStyle = tmpResult5.useAnimatedStyle(fn2);
  const tmpResult6 = tmp(initialAnimation[34]);
  const wakeLock = tmpResult6.useWakeLock(VoiceMessageOverlay);
  if (cResult[7] !== bottom) {
    class F {
      constructor() {
        closure_0 = closure_1_6.addEventListener("change", (event) => {
          const tmp = "inactive" !== event && "background" !== event;
          if (!tmp) {
            const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
            const dispatchKeyed = ComponentDispatch.dispatchKeyed;
            const VOICE_MESSAGE_SEND = constants.VOICE_MESSAGE_SEND;
            const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
            dispatchKeyed(VOICE_MESSAGE_SEND, closure_0, obj);
          }
        });
        return () => {
          closure_0.remove();
        };
      }
    }
    tmp25[0] = bottom;
    cResult[7] = bottom;
    cResult[8] = tmp25;
  } else {
    class F {
      constructor() {
        closure_0 = closure_1_6.addEventListener("change", (event) => {
          const tmp = "inactive" !== event && "background" !== event;
          if (!tmp) {
            const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
            const dispatchKeyed = ComponentDispatch.dispatchKeyed;
            const VOICE_MESSAGE_SEND = constants.VOICE_MESSAGE_SEND;
            const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
            dispatchKeyed(VOICE_MESSAGE_SEND, closure_0, obj);
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
        closure_0 = closure_1_6.addEventListener("change", (event) => {
          const tmp = "inactive" !== event && "background" !== event;
          if (!tmp) {
            const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
            const dispatchKeyed = ComponentDispatch.dispatchKeyed;
            const VOICE_MESSAGE_SEND = constants.VOICE_MESSAGE_SEND;
            const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
            dispatchKeyed(VOICE_MESSAGE_SEND, closure_0, obj);
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
          closure_0 = closure_1_6.addEventListener("change", (event) => {
            const tmp = "inactive" !== event && "background" !== event;
            if (!tmp) {
              const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
              const dispatchKeyed = ComponentDispatch.dispatchKeyed;
              const VOICE_MESSAGE_SEND = constants.VOICE_MESSAGE_SEND;
              const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
              dispatchKeyed(VOICE_MESSAGE_SEND, closure_0, obj);
            }
          });
          return () => {
            closure_0.remove();
          };
        }
      }
    }
    const items2 = [tmp6.contentContainer, tmp25, animatedStyle, tmp26];
    cResult[12] = animatedStyle;
    cResult[13] = tmp6.contentContainer;
    cResult[14] = tmp25;
    cResult[15] = tmp26;
    cResult[16] = items2;
  }
  const items3 = [tmp6.contentContainerFloating, keyboardOpenPaddingStyle];
  cResult[9] = keyboardOpenPaddingStyle;
  cResult[10] = tmp6.contentContainerFloating;
  cResult[11] = items3;
}) : ((channelId) => {
  let IconButton;
  let c3;
  let intl;
  let items1;
  let items4;
  let obj11;
  let str;
  let tmp11;
  let tmp12;
  let tmp25;
  channelId = channelId.channelId;
  const voiceMessageAnimationState = channelId.voiceMessageAnimationState;
  const exiting = channelId.exiting;
  let initialAnimation;
  ref = undefined;
  let tmp = channelId;
  let obj = channelId(initialAnimation[21]);
  const token = obj.useToken(voiceMessageAnimationState(initialAnimation[16]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  const tmp5 = closure_25();
  const bottom = voiceMessageAnimationState(initialAnimation[28])({ includeCustomKeyboardHeight: true, includeKeyboardHeight: true }).insets.bottom;
  let obj2 = channelId(initialAnimation[29]);
  const keyboardOpenPaddingStyle = obj2.useKeyboardOpenPaddingStyle();
  const tmp7 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  const tmp8 = closure_63(tmp7, exiting);
  initialAnimation = tmp8.initialAnimation;
  const recordingAnimation = tmp8.recordingAnimation;
  [tmp11, tmp12] = ref(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  ref(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  ref = tmp12;
  const obj3 = channelId(initialAnimation[10]);
  const tmp3 = voiceMessageAnimationState;
  class I {
    constructor() {
      return voiceMessageAnimationState.get()[1];
    }
  }
  I.__closure = { voiceMessageAnimationState };
  I.__workletHash = 15178370404028;
  I.__initData = __initData36;
  class A {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport2;
        obj.runOnJS(c3)(arg0);
      }
    }
  }
  A.__closure = { runOnJS: channelId(initialAnimation[10]).runOnJS, setVoiceMessageState: tmp12 };
  A.__workletHash = 5930838449128;
  A.__initData = __initData37;
  ({ runOnJS: channelId(initialAnimation[10]).runOnJS, setVoiceMessageState: tmp12 });
  const animatedReaction = obj3.useAnimatedReaction(I, A);
  ref = ref.useRef(null);
  const effect = ref.useEffect(() => {
    const obj = useIsScreenReaderEnabled;
    if (obj.getIsScreenReaderEnabled()) {
      const obj2 = { ref };
      const tmpResult = react_native;
      const result = tmpResult.setAccessibilityFocus(obj2);
    }
  }, []);
  items = [channelId];
  const effect1 = ref.useEffect(() => {
    let closure_0 = closure_1_6.addEventListener("change", (event) => {
      const tmp = "inactive" !== event && "background" !== event;
      if (!tmp) {
        const ComponentDispatch = channelId(initialAnimation[32]).ComponentDispatch;
        const dispatchKeyed = ComponentDispatch.dispatchKeyed;
        const VOICE_MESSAGE_SEND = constants.VOICE_MESSAGE_SEND;
        const obj = { isCancelling: true, cancelReason: channelId(initialAnimation[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
        dispatchKeyed(VOICE_MESSAGE_SEND, closure_0, obj);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items);
  const fn = function b() {
    const obj = { opacity: initialAnimation.get() };
    return obj;
  };
  fn.__closure = { initialAnimation };
  fn.__workletHash = 1456339431040;
  fn.__initData = __initData38;
  const obj5 = channelId(initialAnimation[10]);
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj6 = channelId(initialAnimation[34]);
  const wakeLock = obj6.useWakeLock(VoiceMessageOverlay);
  const obj7 = { style: items1, children: null };
  items1 = [tmp5.contentContainer, { bottom }, animatedStyle, ];
  const items2 = [tmp5.contentContainerFloating, keyboardOpenPaddingStyle];
  items1[3] = items2;
  const View = voiceMessageAnimationState(initialAnimation[10]).View;
  const items3 = [closure_13(channelId(initialAnimation[35]).ChatInputScrimGradient, { gradientHeight: token, inline: true }), closure_13(closure_37, { initialAnimation, recordingAnimation, voiceMessageState: tmp11, exiting }), ];
  const obj8 = { style: tmp5.innerContainer, children: null };
  const obj9 = { style: tmp5.voiceChatContainer, children: null };
  const obj10 = { isRecording: tmp7, initialAnimation, leftAccessory: closure_13(IconButton, obj11), rightAccessory: null };
  obj11 = {
    icon: voiceMessageAnimationState(initialAnimation[38]),
    variant: str,
    size: "sm",
    maxFontSizeMultiplier: 2,
    accessibilityLabel: intl.string(tmp(initialAnimation[23]).t.RdK9sV),
    onPressIn() {
      const obj = channelId(initialAnimation[36]);
      return obj.triggerHaptic();
    },
    onPress() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, channelId, { isCancelling: true });
    }
  };
  const tmp23 = voiceMessageAnimationState(initialAnimation[42]);
  IconButton = channelId(initialAnimation[37]).IconButton;
  str = "tertiary";
  if (tmp11 === VoiceMessageAnimationState.CANCELLING) {
    str = "destructive";
  }
  intl = tmp(tmp2[23]).intl;
  const obj13 = { ref, active: tmp25, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null };
  tmp25 = tmp11 === VoiceMessageAnimationState.SENDING;
  const tmp3Result = tmp3(initialAnimation[41]);
  if (!tmp25) {
    tmp25 = tmp11 === VoiceMessageAnimationState.LOCKED;
  }
  ({ floatingSendButton: obj12.style, floatingSendButtonActive: obj12.activeStyle, floatingSendButtonIconActive: obj12.activeIconStyle } = tmp5);
  if (!tmp7) {
    let SendMessageIcon;
    if (!exiting) {
      SendMessageIcon = tmp(tmp2[40]).MicrophoneIcon;
    }
    const obj14 = { children: items4 };
    obj13.IconComponent = SendMessageIcon;
    const intl2 = tmp(tmp2[23]).intl;
    obj13.accessibilityLabel = intl2.string(tmp(initialAnimation[23]).t["+8GStU"]);
    obj13.onPress = function onPress() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, channelId, { isCancelling: false });
    };
    obj10.rightAccessory = closure_13(tmp3Result, obj13);
    obj9.children = closure_13(tmp23, obj10);
    obj8.children = closure_13(closure_5, obj9);
    items3[2] = closure_13(closure_5, obj8);
    obj7.children = items3;
    items4 = [closure_14(View, obj7), ];
    const obj23 = { safeAreaBottom: bottom, initialAnimation, voiceMessageAnimationState };
    items4[1] = closure_13(closure_62, obj23);
    return closure_14(closure_15, obj14);
  }
  SendMessageIcon = tmp(tmp2[39]).SendMessageIcon;
}));
const memo4 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo4Result = memo4(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let tmp15;
  let tmp7;
  const obj = channelId(576);
  const cResult = obj.c(12);
  const tmp = channelId;
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(showRecordingOverlay) {
      return showRecordingOverlay.showRecordingOverlay;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useVoiceMessagesUIStore(first);
  let closure_1 = tmp6;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    items = [ChannelStore];
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== channelId) {
    class E {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    cResult[2] = channelId;
    cResult[3] = E;
  } else {
    class E {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, E);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(voiceMessageAnimationState) {
        return voiceMessageAnimationState.voiceMessageAnimationState;
      }
    }
    cResult[4] = I;
  } else {
    class I {
      constructor(voiceMessageAnimationState) {
        return voiceMessageAnimationState.voiceMessageAnimationState;
      }
    }
  }
  useVoiceMessagesUIStore(I);
  [r10052, dependencyMap] = react.useState(tmp6);
  _slicedToArray(react.useState(tmp6), 2);
  if (cResult[5] !== tmp6) {
    class I {
      constructor(voiceMessageAnimationState) {
        return voiceMessageAnimationState.voiceMessageAnimationState;
      }
    }
    const items1 = [tmp6];
    cResult[5] = tmp6;
    cResult[6] = tmp16;
    cResult[7] = items1;
    tmp15 = items1;
  } else {
    class I {
      constructor(voiceMessageAnimationState) {
        return voiceMessageAnimationState.voiceMessageAnimationState;
      }
    }
    tmp15 = cResult[7];
  }
  const effect = react.useEffect(tmp16, tmp15);
  if (stateFromStores != null) {
    class I {
      constructor(voiceMessageAnimationState) {
        return voiceMessageAnimationState.voiceMessageAnimationState;
      }
    }
  }
  if (undefined) {
    class I {
      constructor(voiceMessageAnimationState) {
        return voiceMessageAnimationState.voiceMessageAnimationState;
      }
    }
  } else {
    class I {
      constructor(voiceMessageAnimationState) {
        return voiceMessageAnimationState.voiceMessageAnimationState;
      }
    }
    return null;
  }
}) : ((channelId) => {
  let closure_2;
  let first;
  channelId = channelId.channelId;
  dependencyMap = undefined;
  const tmp = useVoiceMessagesUIStore((showRecordingOverlay) => showRecordingOverlay.showRecordingOverlay);
  let closure_1 = tmp;
  items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp2 = useVoiceMessagesUIStore((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  [first, dependencyMap] = react.useState(tmp);
  const items1 = [tmp];
  const effect = react.useEffect(() => {
    let closure_0;
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
  let tmp7 = null;
  if (!isForumLikeChannelResult) {
    let tmp8 = null;
    if (null != tmp2) {
      tmp8 = null;
      if (first) {
        const obj2 = { channelId, voiceMessageAnimationState: tmp2, exiting: !tmp };
        tmp8 = closure_13(closure_70, obj2);
      }
    }
    tmp7 = tmp8;
  }
  return tmp7;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default memo4Result;
export const VoiceMessageEllipse = memoResult;