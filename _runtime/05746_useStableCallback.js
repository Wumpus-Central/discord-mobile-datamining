// _runtime/05746_useStableCallback.js
import noop from "00019_noop.js";

({ useCallback: c0, useEffect: closure_1, useLayoutEffect: obj1, useRef: c3 } = noop);

export const useStableCallback = function useStableCallback(arg0) {
  const callback = arg0;
  const callback2 = callback4(undefined);
  callback3(() => {
    closure_1.current = closure_0;
  });
  callback2(() => () => {
    closure_1.current = undefined;
  }, []);
  return callback(() => {
    const items = [...arguments];
    const current = ref.current;
    let applyResult;
    if (current != null) {
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      applyResult = HermesBuiltin.apply(items1, tmp);
    }
    return applyResult;
  }, []);
};