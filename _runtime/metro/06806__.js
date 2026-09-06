// _runtime/metro/06806__.js
import _mod19 from "00019__.js";

const useLayoutEffect = _mod19.useLayoutEffect;

export const useBoundingClientRect = function useBoundingClientRect(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  if (obj.isFabricInstalled()) {
    useLayoutEffect(() => {
      if (closure_0) {
        if (tmp.current) {
          if (typeof tmp.current.unstable_getBoundingClientRect !== "function") {
            if (typeof tmp.current.getBoundingClientRect === "function") {
              const current2 = tmp.current;
              closure_1(current2.getBoundingClientRect());
            }
          } else {
            const current = tmp.current;
            closure_1(current.unstable_getBoundingClientRect());
          }
        }
      }
    });
  }
};
