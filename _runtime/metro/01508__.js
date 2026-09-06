// === Module 1508: ? ===

// Module 1508
import noop from "module_19" /* 19 */;


export const useKeyedChildListeners = function useKeyedChildListeners() {
  const current = noop.useRef(Object.assign(Object.create(null), { getState: {}, beforeRemove: {} })).current;
  const items = [current];
  return {
    keyedListeners: current,
    addKeyedListener: noop.useCallback((arg0, arg1, arg2) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      closure_0[arg0][arg1] = arg2;
      return () => {
        if (current[closure_0][closure_1] === closure_2) {
          current[closure_0][tmp] = undefined;
        }
      };
    }, items)
  };
};