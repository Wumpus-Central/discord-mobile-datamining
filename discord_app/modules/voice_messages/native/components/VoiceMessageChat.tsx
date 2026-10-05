// discord_app/modules/voice_messages/native/components/VoiceMessageChat.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import utils_TimeUtils from "../../../../utils/native/TimeUtils.tsx";
import VoiceMessagesUIStore from "../VoiceMessagesUIStore.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import VoiceMessageConstants from "../../VoiceMessageConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils_mod from "../../../../utils/PlatformUtils.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const ReanimatedRexport = ReanimatedRexport2;
let c1, flag, flag2, importDefault, set, set2, value;

let ActivityIndicator;
let c10;
let c9;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let str;
let unpackModuleId;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator } = react_native);
let useVoiceMessagesUIStore = VoiceMessagesUIStore.useVoiceMessagesUIStore;
({
  VOICE_RECORDING_MAX_DURATION_MILLIS: metroImportAll,
  VOICE_RECORDING_MAX_DURATION_OFFSET: c9,
  VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS: c10,
  VOICE_RECORDING_WARN_DURATION_MILLIS: unpackModuleId,
  WAVEFORM_WAVE_MAX_VALUE: closure_12,
} = VoiceMessageConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = ReanimatedRexport.createAnimatedComponent(ActivityIndicator);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  loading: { position: "absolute", left: 12 },
  dot: size,
  dotDismissed: { backgroundColor: "transparent" },
  waveformContainer: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  waveformBar: obj3,
  durationContainer: obj4,
  duration: obj5,
};
obj2 = {
  height: "100%",
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL,
  paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_PADDING_HORIZONTAL,
  gap: nativeDefault.modules.mobile.VOICE_MESSAGE_CHAT_GAP,
  borderRadius: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_BORDER_RADIUS,
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
};
createStyles = createStyles.createStyles;
size = {
  height: 6,
  width: 6,
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  borderRadius: nativeDefault.radii.round,
};
obj3 = {
  backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND,
  borderRadius: 1,
};
obj4 = {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
  marginLeft: nativeDefault.modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT,
};
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
const mobile = nativeDefault.modules.mobile;
obj5 = {
  lineHeight: PlatformUtils
    ? mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID
    : mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS,
  textAlignVertical: str,
};
PlatformUtils = PlatformUtils_mod;
str = undefined;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
let closure_16 = createStyles(obj);
const __initData = {
  code: "function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}",
};
const __initData2 = {
  code: "function VoiceMessageChatTsx2(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (value) => {
      let items;
      let require;
      let sharedValue1;
      let obj = require("react");
      const cResult = obj.c(11);
      value = value.value;
      require = value;
      const tmp3 = closure_16();
      let obj2 = require("ReanimatedRexport");
      const sharedValue = obj2.useSharedValue(0);
      let obj3 = require("ReanimatedRexport");
      const tmp = sharedValue1;
      sharedValue1 = obj3.useSharedValue(0);
      let obj4 = require("ReanimatedRexport");
      const sharedValue2 = obj4.useSharedValue(0);
      const fn = function o() {
        size = { height: sharedValue.get(), width: sharedValue1.get(), marginRight: sharedValue2.get() };
        return size;
      };
      fn.__closure = { animatedHeight: sharedValue, animatedWidth: sharedValue1, animatedMargin: sharedValue2 };
      fn.__workletHash = 8768145898720;
      fn.__initData = __initData;
      const obj5 = require("ReanimatedRexport");
      const animatedStyle = obj5.useAnimatedStyle(fn);
      if (cResult[0] === sharedValue) {
        let tmp8;
        let tmp9;
        if (cResult[1] === value) {
          tmp8 = cResult[2];
          tmp9 = cResult[3];
        }
        const effect = react.useEffect(tmp8, tmp9);
        if (cResult[4] === sharedValue2) {
          let tmp11;
          let tmp12;
          if (cResult[5] === sharedValue1) {
            tmp11 = cResult[6];
            tmp12 = cResult[7];
          }
          const effect1 = react.useEffect(tmp11, tmp12);
          if (cResult[8] === animatedStyle) {
            let tmp14;
            if (cResult[9] === tmp3.waveformBar) {
              tmp14 = cResult[10];
            }
            return tmp14;
          }
          const obj7 = { style: items };
          items = [tmp3.waveformBar, animatedStyle];
          const tmp17 = closure_13(sharedValue(tmp[7]).View, obj7);
          cResult[8] = animatedStyle;
          cResult[9] = tmp3.waveformBar;
          cResult[10] = tmp17;
          tmp14 = tmp17;
        }
        const fn3 = function u() {
          set = sharedValue1.set;
          const obj = timing;
          const obj2 = { duration: 300, easing: ReanimatedRexport2.Easing.linear };
          const result = set(obj.withTiming(2, obj2));
          set2 = sharedValue2.set;
          const obj3 = timing;
          const obj4 = { duration: 300, easing: ReanimatedRexport2.Easing.linear };
          set2(obj3.withTiming(4, obj4));
        };
        const items1 = [sharedValue1, sharedValue2];
        cResult[4] = sharedValue2;
        cResult[5] = sharedValue1;
        cResult[6] = fn3;
        cResult[7] = items1;
        tmp12 = items1;
        tmp11 = fn3;
      }
      const fn2 = function s() {
        const result = 20 * Math.min(1, (require / closure_12) * 1.25);
        set = sharedValue.set;
        const obj = spring;
        const result1 = set(obj.withSpring(Math.max(2, result)));
      };
      const items2 = [sharedValue, value];
      cResult[0] = sharedValue;
      cResult[1] = value;
      cResult[2] = fn2;
      cResult[3] = items2;
      tmp9 = items2;
      tmp8 = fn2;
    }
  : (value) => {
      let items2;
      value = value.value;
      const require = value;
      let sharedValue1;
      const tmp = closure_16();
      let obj = require("ReanimatedRexport");
      const sharedValue = obj.useSharedValue(0);
      let obj2 = require("ReanimatedRexport");
      sharedValue1 = obj2.useSharedValue(0);
      let obj3 = require("ReanimatedRexport");
      const sharedValue2 = obj3.useSharedValue(0);
      let obj4 = require("ReanimatedRexport");
      const fn = function o() {
        size = { height: sharedValue.get(), width: sharedValue1.get(), marginRight: sharedValue2.get() };
        return size;
      };
      fn.__closure = { animatedHeight: sharedValue, animatedWidth: sharedValue1, animatedMargin: sharedValue2 };
      fn.__workletHash = 15883572612899;
      fn.__initData = __initData2;
      const items = [sharedValue, value];
      const animatedStyle = obj4.useAnimatedStyle(fn);
      const effect = react.useEffect(() => {
        const result = 20 * Math.min(1, (require / closure_12) * 1.25);
        set = sharedValue.set;
        const obj = spring;
        const result1 = set(obj.withSpring(Math.max(2, result)));
      }, items);
      const items1 = [sharedValue1, sharedValue2];
      const effect1 = react.useEffect(() => {
        set = sharedValue1.set;
        const obj = timing;
        const obj2 = { duration: 300, easing: ReanimatedRexport2.Easing.linear };
        const result = set(obj.withTiming(2, obj2));
        set2 = sharedValue2.set;
        const obj3 = timing;
        const obj4 = { duration: 300, easing: ReanimatedRexport2.Easing.linear };
        set2(obj3.withTiming(4, obj4));
      }, items1);
      const obj5 = { style: items2 };
      items2 = [tmp.waveformBar, animatedStyle];
      return closure_13(sharedValue(sharedValue1[7]).View, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let require;
      let tmp6;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(17);
      const tmp2 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(waveformVersion) {
          return waveformVersion.waveformVersion;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      useVoiceMessagesUIStore(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function s(waveform) {
          return waveform.waveform;
        };
        cResult[1] = fn2;
        tmp6 = fn2;
      } else {
        tmp6 = cResult[1];
      }
      const tmp4Result = useVoiceMessagesUIStore(tmp6);
      [tmp8, require] = react.useState(0);
      _slicedToArray(react.useState(0), 2);
      if (cResult[2] === tmp8) {
        if (cResult[3] === tmp2.waveformContainer) {
          let tmp9;
          let tmp10;
          let tmp11;
          let tmp12;
          if (cResult[4] === tmp4Result) {
            tmp9 = cResult[5];
            tmp10 = cResult[6];
            tmp11 = cResult[7];
            tmp12 = cResult[8];
          }
          if (cResult[12] === tmp9) {
            if (cResult[13] === tmp10) {
              if (cResult[14] === tmp11) {
                let tmp18;
                if (cResult[15] === tmp12) {
                  tmp18 = cResult[16];
                }
                return tmp18;
              }
            }
          }
          const obj2 = { style: tmp10, onLayout: tmp11, children: tmp12 };
          const tmp20 = closure_13(tmp9, obj2);
          cResult[12] = tmp9;
          cResult[13] = tmp10;
          cResult[14] = tmp11;
          cResult[15] = tmp12;
          cResult[16] = tmp20;
          tmp18 = tmp20;
        }
      }
      const substr = tmp4Result.slice(-tmp8);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor(nativeEvent) {
            _require(Math.round(nativeEvent.nativeEvent.layout.width / 6) + 2);
          }
        }
        cResult[10] = D;
      } else {
        class D {
          constructor(nativeEvent) {
            _require(Math.round(nativeEvent.nativeEvent.layout.width / 6) + 2);
          }
        }
      }
      const waveformContainer = tmp2.waveformContainer;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            const tmp = _slicedToArray(arg0, 2);
            const obj = { value: tmp[0] };
            return closure_1_13(closure_1_19, obj, tmp[1]);
          }
        }
        cResult[11] = M;
      } else {
        class M {
          constructor(arg0) {
            const tmp = _slicedToArray(arg0, 2);
            const obj = { value: tmp[0] };
            return closure_1_13(closure_1_19, obj, tmp[1]);
          }
        }
      }
      const mapped = substr.map(M);
      cResult[2] = tmp8;
      cResult[3] = tmp2.waveformContainer;
      cResult[4] = substr;
      cResult[5] = closure_5;
      cResult[6] = waveformContainer;
      cResult[7] = D;
      cResult[8] = mapped;
      cResult[9] = substr;
      tmp12 = mapped;
      tmp11 = D;
      tmp10 = waveformContainer;
      tmp9 = closure_5;
    }
  : () => {
      const tmp = closure_16();
      const tmp2 = useVoiceMessagesUIStore((waveformVersion) => waveformVersion.waveformVersion);
      const arr = useVoiceMessagesUIStore((waveform) => waveform.waveform);
      const tmp3 = _slicedToArray(react.useState(0), 2);
      let closure_0 = tmp3[1];
      const substr = arr.slice(-tmp3[0]);
      const obj = {
        style: tmp.waveformContainer,
        onLayout: react.useCallback((nativeEvent) => {
          closure_0(Math.round(nativeEvent.nativeEvent.layout.width / 6) + 2);
        }, []),
        children: substr.map((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          return closure_1_13(closure_1_19, { value }, tmp2);
        }),
      };
      return closure_13(closure_5, obj);
    };
