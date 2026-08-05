// _runtime/00494_subscribe.js
import { useSyncExternalStore } from "noop";
import { getColorScheme } from "00453_getColorScheme.js";

function subscribe(onChange) {
  _require = _getColorScheme.addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, getColorScheme.getColorScheme);
};