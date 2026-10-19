// === Module 5409: ? ===

// Module 5409
import _mod19 from "module_19" /* 19 */;
import _mod5253 from "module_5253" /* 5253 */;

const useLayoutEffect = _mod19.useLayoutEffect;

export const useBoundingClientRect = function useBoundingClientRect(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
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
  obj = _mod5253;
};