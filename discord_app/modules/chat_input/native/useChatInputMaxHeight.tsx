// discord_app/modules/chat_input/native/useChatInputMaxHeight.tsx
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useSystemKeyboardHeight from "../../keyboard/native/useSystemKeyboardHeight.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useKeyboardType from "../../keyboard/native/useKeyboardType.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import useCustomKeyboardHeight from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import useKeyboardStateSharedValue from "../../keyboard/native/useKeyboardStateSharedValue.native.tsx";
import useWindowDimensionsSharedValue from "../../screen/useWindowDimensionsSharedValue.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import subscribeToKeyboardUIStore from "../../keyboard/native/subscribeToKeyboardUIStore.tsx";

const useWindowDimensions = tmp(1477);
require = fn;
function getChatInputMaxHeight() {
  let systemKeyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  return Math.min(
    c6,
    Math.max(
      2 * CHAT_INPUT_PILL_CONTENT_SIZE,
      useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6,
    ),
  );
}
const CHAT_INPUT_PILL_CONTENT_SIZE = fn(11962).CHAT_INPUT_PILL_CONTENT_SIZE;
let c6 = 200;
function getChatInputMaxHeightWorklet() {
  const keyboardStateWorklet = useKeyboardStateSharedValue.getKeyboardStateWorklet();
  ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    keyboardHeight = customKeyboardHeight;
  }
  return Math.min(
    c6,
    Math.max(
      2 * CHAT_INPUT_PILL_CONTENT_SIZE,
      useWindowDimensionsSharedValue.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6,
    ),
  );
}
let obj = {
  getKeyboardStateWorklet: fn(12032).getKeyboardStateWorklet,
  KeyboardTypes: fn(1609).KeyboardTypes,
  getWindowDimensionsWorklet: fn(12033).getWindowDimensionsWorklet,
  MAX_HEIGHT: 200,
  MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE,
};
getChatInputMaxHeightWorklet.__closure = obj;
getChatInputMaxHeightWorklet.__workletHash = 13025947543230;
getChatInputMaxHeightWorklet.__initData = {
  code: "function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){const{getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT}=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));}",
};
function getChatInputHeightAnimationTimingWorklet(height, textFieldMinHeight) {
  if (typeof getChatInputMaxHeightWorklet === "function") {
    let obj = useKeyboardStateSharedValue;
    const keyboardStateWorklet = obj.getKeyboardStateWorklet();
    ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
    if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
      keyboardHeight = customKeyboardHeight;
    }
    let tmp2Result = tmp2(12033);
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(
      tmp,
      Math.min(
        c6,
        Math.max(
          2 * CHAT_INPUT_PILL_CONTENT_SIZE,
          tmp2Result.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - keyboardHeight - c6,
        ),
      ),
    );
    tmp2Result = tmp2(4561);
    obj = { duration: timingPresets.timingFastDuration, easing: ReanimatedRexport.Easing.linear };
    return tmp2Result.withTiming(bound, obj);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
obj = {
  getChatInputMaxHeightWorklet,
  withTiming: fn(4561).withTiming,
  timingFastDuration: fn(4564).timingFastDuration,
  Easing: fn(4296).Easing,
};
getChatInputHeightAnimationTimingWorklet.__closure = obj;
getChatInputHeightAnimationTimingWorklet.__workletHash = 17042993287975;
getChatInputHeightAnimationTimingWorklet.__initData = {
  code: "function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize,minHeight){const{getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing}=this.__closure;const value=Math.min(Math.max(contentSize,minHeight),getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  closure_0 = arg0;
  let tmp = _slicedToArray(noop.useState(getChatInputMaxHeight), 2);
  closure_1 = tmp[1];
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function maybeUpdateMaxHeight() {
      closure_1((arg0) => {
        let systemKeyboardHeight = closure_0(1877).getSystemKeyboardHeight();
        const obj = closure_0(1877);
        const tmp = closure_0;
        const customKeyboardHeight = closure_0(5579).getCustomKeyboardHeight();
        const obj2 = closure_0(5579);
        const keyboardType = closure_0(4427).getKeyboardType();
        if (keyboardType !== closure_0(1609).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const obj3 = closure_0(4427);
        const bound = Math.min(
          closure_2_6,
          Math.max(
            2 * closure_2_7,
            tmp(1477).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - closure_2_6,
          ),
        );
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
}
export function getChatInputMinHeight() {
  return CHAT_INPUT_PILL_CONTENT_SIZE;
}
export { getChatInputMaxHeight };
export { getChatInputMaxHeightWorklet };
export const getChatInputHeightAnimationTiming = function getChatInputHeightAnimationTiming(height, arg1) {
  const bound = Math.max(height, arg1);
  let obj = useSystemKeyboardHeight;
  let systemKeyboardHeight = obj.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const keyboardType = useKeyboardType.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  let tmp2Result = tmp2(1477);
  const bound1 = Math.min(
    bound,
    Math.min(
      c6,
      Math.max(
        2 * CHAT_INPUT_PILL_CONTENT_SIZE,
        tmp2Result.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6,
      ),
    ),
  );
  tmp2Result = tmp2(4561);
  obj = { duration: tmp2(4564).timingFastDuration, easing: tmp2(4296).Easing.linear };
  return tmp2Result.withTiming(bound1, obj);
};
export { getChatInputHeightAnimationTimingWorklet };
