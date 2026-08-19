// _runtime/06990_useBoundingClientRect.js
import noop from "00019_noop.js";
import { isFabricInstalled } from "06975_isFabricInstalled.js";

const useLayoutEffect = noop.useLayoutEffect;

export const useBoundingClientRect = function useBoundingClientRect(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  if (obj.isFabricInstalled()) {
    useLayoutEffect(() => {
      if (closure_0) {
        if (closure_0.current) {
          if (typeof closure_0.current.unstable_getBoundingClientRect !== "function") {
            if (typeof closure_0.current.getBoundingClientRect === "function") {
              const current2 = closure_0.current;
              callback(current2.getBoundingClientRect());
            }
          } else {
            const current = closure_0.current;
            callback(current.unstable_getBoundingClientRect());
          }
        }
      }
    });
  }
  obj = isFabricInstalled;
};