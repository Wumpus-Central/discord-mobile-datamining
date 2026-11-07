// === Module 13026: useChatInputMaxHeight ===

// Module 13026 (useChatInputMaxHeight)
import useWindowDimensions from "useWindowDimensions" /* 1493 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import _mod1652 from "module_1652" /* 1652 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 2020 */;
import useKeyboardType from "useKeyboardType" /* 5325 */;
import timing_timing from "timing/timing" /* 5370 */;
import timingPresets from "timingPresets" /* 5373 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5736 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1495 */;

require = fn;
function getChatInputMaxHeight() {
  let systemKeyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  return Math.min(200, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200));
}
const CHAT_INPUT_PILL_CONTENT_SIZE = fn(13023).CHAT_INPUT_PILL_CONTENT_SIZE;
let items = [{ code: "(function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){let[getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT]=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));})" }, fn(13027).getKeyboardStateWorklet, fn(1625).KeyboardTypes, fn(13028).getWindowDimensionsWorklet, 200, CHAT_INPUT_PILL_CONTENT_SIZE];
let closure_129_0;
let closure_129_1;
let closure_129_2;
let closure_129_3;
let closure_129_4;
[tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
function getChatInputMaxHeightWorklet() {
  const tmp = require();
  let customKeyboardHeight = tmp.keyboardHeight;
  if (tmp.keyboardType !== importDefault.SYSTEM) {
    customKeyboardHeight = tmp.customKeyboardHeight;
  }
  return Math.min(_slicedToArray, Math.max(2 * noop, dependencyMap({ ignoreKeyboard: true }).height - customKeyboardHeight - _slicedToArray));
}
const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
getChatInputMaxHeightWorklet.__closure = items1;
getChatInputMaxHeightWorklet.__workletHash = 12937272049735;
getChatInputMaxHeightWorklet.__initData = tmp2;
const items2 = [{ code: "(function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize,minHeight){let[getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing]=this.__closure;const value=Math.min(Math.max(contentSize,minHeight),getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});})" }, getChatInputMaxHeightWorklet, fn(5370).withTiming, fn(5373).timingFastDuration, fn(1652).Easing];
let closure_130_0;
let closure_130_1;
let closure_130_2;
let closure_130_3;
[tmp8, tmp9, tmp10, tmp11, tmp12] = items2;
function getChatInputHeightAnimationTimingWorklet(arg0, arg1) {
  const bound = Math.max(arg0, arg1);
  return importDefault(Math.min(bound, require()), { duration: dependencyMap, easing: _slicedToArray.linear });
}
const items3 = [tmp9, tmp10, tmp11, tmp12];
getChatInputHeightAnimationTimingWorklet.__closure = items3;
getChatInputHeightAnimationTimingWorklet.__workletHash = 14680370017566;
getChatInputHeightAnimationTimingWorklet.__initData = tmp8;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(getChatInputMaxHeight), 2);
  closure_1 = tmp[1];
  items = [arg0];
  const effect = noop.useEffect(() => {
    function maybeUpdateMaxHeight() {
      closure_1((arg0) => {
        let systemKeyboardHeight = closure_0(2020).getSystemKeyboardHeight();
        const obj = closure_0(2020);
        const customKeyboardHeight = closure_0(5736).getCustomKeyboardHeight();
        const obj2 = closure_0(5736);
        const keyboardType = closure_0(5325).getKeyboardType();
        if (keyboardType !== closure_0(1625).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const obj3 = closure_0(5325);
        const bound = Math.min(200, Math.max(2 * closure_2_6, closure_0(1493).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200));
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
export function getChatInputHeightAnimationTiming(height, sharedValue) {
  const bound = Math.max(height, sharedValue);
  let systemKeyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const bound1 = Math.min(bound, Math.min(200, Math.max(2 * CHAT_INPUT_PILL_CONTENT_SIZE, useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200)));
  const tmp2Result = useWindowDimensions;
  const tmp2Result2 = timing_timing;
  return tmp2Result2.withTiming(bound1, { duration: timingPresets.timingFastDuration, easing: _mod1652.Easing.linear });
}
export { getChatInputHeightAnimationTimingWorklet };