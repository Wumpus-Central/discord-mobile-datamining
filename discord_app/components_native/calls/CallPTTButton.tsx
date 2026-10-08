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
const createStyles = fn(5090);
let obj2 = {
  button: { margin: 13 },
  container: null,
  buttonBlur: null,
  buttonBlurPressed: null,
  textStyle: null,
  brandButtonContainer: null,
};
let obj4 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: null };
let ColorUtils = fn(4927);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
obj2.container = obj4;
obj2.buttonBlur = { backgroundColor: "transparent" };
const obj5 = { backgroundColor: null };
ColorUtils = fn(4927);
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
          class T {
            constructor() {
              return closure_6.getMode();
            }
          }
          cResult[2] = items1;
          cResult[3] = tmp13;
          let tmp11 = tmp13;
          let tmp10 = items1;
        } else {
          tmp10 = cResult[2];
          tmp11 = cResult[3];
        }
        let tmpResult = sendCallback(stateFromStores1[12]);
        stateFromStores1 = sendCallback(stateFromStores1[12]).useStateFromStores(tmp10, tmp11);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [first1];
          class T {
            constructor() {
              return closure_6.getMode();
            }
          }
          cResult[4] = items2;
          let tmp15 = items2;
        } else {
          tmp15 = cResult[4];
        }
        if (cResult[5] !== stateFromStores1) {
          const fn = function w() {
            return ChannelStore.getChannel(stateFromStores1);
          };
          const items3 = [stateFromStores1];
          class T {
            constructor() {
              return closure_6.getMode();
            }
          }
          cResult[5] = stateFromStores1;
          cResult[6] = fn;
          cResult[7] = items3;
          let tmp18 = items3;
          let tmp17 = fn;
        } else {
          tmp17 = cResult[6];
          tmp18 = cResult[7];
        }
        const tmpResult4 = sendCallback(stateFromStores1[12]);
        const stateFromStores2 = sendCallback(stateFromStores1[12]).useStateFromStores(tmp15, tmp17, tmp18);
        const tmpResult5 = sendCallback(stateFromStores1[12]);
        const tmp20 = first(noop.useState(false), 2);
        first = tmp20[0];
        noop = tmp22;
        const tmp23 = first(noop.useState(false), 2);
        first1 = tmp23[0];
        MediaEngineStore = tmp25;
        let isGuildStageVoiceResult;
        if (stateFromStores2 != null) {
          isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          isGuildStageVoiceResult = !tmp19;
        }
        ref = noop.useRef(false);
        tmp19 = stopCallback.stopCallback(stateFromStores1[13])(stateFromStores1);
        const voiceChatNavigationContext = sendCallback(stateFromStores1[14]).useVoiceChatNavigationContext();
        let prop;
        if (voiceChatNavigationContext != null) {
          prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
        }
        if (cResult[8] === first1) {
          if (cResult[9] === first) {
            if (cResult[10] === sendCallback) {
              if (cResult[11] === stopCallback) {
                let tmp30 = cResult[12];
                let tmp31 = cResult[13];
              }
              const effect = obj6.useEffect(tmp31, tmp30);
              if (cResult[14] !== prop) {
                function handleStartSend() {
                  closure_4(true);
                  mode(false);
                  if (prop != null) {
                    prop(true);
                  }
                }
                cResult[14] = prop;
                class T {
                  constructor() {
                    return closure_6.getMode();
                  }
                }
                cResult[15] = handleStartSend;
              }
              class T {
                constructor() {
                  return closure_6.getMode();
                }
              }
              if (cResult[18] !== prop) {
                const _Symbol = Symbol;
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  class CallPTTButtonTsx1 {
                    constructor() {
                      obj = closure_0(closure_2[16]);
                      tmp = obj.runOnJS(closure_6)(false);
                      return;
                    }
                  }
                  let obj2 = { runOnJS: sendCallback(tmp2[16]).runOnJS, setDragging: null };
                  class T {
                    constructor() {
                      return closure_6.getMode();
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
                class T {
                  constructor() {
                    return closure_6.getMode();
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
                  setDragging: tmp25,
                  setPressed: tmp22,
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
              tmp5 = closure_6;
              setPushToTalkStateResult = obj.setPushToTalkState(closure_6.getMediaEngine(), tmp);
              if (tmp) {
                tmp9 = null;
                if (sendCallback != null) {
                  tmp10 = sendCallback();
                }
              } else {
                tmp7 = null;
                if (stopCallback != null) {
                  tmp8 = stopCallback();
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
        tmp31 = A;
        tmp30 = items4;
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
        let handleStartSend = stateFromStores1;
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
        const voiceChatNavigationContext = sendCallback(handleStartSend[14]).useVoiceChatNavigationContext();
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
            MediaEngineActionCreators.setPushToTalkState(MediaEngineStore.getMediaEngine(), tmp);
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
        const Gesture = sendCallback(handleStartSend[17]).Gesture;
        const tmp2Result = sendCallback(handleStartSend[14]);
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
          runOnJS: sendCallback(handleStartSend[16]).runOnJS,
          setDragging: tmp9[1],
          setPressed: tmp6[1],
          setIsSwipeToChatDisabled: prop,
        };
        G.__workletHash = 12037532002826;
        G.__initData = __initData4;
        const obj4 = {
          runOnJS: sendCallback(handleStartSend[16]).runOnJS,
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
        F.__closure = { runOnJS: sendCallback(handleStartSend[16]).runOnJS, setDragging: tmp9[1] };
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
              View = View(handleStartSend[16]).View;
              const obj8 = { style: items7, children: null };
              style = sendCallback(handleStartSend[19]).Button;
              const obj9 = {
                style: buttonBlurPressed,
                textStyle: string.textStyle,
                text: null,
                onTouchStart: null,
                onTouchEnd: null,
                darkenOnPress: true,
              };
              const intl = sendCallback(handleStartSend[18]).intl;
              string = intl.string;
              obj9.text = string(sendCallback(handleStartSend[18]).t.Q8gkVL);
              handleStartSend = function handleStartSend() {
                closure_4(true);
                mode(false);
                if (prop != null) {
                  prop(true);
                }
              };
              obj9.onTouchStart = handleStartSend;
              obj9.onTouchEnd = function handleStopSend() {
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
              jsx(sendCallback(handleStartSend[17]).GestureDetector, { gesture: onEndResult, children: null });
            }
          }
        }
        return tmp18;
      },
);
export { CallPTTButtonLooks };
