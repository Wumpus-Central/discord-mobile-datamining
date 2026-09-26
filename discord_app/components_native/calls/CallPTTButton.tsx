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
const CallPTTButtonLooks = { BRAND: "brand", BLUR: "blur" };
const createStyles = fn(4836);
let obj2 = {
  button: { margin: 13 },
  container: null,
  buttonBlur: null,
  buttonBlurPressed: null,
  textStyle: null,
  brandButtonContainer: null,
};
let obj4 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: null };
let ColorUtils = fn(4683);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
obj2.container = obj4;
obj2.buttonBlur = { backgroundColor: "transparent" };
const obj5 = { backgroundColor: null };
ColorUtils = fn(4683);
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
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default noop.memo((look) => {
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
  obj = sendCallback(stateFromStores1[10]);
  const items = [mode];
  const stateFromStores = obj.useStateFromStores(items, () => mode.getMode());
  const items1 = [ref];
  stateFromStores1 = sendCallback(stateFromStores1[10]).useStateFromStores(items1, () => ref.getChannelId());
  let obj2 = sendCallback(stateFromStores1[10]);
  const items2 = [first1];
  const items3 = [stateFromStores1];
  const stateFromStores2 = sendCallback(stateFromStores1[10]).useStateFromStores(
    items2,
    () => ChannelStore.getChannel(stateFromStores1),
    items3,
  );
  let View = stopCallback;
  const obj3 = sendCallback(stateFromStores1[10]);
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
  const PanResult = Gesture.Pan();
  F.__closure = {
    runOnJS: sendCallback(onTouchStart[15]).runOnJS,
    setDragging: tmp9[1],
    setPressed: tmp6[1],
    setIsSwipeToChatDisabled: prop,
  };
  F.__workletHash = 10056118853836;
  F.__initData = __initData2;
  const obj4 = {
    runOnJS: sendCallback(onTouchStart[15]).runOnJS,
    setDragging: tmp9[1],
    setPressed: tmp6[1],
    setIsSwipeToChatDisabled: prop,
  };
  class N {
    constructor() {
      obj = closure_0(closure_2[15]);
      tmp = obj.runOnJS(closure_6)(false);
      return;
    }
  }
  const onStartResult = PanResult.onStart(F);
  N.__closure = { runOnJS: sendCallback(onTouchStart[15]).runOnJS, setDragging: tmp9[1] };
  N.__workletHash = 8439106360958;
  N.__initData = __initData;
  let onEndResult = onStartResult.onEnd(N);
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
        View = View(onTouchStart[15]).View;
        const obj8 = { style: items7, children: null };
        style = sendCallback(onTouchStart[16]).Button;
        const obj9 = {
          style: buttonBlurPressed,
          textStyle: string.textStyle,
          text: null,
          onTouchStart: null,
          onTouchEnd: null,
          darkenOnPress: true,
        };
        const intl = sendCallback(onTouchStart[17]).intl;
        string = intl.string;
        obj9.text = string(sendCallback(onTouchStart[17]).t.Q8gkVL);
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
        jsx(sendCallback(onTouchStart[14]).GestureDetector, { gesture: onEndResult, children: null });
      }
    }
  }
  return tmp18;
});
export { CallPTTButtonLooks };
