// _runtime/00494_subscribe.js
import _mod19 from "metro/00019__.js";
import _mod453 from "metro/00453__.js";

const useSyncExternalStore = _mod19.useSyncExternalStore;
function subscribe(onChange) {
  closure_0 = _mod453.addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, _mod453.getColorScheme);
}
