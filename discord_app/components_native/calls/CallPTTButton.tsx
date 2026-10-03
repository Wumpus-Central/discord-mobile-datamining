// discord_app/components_native/calls/CallPTTButton.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../modules/reanimated/ReanimatedRexport.tsx";
import MediaEngineActionCreators from "../../modules/media_engine/MediaEngineActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";

require = fn;
const InputModes = fn(1085).InputModes;
const jsx = fn(21).jsx;
const CallPTTButtonLooks = { BRAND: "brand", BLUR: "blur" };
const createStyles = fn(4890);
let obj2 = {
  button: { margin: 13 },
  container: null,
  buttonBlur: null,
  buttonBlurPressed: null,
  textStyle: null,
  brandButtonContainer: null,
};
let obj4 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: null };
let ColorUtils = fn(4727);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
obj2.container = obj4;
obj2.buttonBlur = { backgroundColor: "transparent" };
const obj5 = { backgroundColor: null };
ColorUtils = fn(4727);
obj5.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.6);
obj2.buttonBlurPressed = obj5;
obj2.textStyle = { fontSize: 16 };
obj2.brandButtonContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles.createStyles(obj2);
const __initData = {
  code: "function CallPTTButtonTsx1(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}",
};
const __initData2 = {
  code: "function CallPTTButtonTsx2(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}",
};
const __initData3 = {
  code: "function CallPTTButtonTsx3(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}",
};
const __initData4 = {
  code: "function CallPTTButtonTsx4(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}",
};
const ReactCompilerGating = fn(558);
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (stopCallback) => {
        let obj = sendCallback(stateFromStores1[11]);
        const cResult = obj.c(42);
        ({ look, style, sendCallback } = stopCallback);
        if (undefined === look) {
          look = obj.BRAND;
        }
        closure_11();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [MediaEngineStore];
          class T {
            constructor() {
              return closure_6.getMode();
            }
          }
          cResult[0] = items;
          cResult[1] = T;
          tmp6 = items;
        } else {
          [tmp6, tmp7] = cResult;
        }
        const stateFromStores = sendCallback(stateFromStores1[12]).useStateFromStores(tmp6, T);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ref];
          class I {
            constructor() {
              return closure_7.getChannelId();
            }
          }
          cResult[2] = items1;
          cResult[3] = I;
          let tmp11 = I;
          let tmp10 = items1;
        } else {
          tmp10 = cResult[2];
          tmp11 = cResult[3];
        }
        let tmpResult = sendCallback(stateFromStores1[12]);
        stateFromStores1 = sendCallback(stateFromStores1[12]).useStateFromStores(tmp10, tmp11);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [first1];
          class I {
            constructor() {
              return closure_7.getChannelId();
            }
          }
          cResult[4] = items2;
          let tmp14 = items2;
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
              return closure_7.getChannelId();
            }
          }
          cResult[5] = stateFromStores1;
          cResult[6] = fn;
          cResult[7] = items3;
          let tmp17 = items3;
          let tmp16 = fn;
        } else {
          tmp16 = cResult[6];
          tmp17 = cResult[7];
        }
        const tmpResult4 = sendCallback(stateFromStores1[12]);
        const stateFromStores2 = sendCallback(stateFromStores1[12]).useStateFromStores(tmp14, tmp16, tmp17);
        const tmpResult5 = sendCallback(stateFromStores1[12]);
        const tmp19 = first(noop.useState(false), 2);
        first = tmp19[0];
        noop = tmp21;
        const tmp22 = first(noop.useState(false), 2);
        first1 = tmp22[0];
        MediaEngineStore = tmp24;
        let isGuildStageVoiceResult;
        if (stateFromStores2 != null) {
          isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          isGuildStageVoiceResult = !tmp18;
        }
        ref = noop.useRef(false);
        tmp18 = stopCallback.stopCallback(stateFromStores1[13])(stateFromStores1);
        const voiceChatNavigationContext = sendCallback(stateFromStores1[14]).useVoiceChatNavigationContext();
        let prop;
        if (voiceChatNavigationContext != null) {
          prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
        }
        if (cResult[8] === first1) {
          if (cResult[9] === first) {
            if (cResult[10] === sendCallback) {
              if (cResult[11] === stopCallback) {
                let tmp29 = cResult[12];
                let tmp30 = cResult[13];
              }
              const effect = obj6.useEffect(tmp30, tmp29);
              if (cResult[14] !== prop) {
                class N {
                  constructor() {
                    tmp = closure_4(true);
                    tmp2 = closure_6(false);
                    if (setIsSwipeToChatDisabled != null) {
                      tmp3 = setIsSwipeToChatDisabled(true);
                    }
                    return;
                  }
                }
                cResult[14] = prop;
                class I {
                  constructor() {
                    return closure_7.getChannelId();
                  }
                }
                cResult[15] = N;
              } else {
                class N {
                  constructor() {
                    tmp = closure_4(true);
                    tmp2 = closure_6(false);
                    if (setIsSwipeToChatDisabled != null) {
                      tmp3 = setIsSwipeToChatDisabled(true);
                    }
                    return;
                  }
                }
              }
              class I {
                constructor() {
                  return closure_7.getChannelId();
                }
              }
              if (cResult[18] !== prop) {
                class N {
                  constructor() {
                    tmp = closure_4(true);
                    tmp2 = closure_6(false);
                    if (setIsSwipeToChatDisabled != null) {
                      tmp3 = setIsSwipeToChatDisabled(true);
                    }
                    return;
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
                      return closure_7.getChannelId();
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
                    return closure_7.getChannelId();
                  }
                }
                function et() {
                  ReanimatedRexport.runOnJS(closure_6)(true);
                  ReanimatedRexport.runOnJS(closure_4)(false);
                  if (null != prop) {
                    ReanimatedRexport.runOnJS(tmp5)(false);
                    const tmpResult = ReanimatedRexport;
                  }
                }
                const obj3 = {
                  runOnJS: sendCallback(tmp2[16]).runOnJS,
                  setDragging: tmp24,
                  setPressed: tmp21,
                  setIsSwipeToChatDisabled: prop,
                };
                et.__closure = obj3;
                et.__workletHash = 10056118853836;
                et.__initData = __initData2;
                const PanResult = obj9.Pan();
                const onEndResult = obj9.Pan().onStart(et).onEnd(CallPTTButtonTsx1);
                cResult[18] = prop;
                cResult[19] = onEndResult;
                const onStartResult = obj9.Pan().onStart(et);
              } else {
                class CallPTTButtonTsx1 {
                  constructor() {
                    obj = closure_0(closure_2[16]);
                    tmp = obj.runOnJS(closure_6)(false);
                    return;
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
        }
        class A {
          constructor() {
            tmp = closure_3;
            if (!closure_3) {
              tmp = closure_5;
            }
            tmp2 = closure_7;
            if (tmp !== closure_7.current) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[15]);
              setPushToTalkStateResult = obj.setPushToTalkState(tmp);
              if (tmp) {
                tmp8 = null;
                if (sendCallback != null) {
                  tmp9 = sendCallback();
                }
              } else {
                tmp6 = null;
                if (stopCallback != null) {
                  tmp7 = stopCallback();
                }
              }
            }
            tmp2.current = tmp;
            return;
          }
        }
        const items4 = [ref, first, first1, sendCallback, stopCallback.stopCallback];
        cResult[8] = first1;
        cResult[9] = first;
        cResult[10] = sendCallback;
        cResult[11] = stopCallback.stopCallback;
        cResult[12] = items4;
        cResult[13] = A;
        tmp30 = A;
        tmp29 = items4;
        const tmpResult6 = sendCallback(stateFromStores1[14]);
      }
    : (look) => {
        let BRAND = look.look;
        if (BRAND === undefined) {
          BRAND = obj.BRAND;
        }
        ({ style, sendCallback } = look);
        let stateFromStores1;
        let first;
        noop = undefined;
        let first1;
        let mode;
        let ref;
        let prop;
        let string = closure_11();
        let onTouchStart = stateFromStores1;
        obj = sendCallback(stateFromStores1[12]);
        const items = [mode];
        const stateFromStores = obj.useStateFromStores(items, () => mode.getMode());
        const items1 = [ref];
        stateFromStores1 = sendCallback(stateFromStores1[12]).useStateFromStores(items1, () => ref.getChannelId());
        let obj2 = sendCallback(stateFromStores1[12]);
        const items2 = [first1];
        const items3 = [stateFromStores1];
        const stateFromStores2 = sendCallback(stateFromStores1[12]).useStateFromStores(
          items2,
          () => ChannelStore.getChannel(stateFromStores1),
          items3,
        );
        let View = stopCallback;
        const obj3 = sendCallback(stateFromStores1[12]);
        const tmp6 = first(noop.useState(false), 2);
        first = tmp6[0];
        noop = tmp8;
        const tmp9 = first(noop.useState(false), 2);
        first1 = tmp9[0];
        mode = tmp11;
        let isGuildStageVoiceResult;
        if (stateFromStores2 != null) {
          isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          isGuildStageVoiceResult = !tmp5;
        }
        ref = obj5.useRef(false);
        tmp5 = look.stopCallback(stateFromStores1[13])(stateFromStores1);
        const voiceChatNavigationContext = sendCallback(onTouchStart[14]).useVoiceChatNavigationContext();
        prop = undefined;
        if (voiceChatNavigationContext != null) {
          prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
        }
        const items4 = [ref, first, first1, sendCallback, look.stopCallback];
        const effect = obj5.useEffect(() => {
          let tmp = first;
          if (!first) {
            tmp = first1;
          }
          if (tmp !== ref.current) {
            MediaEngineActionCreators.setPushToTalkState(tmp);
            if (tmp) {
              if (sendCallback != null) {
                sendCallback();
              }
            } else if (stopCallback != null) {
              stopCallback();
            }
          }
          ref.current = tmp;
        }, items4);
        const Gesture = sendCallback(onTouchStart[17]).Gesture;
        const tmp2Result = sendCallback(onTouchStart[14]);
        class G {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[16]);
            tmp3 = obj.runOnJS(closure_6)(true);
            obj2 = closure_0(closure_2[16]);
            tmp4 = obj2.runOnJS(closure_4)(false);
            if (null != setIsSwipeToChatDisabled) {
              tmpResult = tmp(tmp2[16]);
              tmp6 = tmpResult.runOnJS(tmp5)(false);
            }
            return;
          }
        }
        const PanResult = Gesture.Pan();
        G.__closure = {
          runOnJS: sendCallback(onTouchStart[16]).runOnJS,
          setDragging: tmp9[1],
          setPressed: tmp6[1],
          setIsSwipeToChatDisabled: prop,
        };
        G.__workletHash = 12037532002826;
        G.__initData = __initData4;
        const obj4 = {
          runOnJS: sendCallback(onTouchStart[16]).runOnJS,
          setDragging: tmp9[1],
          setPressed: tmp6[1],
          setIsSwipeToChatDisabled: prop,
        };
        class F {
          constructor() {
            obj = closure_0(closure_2[16]);
            tmp = obj.runOnJS(closure_6)(false);
            return;
          }
        }
        const onStartResult = PanResult.onStart(G);
        F.__closure = { runOnJS: sendCallback(onTouchStart[16]).runOnJS, setDragging: tmp9[1] };
        F.__workletHash = 11266403476668;
        F.__initData = __initData3;
        let onEndResult = onStartResult.onEnd(F);
        let tmp18 = null;
        if (null != stateFromStores1) {
          tmp18 = null;
          if (prop.VOICE_ACTIVITY !== stateFromStores) {
            tmp18 = null;
            if (!isGuildStageVoiceResult) {
              if (BRAND === obj.BRAND) {
                const items5 = [string.brandButtonContainer];
                const items6 = [string.button, style];
                let buttonBlurPressed = items6;
                let items7 = items5;
              } else {
                items7 = [, ,];
                ({ button: arr6[0], container: arr6[1] } = string);
                items7[2] = style;
                if (!first) {
                  if (!first1) {
                    buttonBlurPressed = string.buttonBlur;
                  }
                }
                buttonBlurPressed = string.buttonBlurPressed;
              }
              const obj7 = { gesture: onEndResult, children: null };
              View = View(onTouchStart[16]).View;
              const obj8 = { style: items7, children: null };
              style = sendCallback(onTouchStart[19]).Button;
              const obj9 = {
                style: buttonBlurPressed,
                textStyle: string.textStyle,
                text: null,
                onTouchStart: null,
                onTouchEnd: null,
                darkenOnPress: true,
              };
              const intl = sendCallback(onTouchStart[18]).intl;
              string = intl.string;
              obj9.text = string(sendCallback(onTouchStart[18]).t.Q8gkVL);
              onTouchStart = function onTouchStart() {
                closure_4(true);
                mode(false);
                if (prop != null) {
                  prop(true);
                }
              };
              obj9.onTouchStart = onTouchStart;
              obj9.onTouchEnd = function onTouchEnd() {
                closure_4(false);
                if (prop != null) {
                  prop(false);
                }
              };
              obj8.children = (
                <style
                  style={buttonBlurPressed}
                  textStyle={string.textStyle}
                  text={null}
                  onTouchStart={null}
                  onTouchEnd={null}
                  darkenOnPress
                />
              );
              onEndResult = <View style={items7}>{null}</View>;
              obj7.children = onEndResult;
              jsx(sendCallback(onTouchStart[17]).GestureDetector, { gesture: onEndResult, children: null });
            }
          }
        }
        return tmp18;
      },
);
export { CallPTTButtonLooks };
