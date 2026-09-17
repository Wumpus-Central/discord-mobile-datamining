// === Module 12182: useChatInputMaxHeight ===

// Module 12182 (useChatInputMaxHeight)
import useWindowDimensions from "useWindowDimensions" /* 1478 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1878 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import useKeyboardType from "useKeyboardType" /* 4508 */;
import timing from "timing" /* 4641 */;
import timingPresets from "timingPresets" /* 4644 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5667 */;
import useKeyboardStateSharedValue from "useKeyboardStateSharedValue" /* 12183 */;
import useWindowDimensionsSharedValue from "useWindowDimensionsSharedValue" /* 12184 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1480 */;

require = fn;
function getChatInputMaxHeight() {
  let systemKeyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6));
}
const CHAT_INPUT_PILL_CONTENT_SIZE = fn(12113).CHAT_INPUT_PILL_CONTENT_SIZE;
let c6 = 200;
function getChatInputMaxHeightWorklet() {
  const keyboardStateWorklet = useKeyboardStateSharedValue.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensionsSharedValue.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6));
}
getChatInputMaxHeightWorklet.__closure = { getKeyboardStateWorklet: fn(12183).getKeyboardStateWorklet, KeyboardTypes: fn(1610).KeyboardTypes, getWindowDimensionsWorklet: fn(12184).getWindowDimensionsWorklet, MAX_HEIGHT: 200, MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE };
getChatInputMaxHeightWorklet.__workletHash = 13025947543230;
getChatInputMaxHeightWorklet.__initData = { code: "function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){const{getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT}=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));}" };
function getChatInputHeightAnimationTimingWorklet(height, textFieldMinHeight) {
  if (typeof getChatInputMaxHeightWorklet === "function") {
    const keyboardStateWorklet = useKeyboardStateSharedValue.getKeyboardStateWorklet();
    ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
    if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
      keyboardHeight = customKeyboardHeight;
    }
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(tmp, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensionsSharedValue.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6)));
    const tmp2Result = useWindowDimensionsSharedValue;
    const obj2 = { duration: timingPresets.timingFastDuration, easing: ReanimatedRexport.Easing.linear };
    return timing.withTiming(bound, obj2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let obj = { getKeyboardStateWorklet: fn(12183).getKeyboardStateWorklet, KeyboardTypes: fn(1610).KeyboardTypes, getWindowDimensionsWorklet: fn(12184).getWindowDimensionsWorklet, MAX_HEIGHT: 200, MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE };
getChatInputHeightAnimationTimingWorklet.__closure = { getChatInputMaxHeightWorklet, withTiming: fn(4641).withTiming, timingFastDuration: fn(4644).timingFastDuration, Easing: fn(4376).Easing };
getChatInputHeightAnimationTimingWorklet.__workletHash = 17042993287975;
getChatInputHeightAnimationTimingWorklet.__initData = { code: "function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize,minHeight){const{getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing}=this.__closure;const value=Math.min(Math.max(contentSize,minHeight),getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(getChatInputMaxHeight), 2);
  closure_1 = tmp[1];
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function maybeUpdateMaxHeight() {
      closure_1((arg0) => {
        let systemKeyboardHeight = closure_0(1878).getSystemKeyboardHeight();
        const obj = closure_0(1878);
        const customKeyboardHeight = closure_0(5667).getCustomKeyboardHeight();
        const obj2 = closure_0(5667);
        const keyboardType = closure_0(4508).getKeyboardType();
        if (keyboardType !== closure_0(1610).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const obj3 = closure_0(4508);
        const bound = Math.min(closure_2_6, Math.max(2 * closure_2_7, closure_0(1478).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - closure_2_6));
        if (arg0 !== bound) {
          tmp6 = bound;
          if (closure_1_0 != null) {
            closure_1_0();
            tmp6 = bound;
          }
        }
        return tmp6;
      });
    }
    closure_0 = closure_1(dependencyMap[11])(maybeUpdateMaxHeight);
    closure_1 = subscribeToKeyboardUIStore(maybeUpdateMaxHeight);
    return () => {
      closure_0();
      closure_1();
    };
  }, items);
  return tmp[0];
};
export function getChatInputMinHeight() {
  return CHAT_INPUT_PILL_CONTENT_SIZE;
}
export { getChatInputMaxHeight };
export { getChatInputMaxHeightWorklet };
export const getChatInputHeightAnimationTiming = function getChatInputHeightAnimationTiming(height, sharedValue) {
  const bound = Math.max(height, sharedValue);
  let systemKeyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const bound1 = Math.min(bound, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6)));
  const tmp2Result = useWindowDimensions;
  const tmp2Result2 = timing;
  return tmp2Result2.withTiming(bound1, { duration: timingPresets.timingFastDuration, easing: ReanimatedRexport.Easing.linear });
};
export { getChatInputHeightAnimationTimingWorklet };