// _runtime/10528_react.js
import react from "00019_react.js";

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
