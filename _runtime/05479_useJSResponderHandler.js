// === Module 5479: useJSResponderHandler ===

// Module 5479 (useJSResponderHandler)
import ComposedGestureName from "ComposedGestureName" /* 5482 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5491 */;
import JSResponderContext from "JSResponderContext" /* 5495 */;
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
  obj = resolveInternalConfigProps;
}
const noop = fn(19);
({ use: c3, useCallback: closure_4, useEffect: hasOwnProperty, useRef: closure_6, useState: metroImportDefault } = noop);
let closure_8 = fn(5480).SHARED_VALUE_OFFSET + 0.5;
let closure_10 = { code: "(function pnpm_useJSResponderHandlerTs1(sharedValues,id,notify){let[scheduleOnRN]=this.__closure;const listener=function(){scheduleOnRN(notify);};for(const sharedValue of sharedValues){sharedValue.addListener(id,listener);}})" };
let closure_11 = { code: "(function pnpm_useJSResponderHandlerTs2(sharedValues,id){for(const sharedValue of sharedValues){sharedValue.removeListener(id);}})" };

export function useJSResponderHandler(gesture) {
  _require = gesture;
  const tmp = closure_3(require("JSResponderContext").JSResponderContext);
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
    const enabledSharedValues = gesture(5480).getEnabledSharedValues(c0);
    c0 = enabledSharedValues;
    if (undefined !== gesture(5464).Worklets) {
      if (0 !== enabledSharedValues.length) {
        const current = pnpm_useJSResponderHandlerTs2.current;
        if (null !== current) {
          const scheduleOnUI = gesture(5464).Worklets.scheduleOnUI;
          items = [closure_1_10, gesture(5464).Worklets.scheduleOnRN];
          c0 = undefined;
          [tmp7, tmp8] = items;
          function pnpm_useJSResponderHandlerTs1(arg0, arg1, arg2) {
            closure_0 = arg2;
            function listener() {
              c0(closure_0);
            }
            const iter = arg0[Symbol.iterator]();
            while (iter !== undefined) {
              let addListenerResult = nextResult.addListener(arg1, listener);
              continue;
            }
          }
          const items1 = [tmp8];
          pnpm_useJSResponderHandlerTs1.__closure = items1;
          pnpm_useJSResponderHandlerTs1.__workletHash = 10347236777826;
          pnpm_useJSResponderHandlerTs1.__initData = tmp7;
          const items2 = [closure_1_11];
          [tmp11] = items2;
          pnpm_useJSResponderHandlerTs2 = function pnpm_useJSResponderHandlerTs2(arg0, arg1) {
            const iter = arg0[Symbol.iterator]();
            while (iter !== undefined) {
              let removeListenerResult = nextResult.removeListener(arg1);
              continue;
            }
          };
          pnpm_useJSResponderHandlerTs2.__workletHash = 6527390642238;
          pnpm_useJSResponderHandlerTs2.__initData = tmp11;
          scheduleOnUI(pnpm_useJSResponderHandlerTs1, enabledSharedValues, current, () => {
            scheduleOnUI((arg0) => arg0 + 1);
          });
          return () => {
            scheduleOnUI(pnpm_useJSResponderHandlerTs2, c0, current);
          };
        }
      }
    }
    const obj = gesture(5480);
  }, items);
  let items1 = [tmp2[0], gesture];
  const tmp7 = closure_4(() => {
    let some = closure_0;
    const isGestureEnabledResult = resolveInternalConfigProps.isGestureEnabled(closure_0);
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
      tmpResult = resolveInternalConfigProps;
    }
  }, items1);
  closure_4 = tmp7;
  let items2 = [tmp, tmp7];
  let handleStartShouldSetResponder = closure_4(() => {
    if (closure_4()) {
      const result = JSResponderContext.updateResponderEventValue(closure_1, true);
    }
    return false;
  }, items2);
  if (null == tmp) {
    handleStartShouldSetResponder = () => false;
  }
  return { handleStartShouldSetResponder };
}