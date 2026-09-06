// _runtime/metro/06711__.js
import ComposedGestureName from "../06714_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06723_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6727 from "06727__.js";
import _slicedToArray from "00032__.js";

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
let closure_8 = fn(6712).SHARED_VALUE_OFFSET + 0.5;
let closure_10 = {
  code: "function pnpm_useJSResponderHandlerTs1(sharedValues,id,notify){const{runOnJS}=this.__closure;const listener=runOnJS(notify);for(const sharedValue of sharedValues){sharedValue.addListener(id,listener);}}",
};
let closure_11 = {
  code: "function pnpm_useJSResponderHandlerTs2(sharedValues,id){for(const sharedValue of sharedValues){sharedValue.removeListener(id);}}",
};

export const useJSResponderHandler = function useJSResponderHandler(gesture) {
  _require = gesture;
  let tmp = closure_3(require("06727__.js").JSResponderContext);
  dependencyMap = tmp;
  const tmp2 = _slicedToArray(closure_7(0), 2);
  _slicedToArray = tmp2[1];
  const tmp3 = closure_6(null);
  closure_3 = tmp3;
  if (null === tmp3.current) {
    closure_8 = tmp5 + 1;
    tmp3.current = +closure_8;
  }
  const items = [gesture];
  closure_5(() => {
    const Reanimated = gesture(6698).Reanimated;
    let obj = gesture(6712);
    const enabledSharedValues = obj.getEnabledSharedValues(Reanimated);
    if (undefined !== Reanimated) {
      if (0 !== enabledSharedValues.length) {
        const current = runOnJS.current;
        if (null !== current) {
          runOnJS = Reanimated.runOnJS;
          const fn = function o(arg0, arg1, arg2) {
            const iter = arg0[Symbol.iterator]();
            const tmp = runOnJS(arg2);
            while (iter !== undefined) {
              let addListenerResult = nextResult.addListener(arg1, tmp);
              continue;
            }
          };
          obj = { runOnJS };
          fn.__closure = obj;
          fn.__workletHash = 3030529712101;
          fn.__initData = __initData;
          const fn2 = function l(arg0, arg1) {
            const iter = arg0[Symbol.iterator]();
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
  const items1 = [tmp2[0], gesture];
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
  const items2 = [tmp, tmp7];
  let handleStartShouldSetResponder = closure_4(() => {
    if (closure_4()) {
      const result = _mod6727.updateResponderEventValue(closure_1, true);
    }
    return false;
  }, items2);
  if (null == tmp) {
    handleStartShouldSetResponder = () => false;
  }
  return { handleStartShouldSetResponder };
};
