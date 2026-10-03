// === Module 4494: ? ===

// Module 4494
import noop from "module_19" /* 19 */;


export const useShallow = function useShallow(cResult) {
  noop.useRef(undefined);
  return (arg0) => {
    let current = cResult(arg0);
    if (obj.shallow(ref.current, current)) {
      current = ref.current;
    } else {
      ref.current = current;
    }
    return current;
  };
};