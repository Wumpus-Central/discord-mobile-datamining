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
const InputModes = fn(1074).InputModes;
const jsx = fn(21).jsx;
let CallPTTButtonLooks = { BRAND: "brand", BLUR: "blur" };
fn(4560);
CallPTTButtonLooks = {
  button: { margin: 13 },
  container: null,
  buttonBlur: null,
  buttonBlurPressed: null,
  textStyle: null,
  brandButtonContainer: null,
};
let obj1 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: null };
let ColorUtils = fn(4409);
obj1.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
CallPTTButtonLooks.container = obj1;
CallPTTButtonLooks.buttonBlur = { backgroundColor: "transparent" };
const createStyles = { backgroundColor: null };
ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.6);
CallPTTButtonLooks.buttonBlurPressed = createStyles;
CallPTTButtonLooks.textStyle = { fontSize: 16 };
CallPTTButtonLooks.brandButtonContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles.createStyles(CallPTTButtonLooks);
const __initData = {
  code: "function CallPTTButtonTsx1(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}",
};
const __initData2 = {
  code: "function CallPTTButtonTsx2(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}",
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default noop.memo((look) => {
  let BRAND = look.look;
  if (BRAND === undefined) {
    BRAND = __closure.BRAND;
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
  __closure = sendCallback(stateFromStores1[10]);
  const items = [mode];
  const stateFromStores = __closure.useStateFromStores(items, () => mode.getMode());
  let obj1 = sendCallback(stateFromStores1[10]);
  const items1 = [ref];
  stateFromStores1 = obj1.useStateFromStores(items1, () => ref.getChannelId());
  let obj2 = sendCallback(stateFromStores1[10]);
  const items2 = [first1];
  const items3 = [stateFromStores1];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(stateFromStores1), items3);
  let View = stopCallback;
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
  tmp5 = look.stopCallback(stateFromStores1[11])(stateFromStores1);
  const voiceChatNavigationContext = sendCallback(onTouchStart[12]).useVoiceChatNavigationContext();
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
  const Gesture = sendCallback(onTouchStart[14]).Gesture;
  const tmp2Result = sendCallback(onTouchStart[12]);
  class F {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[15]);
      tmp3 = obj.runOnJS(closure_6)(true);
      obj2 = closure_0(closure_2[15]);
      tmp4 = obj2.runOnJS(closure_4)(false);
      if (null != setIsSwipeToChatDisabled) {
        tmpResult = tmp(tmp2[15]);
        tmp6 = tmpResult.runOnJS(tmp5)(false);
      }
      return;
    }
  }
  __closure = {
    runOnJS: sendCallback(onTouchStart[15]).runOnJS,
    setDragging: tmp11,
    setPressed: tmp8,
    setIsSwipeToChatDisabled: prop,
  };
  F.__closure = __closure;
  F.__workletHash = 10056118853836;
  F.__initData = __initData2;
  const PanResult = Gesture.Pan();
  class N {
    constructor() {
      obj = closure_0(closure_2[15]);
      tmp = obj.runOnJS(closure_6)(false);
      return;
    }
  }
  __closure = { runOnJS: sendCallback(onTouchStart[15]).runOnJS, setDragging: tmp11 };
  N.__closure = __closure;
  N.__workletHash = 8439106360958;
  N.__initData = __initData;
  let onEndResult = Gesture.Pan().onStart(F).onEnd(N);
  let tmp18 = null;
  if (null != stateFromStores1) {
    tmp18 = null;
    if (prop.VOICE_ACTIVITY !== stateFromStores) {
      tmp18 = null;
      if (!isGuildStageVoiceResult) {
        if (BRAND === __closure.BRAND) {
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
        obj1 = { gesture: onEndResult, children: null };
        View = View(onTouchStart[15]).View;
        obj2 = { style: items7, children: null };
        style = sendCallback(onTouchStart[16]).Button;
        const obj3 = {
          style: buttonBlurPressed,
          textStyle: string.textStyle,
          text: null,
          onTouchStart: null,
          onTouchEnd: null,
          darkenOnPress: true,
        };
        const intl = sendCallback(onTouchStart[17]).intl;
        string = intl.string;
        obj3.text = string(sendCallback(onTouchStart[17]).t.Q8gkVL);
        onTouchStart = function onTouchStart() {
          closure_4(true);
          mode(false);
          if (prop != null) {
            prop(true);
          }
        };
        obj3.onTouchStart = onTouchStart;
        obj3.onTouchEnd = function onTouchEnd() {
          closure_4(false);
          if (prop != null) {
            prop(false);
          }
        };
        obj2.children = (
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
        obj1.children = onEndResult;
        jsx(sendCallback(onTouchStart[14]).GestureDetector, { gesture: onEndResult, children: null });
      }
    }
  }
  return tmp18;
});
export { CallPTTButtonLooks };
