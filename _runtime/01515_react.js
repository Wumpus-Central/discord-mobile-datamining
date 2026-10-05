// === Module 1515: react ===

// Module 1515 (react)
import react from "react" /* 19 */;


export const useKeyedChildListeners = function useKeyedChildListeners() {
  let current = react.useRef(Object.assign(Object.create(null), { getState: {}, beforeRemove: {} })).current;
  const items = [current];
  const obj = {
    keyedListeners: current,
    addKeyedListener: react.useCallback((arg0, arg1, arg2) => {
      let closure_0;
      current = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      current[arg0][arg1] = arg2;
      return () => {
        if (current[closure_0][closure_1] === closure_2) {
          current[closure_0][tmp] = undefined;
        }
      };
    }, items)
  };
  return obj;
};