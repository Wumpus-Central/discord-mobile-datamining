// _runtime/06464_isSupportedGesture.js
import isGestureEnabled from "06476_isGestureEnabled.js";
import closure_2 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";

require = arg1;
function isSupportedGesture(gestures) {
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    return gestures.some(isSupportedGesture);
  } else {
    const type = gestures.type;
    if (tmp(6467).SingleGestureName.Tap !== type) {
      if (tmp(6467).SingleGestureName.LongPress !== type) {
        if (tmp(6467).SingleGestureName.Fling !== type) {
          if (tmp(6467).SingleGestureName.Native !== type) {
            if (tmp(6467).SingleGestureName.Hover !== type) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
  obj = isGestureEnabled;
}
({ use: c3, useCallback: c4, useEffect: c5, useRef: closure_6, useState: error } = noop);
let closure_8 = require("hash").SHARED_VALUE_OFFSET + 0.5;
let closure_10 = { code: "function pnpm_useJSResponderHandlerTs1(sharedValues,id,notify){const{runOnJS}=this.__closure;const listener=runOnJS(notify);for(const sharedValue of sharedValues){sharedValue.addListener(id,listener);}}" };
let closure_11 = { code: "function pnpm_useJSResponderHandlerTs2(sharedValues,id){for(const sharedValue of sharedValues){sharedValue.removeListener(id);}}" };

export const useJSResponderHandler = function useJSResponderHandler(gesture) {
  const _require = gesture;
  let tmp = callback2(require("06480_context.js").JSResponderContext);
  dependencyMap = tmp;
  const tmp2 = callback(callback6(0), 2);
  callback = tmp2[1];
  const tmp3 = callback5(null);
  callback2 = tmp3;
  if (null === tmp3.current) {
    closure_8 = tmp5 + 1;
    tmp3.current = +closure_8;
  }
  const items = [gesture];
  callback4(() => {
    const Reanimated = gesture(6451).Reanimated;
    let obj = gesture(6465);
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
          obj = { runOnJS: null };
          obj[0] = runOnJS;
          fn.__closure = obj;
          fn.__workletHash = 3030529712101;
          fn.__initData = closure_1_10;
          const fn2 = function l(arg0, arg1) {
            const iter = arg0[Symbol.iterator]();
            while (iter !== undefined) {
              let removeListenerResult = nextResult.removeListener(arg1);
              continue;
            }
          };
          fn2.__closure = {};
          fn2.__workletHash = 3663767498079;
          fn2.__initData = closure_1_11;
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
  const tmp7 = callback3(() => {
    let some = gesture;
    const isGestureEnabledResult = gesture(6476).isGestureEnabled(gesture);
    if (!isGestureEnabledResult) {
      return isGestureEnabledResult;
    } else {
      if (tmpResult.isComposedGesture(some)) {
        const gestures = some.gestures;
        some = gestures.some;
        let flag = some(closure_1_9);
      } else {
        const type = some.type;
        if (tmp(6467).SingleGestureName.Tap !== type) {
          if (tmp(6467).SingleGestureName.LongPress !== type) {
            if (tmp(6467).SingleGestureName.Fling !== type) {
              if (tmp(6467).SingleGestureName.Native !== type) {
                flag = false;
              }
            }
          }
        }
        flag = true;
      }
      tmpResult = tmp(6476);
    }
  }, items1);
  callback3 = tmp7;
  const items2 = [tmp, tmp7];
  let handleStartShouldSetResponder = callback3(() => {
    if (callback()) {
      const result = gesture(6480).updateResponderEventValue(dependencyMap, true);
      const obj = gesture(6480);
    }
    return false;
  }, items2);
  if (null == tmp) {
    handleStartShouldSetResponder = () => false;
  }
  return { handleStartShouldSetResponder };
};