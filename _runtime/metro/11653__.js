// === Module 11653: ? ===

// Module 11653
import _mod19 from "module_19" /* 19 */;

const useEffect = _mod19.useEffect;

export (arg0, options) => {
  closure_0 = arg0;
  const enabled = options.enabled;
  items = [enabled, arg0];
  useEffect(() => {
    if (undefined !== enabled) {
      closure_0.enabled(tmp);
    }
  }, items);
}