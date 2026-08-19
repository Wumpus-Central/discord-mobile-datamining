// === Module 1525: useKeyedChildListeners ===

// Module 1525 (useKeyedChildListeners)
import noop from "noop" /* 19 */;


export const useKeyedChildListeners = function useKeyedChildListeners() {
  current = current.useRef(Object.assign(Object.create(null), { getState: {}, beforeRemove: {} })).current;
  const items = [current];
  return {
    keyedListeners: current,
    addKeyedListener: current.useCallback((arg0, arg1, arg2) => {
      const table = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      table[arg0][arg1] = arg2;
      return () => {
        if (dependencyMap[dependencyMap][closure_1] === closure_2) {
          dependencyMap[dependencyMap][tmp] = undefined;
        }
      };
    }, items)
  };
};