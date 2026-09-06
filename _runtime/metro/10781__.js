// === Module 10781: ? ===

// Module 10781
import _mod19 from "module_19" /* 19 */;

const useEffect = _mod19.useEffect;

export const useUpdateGestureConfig = (arg0, options) => {
  closure_0 = arg0;
  const enabled = options.enabled;
  const items = [enabled, arg0];
  useEffect(() => {
    if (undefined !== enabled) {
      closure_0.enabled(tmp);
    }
  }, items);
};