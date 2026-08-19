// === Module 10335: useUpdateGestureConfig ===

// Module 10335 (useUpdateGestureConfig)
import noop from "noop" /* 19 */;

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