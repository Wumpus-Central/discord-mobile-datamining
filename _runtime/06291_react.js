// === Module 6291: react ===

// Module 6291 (react)
import react from "react" /* 19 */;
import _mod6135 from "module_6135" /* 6135 */;

const useLayoutEffect = react.useLayoutEffect;

export const useBoundingClientRect = function useBoundingClientRect(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = _mod6135;
  if (obj.isFabricInstalled()) {
    useLayoutEffect(() => {
      if (closure_0) {
        if (closure_0.current) {
          if (typeof closure_0.current.unstable_getBoundingClientRect !== "function") {
            if (typeof closure_0.current.getBoundingClientRect === "function") {
              const current2 = closure_0.current;
              closure_1(current2.getBoundingClientRect());
            }
          } else {
            const current = closure_0.current;
            closure_1(current.unstable_getBoundingClientRect());
          }
        }
      }
    });
  }
};