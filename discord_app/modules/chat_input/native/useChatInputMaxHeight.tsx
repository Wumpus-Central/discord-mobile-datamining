// discord_app/modules/chat_input/native/useChatInputMaxHeight.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { CHAT_INPUT_PILL_CONTENT_SIZE } from "TextAreaCta";
import { KeyboardTypes } from "../../keyboard/native/KeyboardTypes.tsx";
import { useCustomKeyboardHeight } from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import { mutable } from "../../keyboard/native/useKeyboardStateSharedValue.native.tsx";
import { useKeyboardType } from "../../keyboard/native/useKeyboardType.tsx";
import { useSystemKeyboardHeight } from "../../keyboard/native/useSystemKeyboardHeight.native.tsx";
import { mutable } from "../../screen/useWindowDimensionsSharedValue.native.tsx";

const require = arg1;
function getChatInputMaxHeight() {
  let systemKeyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
  const obj = useSystemKeyboardHeight;
  const tmp = require;
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const obj2 = useCustomKeyboardHeight;
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const obj3 = useKeyboardType;
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp(1493).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6));
}
let c6 = 200;
function getChatInputMaxHeightWorklet() {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  const keyboardStateWorklet = mutable.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  const obj = mutable;
  const tmp = require;
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, mutable.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6));
}
let obj = { getKeyboardStateWorklet: require("mutable").getKeyboardStateWorklet, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, getWindowDimensionsWorklet: require("mutable").getWindowDimensionsWorklet, MAX_HEIGHT: 200, MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE };
getChatInputMaxHeightWorklet.__closure = obj;
getChatInputMaxHeightWorklet.__workletHash = 13025947543230;
getChatInputMaxHeightWorklet.__initData = { code: "function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){const{getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT}=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));}" };
function getChatInputHeightAnimationTimingWorklet(height) {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  if (typeof getChatInputMaxHeightWorklet !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let obj = mutable;
  const keyboardStateWorklet = obj.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  let tmpResult = tmp(11425);
  const bound = Math.min(height, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmpResult.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6)));
  tmpResult = tmp(4343);
  obj = { duration: tmp(4346).timingFastDuration, easing: tmp(4083).Easing.linear };
  return tmpResult.withTiming(bound, obj);
}
obj = { getChatInputMaxHeightWorklet, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingFastDuration: require("timingNone").timingFastDuration, Easing: require("module_4083").Easing };
getChatInputHeightAnimationTimingWorklet.__closure = obj;
getChatInputHeightAnimationTimingWorklet.__workletHash = 16683857130156;
getChatInputHeightAnimationTimingWorklet.__initData = { code: "function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize){const{getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing}=this.__closure;const value=Math.min(contentSize,getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});}" };
const result = require("subscribeToKeyboardUIStore").fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  let closure_0 = arg0;
  let tmp = callback(React.useState(getChatInputMaxHeight), 2);
  let closure_1 = tmp[1];
  const items = [arg0];
  const effect = React.useEffect(() => {
    function maybeUpdateMaxHeight() {
      callback2((arg0) => {
        let systemKeyboardHeight = outer1_0(outer1_2[4]).getSystemKeyboardHeight();
        const obj = outer1_0(outer1_2[4]);
        const tmp = outer1_0;
        const tmp2 = outer1_2;
        const customKeyboardHeight = outer1_0(outer1_2[5]).getCustomKeyboardHeight();
        const obj2 = outer1_0(outer1_2[5]);
        const keyboardType = outer1_0(outer1_2[6]).getKeyboardType();
        if (keyboardType !== outer1_0(outer1_2[7]).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const obj3 = outer1_0(outer1_2[6]);
        const bound = Math.min(outer1_6, Math.max(2 * outer1_7, tmp(tmp2[8]).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - outer1_6));
        if (arg0 !== bound) {
          tmp6 = bound;
          if (callback != null) {
            callback();
            tmp6 = bound;
          }
        }
        return tmp6;
      });
    }
    let closure_0 = callback(outer1_2[11])(maybeUpdateMaxHeight);
    callback = outer1_5(maybeUpdateMaxHeight);
    return () => {
      callback();
      callback2();
    };
  }, items);
  return tmp[0];
};
export function getChatInputMinHeight() {
  return CHAT_INPUT_PILL_CONTENT_SIZE;
}
export { getChatInputMaxHeight };
export { getChatInputMaxHeightWorklet };
export const getChatInputHeightAnimationTiming = function getChatInputHeightAnimationTiming(height) {
  let obj = useSystemKeyboardHeight;
  let systemKeyboardHeight = obj.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const obj2 = useCustomKeyboardHeight;
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  let tmpResult = tmp(1493);
  const bound = Math.min(height, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmpResult.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6)));
  tmpResult = tmp(4343);
  obj = { duration: tmp(4346).timingFastDuration, easing: tmp(4083).Easing.linear };
  return tmpResult.withTiming(bound, obj);
};
export { getChatInputHeightAnimationTimingWorklet };