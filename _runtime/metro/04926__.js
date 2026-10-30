// === Module 4926: ? ===

// Module 4926
import noop from "module_19" /* 19 */;


export function useShallow(arg0) {
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
}