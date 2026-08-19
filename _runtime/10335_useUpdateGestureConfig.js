// _runtime/10335_useUpdateGestureConfig.js
import noop from "00019_noop.js";

let useEffect = noop.useEffect;

export const useUpdateGestureConfig = (arg0, options) => {
  useEffect = arg0;
  const enabled = options.enabled;
  const items = [enabled, arg0];
  useEffect(() => {
    if (undefined !== enabled) {
      closure_0.enabled(tmp);
    }
  }, items);
};