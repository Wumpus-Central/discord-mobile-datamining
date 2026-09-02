// === Module 1811: useFrameCallback ===

// Module 1811 (useFrameCallback)
import FrameCallbackRegistryJSDefault from "FrameCallbackRegistryJS" /* 1812 */;
import noop from "noop" /* 19 */;

({ useEffect: c0, useRef: closure_1 } = noop);
let closure_2 = new FrameCallbackRegistryJSDefault();

export const useFrameCallback = function useFrameCallback(fn, arg1) {
  const callback = fn;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let callback2;
  const tmp = callback2({
    setActive(isActive) {
      const result = closure_1_2.manageStateFrameCallback(closure_1.current.callbackId, isActive);
      closure_1.current.isActive = isActive;
    },
    isActive: flag,
    callbackId: -1
  });
  callback2 = tmp;
  const items = [fn, flag];
  callback(() => {
    closure_1.current.callbackId = closure_1_2.registerFrameCallback(closure_0);
    ({ current: closure_0, current } = closure_1);
    current.setActive(closure_1.current.isActive);
    return () => {
      const result = closure_1_2.unregisterFrameCallback(callbackId.callbackId);
      callbackId.callbackId = -1;
    };
  }, items);
  return tmp.current;
};