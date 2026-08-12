// _runtime/05522_isSupportedGesture.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { isGestureEnabled } from "05534_isGestureEnabled.js";
import { context } from "05538_context.js";

let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
function isSupportedGesture(gestures) {
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    return gestures.some(isSupportedGesture);
  } else {
    const type = gestures.type;
    if (tmp(5525).SingleGestureName.Tap !== type) {
      if (tmp(5525).SingleGestureName.LongPress !== type) {
        if (tmp(5525).SingleGestureName.Fling !== type) {
          if (tmp(5525).SingleGestureName.Native !== type) {
            if (tmp(5525).SingleGestureName.Hover !== type) {
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
  let tmp = callback2(_context.JSResponderContext);
  const dependencyMap = tmp;
  const tmp2 = callback(callback6(0), 2);
  callback = tmp2[1];
  const tmp3 = callback5(null);
  callback2 = tmp3;
  if (null === tmp3.current) {
    let closure_8 = tmp5 + 1;
    tmp3.current = +closure_8;
  }
  const items = [gesture];
  callback4(() => {
    const Reanimated = gesture(tmp[6]).Reanimated;
    let obj = gesture(tmp[2]);
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
          fn.__initData = outer1_10;
          const fn2 = function l(arg0, arg1) {
            const iter = arg0[Symbol.iterator]();
            while (iter !== undefined) {
              let removeListenerResult = nextResult.removeListener(arg1);
              continue;
            }
          };
          fn2.__closure = {};
          fn2.__workletHash = 3663767498079;
          fn2.__initData = outer1_11;
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
    const isGestureEnabledResult = gesture(gesture[3]).isGestureEnabled(gesture);
    if (!isGestureEnabledResult) {
      return isGestureEnabledResult;
    } else {
      if (tmpResult.isComposedGesture(some)) {
        const gestures = some.gestures;
        some = gestures.some;
        let flag = some(outer1_9);
      } else {
        const type = some.type;
        if (tmp(tmp2[4]).SingleGestureName.Tap !== type) {
          if (tmp(tmp2[4]).SingleGestureName.LongPress !== type) {
            if (tmp(tmp2[4]).SingleGestureName.Fling !== type) {
              if (tmp(tmp2[4]).SingleGestureName.Native !== type) {
                flag = false;
              }
            }
          }
        }
        flag = true;
      }
      tmpResult = tmp(tmp2[3]);
    }
  }, items1);
  callback3 = tmp7;
  const items2 = [tmp, tmp7];
  let handleStartShouldSetResponder = callback3(() => {
    if (tmp7()) {
      const result = gesture(gesture[5]).updateResponderEventValue(tmp, true);
      const obj = gesture(gesture[5]);
    }
    return false;
  }, items2);
  if (null == tmp) {
    handleStartShouldSetResponder = () => false;
  }
  return { handleStartShouldSetResponder };
};