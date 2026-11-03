// === Module 5482: useJSResponderHandler ===

// Module 5482 (useJSResponderHandler)
import ComposedGestureName from "ComposedGestureName" /* 5485 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5494 */;
import _mod5498 from "module_5498" /* 5498 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

require = fn;
function isSupportedGesture(gestures) {
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
  obj = DEFAULT_PROPS_TRANSFORMER;
}
const noop = fn(19);
({ use: c3, useCallback: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useState: closure_7 } = noop);
let closure_8 = fn(5483).SHARED_VALUE_OFFSET + 0.5;
let closure_10 = { code: "(function pnpm_useJSResponderHandlerTs1(sharedValues,id,notify){let[runOnJS]=this.__closure;const listener=runOnJS(notify);for(const sharedValue of sharedValues){sharedValue.addListener(id,listener);}})" };
let closure_11 = { code: "(function pnpm_useJSResponderHandlerTs2(sharedValues,id){for(const sharedValue of sharedValues){sharedValue.removeListener(id);}})" };

export function useJSResponderHandler(gesture) {
  _require = gesture;
  let tmp = closure_3(require("module_5498").JSResponderContext);
  dependencyMap = tmp;
  const tmp2 = _slicedToArray(closure_7(0), 2);
  _slicedToArray = tmp2[1];
  const tmp3 = closure_6(null);
  closure_3 = tmp3;
  if (null === tmp3.current) {
    closure_8 = tmp5 + 1;
    tmp3.current = +closure_8;
  }
  items = [gesture];
  closure_5(() => {
    const Reanimated = gesture(5469).Reanimated;
    c0 = Reanimated;
    const enabledSharedValues = gesture(5483).getEnabledSharedValues(c0);
    if (undefined !== Reanimated) {
      if (0 !== enabledSharedValues.length) {
        const current = pnpm_useJSResponderHandlerTs2.current;
        if (null !== current) {
          items = [closure_1_10, Reanimated.runOnJS];
          c0 = undefined;
          [tmp5, tmp6] = items;
          function pnpm_useJSResponderHandlerTs1(arg0, arg1, arg2) {
            const iter = arg0[Symbol.iterator]();
            const tmp = _undefined(arg2);
            while (iter !== undefined) {
              let addListenerResult = nextResult.addListener(arg1, tmp);
              continue;
            }
          }
          const items1 = [tmp6];
          pnpm_useJSResponderHandlerTs1.__closure = items1;
          pnpm_useJSResponderHandlerTs1.__workletHash = 6888092440636;
          pnpm_useJSResponderHandlerTs1.__initData = tmp5;
          const items2 = [closure_1_11];
          [tmp9] = items2;
          pnpm_useJSResponderHandlerTs2 = function pnpm_useJSResponderHandlerTs2(arg0, arg1) {
            const iter = arg0[Symbol.iterator]();
            while (iter !== undefined) {
              let removeListenerResult = nextResult.removeListener(arg1);
              continue;
            }
          };
          pnpm_useJSResponderHandlerTs2.__workletHash = 6527390642238;
          pnpm_useJSResponderHandlerTs2.__initData = tmp9;
          Reanimated.runOnUI(pnpm_useJSResponderHandlerTs1)(enabledSharedValues, current, () => {
            current((arg0) => arg0 + 1);
          });
          return () => {
            _undefined.runOnUI(pnpm_useJSResponderHandlerTs2)(enabledSharedValues, current);
          };
        }
      }
    }
    const obj = gesture(5483);
  }, items);
  let items1 = [tmp2[0], gesture];
  const tmp7 = closure_4(() => {
    let some = closure_0;
    const isGestureEnabledResult = DEFAULT_PROPS_TRANSFORMER.isGestureEnabled(closure_0);
    if (!isGestureEnabledResult) {
      return isGestureEnabledResult;
    } else {
      if (tmpResult.isComposedGesture(some)) {
        const gestures = some.gestures;
        some = gestures.some;
        let flag = some(isSupportedGesture);
      } else {
        const type = some.type;
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
      tmpResult = DEFAULT_PROPS_TRANSFORMER;
    }
  }, items1);
  closure_4 = tmp7;
  let items2 = [tmp, tmp7];
  let handleStartShouldSetResponder = closure_4(() => {
    if (closure_4()) {
      const result = _mod5498.updateResponderEventValue(closure_1, true);
    }
    return false;
  }, items2);
  if (null == tmp) {
    handleStartShouldSetResponder = () => false;
  }
  return { handleStartShouldSetResponder };
}