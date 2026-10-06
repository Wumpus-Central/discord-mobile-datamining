// === Module 9632: CallPTTButton ===

// Module 9632 (CallPTTButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import MediaEngineActionCreators from "MediaEngineActionCreators" /* 9633 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore_mod from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ColorUtils_mod from "ColorUtils" /* 4733 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;

let ColorUtils;
let obj3;
let obj4;
let obj5;
let react = react_mod;
let MediaEngineStore = MediaEngineStore_mod;
const InputModes = Constants.InputModes;
const jsx = Fragment.jsx;
const CallPTTButtonLooks = { BRAND: "brand", BLUR: "blur" };
let createStyles = createStyles_mod;
let obj2 = { button: { margin: 13 }, container: obj3, buttonBlur: { backgroundColor: "transparent" }, buttonBlurPressed: obj4, textStyle: { fontSize: 16 }, brandButtonContainer: obj5 };
obj3 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24) };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
obj4 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.6) };
ColorUtils = ColorUtils_mod;
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles(obj2);
const __initData = { code: "function CallPTTButtonTsx1(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}" };
const __initData2 = { code: "function CallPTTButtonTsx2(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}" };
const __initData3 = { code: "function CallPTTButtonTsx3(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}" };
const __initData4 = { code: "function CallPTTButtonTsx4(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}" };
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((stopCallback) => {
  let closure_4;
  let first;
  let first1;
  let look;
  let mode;
  let ref;
  let sendCallback;
  let stateFromStores1;
  let style;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp6;
  let tmp7;
  let obj = sendCallback(stateFromStores1[11]);
  const cResult = obj.c(42);
  ({ look, style, sendCallback } = stopCallback);
  stopCallback = stopCallback.stopCallback;
  if (undefined === look) {
    look = obj.BRAND;
  }
  const tmp5 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    class T {
      constructor() {
        return mode.getMode();
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let tmpResult = sendCallback(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, T);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ref];
    class I {
      constructor() {
        return ref.getChannelId();
      }
    }
    cResult[2] = items1;
    cResult[3] = I;
    tmp11 = I;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult4 = sendCallback(stateFromStores1[12]);
  stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [first1];
    class I {
      constructor() {
        return ref.getChannelId();
      }
    }
    cResult[4] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== stateFromStores1) {
    const fn = function w() {
      return ChannelStore.getChannel(stateFromStores1);
    };
    const items3 = [stateFromStores1];
    class I {
      constructor() {
        return ref.getChannelId();
      }
    }
    cResult[5] = stateFromStores1;
    cResult[6] = fn;
    cResult[7] = items3;
    tmp17 = items3;
    tmp16 = fn;
  } else {
    tmp16 = cResult[6];
    tmp17 = cResult[7];
  }
  const tmpResult5 = sendCallback(stateFromStores1[12]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp14, tmp16, tmp17);
  const tmp18 = stopCallback(stateFromStores1[13])(stateFromStores1);
  const tmp19 = first(react.useState(false), 2);
  first = tmp19[0];
  react = tmp21;
  const tmp22 = first(react.useState(false), 2);
  first1 = tmp22[0];
  MediaEngineStore = tmp24;
  let isGuildStageVoiceResult;
  if (stateFromStores2 != null) {
    isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = !tmp18;
  }
  ref = obj6.useRef(false);
  const tmpResult6 = sendCallback(stateFromStores1[14]);
  const voiceChatNavigationContext = tmpResult6.useVoiceChatNavigationContext();
  let prop;
  if (voiceChatNavigationContext != null) {
    prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
  }
  if (cResult[8] === first1) {
    if (cResult[9] === first) {
      if (cResult[10] === sendCallback) {
        let tmp29;
        let tmp30;
        if (cResult[11] === stopCallback) {
          tmp29 = cResult[12];
          tmp30 = cResult[13];
        }
        const effect = obj6.useEffect(tmp30, tmp29);
        if (cResult[14] !== prop) {
          class N {
            constructor() {
              closure_4(true);
              mode(false);
              if (prop != null) {
                prop(true);
              }
            }
          }
          cResult[14] = prop;
          class I {
            constructor() {
              return ref.getChannelId();
            }
          }
          cResult[15] = N;
        } else {
          class N {
            constructor() {
              closure_4(true);
              mode(false);
              if (prop != null) {
                prop(true);
              }
            }
          }
        }
        class I {
          constructor() {
            return ref.getChannelId();
          }
        }
        if (cResult[18] !== prop) {
          class N {
            constructor() {
              closure_4(true);
              mode(false);
              if (prop != null) {
                prop(true);
              }
            }
          }
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class CallPTTButtonTsx1 {
              constructor() {
                obj = closure_0(closure_2[16]);
                tmp = obj.runOnJS(closure_6)(false);
                return;
              }
            }
            let obj2 = { runOnJS: sendCallback(tmp2[16]).runOnJS, setDragging: null };
            class I {
              constructor() {
                return ref.getChannelId();
              }
            }
            CallPTTButtonTsx1.__closure = obj2;
            CallPTTButtonTsx1.__workletHash = 8439106360958;
            CallPTTButtonTsx1.__initData = __initData;
            cResult[20] = CallPTTButtonTsx1;
          } else {
            class CallPTTButtonTsx1 {
              constructor() {
                obj = closure_0(closure_2[16]);
                tmp = obj.runOnJS(closure_6)(false);
                return;
              }
            }
          }
          class I {
            constructor() {
              return ref.getChannelId();
            }
          }
          function et() {
            const obj = ReanimatedRexport;
            obj.runOnJS(mode)(true);
            const obj2 = ReanimatedRexport;
            obj2.runOnJS(closure_4)(false);
            if (null != prop) {
              const tmpResult = ReanimatedRexport;
              tmpResult.runOnJS(tmp5)(false);
            }
          }
          const obj3 = { runOnJS: sendCallback(stateFromStores1[16]).runOnJS, setDragging: tmp22[1], setPressed: tmp19[1], setIsSwipeToChatDisabled: prop };
          const onStart = obj9.Pan().onStart;
          obj9.Pan();
          et.__closure = obj3;
          et.__workletHash = 10056118853836;
          et.__initData = __initData2;
          const onStartResult = onStart(et);
          cResult[18] = prop;
          cResult[19] = onStartResult.onEnd(CallPTTButtonTsx1);
          const onEndResult = onStartResult.onEnd(CallPTTButtonTsx1);
        } else {
          class CallPTTButtonTsx1 {
            constructor() {
              obj = closure_0(closure_2[16]);
              tmp = obj.runOnJS(closure_6)(false);
              return;
            }
          }
        }
        if (null != stateFromStores1) {
          class CallPTTButtonTsx1 {
            constructor() {
              obj = closure_0(closure_2[16]);
              tmp = obj.runOnJS(closure_6)(false);
              return;
            }
          }
          if (prop.VOICE_ACTIVITY !== stateFromStores) {
            class CallPTTButtonTsx1 {
              constructor() {
                obj = closure_0(closure_2[16]);
                tmp = obj.runOnJS(closure_6)(false);
                return;
              }
            }
          }
        }
        return null;
      }
    }
  }
  class A {
    constructor() {
      if ((first || first1) !== ref.current) {
        const obj = MediaEngineActionCreators;
        obj.setPushToTalkState(first || first1);
        if (first || first1) {
          if (sendCallback != null) {
            sendCallback();
          }
        } else if (stopCallback != null) {
          stopCallback();
        }
      }
      ref.current = first || first1;
    }
  }
  const items4 = [ref, first, first1, sendCallback, stopCallback];
  cResult[8] = first1;
  cResult[9] = first;
  cResult[10] = sendCallback;
  cResult[11] = stopCallback;
  cResult[12] = items4;
  cResult[13] = A;
  tmp30 = A;
  tmp29 = items4;
}) : ((look) => {
  let closure_4;
  let intl;
  let obj;
  let sendCallback;
  let style;
  let BRAND = look.look;
  if (BRAND === undefined) {
    BRAND = obj.BRAND;
  }
  ({ style, sendCallback } = look);
  const stopCallback = look.stopCallback;
  let stateFromStores1;
  let first;
  react = undefined;
  let first1;
  let mode;
  let ref;
  let prop;
  const tmp2 = closure_11();
  obj = sendCallback(stateFromStores1[12]);
  const items = [mode];
  const stateFromStores = obj.useStateFromStores(items, () => mode.getMode());
  let obj2 = sendCallback(stateFromStores1[12]);
  const items1 = [ref];
  stateFromStores1 = obj2.useStateFromStores(items1, () => ref.getChannelId());
  const items2 = [first1];
  const items3 = [stateFromStores1];
  const obj3 = sendCallback(stateFromStores1[12]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(stateFromStores1), items3);
  const tmp8 = stopCallback(stateFromStores1[13])(stateFromStores1);
  const tmp9 = first(react.useState(false), 2);
  first = tmp9[0];
  react = tmp11;
  const tmp12 = first(react.useState(false), 2);
  first1 = tmp12[0];
  mode = tmp14;
  let isGuildStageVoiceResult;
  const tmp7 = stopCallback;
  if (stateFromStores2 != null) {
    isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = !tmp8;
  }
  ref = obj5.useRef(false);
  const tmp3Result = sendCallback(stateFromStores1[14]);
  const voiceChatNavigationContext = tmp3Result.useVoiceChatNavigationContext();
  prop = undefined;
  if (voiceChatNavigationContext != null) {
    prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
  }
  const items4 = [ref, first, first1, sendCallback, stopCallback];
  const effect = obj5.useEffect(() => {
    if ((first || first1) !== ref.current) {
      const obj = MediaEngineActionCreators;
      obj.setPushToTalkState(first || first1);
      if (first || first1) {
        if (sendCallback != null) {
          sendCallback();
        }
      } else if (stopCallback != null) {
        stopCallback();
      }
    }
    ref.current = first || first1;
  }, items4);
  const Gesture = sendCallback(tmp4[17]).Gesture;
  const PanResult = Gesture.Pan();
  class G {
    constructor() {
      const obj = ReanimatedRexport;
      obj.runOnJS(mode)(true);
      const obj2 = ReanimatedRexport;
      obj2.runOnJS(closure_4)(false);
      if (null != prop) {
        const tmpResult = ReanimatedRexport;
        tmpResult.runOnJS(tmp5)(false);
      }
    }
  }
  G.__closure = { runOnJS: sendCallback(stateFromStores1[16]).runOnJS, setDragging: tmp12[1], setPressed: tmp9[1], setIsSwipeToChatDisabled: prop };
  G.__workletHash = 12037532002826;
  G.__initData = __initData4;
  ({ runOnJS: sendCallback(stateFromStores1[16]).runOnJS, setDragging: tmp12[1], setPressed: tmp9[1], setIsSwipeToChatDisabled: prop });
  PanResult.onStart(G);
  class F {
    constructor() {
      const obj = ReanimatedRexport;
      obj.runOnJS(mode)(false);
    }
  }
  F.__closure = { runOnJS: sendCallback(stateFromStores1[16]).runOnJS, setDragging: tmp12[1] };
  F.__workletHash = 11266403476668;
  F.__initData = __initData3;
  let tmp22 = null;
  ({ runOnJS: sendCallback(stateFromStores1[16]).runOnJS, setDragging: tmp12[1] });
  if (null != stateFromStores1) {
    tmp22 = null;
    if (prop.VOICE_ACTIVITY !== stateFromStores) {
      tmp22 = null;
      if (!isGuildStageVoiceResult) {
        let buttonBlurPressed;
        let items7;
        if (BRAND === obj.BRAND) {
          const items5 = [tmp2.brandButtonContainer];
          const items6 = [tmp2.button, style];
          buttonBlurPressed = items6;
          items7 = items5;
        } else {
          items7 = [, , ];
          ({ button: arr6[0], container: arr6[1] } = tmp2);
          items7[2] = style;
          if (!first) {
            if (!first1) {
              buttonBlurPressed = tmp2.buttonBlur;
            }
          }
          buttonBlurPressed = tmp2.buttonBlurPressed;
        }
        const GestureDetector = sendCallback(tmp4[17]).GestureDetector;
        const View = tmp7(tmp4[16]).View;
        ({
          style: buttonBlurPressed,
          textStyle: tmp2.textStyle,
          text: intl.string(sendCallback(stateFromStores1[18]).t.Q8gkVL),
          onTouchStart() {
                  closure_4(true);
                  mode(false);
                  if (prop != null) {
                    prop(true);
                  }
                },
          onTouchEnd() {
                  closure_4(false);
                  if (prop != null) {
                    prop(false);
                  }
                },
          darkenOnPress: true
        });
        const Button = sendCallback(tmp4[19]).Button;
        intl = sendCallback(tmp4[18]).intl;
        tmp22 = <GestureDetector gesture={tmp21}>{null}</GestureDetector>;
      }
    }
  }
  return tmp22;
}));
const result = size.fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default memoResult;
export { CallPTTButtonLooks };