// === Module 1905: ? ===

// Module 1905
import FrameCallbackRegistryJSDefault from "FrameCallbackRegistryJS" /* 1906 */;
import noop from "module_19" /* 19 */;

({ useEffect: closure_0, useRef: closure_1 } = noop);
let closure_2 = new FrameCallbackRegistryJSDefault();

export function useFrameCallback(ConjureDitherAndroidTsx1) {
  closure_0 = ConjureDitherAndroidTsx1;
  if (flag === undefined) {
    flag = true;
  }
  closure_1 = undefined;
  const tmp = closure_1({
    setActive(isActive) {
      const result = closure_2.manageStateFrameCallback(closure_1.current.callbackId, isActive);
      closure_1.current.isActive = isActive;
    },
    isActive: flag,
    callbackId: -1
  });
  closure_1 = tmp;
  items = [ConjureDitherAndroidTsx1, flag];
  closure_0(() => {
    closure_1.current.callbackId = closure_2.registerFrameCallback(callbackId);
    ({ current: closure_0, current } = closure_1);
    current.setActive(closure_1.current.isActive);
    return () => {
      const result = closure_2_2.unregisterFrameCallback(callbackId.callbackId);
      callbackId.callbackId = -1;
    };
  }, items);
  return tmp.current;
}