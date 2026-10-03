// === Module 12313: VoiceMessageChat ===

// Module 12313 (VoiceMessageChat)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import spring from "spring" /* 5597 */;
import utils_TimeUtils from "utils/TimeUtils" /* 7302 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator } = get_ActivityIndicator);
let useVoiceMessagesUIStore = fn(11574).useVoiceMessagesUIStore;
const VoiceMessageConstants = fn(11575);
({ VOICE_RECORDING_MAX_DURATION_MILLIS: closure_8, VOICE_RECORDING_MAX_DURATION_OFFSET: closure_9, VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS: c10, VOICE_RECORDING_WARN_DURATION_MILLIS: closure_11, WAVEFORM_WAVE_MAX_VALUE: closure_12 } = VoiceMessageConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = ReanimatedRexport.createAnimatedComponent(ActivityIndicator);
const createStyles = fn(4890);
let obj = { container: { height: "100%", flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_PADDING_HORIZONTAL, gap: nativeDefault.modules.mobile.VOICE_MESSAGE_CHAT_GAP, borderRadius: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_BORDER_RADIUS, backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE }, loading: { position: "absolute", left: 12 }, dot: null, dotDismissed: null, waveformContainer: null, waveformBar: null, durationContainer: null, duration: null };
let size = { height: 6, width: 6, backgroundColor: nativeDefault.unsafe_rawColors.RED_400, borderRadius: nativeDefault.radii.round };
obj.dot = size;
obj.dotDismissed = { backgroundColor: "transparent" };
obj.waveformContainer = { flex: 1, height: "100%", overflow: "hidden", justifyContent: "flex-end", flexDirection: "row", alignItems: "center" };
let obj2 = { height: "100%", flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_PADDING_HORIZONTAL, gap: nativeDefault.modules.mobile.VOICE_MESSAGE_CHAT_GAP, borderRadius: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_BORDER_RADIUS, backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj.waveformBar = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND, borderRadius: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND, borderRadius: 1 };
obj.durationContainer = { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: nativeDefault.modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT };
let PlatformUtils = fn(1369);
PlatformUtils = PlatformUtils.isAndroid();
const mobile = nativeDefault.modules.mobile;
let obj6 = { lineHeight: PlatformUtils ? mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID : mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS, textAlignVertical: null };
PlatformUtils = fn(1369);
let str;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
obj6.textAlignVertical = str;
obj.duration = obj6;
let closure_16 = createStyles.createStyles(obj);
const __initData = { code: "function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}" };
const __initData2 = { code: "function VoiceMessageChatTsx2(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}" };
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((value) => {
  const cResult = require("c").c(11);
  value = value.value;
  require = value;
  const tmp3 = closure_16();
  let obj = require("c");
  const tmp = sharedValue1;
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
  const obj4 = require("ReanimatedRexport");
  const fn = function o() {
    const size = { height: sharedValue.get(), width: sharedValue1.get(), marginRight: sharedValue2.get() };
    return size;
  };
  fn.__closure = { animatedHeight: sharedValue, animatedWidth: sharedValue1, animatedMargin: sharedValue2 };
  fn.__workletHash = 8768145898720;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === value) {
      let tmp8 = cResult[2];
      let tmp9 = cResult[3];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    if (cResult[4] === sharedValue2) {
      if (cResult[5] === sharedValue1) {
        let tmp11 = cResult[6];
        let tmp12 = cResult[7];
      }
      const effect1 = noop.useEffect(tmp11, tmp12);
      if (cResult[8] === animatedStyle) {
        if (cResult[9] === tmp3.waveformBar) {
          let tmp14 = cResult[10];
        }
        return tmp14;
      }
      const obj7 = { style: null };
      const items = [tmp3.waveformBar, animatedStyle];
      obj7.style = items;
      const tmp17 = closure_13(sharedValue(tmp[7]).View, obj7);
      cResult[8] = animatedStyle;
      cResult[9] = tmp3.waveformBar;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    const fn3 = function u() {
      const obj = timing;
      const result = sharedValue1.set(obj.withTiming(2, { duration: 300, easing: ReanimatedRexport2.Easing.linear }));
      const obj2 = { duration: 300, easing: ReanimatedRexport2.Easing.linear };
      const obj3 = timing;
      const result1 = sharedValue2.set(obj3.withTiming(4, { duration: 300, easing: ReanimatedRexport2.Easing.linear }));
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
    const result = 20 * Math.min(1, value / __initData * 1.25);
    const result1 = sharedValue.set(spring.withSpring(Math.max(2, result)));
  };
  const items2 = [sharedValue, value];
  cResult[0] = sharedValue;
  cResult[1] = value;
  cResult[2] = fn2;
  cResult[3] = items2;
  tmp9 = items2;
  tmp8 = fn2;
  const obj5 = require("ReanimatedRexport");
}) : ((value) => {
  value = value.value;
  const require = value;
  let sharedValue1;
  const tmp = closure_16();
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  let obj = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  const fn = function o() {
    const size = { height: sharedValue.get(), width: sharedValue1.get(), marginRight: sharedValue2.get() };
    return size;
  };
  fn.__closure = { animatedHeight: sharedValue, animatedWidth: sharedValue1, animatedMargin: sharedValue2 };
  fn.__workletHash = 15883572612899;
  fn.__initData = __initData2;
  const items = [sharedValue, value];
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    const result = 20 * Math.min(1, value / __initData * 1.25);
    const result1 = sharedValue.set(spring.withSpring(Math.max(2, result)));
  }, items);
  const items1 = [sharedValue1, sharedValue2];
  const effect1 = noop.useEffect(() => {
    const obj = timing;
    const result = sharedValue1.set(obj.withTiming(2, { duration: 300, easing: ReanimatedRexport2.Easing.linear }));
    const obj2 = { duration: 300, easing: ReanimatedRexport2.Easing.linear };
    const obj3 = timing;
    const result1 = sharedValue2.set(obj3.withTiming(4, { duration: 300, easing: ReanimatedRexport2.Easing.linear }));
  }, items1);
  const obj5 = { style: null };
  const items2 = [tmp.waveformBar, animatedStyle];
  obj5.style = items2;
  return closure_13(sharedValue(sharedValue1[7]).View, obj5);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(17);
  let waveformContainer = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(waveformVersion) {
      return waveformVersion.waveformVersion;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  useVoiceMessagesUIStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s(waveform) {
      return waveform.waveform;
    };
    cResult[1] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  const tmp3Result = useVoiceMessagesUIStore(tmp5);
  let num3 = 2;
  [tmp7, require] = noop.useState(0);
  if (cResult[2] === tmp7) {
    if (cResult[3] === waveformContainer.waveformContainer) {
      if (cResult[4] === tmp3Result) {
        if (cResult[12] === cResult[5]) {
          if (cResult[13] === tmp9) {
            if (cResult[14] === tmp10) {
              if (cResult[15] === tmp11) {
                let tmp17 = cResult[16];
              }
              return tmp17;
            }
          }
        }
        const obj2 = { style: cResult[6], onLayout: cResult[7], children: cResult[8] };
        const tmp19 = closure_13(cResult[5], obj2);
        cResult[12] = cResult[5];
        cResult[13] = cResult[6];
        cResult[14] = cResult[7];
        cResult[15] = cResult[8];
        cResult[16] = tmp19;
        tmp17 = tmp19;
      }
    }
  }
  const substr = tmp3Result.slice(-tmp7);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor(arg0) {
        tmp = closure_0(Math.round(arg0.nativeEvent.layout.width / 6) + 2);
        return;
      }
    }
    cResult[10] = D;
  } else {
    class D {
      constructor(arg0) {
        tmp = closure_0(Math.round(arg0.nativeEvent.layout.width / 6) + 2);
        return;
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        obj = { value: tmp[0] };
        return closure_1_13(closure_1_19, obj, tmp[1]);
      }
    }
    cResult[11] = M;
  } else {
    class M {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        obj = { value: tmp[0] };
        return closure_1_13(closure_1_19, obj, tmp[1]);
      }
    }
  }
  const mapped = substr.map(M);
  cResult[num3] = tmp7;
  waveformContainer = waveformContainer.waveformContainer;
  cResult[3] = waveformContainer;
  cResult[4] = substr;
  cResult[5] = closure_5;
  cResult[6] = waveformContainer.waveformContainer;
  cResult[7] = D;
  cResult[8] = mapped;
  num3 = 9;
  cResult[9] = substr;
  const tmp6 = _slicedToArray(noop.useState(0), 2);
}) : (() => {
  useVoiceMessagesUIStore((waveformVersion) => waveformVersion.waveformVersion);
  const tmp = closure_16();
  const tmp3 = _slicedToArray(noop.useState(0), 2);
  closure_0 = tmp3[1];
  const substr = useVoiceMessagesUIStore((waveform) => waveform.waveform).slice(-tmp3[0]);
  const arr = useVoiceMessagesUIStore((waveform) => waveform.waveform);
  return closure_13(closure_5, {
    style: tmp.waveformContainer,
    onLayout: noop.useCallback((nativeEvent) => {
      closure_0(Math.round(nativeEvent.nativeEvent.layout.width / 6) + 2);
    }, []),
    children: substr.map((item) => {
      [tmp, tmp2] = item;
      return closure_1_13(closure_1_19, { value }, tmp2);
    })
  });
});
const constants = { WARN: 0, [0]: "WARN", REALLY_WARN: 1, [1]: "REALLY_WARN", ENDED: 2, [2]: "ENDED" };
const __initData3 = { code: "function VoiceMessageChatTsx3(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}" };
const __initData4 = { code: "function VoiceMessageChatTsx4(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}" };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((animationValue) => {
  const cResult = animationValue(576).c(28);
  animationValue = animationValue.animationValue;
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(startTimeMillis) {
      return startTimeMillis.startTimeMillis;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp7 = useVoiceMessagesUIStore(first);
  importDefault = tmp7;
  if (cResult[1] !== tmp7) {
    class T {
      constructor() {
        num = 0;
        if (null != closure_1) {
          tmp2 = globalThis;
          _Date = Date;
          num = Date.now() - tmp;
        }
        return num;
      }
    }
    cResult[1] = tmp7;
    cResult[2] = T;
  } else {
    class T {
      constructor() {
        num = 0;
        if (null != closure_1) {
          tmp2 = globalThis;
          _Date = Date;
          num = Date.now() - tmp;
        }
        return num;
      }
    }
  }
  const obj = animationValue(576);
  const tmp9 = first1;
  [tmp11, dependencyMap] = first1(noop.useState(T), 2);
  const tmp12 = first1(noop.useState(undefined), 2);
  first1 = tmp12[0];
  noop = tmp12[1];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        return null != animationValue.savedVoiceMessageUploadData;
      }
    }
    cResult[3] = O;
  } else {
    class O {
      constructor(arg0) {
        return null != animationValue.savedVoiceMessageUploadData;
      }
    }
  }
  const tmp6Result = useVoiceMessagesUIStore(O);
  closure_5 = tmp6Result;
  const tmp10 = first1(noop.useState(T), 2);
  const token = animationValue(4580).useToken(nativeDefault.modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
  if (cResult[4] === tmp6Result) {
    class O {
      constructor(arg0) {
        return null != animationValue.savedVoiceMessageUploadData;
      }
    }
    const effect = obj2.useEffect(G, items3);
    const result = tmp11 / 1000;
    if (cResult[8] !== result) {
      class O {
        constructor(arg0) {
          return null != animationValue.savedVoiceMessageUploadData;
        }
      }
      const timeFormat = obj4.getTimeFormat(result, { padMinutes: false });
      cResult[8] = result;
      cResult[9] = timeFormat;
    } else {
      class O {
        constructor(arg0) {
          return null != animationValue.savedVoiceMessageUploadData;
        }
      }
    }
    [tmp22, AccessibilityStore] = tmp9(obj2.useState(false), 2);
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
                AccessibilityStore(() => { ... });
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
      let tmp24 = items;
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
                AccessibilityStore(() => { ... });
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
    const tmp9Result = tmp9(obj2.useState(false), 2);
    class Z {
      constructor() {
        obj = { opacity: animationValue.get() };
        return obj;
      }
    }
    const obj3 = { animationValue };
    Z.__closure = obj3;
    Z.__workletHash = 9127206038844;
    Z.__initData = __initData3;
    const animatedStyle = tmp(4612).useAnimatedStyle(Z);
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
                AccessibilityStore(() => { ... });
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
      if (!(null != tmp7 && !tmp6Result)) {
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
                  AccessibilityStore(() => { ... });
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
                  AccessibilityStore(() => { ... });
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
                    AccessibilityStore(() => { ... });
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
                    AccessibilityStore(() => { ... });
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
        const obj5 = { style: tmp4.duration, variant: token, color: "text-default", tabularNumbers: true, children: tmp19 };
        const tmp38 = closure_13(tmp(4886).Text, obj5);
        class Z {
          constructor() {
            obj = { opacity: animationValue.get() };
            return obj;
          }
        }
        cResult[20] = token;
        cResult[21] = tmp4.duration;
        cResult[22] = "text-default";
        cResult[23] = tmp38;
      }
      const items1 = [tmp4.dot, !(null != tmp7 && !tmp6Result)];
      class Z {
        constructor() {
          obj = { opacity: animationValue.get() };
          return obj;
        }
      }
      const tmp35 = closure_13(closure_5, { style: null });
      cResult[16] = tmp4.dot;
      cResult[17] = !(null != tmp7 && !tmp6Result);
      cResult[18] = tmp35;
      const obj6 = { style: null };
    }
    const items2 = [tmp4.durationContainer, animatedStyle];
    cResult[13] = animatedStyle;
    cResult[14] = tmp4.durationContainer;
    cResult[15] = items2;
    const tmpResult2 = tmp(4612);
  }
  class G {
    constructor() {
      if (closure_5) {
        tmp2 = closure_2;
        tmp3 = closure_1_8;
        tmp4 = closure_1_9;
        tmp5 = closure_2(closure_1_8 + closure_1_9);
        tmp6 = closure_4;
        tmp7 = closure_1_21;
        tmp8 = closure_4(closure_1_21.ENDED);
        return;
      } else {
        tmp = globalThis;
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
  const tmpResult = animationValue(4580);
}) : ((animationValue) => {
  animationValue = animationValue.animationValue;
  closure_3 = undefined;
  let first1;
  useVoiceMessagesUIStore = undefined;
  const tmp = closure_16();
  const tmp2 = useVoiceMessagesUIStore((startTimeMillis) => startTimeMillis.startTimeMillis);
  importDefault = tmp2;
  const tmp3 = closure_3(first1.useState(() => {
    let num = 0;
    if (null != closure_1) {
      const _Date = Date;
      num = Date.now() - tmp;
    }
    return num;
  }), 2);
  const first = tmp3[0];
  closure_3 = tmp3[1];
  const tmp5 = closure_3(first1.useState(undefined), 2);
  first1 = tmp5[0];
  closure_5 = tmp5[1];
  const tmp7 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  const useReducedMotion = tmp7;
  const items = [tmp2, tmp7];
  const token = animationValue(first[15]).useToken(require("native").modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
  const effect = first1.useEffect(() => {
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
  const memo = first1.useMemo(() => utils_TimeUtils.getTimeFormat(first / 1000, { padMinutes: false }), items1);
  const tmp13 = closure_3(first1.useState(false), 2);
  useVoiceMessagesUIStore = tmp13[1];
  const items2 = [first1];
  const effect1 = first1.useEffect(() => {
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
          closure_7((arg0) => !arg0);
          const timeout = setTimeout(flash, num);
        }
        closure_7((arg0) => !arg0);
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
  const obj = animationValue(first[15]);
  const tmp8 = animationValue;
  const tmp9 = first;
  class W {
    constructor() {
      obj = { opacity: animationValue.get() };
      return obj;
    }
  }
  W.__closure = { animationValue };
  W.__workletHash = 16028967821691;
  W.__initData = __initData4;
  const animatedStyle = animationValue(first[7]).useAnimatedStyle(W);
  const obj3 = { style: null, children: null };
  const items3 = [tmp.durationContainer, animatedStyle];
  obj3.style = items3;
  const items4 = [tmp.dot, ];
  let tmp19 = null != tmp2;
  if (tmp19) {
    tmp19 = !tmp7;
  }
  let dotDismissed = !tmp19;
  if (!tmp19) {
    dotDismissed = tmp.dotDismissed;
  }
  items4[1] = dotDismissed;
  const items5 = [closure_13(closure_5, { style: items4 }), ];
  const obj4 = { style: tmp.duration, variant: token, color: null, tabularNumbers: true, children: null };
  let str = "text-default";
  if (tmp13[0]) {
    str = "text-feedback-critical";
  }
  obj4.color = str;
  obj4.children = memo;
  items5[1] = closure_13(tmp8(tmp9[17]).Text, obj4);
  obj3.children = items5;
  return closure_14(require("ReanimatedRexport").View, obj3);
});
const __initData5 = { code: "function VoiceMessageChatTsx5(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}" };
const __initData6 = { code: "function VoiceMessageChatTsx6(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}" };
const __initData7 = { code: "function VoiceMessageChatTsx7(){const{backgroundColor}=this.__closure;return{width:\"100%\",...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};}" };
const __initData8 = { code: "function VoiceMessageChatTsx8(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}" };
const __initData9 = { code: "function VoiceMessageChatTsx9(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}" };
const __initData10 = { code: "function VoiceMessageChatTsx10(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}" };
const __initData11 = { code: "function VoiceMessageChatTsx11(){const{backgroundColor}=this.__closure;return{width:'100%',...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};}" };
const __initData12 = { code: "function VoiceMessageChatTsx12(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}" };
ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: nativeDefault.modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageChat.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isRecording) => {
  const cResult = isRecording(backgroundColor[12]).c(21);
  isRecording = isRecording.isRecording;
  const initialAnimation = isRecording.initialAnimation;
  backgroundColor = isRecording.backgroundColor;
  ({ leftAccessory, rightAccessory } = isRecording);
  const tmp4 = closure_16();
  let obj = isRecording(backgroundColor[12]);
  const token = isRecording(backgroundColor[15]).useToken(initialAnimation(backgroundColor[9]).colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR);
  let obj2 = isRecording(backgroundColor[15]);
  const tmp5 = initialAnimation;
  const sharedValue = isRecording(backgroundColor[7]).useSharedValue(0);
  if (cResult[0] === isRecording) {
    if (cResult[1] === sharedValue) {
      let tmp8 = cResult[2];
      let tmp9 = cResult[3];
    }
    const effect = sharedValue1.useEffect(tmp8, tmp9);
    sharedValue1 = tmp(tmp2[7]).useSharedValue(0);
    const tmpResult = tmp(tmp2[7]);
    class S {
      constructor() {
        tmp = 1 === initialAnimation.get() && isRecording;
        return tmp;
      }
    }
    const obj4 = { initialAnimation, isRecording };
    S.__closure = obj4;
    S.__workletHash = 680927285727;
    S.__initData = __initData5;
    class C {
      constructor(arg0, arg1) {
        tmp = isRecording;
        if (isRecording) {
          tmp2 = arg1;
          tmp = isRecording !== arg1;
        }
        if (tmp) {
          tmp3 = closure_4;
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[14]);
          obj1 = { easing: null, duration: 200 };
          obj1.easing = closure_0(closure_2[7]).Easing.quad;
          num = 1;
          result = closure_4.set(obj.withTiming(1, obj1));
          tmp7 = closure_3;
          num2 = 0;
          result1 = closure_3.set(0);
        }
        return;
      }
    }
    const obj5 = { animationValue: sharedValue1, withTiming: tmp(tmp2[14]).withTiming, Easing: tmp(tmp2[7]).Easing, loadingOpacity: sharedValue };
    C.__closure = obj5;
    C.__workletHash = 13113287252454;
    C.__initData = __initData6;
    const animatedReaction = tmp(tmp2[7]).useAnimatedReaction(S, C);
    const tmpResult4 = tmp(tmp2[7]);
    const fn2 = function w() {
      if (null != backgroundColor) {
        const obj2 = { backgroundColor: backgroundColor.get() };
        let obj3 = obj2;
      } else {
        obj3 = {};
      }
      const merged = Object.assign(obj3);
      return { width: "100%" };
    };
    const obj6 = { backgroundColor };
    fn2.__closure = obj6;
    fn2.__workletHash = 722511507624;
    fn2.__initData = __initData7;
    const animatedStyle = tmp(tmp2[7]).useAnimatedStyle(fn2);
    const tmpResult5 = tmp(tmp2[7]);
    class M {
      constructor() {
        obj = { opacity: closure_3.get() };
        return obj;
      }
    }
    const obj7 = { loadingOpacity: sharedValue };
    M.__closure = obj7;
    M.__workletHash = 6316286224887;
    M.__initData = __initData8;
    const animatedStyle1 = tmp(tmp2[7]).useAnimatedStyle(M);
    if (cResult[4] === animatedStyle) {
      if (cResult[5] === tmp4.container) {
        let tmp20 = cResult[6];
      }
      if (cResult[7] === animatedStyle1) {
        if (cResult[8] === isRecording) {
          if (cResult[9] === token) {
            if (cResult[10] === tmp4.loading) {
              let tmp21 = cResult[11];
            }
            if (cResult[12] !== sharedValue1) {
              const obj8 = { animationValue: sharedValue1 };
              const tmp28 = closure_13(closure_24, obj8);
              cResult[12] = sharedValue1;
              class S {
                constructor() {
                  tmp = 1 === initialAnimation.get() && isRecording;
                  return tmp;
                }
              }
              cResult[13] = tmp28;
              let tmp25 = tmp28;
            } else {
              tmp25 = cResult[13];
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp33 = closure_13(closure_20, {});
              cResult[14] = tmp33;
              let tmp30 = tmp33;
            } else {
              tmp30 = cResult[14];
            }
            class S {
              constructor() {
                tmp = 1 === initialAnimation.get() && isRecording;
                return tmp;
              }
            }
            const obj9 = { style: tmp20, children: null };
            const items = [tmp21, leftAccessory, tmp25, tmp30, ];
            class C {
              constructor(arg0, arg1) {
                tmp = isRecording;
                if (isRecording) {
                  tmp2 = arg1;
                  tmp = isRecording !== arg1;
                }
                if (tmp) {
                  tmp3 = closure_4;
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[14]);
                  obj1 = { easing: null, duration: 200 };
                  obj1.easing = closure_0(closure_2[7]).Easing.quad;
                  num = 1;
                  result = closure_4.set(obj.withTiming(1, obj1));
                  tmp7 = closure_3;
                  num2 = 0;
                  result1 = closure_3.set(0);
                }
                return;
              }
            }
            obj9.children = items;
            const tmp36 = closure_14(tmp5(tmp2[7]).View, obj9);
            cResult[15] = leftAccessory;
            cResult[16] = rightAccessory;
            cResult[17] = tmp20;
            cResult[18] = tmp21;
            cResult[19] = tmp25;
            cResult[20] = tmp36;
          }
        }
      }
      let tmp22 = null;
      if (!isRecording) {
        const obj10 = { style: null, color: null, size: "small" };
        const items1 = [tmp4.loading, animatedStyle1];
        obj10.style = items1;
        class S {
          constructor() {
            tmp = 1 === initialAnimation.get() && isRecording;
            return tmp;
          }
        }
        tmp22 = closure_13(closure_15, obj10);
      }
      cResult[7] = animatedStyle1;
      class S {
        constructor() {
          tmp = 1 === initialAnimation.get() && isRecording;
          return tmp;
        }
      }
      cResult[9] = token;
      cResult[10] = tmp4.loading;
      cResult[11] = tmp22;
      tmp21 = tmp22;
    }
    const items2 = [tmp4.container, animatedStyle];
    cResult[4] = animatedStyle;
    cResult[5] = tmp4.container;
    cResult[6] = items2;
    tmp20 = items2;
    const tmpResult6 = tmp(tmp2[7]);
  }
  const fn = function o() {
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const obj = isRecording(backgroundColor[14]);
        const result = sharedValue.set(obj.withTiming(1, { easing: isRecording(backgroundColor[7]).Easing.quad, duration: 200 }));
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
  let obj3 = isRecording(backgroundColor[7]);
}) : ((isRecording) => {
  isRecording = isRecording.isRecording;
  const initialAnimation = isRecording.initialAnimation;
  const backgroundColor = isRecording.backgroundColor;
  let sharedValue1;
  ({ leftAccessory, rightAccessory } = isRecording);
  let tmp = closure_16();
  const token = isRecording(backgroundColor[15]).useToken(initialAnimation(backgroundColor[9]).colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR);
  let obj = isRecording(backgroundColor[15]);
  const sharedValue = isRecording(backgroundColor[7]).useSharedValue(0);
  const items = [sharedValue, isRecording];
  const effect = sharedValue1.useEffect(() => {
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const obj = isRecording(backgroundColor[14]);
        const result = sharedValue.set(obj.withTiming(1, { easing: isRecording(backgroundColor[7]).Easing.quad, duration: 200 }));
      }, 1000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items);
  let obj2 = isRecording(backgroundColor[7]);
  sharedValue1 = isRecording(backgroundColor[7]).useSharedValue(0);
  let obj3 = isRecording(backgroundColor[7]);
  const fn = function f() {
    return 1 === initialAnimation.get() && isRecording;
  };
  fn.__closure = { initialAnimation, isRecording };
  fn.__workletHash = 12092760593619;
  fn.__initData = __initData9;
  class E {
    constructor(arg0, arg1) {
      tmp = isRecording;
      if (isRecording) {
        tmp2 = arg1;
        tmp = isRecording !== arg1;
      }
      if (tmp) {
        tmp3 = closure_4;
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[14]);
        obj1 = { easing: null, duration: 200 };
        obj1.easing = closure_0(closure_2[7]).Easing.quad;
        num = 1;
        result = closure_4.set(obj.withTiming(1, obj1));
        tmp7 = closure_3;
        num2 = 0;
        result1 = closure_3.set(0);
      }
      return;
    }
  }
  const obj4 = isRecording(backgroundColor[7]);
  E.__closure = { animationValue: sharedValue1, withTiming: isRecording(backgroundColor[14]).withTiming, Easing: isRecording(backgroundColor[7]).Easing, loadingOpacity: sharedValue };
  E.__workletHash = 15501818738769;
  E.__initData = __initData10;
  const animatedReaction = obj4.useAnimatedReaction(fn, E);
  const obj5 = { animationValue: sharedValue1, withTiming: isRecording(backgroundColor[14]).withTiming, Easing: isRecording(backgroundColor[7]).Easing, loadingOpacity: sharedValue };
  class R {
    constructor() {
      obj = backgroundColor;
      if (null != backgroundColor) {
        obj1 = { backgroundColor: null };
        obj1.backgroundColor = obj.get();
        obj5 = obj1;
      } else {
        obj5 = {};
      }
      obj6 = { width: "100%" };
      merged = Object.assign(obj5);
      return obj6;
    }
  }
  R.__closure = { backgroundColor };
  R.__workletHash = 8394038686335;
  R.__initData = __initData11;
  const animatedStyle = isRecording(backgroundColor[7]).useAnimatedStyle(R);
  const obj6 = isRecording(backgroundColor[7]);
  class C {
    constructor() {
      obj = { opacity: closure_3.get() };
      return obj;
    }
  }
  C.__closure = { loadingOpacity: sharedValue };
  C.__workletHash = 3207421839660;
  C.__initData = __initData12;
  const animatedStyle1 = isRecording(backgroundColor[7]).useAnimatedStyle(C);
  const obj8 = { style: null, children: null };
  const items1 = [tmp.container, animatedStyle];
  obj8.style = items1;
  let tmp10 = null;
  if (!isRecording) {
    const obj9 = { style: null, color: null, size: "small" };
    const items2 = [tmp.loading, animatedStyle1];
    obj9.style = items2;
    obj9.color = token;
    tmp10 = closure_13(closure_15, obj9);
  }
  const items3 = [tmp10, leftAccessory, closure_13(closure_24, { animationValue: sharedValue1 }), closure_13(closure_20, {}), rightAccessory];
  obj8.children = items3;
  return closure_14(initialAnimation(backgroundColor[7]).View, obj8);
}));