// === Module 4186: ? ===

// Module 4186
import noop from "module_19" /* 19 */;


export const useShallow = function useShallow(arg0) {
  closure_0 = arg0;
  noop.useRef(undefined);
  return (arg0) => {
    let current = closure_0(arg0);
    if (obj.shallow(ref.current, current)) {
      current = ref.current;
    } else {
      ref.current = current;
    }
    return current;
  };
};