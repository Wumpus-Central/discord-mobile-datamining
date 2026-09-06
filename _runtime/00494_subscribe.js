// === Module 494: subscribe ===

// Module 494 (subscribe)
import _mod19 from "module_19" /* 19 */;
import _mod453 from "module_453" /* 453 */;

const useSyncExternalStore = _mod19.useSyncExternalStore;
function subscribe(onChange) {
  closure_0 = _mod453.addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, _mod453.getColorScheme);
};