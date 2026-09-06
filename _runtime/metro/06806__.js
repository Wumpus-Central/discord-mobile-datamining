// _runtime/metro/06806__.js
import _mod19 from "00019__.js";
import _mod6650 from "06650__.js";

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
  obj = _mod6650;
};
