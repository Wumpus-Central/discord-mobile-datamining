// === Module 4008: useShallow ===

// Module 4008 (useShallow)
import noop from "noop" /* 19 */;


export const useShallow = function useShallow(arg0) {
  closure_0 = arg0;
  closure_1 = noop.useRef(undefined);
  return (arg0) => {
    let current = callback(arg0);
    if (obj.shallow(ref.current, current)) {
      current = ref.current;
    } else {
      ref.current = current;
    }
    return current;
  };
};