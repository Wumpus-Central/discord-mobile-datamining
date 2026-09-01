// === Module 11603: getChatInputMaxHeight ===

// Module 11603 (getChatInputMaxHeight)
import useWindowDimensions from "useWindowDimensions" /* 1493 */;
import KeyboardTypes from "KeyboardTypes" /* 1626 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1894 */;
import useKeyboardType from "useKeyboardType" /* 4342 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5597 */;
import mutable from "mutable" /* 11604 */;
import mutable2 from "mutable" /* 11605 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "subscribeToKeyboardUIStore" /* 1495 */;
import { CHAT_INPUT_PILL_CONTENT_SIZE } from "TextAreaCta" /* 11535 */;

require = arg1;
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
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6));
}
let c6 = 200;
function getChatInputMaxHeightWorklet() {
  const keyboardStateWorklet = mutable.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  const obj = mutable;
  const tmp = require;
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, mutable2.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6));
}
let obj = { getKeyboardStateWorklet: require("mutable").getKeyboardStateWorklet, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, getWindowDimensionsWorklet: require("mutable").getWindowDimensionsWorklet, MAX_HEIGHT: 200, MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE };
getChatInputMaxHeightWorklet.__closure = obj;
getChatInputMaxHeightWorklet.__workletHash = 13025947543230;
getChatInputMaxHeightWorklet.__initData = { code: "function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){const{getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT}=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));}" };
function getChatInputHeightAnimationTimingWorklet(height, textFieldMinHeight) {
  const bound = Math.max(height, textFieldMinHeight);
  if (typeof getChatInputMaxHeightWorklet !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let obj = mutable;
  const keyboardStateWorklet = obj.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  let tmp2Result = tmp2(11605);
  const bound1 = Math.min(bound, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp2Result.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6)));
  tmp2Result = tmp2(4479);
  obj = { duration: tmp2(4482).timingFastDuration, easing: tmp2(4217).Easing.linear };
  return tmp2Result.withTiming(bound1, obj);
}
obj = { getChatInputMaxHeightWorklet, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingFastDuration: require("timingNone").timingFastDuration, Easing: require("module_4217").Easing };
getChatInputHeightAnimationTimingWorklet.__closure = obj;
getChatInputHeightAnimationTimingWorklet.__workletHash = 17042993287975;
getChatInputHeightAnimationTimingWorklet.__initData = { code: "function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize,minHeight){const{getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing}=this.__closure;const value=Math.min(Math.max(contentSize,minHeight),getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});}" };
const result = require("set").fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  closure_0 = arg0;
  let tmp = callback(React.useState(getChatInputMaxHeight), 2);
  closure_1 = tmp[1];
  const items = [arg0];
  const effect = React.useEffect(() => {
    function maybeUpdateMaxHeight() {
      callback2((arg0) => {
        let systemKeyboardHeight = closure_1_0(closure_1_2[4]).getSystemKeyboardHeight();
        const obj = closure_1_0(closure_1_2[4]);
        const tmp = closure_1_0;
        const tmp2 = closure_1_2;
        const customKeyboardHeight = closure_1_0(closure_1_2[5]).getCustomKeyboardHeight();
        const obj2 = closure_1_0(closure_1_2[5]);
        const keyboardType = closure_1_0(closure_1_2[6]).getKeyboardType();
        if (keyboardType !== closure_1_0(closure_1_2[7]).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const obj3 = closure_1_0(closure_1_2[6]);
        const bound = Math.min(closure_1_6, Math.max(2 * closure_1_7, tmp(tmp2[8]).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - closure_1_6));
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
    closure_0 = callback(closure_1_2[11])(maybeUpdateMaxHeight);
    callback = closure_1_5(maybeUpdateMaxHeight);
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
export const getChatInputHeightAnimationTiming = function getChatInputHeightAnimationTiming(height, closure_7) {
  const bound = Math.max(height, closure_7);
  let obj = useSystemKeyboardHeight;
  let systemKeyboardHeight = obj.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const obj2 = useCustomKeyboardHeight;
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  let tmp2Result = tmp2(1493);
  const bound1 = Math.min(bound, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp2Result.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6)));
  tmp2Result = tmp2(4479);
  obj = { duration: tmp2(4482).timingFastDuration, easing: tmp2(4217).Easing.linear };
  return tmp2Result.withTiming(bound1, obj);
};
export { getChatInputHeightAnimationTimingWorklet };