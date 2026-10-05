// === Module 6196: ? ===

// Module 6196
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6197 */;
import ComposedGestureName from "ComposedGestureName" /* 6199 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6208 */;
import _mod6212 from "module_6212" /* 6212 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, closure_3, dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function isSupportedGesture(gestures) {
  const obj = maybeExtractNativeEvent;
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    return gestures.some(isSupportedGesture);
  } else {
    const type = gestures.type;
    if (ComposedGestureName.SingleGestureName.Tap !== type) {
      if (ComposedGestureName.SingleGestureName.LongPress !== type) {
        if (ComposedGestureName.SingleGestureName.Fling !== type) {
          if (ComposedGestureName.SingleGestureName.Native !== type) {
            if (ComposedGestureName.SingleGestureName.Hover !== type) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}
({ use: c3, useCallback: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useState: metroImportDefault } = react);
let closure_8 = SHARED_VALUE_OFFSET.SHARED_VALUE_OFFSET + 0.5;
let closure_10 = { code: "function pnpm_useJSResponderHandlerTs1(sharedValues,id,notify){const{runOnJS}=this.__closure;const listener=runOnJS(notify);for(const sharedValue of sharedValues){sharedValue.addListener(id,listener);}}" };
let closure_11 = { code: "function pnpm_useJSResponderHandlerTs2(sharedValues,id){for(const sharedValue of sharedValues){sharedValue.removeListener(id);}}" };

export const useJSResponderHandler = function useJSResponderHandler(gesture) {
  let closure_1;
  let closure_2;
  let first;
  _require = gesture;
  let tmp = closure_3(require("module_6212").JSResponderContext);
  dependencyMap = tmp;
  [first, _slicedToArray] = closure_7(0);
  const tmp4 = closure_6(null);
  closure_3 = tmp4;
  if (null === tmp4.current) {
    closure_8 = tmp6 + 1;
    tmp4.current = +closure_8;
  }
  const items = [gesture];
  closure_5(() => {
    let runOnJS;
    const Reanimated = gesture(closure_1[6]).Reanimated;
    const obj = gesture(closure_1[2]);
    const enabledSharedValues = obj.getEnabledSharedValues(Reanimated);
    if (undefined !== Reanimated) {
      if (0 !== enabledSharedValues.length) {
        let tmp = runOnJS;
        const current = runOnJS.current;
        if (null !== current) {
          runOnJS = Reanimated.runOnJS;
          const fn = function o(arg0, arg1, arg2) {
            const tmp = runOnJS(arg2);
            const iter = arg0[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let addListenerResult = nextResult.addListener(arg1, tmp);
              continue;
            }
          };
          const obj2 = { runOnJS };
          fn.__closure = obj2;
          fn.__workletHash = 3030529712101;
          fn.__initData = __initData;
          const fn2 = function l(arg0, arg1) {
            const iter = arg0[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let removeListenerResult = nextResult.removeListener(arg1);
              continue;
            }
          };
          fn2.__closure = {};
          fn2.__workletHash = 3663767498079;
          fn2.__initData = __initData2;
          Reanimated.runOnUI(fn)(enabledSharedValues, current, () => {
            current((arg0) => arg0 + 1);
          });
          return () => {
            Reanimated.runOnUI(fn2)(enabledSharedValues, current);
          };
        }
      }
    }
  }, items);
  const items1 = [first, gesture];
  const tmp8 = closure_4(() => {
    const obj = maybeExtractNativeEvent;
    let isGestureEnabledResult = obj.isGestureEnabled(gesture);
    if (isGestureEnabledResult) {
      let flag;
      const tmpResult = maybeExtractNativeEvent;
      if (tmpResult.isComposedGesture(gesture)) {
        const gestures = gesture.gestures;
        flag = gestures.some(isSupportedGesture);
      } else {
        const type = gesture.type;
        if (ComposedGestureName.SingleGestureName.Tap !== type) {
          if (ComposedGestureName.SingleGestureName.LongPress !== type) {
            if (ComposedGestureName.SingleGestureName.Fling !== type) {
              if (ComposedGestureName.SingleGestureName.Native !== type) {
                flag = false;
              }
            }
          }
        }
        flag = true;
      }
      isGestureEnabledResult = flag;
    }
    return isGestureEnabledResult;
  }, items1);
  closure_4 = tmp8;
  const items2 = [tmp, tmp8];
  let handleStartShouldSetResponder = closure_4(() => {
    if (closure_4()) {
      const obj = _mod6212;
      const result = obj.updateResponderEventValue(closure_1, true);
    }
    return false;
  }, items2);
  if (null == tmp) {
    handleStartShouldSetResponder = () => false;
  }
  return { handleStartShouldSetResponder };
};