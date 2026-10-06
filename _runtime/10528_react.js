// === Module 10528: react ===

// Module 10528 (react)
import react from "react" /* 19 */;

const useEffect = react.useEffect;

export const useUpdateGestureConfig = (arg0, options) => {
  let closure_0 = arg0;
  const enabled = options.enabled;
  const items = [enabled, arg0];
  const tmp = useEffect(() => {
    if (undefined !== enabled) {
      closure_0.enabled(tmp);
    }
  }, items);
};