// _runtime/01524_useKeyedChildListeners.js
import closure_0 from "00019_noop.js";


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