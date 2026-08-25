// _runtime/10225_useUpdateGestureConfig.js
import noop from "00019_noop.js";

let useEffect = noop.useEffect;

export const useUpdateGestureConfig = (arg0, enabled) => {
  useEffect = arg0;
  enabled = enabled.enabled;
  const items = [enabled, arg0];
  useEffect(() => {
    if (undefined !== enabled) {
      closure_0.enabled(tmp);
    }
  }, items);
};