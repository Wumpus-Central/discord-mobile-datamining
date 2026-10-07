// === Module 16228: useForwardedRef ===

// Module 16228 (useForwardedRef)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("hooks/useForwardedRef.tsx");

export default function useForwardedRef(arg0) {
  closure_0 = arg0;
  const ref = noop.useRef(null);
  const items = [arg0];
  const items1 = [
    ref,
    noop.useCallback((current) => {
      let tmp = closure_0;
      if (null != closure_0) {
        if (typeof tmp === "function") {
          tmp = tmp(current);
        } else {
          tmp.current = current;
        }
        ref.current = current;
      }
    }, items)
  ];
  return items1;
};