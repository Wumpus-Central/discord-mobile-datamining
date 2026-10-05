// _runtime/00494_useColorScheme.js
import react from "00019_react.js";
import _mod453 from "metro/00453__.js";

const useSyncExternalStore = react.useSyncExternalStore;
function subscribe(onChange) {
  const obj = _mod453;
  let closure_0 = obj.addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, _mod453.getColorScheme);
}
