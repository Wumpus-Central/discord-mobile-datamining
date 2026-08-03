import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import { InputModes } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";

const require = arg1;
let c4 = importAllResult;
let obj = { BRAND: "brand", BLUR: "blur" };
obj = { button: { margin: 13 }, container: null, buttonBlur: null, buttonBlurPressed: null, textStyle: null, brandButtonContainer: null };
let obj1 = { borderRadius: require("Themes").radii.xs, overflow: "hidden", backgroundColor: null };
obj1[2] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.WHITE, 0.24);
obj[1] = obj1;
obj[2] = { backgroundColor: "transparent" };
createCacheKey = { backgroundColor: null };
createCacheKey[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.6);
obj[3] = createCacheKey;
obj[4] = { fontSize: 16 };
obj[5] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function CallPTTButtonTsx1(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}" };
let closure_13 = { code: "function CallPTTButtonTsx2(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}" };
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo((look) => {
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
  let importAllResult;
  let first1;
  let c6;
  let ref;
  let prop;
  let string = callback();
  let onTouchStart = stateFromStores1;
  obj = sendCallback(stateFromStores1[10]);
  const items = [c6];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined2.getMode());
  let obj1 = sendCallback(stateFromStores1[10]);
  const items1 = [ref];
  stateFromStores1 = obj1.useStateFromStores(items1, () => ref.getChannelId());
  let obj2 = sendCallback(stateFromStores1[10]);
  const items2 = [first1];
  const items3 = [stateFromStores1];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => first1.getChannel(stateFromStores1), items3);
  let View = stopCallback;
  const tmp6 = first(importAllResult.useState(false), 2);
  first = tmp6[0];
  importAllResult = tmp8;
  const tmp9 = first(importAllResult.useState(false), 2);
  first1 = tmp9[0];
  c6 = tmp11;
  let isGuildStageVoiceResult;
  if (stateFromStores2 != null) {
    isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = !tmp5;
  }
  ref = obj5.useRef(false);
  tmp5 = stopCallback(stateFromStores1[11])(stateFromStores1);
  const voiceChatNavigationContext = sendCallback(onTouchStart[12]).useVoiceChatNavigationContext();
  prop = undefined;
  if (voiceChatNavigationContext != null) {
    prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
  }
  const items4 = [ref, first, first1, sendCallback, stopCallback];
  const effect = obj5.useEffect(() => {
    let tmp = first;
    if (!first) {
      tmp = first1;
    }
    if (tmp !== ref.current) {
      sendCallback(stateFromStores1[13]).setPushToTalkState(tmp);
      if (tmp) {
        if (sendCallback != null) {
          sendCallback();
        }
      } else if (stopCallback != null) {
        stopCallback();
      }
      const obj = sendCallback(stateFromStores1[13]);
    }
    ref.current = tmp;
  }, items4);
  const Gesture = tmp2(onTouchStart[14]).Gesture;
  const tmp2Result = sendCallback(onTouchStart[12]);
  class F {
    constructor() {
      tmp = sendCallback;
      tmp2 = f84763;
      obj = sendCallback(f84763[15]);
      tmp3 = obj.runOnJS(c6)(true);
      obj2 = sendCallback(f84763[15]);
      tmp4 = obj2.runOnJS(c4)(false);
      if (null != setIsSwipeToChatDisabled) {
        tmpResult = tmp(tmp2[15]);
        tmp6 = tmpResult.runOnJS(tmp5)(false);
      }
      return;
    }
  }
  obj = { runOnJS: tmp2(onTouchStart[15]).runOnJS, setDragging: tmp11, setPressed: tmp8, setIsSwipeToChatDisabled: prop };
  F.__closure = obj;
  F.__workletHash = 10056118853836;
  F.__initData = closure_13;
  const PanResult = Gesture.Pan();
  class N {
    constructor() {
      obj = sendCallback(f84763[15]);
      tmp = obj.runOnJS(c6)(false);
      return;
    }
  }
  obj = { runOnJS: tmp2(onTouchStart[15]).runOnJS, setDragging: tmp11 };
  N.__closure = obj;
  N.__workletHash = 8439106360958;
  N.__initData = closure_12;
  let onEndResult = Gesture.Pan().onStart(F).onEnd(N);
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
          items7 = [, , ];
          ({ button: arr6[0], container: arr6[1] } = string);
          items7[2] = style;
          if (!first) {
            if (!first1) {
              buttonBlurPressed = string.buttonBlur;
            }
          }
          buttonBlurPressed = string.buttonBlurPressed;
        }
        obj1 = { gesture: null, children: null };
        obj1[0] = onEndResult;
        View = View(onTouchStart[15]).View;
        obj2 = { style: null, children: null };
        obj2[0] = items7;
        style = tmp2(onTouchStart[16]).Button;
        const obj3 = { style: null, textStyle: null, text: null, onTouchStart: null, onTouchEnd: null, darkenOnPress: true };
        obj3[0] = buttonBlurPressed;
        obj3[1] = string.textStyle;
        const intl = tmp2(onTouchStart[17]).intl;
        string = intl.string;
        obj3[2] = string(tmp2(onTouchStart[17]).t.Q8gkVL);
        onTouchStart = function onTouchStart() {
          _undefined(true);
          _undefined2(false);
          if (prop != null) {
            prop(true);
          }
        };
        obj3[3] = onTouchStart;
        obj3[4] = function onTouchEnd(nativeEvent) {
          _undefined(false);
          if (prop != null) {
            prop(false);
          }
        };
        obj2[1] = <style style={null} textStyle={null} text={null} onTouchStart={null} onTouchEnd={null} darkenOnPress />;
        onEndResult = <View style={null}>{null}</View>;
        obj1[1] = onEndResult;
        jsx(tmp2(onTouchStart[14]).GestureDetector, { gesture: null, children: null });
      }
    }
  }
  return tmp18;
});
const result = require("ensureGuildLoaded").fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default memoResult;
export const CallPTTButtonLooks = obj;