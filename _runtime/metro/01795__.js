// _runtime/metro/01795__.js
import FrameCallbackRegistryJSDefault from "../01796_FrameCallbackRegistryJS.js";
import noop from "00019__.js";

({ useEffect: closure_0, useRef: closure_1 } = noop);
let closure_2 = new FrameCallbackRegistryJSDefault();

export const useFrameCallback = function useFrameCallback(fn, arg1) {
  closure_0 = fn;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  closure_1 = undefined;
  const tmp = closure_1({
    setActive(isActive) {
      const result = closure_2.manageStateFrameCallback(closure_1.current.callbackId, isActive);
      closure_1.current.isActive = isActive;
    },
    isActive: flag,
    callbackId: -1,
  });
  closure_1 = tmp;
  const items = [fn, flag];
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
};
