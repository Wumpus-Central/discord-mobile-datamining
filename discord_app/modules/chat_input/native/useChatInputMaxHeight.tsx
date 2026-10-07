// discord_app/modules/chat_input/native/useChatInputMaxHeight.tsx
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useSystemKeyboardHeight from "../../keyboard/native/useSystemKeyboardHeight.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useKeyboardType from "../../keyboard/native/useKeyboardType.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import useCustomKeyboardHeight from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import useKeyboardStateSharedValue from "../../keyboard/native/useKeyboardStateSharedValue.native.tsx";
import useWindowDimensionsSharedValue from "../../screen/useWindowDimensionsSharedValue.native.tsx";
import subscribeToWindowDimensionsDefault from "../../screen/subscribeToWindowDimensions.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import subscribeToKeyboardUIStore from "../../keyboard/native/subscribeToKeyboardUIStore.tsx";

const require = globalThis.__r;

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
const CHAT_INPUT_PILL_CONTENT_SIZE = fn(11589).CHAT_INPUT_PILL_CONTENT_SIZE;
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
getChatInputMaxHeightWorklet.__closure = {
  getKeyboardStateWorklet: fn(11660).getKeyboardStateWorklet,
  KeyboardTypes: fn(1616).KeyboardTypes,
  getWindowDimensionsWorklet: fn(11661).getWindowDimensionsWorklet,
  MAX_HEIGHT: 200,
  MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE,
};
getChatInputMaxHeightWorklet.__workletHash = 13025947543230;
getChatInputMaxHeightWorklet.__initData = {
  code: "function getChatInputMaxHeightWorklet_useChatInputMaxHeightTsx1(){const{getKeyboardStateWorklet,KeyboardTypes,getWindowDimensionsWorklet,MAX_HEIGHT,MIN_HEIGHT}=this.__closure;const{keyboardHeight:keyboardHeightSystem,customKeyboardHeight:customKeyboardHeight,keyboardType:keyboardType}=getKeyboardStateWorklet();const keyboardHeight=keyboardType!==KeyboardTypes.SYSTEM?customKeyboardHeight:keyboardHeightSystem;const window=getWindowDimensionsWorklet({ignoreKeyboard:true});const windowHeightNoKeyboard=window.height-keyboardHeight;return Math.min(MAX_HEIGHT,Math.max(MIN_HEIGHT*2,windowHeightNoKeyboard-MAX_HEIGHT));}",
};
const ReactCompilerGating = fn(558);
function getChatInputHeightAnimationTimingWorklet(height, textFieldMinHeight) {
  if (typeof getChatInputMaxHeightWorklet === "function") {
    const keyboardStateWorklet = useKeyboardStateSharedValue.getKeyboardStateWorklet();
    ({ keyboardHeight, customKeyboardHeight, keyboardType } = keyboardStateWorklet);
    if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
      keyboardHeight = customKeyboardHeight;
    }
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(
      tmp,
      Math.min(
        c6,
        Math.max(
          2 * CHAT_INPUT_PILL_CONTENT_SIZE,
          useWindowDimensionsSharedValue.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height -
            keyboardHeight -
            c6,
        ),
      ),
    );
    const tmp2Result = useWindowDimensionsSharedValue;
    const obj2 = { duration: timingPresets.timingFastDuration, easing: ReanimatedRexport.Easing.linear };
    return timing.withTiming(bound, obj2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let obj3 = { getChatInputMaxHeightWorklet, withTiming: null, timingFastDuration: null, Easing: null };
let obj = {
  getKeyboardStateWorklet: fn(11660).getKeyboardStateWorklet,
  KeyboardTypes: fn(1616).KeyboardTypes,
  getWindowDimensionsWorklet: fn(11661).getWindowDimensionsWorklet,
  MAX_HEIGHT: 200,
  MIN_HEIGHT: CHAT_INPUT_PILL_CONTENT_SIZE,
};
obj3.withTiming = fn(4897).withTiming;
obj3.timingFastDuration = fn(4900).timingFastDuration;
obj3.Easing = fn(4618).Easing;
getChatInputHeightAnimationTimingWorklet.__closure = obj3;
getChatInputHeightAnimationTimingWorklet.__workletHash = 17042993287975;
getChatInputHeightAnimationTimingWorklet.__initData = {
  code: "function getChatInputHeightAnimationTimingWorklet_useChatInputMaxHeightTsx2(contentSize,minHeight){const{getChatInputMaxHeightWorklet,withTiming,timingFastDuration,Easing}=this.__closure;const value=Math.min(Math.max(contentSize,minHeight),getChatInputMaxHeightWorklet());return withTiming(value,{duration:timingFastDuration,easing:Easing.linear});}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      let obj = require("c");
      [tmp3, importDefault] = noop.useState(getChatInputMaxHeight);
      if (cResult[0] !== arg0) {
        const fn = function u() {
          function maybeUpdateMaxHeight() {
            closure_1((arg0) => {
              let systemKeyboardHeight = closure_0(1884).getSystemKeyboardHeight();
              const obj = closure_0(1884);
              const customKeyboardHeight = closure_0(6481).getCustomKeyboardHeight();
              const obj2 = closure_0(6481);
              const keyboardType = closure_0(4753).getKeyboardType();
              if (keyboardType !== closure_0(1616).KeyboardTypes.SYSTEM) {
                systemKeyboardHeight = customKeyboardHeight;
              }
              let tmp6 = arg0;
              const obj3 = closure_0(4753);
              const bound = Math.min(
                closure_2_6,
                Math.max(
                  2 * closure_2_7,
                  closure_0(1484).getWindowDimensions({ ignoreKeyboard: true }).height -
                    systemKeyboardHeight -
                    closure_2_6,
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
          closure_0 = subscribeToWindowDimensionsDefault(maybeUpdateMaxHeight);
          closure_1 = subscribeToKeyboardUIStore(maybeUpdateMaxHeight);
          return () => {
            closure_0();
            closure_1();
          };
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp5 = items;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      return tmp3;
    }
  : (arg0) => {
      closure_0 = arg0;
      const tmp = _slicedToArray(noop.useState(getChatInputMaxHeight), 2);
      closure_1 = tmp[1];
      const items = [arg0];
      const effect = noop.useEffect(() => {
        function maybeUpdateMaxHeight() {
          closure_1((arg0) => {
            let systemKeyboardHeight = closure_0(1884).getSystemKeyboardHeight();
            const obj = closure_0(1884);
            const customKeyboardHeight = closure_0(6481).getCustomKeyboardHeight();
            const obj2 = closure_0(6481);
            const keyboardType = closure_0(4753).getKeyboardType();
            if (keyboardType !== closure_0(1616).KeyboardTypes.SYSTEM) {
              systemKeyboardHeight = customKeyboardHeight;
            }
            let tmp6 = arg0;
            const obj3 = closure_0(4753);
            const bound = Math.min(
              closure_2_6,
              Math.max(
                2 * closure_2_7,
                closure_0(1484).getWindowDimensions({ ignoreKeyboard: true }).height -
                  systemKeyboardHeight -
                  closure_2_6,
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
        closure_0 = closure_1(dependencyMap[13])(maybeUpdateMaxHeight);
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
  const bound1 = Math.min(
    bound,
    Math.min(
      c6,
      Math.max(
        2 * CHAT_INPUT_PILL_CONTENT_SIZE,
        useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - c6,
      ),
    ),
  );
  const tmp2Result = useWindowDimensions;
  const tmp2Result2 = timing;
  return tmp2Result2.withTiming(bound1, {
    duration: timingPresets.timingFastDuration,
    easing: ReanimatedRexport.Easing.linear,
  });
};
export { getChatInputHeightAnimationTimingWorklet };
