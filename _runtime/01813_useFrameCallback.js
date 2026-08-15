// _runtime/01813_useFrameCallback.js
import noop from "noop";

let c0;
let closure_1;
({ useEffect: c0, useRef: closure_1 } = noop);

export const useFrameCallback = function useFrameCallback(fn, arg1) {
  const callback = fn;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let callback2;
  const tmp = callback2({
    setActive(isActive) {
      const result = outer1_2.manageStateFrameCallback(_undefined.current.callbackId, isActive);
      _undefined.current.isActive = isActive;
    },
    isActive: flag,
    callbackId: -1
  });
  callback2 = tmp;
  const items = [fn, flag];
  callback(() => {
    let closure_0;
    let current;
    _undefined.current.callbackId = outer1_2.registerFrameCallback(closure_0);
    ({ current: closure_0, current } = _undefined);
    current.setActive(_undefined.current.isActive);
    return () => {
      const result = outer1_2.unregisterFrameCallback(callbackId.callbackId);
      callbackId.callbackId = -1;
    };
  }, items);
  return tmp.current;
};