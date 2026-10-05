// === Module 494: useColorScheme ===

// Module 494 (useColorScheme)
import react from "react" /* 19 */;
import _mod453 from "module_453" /* 453 */;

const useSyncExternalStore = react.useSyncExternalStore;
function subscribe(onChange) {
  const obj = _mod453;
  let closure_0 = obj.addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, _mod453.getColorScheme);
};