const constants = { WARN: 0, [0]: "WARN", REALLY_WARN: 1, [1]: "REALLY_WARN", ENDED: 2, [2]: "ENDED" };
const __initData3 = {
  code: "function VoiceMessageChatTsx3(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}",
};
const __initData4 = {
  code: "function VoiceMessageChatTsx4(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (animationValue) => {
      let closure_1;
      let closure_4;
      let first;
      let first1;
      let items3;
      let tmp11;
      let tmp22;
      const tmp = animationValue;
      let obj = animationValue(576);
      const cResult = obj.c(28);
      animationValue = animationValue.animationValue;
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s(startTimeMillis) {
          return startTimeMillis.startTimeMillis;
        };
        let num = 0;
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmp7 = useVoiceMessagesUIStore(first);
      importDefault = tmp7;
      if (cResult[1] !== tmp7) {
        class T {
          constructor() {
            let num = 0;
            if (null != closure_1) {
              const _Date = Date;
              num = Date.now() - tmp;
            }
            return num;
          }
        }
        let num2 = 1;
        cResult[1] = tmp7;
        cResult[2] = T;
      } else {
        class T {
          constructor() {
            let num = 0;
            if (null != closure_1) {
              const _Date = Date;
              num = Date.now() - tmp;
            }
            return num;
          }
        }
      }
      [tmp11, dependencyMap] = first1(react.useState(T), 2);
      const tmp10 = first1(react.useState(T), 2);
      const tmp12 = first1(react.useState(undefined), 2);
      first1 = tmp12[0];
      react = tmp12[1];
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor(savedVoiceMessageUploadData) {
            return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
          }
        }
        cResult[3] = O;
      } else {
        class O {
          constructor(savedVoiceMessageUploadData) {
            return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
          }
        }
      }
      const tmp6Result = useVoiceMessagesUIStore(O);
      let closure_5 = tmp6Result;
      const tmpResult = tmp(4580);
      const token = tmpResult.useToken(nativeDefault.modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
      if (cResult[4] === tmp6Result) {
        let tmp24;
        class O {
          constructor(savedVoiceMessageUploadData) {
            return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
          }
        }
        const effect = obj2.useEffect(G, items3);
        const result = tmp11 / 1000;
        if (cResult[8] !== result) {
          class O {
            constructor(savedVoiceMessageUploadData) {
              return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
            }
          }
          const timeFormat = obj4.getTimeFormat(result, { padMinutes: false });
          cResult[8] = result;
          cResult[9] = timeFormat;
        } else {
          class O {
            constructor(savedVoiceMessageUploadData) {
              return null != savedVoiceMessageUploadData.savedVoiceMessageUploadData;
            }
          }
        }
        [tmp22, AccessibilityStore] = first1(react.useState(false), 2);
        first1(react.useState(false), 2);
        if (cResult[10] !== first1) {
          class F {
            constructor() {
              tmp = closure_3;
              if (null != closure_3) {
                if (tmp !== closure_1_21.ENDED) {
                  tmp7 = closure_6;
                  num = 1000;
                  if (!closure_6.useReducedMotion) {
                    num2 = 250;
                    if (tmp === tmp4.WARN) {
                      num2 = 500;
                    }
                    num = num2;
                  }
                  c1 = num;
                  flash = function flash() {
                    AccessibilityStore(f152617);
                    const timeout = setTimeout(flash, num);
                  };
                  tmp8 = closure_6;
                  tmp9 = closure_6((arg0) => !arg0);
                  tmp10 = globalThis;
                  _setTimeout = setTimeout;
                  closure_0 = setTimeout(flash, num);
                  return () => {
                    clearTimeout(closure_0);
                  };
                } else {
                  tmp5 = closure_6;
                  flag2 = true;
                  tmp6 = closure_6(true);
                }
              } else {
                tmp2 = closure_6;
                flag = false;
                tmp3 = closure_6(false);
              }
              return;
            }
          }
          const items = [first1];
          cResult[10] = first1;
          cResult[11] = F;
          cResult[12] = items;
          tmp24 = items;
        } else {
          class F {
            constructor() {
              tmp = closure_3;
              if (null != closure_3) {
                if (tmp !== closure_1_21.ENDED) {
                  tmp7 = closure_6;
                  num = 1000;
                  if (!closure_6.useReducedMotion) {
                    num2 = 250;
                    if (tmp === tmp4.WARN) {
                      num2 = 500;
                    }
                    num = num2;
                  }
                  c1 = num;
                  flash = function flash() {
                    AccessibilityStore(f152617);
                    const timeout = setTimeout(flash, num);
                  };
                  tmp8 = closure_6;
                  tmp9 = closure_6((arg0) => !arg0);
                  tmp10 = globalThis;
                  _setTimeout = setTimeout;
                  closure_0 = setTimeout(flash, num);
                  return () => {
                    clearTimeout(closure_0);
                  };
                } else {
                  tmp5 = closure_6;
                  flag2 = true;
                  tmp6 = closure_6(true);
                }
              } else {
                tmp2 = closure_6;
                flag = false;
                tmp3 = closure_6(false);
              }
              return;
            }
          }
          tmp24 = cResult[12];
        }
        const effect1 = obj2.useEffect(F, tmp24);
        const tmpResult2 = tmp(4612);
        class Z {
          constructor() {
            const obj = { opacity: animationValue.get() };
            return obj;
          }
        }
        const obj3 = { animationValue };
        Z.__closure = obj3;
        Z.__workletHash = 9127206038844;
        Z.__initData = __initData3;
        const animatedStyle = tmpResult2.useAnimatedStyle(Z);
        if (cResult[13] === animatedStyle) {
          class F {
            constructor() {
              tmp = closure_3;
              if (null != closure_3) {
                if (tmp !== closure_1_21.ENDED) {
                  tmp7 = closure_6;
                  num = 1000;
                  if (!closure_6.useReducedMotion) {
                    num2 = 250;
                    if (tmp === tmp4.WARN) {
                      num2 = 500;
                    }
                    num = num2;
                  }
                  c1 = num;
                  flash = function flash() {
                    AccessibilityStore(f152617);
                    const timeout = setTimeout(flash, num);
                  };
                  tmp8 = closure_6;
                  tmp9 = closure_6((arg0) => !arg0);
                  tmp10 = globalThis;
                  _setTimeout = setTimeout;
                  closure_0 = setTimeout(flash, num);
                  return () => {
                    clearTimeout(closure_0);
                  };
                } else {
                  tmp5 = closure_6;
                  flag2 = true;
                  tmp6 = closure_6(true);
                }
              } else {
                tmp2 = closure_6;
                flag = false;
                tmp3 = closure_6(false);
              }
              return;
            }
          }
          if (cResult[16] === tmp4.dot) {
            class F {
              constructor() {
                tmp = closure_3;
                if (null != closure_3) {
                  if (tmp !== closure_1_21.ENDED) {
                    tmp7 = closure_6;
                    num = 1000;
                    if (!closure_6.useReducedMotion) {
                      num2 = 250;
                      if (tmp === tmp4.WARN) {
                        num2 = 500;
                      }
                      num = num2;
                    }
                    c1 = num;
                    flash = function flash() {
                      AccessibilityStore(f152617);
                      const timeout = setTimeout(flash, num);
                    };
                    tmp8 = closure_6;
                    tmp9 = closure_6((arg0) => !arg0);
                    tmp10 = globalThis;
                    _setTimeout = setTimeout;
                    closure_0 = setTimeout(flash, num);
                    return () => {
                      clearTimeout(closure_0);
                    };
                  } else {
                    tmp5 = closure_6;
                    flag2 = true;
                    tmp6 = closure_6(true);
                  }
                } else {
                  tmp2 = closure_6;
                  flag = false;
                  tmp3 = closure_6(false);
                }
                return;
              }
            }
            if (tmp22) {
              class F {
                constructor() {
                  tmp = closure_3;
                  if (null != closure_3) {
                    if (tmp !== closure_1_21.ENDED) {
                      tmp7 = closure_6;
                      num = 1000;
                      if (!closure_6.useReducedMotion) {
                        num2 = 250;
                        if (tmp === tmp4.WARN) {
                          num2 = 500;
                        }
                        num = num2;
                      }
                      c1 = num;
                      flash = function flash() {
                        AccessibilityStore(f152617);
                        const timeout = setTimeout(flash, num);
                      };
                      tmp8 = closure_6;
                      tmp9 = closure_6((arg0) => !arg0);
                      tmp10 = globalThis;
                      _setTimeout = setTimeout;
                      closure_0 = setTimeout(flash, num);
                      return () => {
                        clearTimeout(closure_0);
                      };
                    } else {
                      tmp5 = closure_6;
                      flag2 = true;
                      tmp6 = closure_6(true);
                    }
                  } else {
                    tmp2 = closure_6;
                    flag = false;
                    tmp3 = closure_6(false);
                  }
                  return;
                }
              }
            }
            if (cResult[19] === tmp19) {
              class F {
                constructor() {
                  tmp = closure_3;
                  if (null != closure_3) {
                    if (tmp !== closure_1_21.ENDED) {
                      tmp7 = closure_6;
                      num = 1000;
                      if (!closure_6.useReducedMotion) {
                        num2 = 250;
                        if (tmp === tmp4.WARN) {
                          num2 = 500;
                        }
                        num = num2;
                      }
                      c1 = num;
                      flash = function flash() {
                        AccessibilityStore(f152617);
                        const timeout = setTimeout(flash, num);
                      };
                      tmp8 = closure_6;
                      tmp9 = closure_6((arg0) => !arg0);
                      tmp10 = globalThis;
                      _setTimeout = setTimeout;
                      closure_0 = setTimeout(flash, num);
                      return () => {
                        clearTimeout(closure_0);
                      };
                    } else {
                      tmp5 = closure_6;
                      flag2 = true;
                      tmp6 = closure_6(true);
                    }
                  } else {
                    tmp2 = closure_6;
                    flag = false;
                    tmp3 = closure_6(false);
                  }
                  return;
                }
              }
            }
            const obj5 = {
              style: tmp4.duration,
              variant: token,
              color: "text-default",
              tabularNumbers: true,
              children: tmp19,
            };
            const tmp38 = closure_13(tmp(4886).Text, obj5);
            class Z {
              constructor() {
                const obj = { opacity: animationValue.get() };
                return obj;
              }
            }
            cResult[20] = token;
            cResult[21] = tmp4.duration;
            cResult[22] = "text-default";
            cResult[23] = tmp38;
          }
          const items1 = [,];
          items1[0] = tmp4.dot;
          items1[1] = !(null != tmp7 && !tmp6Result) && tmp4.dotDismissed;
          class Z {
            constructor() {
              const obj = { opacity: animationValue.get() };
              return obj;
            }
          }
          cResult[16] = tmp4.dot;
          cResult[17] = !(null != tmp7 && !tmp6Result) && tmp4.dotDismissed;
          cResult[18] = tmp35;
        }
        const items2 = [tmp4.durationContainer, animatedStyle];
        cResult[13] = animatedStyle;
        cResult[14] = tmp4.durationContainer;
        cResult[15] = items2;
      }
      class G {
        constructor() {
          tmp = closure_5;
          if (tmp) {
            tmp3 = closure_2;
            tmp4 = closure_1_8;
            tmp5 = closure_1_9;
            tmp6 = closure_2(closure_1_8 + closure_1_9);
            tmp7 = closure_4;
            tmp8 = closure_1_21;
            tmp9 = closure_4(closure_1_21.ENDED);
            return;
          } else {
            tmp2 = globalThis;
            _setInterval = setInterval;
            num = 100;
            closure_0 = setInterval(() => {
              if (null != closure_1_1) {
                const _Date = Date;
                const diff = Date.now() - tmp;
                closure_1_2(diff);
                if (diff > closure_2_10) {
                  closure_1_4(constants.REALLY_WARN);
                } else if (diff > closure_2_11) {
                  closure_1_4(constants.WARN);
                }
              }
            }, 100);
            return () => {
              clearInterval(closure_0);
            };
          }
        }
      }
      items3 = [tmp7, tmp6Result];
      cResult[4] = tmp6Result;
      cResult[5] = tmp7;
      cResult[6] = G;
      cResult[7] = items3;
    }
  : (animationValue) => {
      let closure_1;
      let closure_7;
      let items3;
      let items5;
      let str;
      animationValue = animationValue.animationValue;
      let closure_3;
      let first1;
      useVoiceMessagesUIStore = undefined;
      const tmp = closure_16();
      const tmp2 = useVoiceMessagesUIStore((startTimeMillis) => startTimeMillis.startTimeMillis);
      importDefault = tmp2;
      const tmp3 = closure_3(
        first1.useState(() => {
          let num = 0;
          if (null != closure_1) {
            const _Date = Date;
            num = Date.now() - tmp;
          }
          return num;
        }),
        2,
      );
      const first = tmp3[0];
      closure_3 = tmp3[1];
      const tmp5 = closure_3(first1.useState(undefined), 2);
      first1 = tmp5[0];
      let closure_5 = tmp5[1];
      const tmp7 = useVoiceMessagesUIStore(
        (savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData,
      );
      const useReducedMotion = tmp7;
      let obj = animationValue(first[15]);
      const items = [tmp2, tmp7];
      const token = obj.useToken(require("native").modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
      const effect = first1.useEffect(() => {
        let closure_0;
        if (closure_6) {
          closure_3(closure_1_8 + closure_1_9);
          closure_5(constants.ENDED);
        } else {
          const _setInterval = setInterval;
          const interval = setInterval(() => {
            if (null != closure_1_1) {
              const _Date = Date;
              const diff = Date.now() - tmp;
              closure_1_3(diff);
              if (diff > closure_2_10) {
                closure_1_5(constants.REALLY_WARN);
              } else if (diff > closure_2_11) {
                closure_1_5(constants.WARN);
              }
            }
          }, 100);
          return () => {
            clearInterval(closure_0);
          };
        }
      }, items);
      const items1 = [first];
      const memo = first1.useMemo(() => {
        const obj = utils_TimeUtils;
        return obj.getTimeFormat(first / 1000, { padMinutes: false });
      }, items1);
      const tmp13 = closure_3(first1.useState(false), 2);
      useVoiceMessagesUIStore = tmp13[1];
      const items2 = [first1];
      const first2 = tmp13[0];
      const effect1 = first1.useEffect(() => {
        let closure_0;
        const f152618 = (arg0) => !arg0;
        if (null != first1) {
          if (first1 !== constants.ENDED) {
            let num = 1000;
            if (!useReducedMotion.useReducedMotion) {
              let num2 = 250;
              if (first1 === tmp4.WARN) {
                num2 = 500;
              }
              num = num2;
            }
            function flash() {
              closure_7(f152618);
              const timeout = setTimeout(flash, num);
            }
            closure_7(f152618);
            const _setTimeout = setTimeout;
            let timeout = setTimeout(flash, num);
            return () => {
              clearTimeout(closure_0);
            };
          } else {
            closure_7(true);
          }
        } else {
          closure_7(false);
        }
      }, items2);
      const obj2 = animationValue(first[7]);
      const tmp8 = animationValue;
      const tmp9 = first;
      class W {
        constructor() {
          const obj = { opacity: animationValue.get() };
          return obj;
        }
      }
      W.__closure = { animationValue };
      W.__workletHash = 16028967821691;
      W.__initData = __initData4;
      const animatedStyle = obj2.useAnimatedStyle(W);
      const obj3 = { style: items3, children: items5 };
      items3 = [tmp.durationContainer, animatedStyle];
      const items4 = [tmp.dot];
      let tmp20 = null != tmp2;
      const View = require("ReanimatedRexport").View;
      const tmp19 = closure_5;
      if (tmp20) {
        tmp20 = !tmp7;
      }
      items4[1] = !tmp20 && tmp.dotDismissed;
      items5 = [closure_13(tmp19, { style: items4 })];
      const obj4 = { style: tmp.duration, variant: token, color: str, tabularNumbers: true, children: memo };
      str = "text-default";
      const Text = tmp8(tmp9[17]).Text;
      if (first2) {
        str = "text-feedback-critical";
      }
      items5[1] = closure_13(Text, obj4);
      return closure_14(View, obj3);
    };
const __initData5 = {
  code: "function VoiceMessageChatTsx5(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}",
};
const __initData6 = {
  code: "function VoiceMessageChatTsx6(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}",
};
const __initData7 = {
  code: 'function VoiceMessageChatTsx7(){const{backgroundColor}=this.__closure;return{width:"100%",...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};}',
};
const __initData8 = {
  code: "function VoiceMessageChatTsx8(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}",
};
const __initData9 = {
  code: "function VoiceMessageChatTsx9(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}",
};
const __initData10 = {
  code: "function VoiceMessageChatTsx10(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}",
};
const __initData11 = {
  code: "function VoiceMessageChatTsx11(){const{backgroundColor}=this.__closure;return{width:'100%',...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};}",
};
const __initData12 = {
  code: "function VoiceMessageChatTsx12(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}",
};
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (isRecording) => {
        let backgroundColor;
        let items;
        let items1;
        let leftAccessory;
        let rightAccessory;
        let sharedValue1;
        let tmp = isRecording;
        let obj = isRecording(backgroundColor[12]);
        const cResult = obj.c(21);
        isRecording = isRecording.isRecording;
        const initialAnimation = isRecording.initialAnimation;
        backgroundColor = isRecording.backgroundColor;
        ({ leftAccessory, rightAccessory } = isRecording);
        const tmp4 = closure_16();
        let obj2 = isRecording(backgroundColor[15]);
        const token = obj2.useToken(
          initialAnimation(backgroundColor[9]).colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR,
        );
        let obj3 = isRecording(backgroundColor[7]);
        const sharedValue = obj3.useSharedValue(0);
        const tmp5 = initialAnimation;
        if (cResult[0] === isRecording) {
          let tmp8;
          let tmp9;
          if (cResult[1] === sharedValue) {
            tmp8 = cResult[2];
            tmp9 = cResult[3];
          }
          const effect = sharedValue1.useEffect(tmp8, tmp9);
          const tmpResult = tmp(backgroundColor[7]);
          sharedValue1 = tmpResult.useSharedValue(0);
          const tmpResult4 = tmp(backgroundColor[7]);
          class S {
            constructor() {
              const tmp = 1 === initialAnimation.get() && isRecording;
              return tmp;
            }
          }
          let obj4 = { initialAnimation, isRecording };
          S.__closure = obj4;
          S.__workletHash = 680927285727;
          S.__initData = __initData5;
          class C {
            constructor(arg0, arg1) {
              const tmp = arg0 && arg0 !== arg1;
              if (tmp) {
                set = sharedValue1.set;
                const obj = { easing: ReanimatedRexport2.Easing.quad, duration: 200 };
                const withTiming = timing.withTiming;
                timing;
                const result = set(withTiming(1, obj));
                const result1 = sharedValue.set(0);
              }
            }
          }
          const useAnimatedReaction = tmpResult4.useAnimatedReaction;
          C.__closure = {
            animationValue: sharedValue1,
            withTiming: tmp(backgroundColor[14]).withTiming,
            Easing: tmp(backgroundColor[7]).Easing,
            loadingOpacity: sharedValue,
          };
          C.__workletHash = 13113287252454;
          C.__initData = __initData6;
          const obj5 = {
            animationValue: sharedValue1,
            withTiming: tmp(backgroundColor[14]).withTiming,
            Easing: tmp(backgroundColor[7]).Easing,
            loadingOpacity: sharedValue,
          };
          const animatedReaction = useAnimatedReaction(S, C);
          const fn2 = function w() {
            let obj3;
            if (null != backgroundColor) {
              obj3 = { backgroundColor: backgroundColor.get() };
              const obj2 = { backgroundColor: backgroundColor.get() };
            } else {
              obj3 = {};
            }
            const obj4 = { width: "100%" };
            const merged = Object.assign(obj3);
            return obj4;
          };
          const obj6 = { backgroundColor };
          fn2.__closure = obj6;
          fn2.__workletHash = 722511507624;
          fn2.__initData = __initData7;
          const tmpResult5 = tmp(backgroundColor[7]);
          const animatedStyle = tmpResult5.useAnimatedStyle(fn2);
          const tmpResult6 = tmp(backgroundColor[7]);
          class M {
            constructor() {
              const obj = { opacity: sharedValue.get() };
              return obj;
            }
          }
          const obj7 = { loadingOpacity: sharedValue };
          M.__closure = obj7;
          M.__workletHash = 6316286224887;
          M.__initData = __initData8;
          const animatedStyle1 = tmpResult6.useAnimatedStyle(M);
          if (cResult[4] === animatedStyle) {
            let tmp21;
            if (cResult[5] === tmp4.container) {
              tmp21 = cResult[6];
            }
            if (cResult[7] === animatedStyle1) {
              if (cResult[8] === isRecording) {
                if (cResult[9] === token) {
                  let tmp22;
                  let tmp26;
                  let tmp31;
                  if (cResult[10] === tmp4.loading) {
                    tmp22 = cResult[11];
                  }
                  if (cResult[12] !== sharedValue1) {
                    const obj8 = { animationValue: sharedValue1 };
                    const tmp29 = closure_13(closure_24, obj8);
                    cResult[12] = sharedValue1;
                    class S {
                      constructor() {
                        const tmp = 1 === initialAnimation.get() && isRecording;
                        return tmp;
                      }
                    }
                    cResult[13] = tmp29;
                    tmp26 = tmp29;
                  } else {
                    tmp26 = cResult[13];
                  }
                  const _Symbol = Symbol;
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp34 = closure_13(closure_20, {});
                    cResult[14] = tmp34;
                    tmp31 = tmp34;
                  } else {
                    tmp31 = cResult[14];
                  }
                  class S {
                    constructor() {
                      const tmp = 1 === initialAnimation.get() && isRecording;
                      return tmp;
                    }
                  }
                  const obj9 = { style: tmp21, children: items };
                  items = [tmp22, leftAccessory, tmp26, tmp31];
                  class C {
                    constructor(arg0, arg1) {
                      const tmp = arg0 && arg0 !== arg1;
                      if (tmp) {
                        set = sharedValue1.set;
                        const obj = { easing: ReanimatedRexport2.Easing.quad, duration: 200 };
                        const withTiming = timing.withTiming;
                        timing;
                        const result = set(withTiming(1, obj));
                        const result1 = sharedValue.set(0);
                      }
                    }
                  }
                  cResult[15] = leftAccessory;
                  cResult[16] = rightAccessory;
                  cResult[17] = tmp21;
                  cResult[18] = tmp22;
                  cResult[19] = tmp26;
                  cResult[20] = closure_14(tmp5(backgroundColor[7]).View, obj9);
                  const tmp37 = closure_14(tmp5(backgroundColor[7]).View, obj9);
                }
              }
            }
            let tmp23 = null;
            if (!isRecording) {
              const obj10 = { style: items1, color: null, size: "small" };
              items1 = [tmp4.loading, animatedStyle1];
              class S {
                constructor() {
                  const tmp = 1 === initialAnimation.get() && isRecording;
                  return tmp;
                }
              }
              tmp23 = closure_13(closure_15, obj10);
            }
            cResult[7] = animatedStyle1;
            class S {
              constructor() {
                const tmp = 1 === initialAnimation.get() && isRecording;
                return tmp;
              }
            }
            cResult[9] = token;
            cResult[10] = tmp4.loading;
            cResult[11] = tmp23;
            tmp22 = tmp23;
          }
          const items2 = [tmp4.container, animatedStyle];
          cResult[4] = animatedStyle;
          cResult[5] = tmp4.container;
          cResult[6] = items2;
          tmp21 = items2;
        }
        const fn = function o() {
          let closure_0;
          let timeout;
          if (!timeout) {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              const obj = isRecording(backgroundColor[14]);
              const obj2 = { easing: isRecording(backgroundColor[7]).Easing.quad, duration: 200 };
              const result = set(obj.withTiming(1, obj2));
            }, 1000);
            return () => {
              clearTimeout(closure_0);
            };
          }
        };
        const items3 = [sharedValue, isRecording];
        cResult[0] = isRecording;
        cResult[1] = sharedValue;
        cResult[2] = fn;
        cResult[3] = items3;
        tmp9 = items3;
        tmp8 = fn;
      }
    : (isRecording) => {
        let items1;
        let items2;
        let items3;
        let leftAccessory;
        let rightAccessory;
        isRecording = isRecording.isRecording;
        const initialAnimation = isRecording.initialAnimation;
        const backgroundColor = isRecording.backgroundColor;
        let sharedValue1;
        ({ leftAccessory, rightAccessory } = isRecording);
        let tmp = closure_16();
        let obj = isRecording(backgroundColor[15]);
        const token = obj.useToken(
          initialAnimation(backgroundColor[9]).colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR,
        );
        let obj2 = isRecording(backgroundColor[7]);
        const sharedValue = obj2.useSharedValue(0);
        const items = [sharedValue, isRecording];
        const effect = sharedValue1.useEffect(() => {
          let closure_0;
          let timeout;
          if (!timeout) {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              const obj = isRecording(backgroundColor[14]);
              const obj2 = { easing: isRecording(backgroundColor[7]).Easing.quad, duration: 200 };
              const result = set(obj.withTiming(1, obj2));
            }, 1000);
            return () => {
              clearTimeout(closure_0);
            };
          }
        }, items);
        let obj3 = isRecording(backgroundColor[7]);
        sharedValue1 = obj3.useSharedValue(0);
        let obj4 = isRecording(backgroundColor[7]);
        const fn = function f() {
          const tmp = 1 === initialAnimation.get() && isRecording;
          return tmp;
        };
        fn.__closure = { initialAnimation, isRecording };
        fn.__workletHash = 12092760593619;
        fn.__initData = __initData9;
        class E {
          constructor(arg0, arg1) {
            const tmp = arg0 && arg0 !== arg1;
            if (tmp) {
              set = sharedValue1.set;
              const obj = { easing: ReanimatedRexport2.Easing.quad, duration: 200 };
              const withTiming = timing.withTiming;
              timing;
              const result = set(withTiming(1, obj));
              const result1 = sharedValue.set(0);
            }
          }
        }
        E.__closure = {
          animationValue: sharedValue1,
          withTiming: isRecording(backgroundColor[14]).withTiming,
          Easing: isRecording(backgroundColor[7]).Easing,
          loadingOpacity: sharedValue,
        };
        E.__workletHash = 15501818738769;
        E.__initData = __initData10;
        ({
          animationValue: sharedValue1,
          withTiming: isRecording(backgroundColor[14]).withTiming,
          Easing: isRecording(backgroundColor[7]).Easing,
          loadingOpacity: sharedValue,
        });
        const animatedReaction = obj4.useAnimatedReaction(fn, E);
        const obj6 = isRecording(backgroundColor[7]);
        class R {
          constructor() {
            let obj3;
            if (null != backgroundColor) {
              obj3 = { backgroundColor: backgroundColor.get() };
              const obj2 = { backgroundColor: backgroundColor.get() };
            } else {
              obj3 = {};
            }
            const obj4 = { width: "100%" };
            const merged = Object.assign(obj3);
            return obj4;
          }
        }
        R.__closure = { backgroundColor };
        R.__workletHash = 8394038686335;
        R.__initData = __initData11;
        const animatedStyle = obj6.useAnimatedStyle(R);
        const obj7 = isRecording(backgroundColor[7]);
        class C {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        C.__closure = { loadingOpacity: sharedValue };
        C.__workletHash = 3207421839660;
        C.__initData = __initData12;
        const animatedStyle1 = obj7.useAnimatedStyle(C);
        const obj8 = { style: items1, children: items3 };
        items1 = [tmp.container, animatedStyle];
        let tmp10 = null;
        const View = initialAnimation(backgroundColor[7]).View;
        if (!isRecording) {
          const obj9 = { style: items2, color: token, size: "small" };
          items2 = [tmp.loading, animatedStyle1];
          tmp10 = closure_13(closure_15, obj9);
        }
        items3 = [
          tmp10,
          leftAccessory,
          closure_13(closure_24, { animationValue: sharedValue1 }),
          closure_13(closure_20, {}),
          rightAccessory,
        ];
        return closure_14(View, obj8);
      },
);
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageChat.tsx");

export default memoResult;
