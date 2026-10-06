// === Module 11659: useChatInputMaxHeight ===

// Module 11659 (useChatInputMaxHeight)
import useWindowDimensions from "useWindowDimensions" /* 1484 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1884 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import useKeyboardType from "useKeyboardType" /* 4753 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 6481 */;
import ChatInputConstants from "ChatInputConstants" /* 11589 */;
import useKeyboardStateSharedValue from "useKeyboardStateSharedValue" /* 11660 */;
import useWindowDimensionsSharedValue from "useWindowDimensionsSharedValue" /* 11661 */;
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 11662 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1486 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

function getChatInputMaxHeight() {
  const obj = useSystemKeyboardHeight;
  let systemKeyboardHeight = obj.getSystemKeyboardHeight();
  const obj2 = useCustomKeyboardHeight;
  const customKeyboardHeight = obj2.getCustomKeyboardHeight();
  const obj3 = useKeyboardType;
  const keyboardType = obj3.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const tmpResult = useWindowDimensions;
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmpResult.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6));
}
const CHAT_INPUT_PILL_CONTENT_SIZE = ChatInputConstants.CHAT_INPUT_PILL_CONTENT_SIZE;
let c6 = 200;
function getChatInputMaxHeightWorklet() {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  const obj = useKeyboardStateSharedValue;
  const keyboardStateWorklet = obj.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  const tmpResult = useWindowDimensionsSharedValue;
  return Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmpResult.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6));
}
let obj = { getKeyboardStateWorklet: useKeyboardStateSharedValue.getKeyboardStateWorklet, KeyboardTypes: KeyboardTypes.KeyboardTypes, getWindowDimensionsWorklet: useWindowDimensionsSharedValue.getWindowDimensionsWorklet, MAX_HEIGHT: 200, MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE };
getChatInputMaxHeightWorklet.__closure = obj;
getChatInputMaxHeightWorklet.__workletHash = 13025947543230;
getChatInputMaxHeightWorklet.__initData = { code: "function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){const{getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT}=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));}" };
function getChatInputHeightAnimationTimingWorklet(height, textFieldMinHeight) {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  const _Math = Math;
  if (typeof getChatInputMaxHeightWorklet === "function") {
    const obj = useKeyboardStateSharedValue;
    const keyboardStateWorklet = obj.getKeyboardStateWorklet();
    ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
    if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
      keyboardHeight = customKeyboardHeight;
    }
    const _Math2 = Math;
    const _Math3 = Math;
    const tmp2Result = useWindowDimensionsSharedValue;
    const minResult = min(tmp, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp2Result.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6)));
    const obj2 = { duration: timingPresets.timingFastDuration, easing: ReanimatedRexport.Easing.linear };
    const withTiming = timing.withTiming;
    timing;
    return withTiming(minResult, obj2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let obj2 = { getChatInputMaxHeightWorklet, withTiming: timing.withTiming, timingFastDuration: timingPresets.timingFastDuration, Easing: ReanimatedRexport.Easing };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp3;
  let tmp4;
  let tmp5;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  [tmp3, importDefault] = _slicedToArray(react.useState(getChatInputMaxHeight), 2);
  const tmp2 = _slicedToArray(react.useState(getChatInputMaxHeight), 2);
  if (cResult[0] !== arg0) {
    const fn = function u() {
      let closure_1;
      function maybeUpdateMaxHeight() {
        closure_1((arg0) => {
          const obj = closure_0(closure_2_2[4]);
          let systemKeyboardHeight = obj.getSystemKeyboardHeight();
          const obj2 = closure_0(closure_2_2[5]);
          const customKeyboardHeight = obj2.getCustomKeyboardHeight();
          const obj3 = closure_0(closure_2_2[6]);
          const keyboardType = obj3.getKeyboardType();
          if (keyboardType !== closure_0(closure_2_2[7]).KeyboardTypes.SYSTEM) {
            systemKeyboardHeight = customKeyboardHeight;
          }
          let tmp6 = arg0;
          const tmpResult = closure_0(closure_2_2[8]);
          const bound = Math.min(closure_2_6, Math.max(2 * closure_2_7, tmpResult.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - closure_2_6));
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
      closure_0 = subscribeToWindowDimensionsDefault(maybeUpdateMaxHeight);
      importDefault = subscribeToKeyboardUIStore(maybeUpdateMaxHeight);
      return () => {
        closure_0();
        closure_1();
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(tmp4, tmp5);
  return tmp3;
}) : ((arg0) => {
  let closure_1;
  let first;
  let closure_0 = arg0;
  [first, closure_1] = react.useState(getChatInputMaxHeight);
  const items = [arg0];
  const effect = react.useEffect(() => {
    function maybeUpdateMaxHeight() {
      closure_1((arg0) => {
        const obj = closure_0(closure_2_2[4]);
        let systemKeyboardHeight = obj.getSystemKeyboardHeight();
        const obj2 = closure_0(closure_2_2[5]);
        const customKeyboardHeight = obj2.getCustomKeyboardHeight();
        const obj3 = closure_0(closure_2_2[6]);
        const keyboardType = obj3.getKeyboardType();
        if (keyboardType !== closure_0(closure_2_2[7]).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const tmpResult = closure_0(closure_2_2[8]);
        const bound = Math.min(closure_2_6, Math.max(2 * closure_2_7, tmpResult.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - closure_2_6));
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
    closure_0 = closure_1(dependencyMap[13])(maybeUpdateMaxHeight);
    closure_1 = subscribeToKeyboardUIStore(maybeUpdateMaxHeight);
    return () => {
      closure_0();
      closure_1();
    };
  }, items);
  return first;
});
getChatInputHeightAnimationTimingWorklet.__closure = obj2;
getChatInputHeightAnimationTimingWorklet.__workletHash = 17042993287975;
getChatInputHeightAnimationTimingWorklet.__initData = { code: "function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize,minHeight){const{getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing}=this.__closure;const value=Math.min(Math.max(contentSize,minHeight),getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});}" };
const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default tmp2;
export function getChatInputMinHeight() {
  return CHAT_INPUT_PILL_CONTENT_SIZE;
}
export { getChatInputMaxHeight };
export { getChatInputMaxHeightWorklet };
export const getChatInputHeightAnimationTiming = function getChatInputHeightAnimationTiming(height, sharedValue) {
  const _Math = Math;
  const bound = Math.max(height, sharedValue);
  const obj = useSystemKeyboardHeight;
  let systemKeyboardHeight = obj.getSystemKeyboardHeight();
  const obj2 = useCustomKeyboardHeight;
  const customKeyboardHeight = obj2.getCustomKeyboardHeight();
  const obj3 = useKeyboardType;
  const keyboardType = obj3.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const tmp2Result = useWindowDimensions;
  const minResult = min(bound, Math.min(c6, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, tmp2Result.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6)));
  const tmp2Result2 = timing;
  const obj4 = { duration: timingPresets.timingFastDuration, easing: ReanimatedRexport.Easing.linear };
  return tmp2Result2.withTiming(minResult, obj4);
};
export { getChatInputHeightAnimationTimingWorklet };