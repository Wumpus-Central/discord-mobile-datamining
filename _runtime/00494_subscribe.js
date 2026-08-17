// _runtime/00494_subscribe.js
import noop from "00019_noop.js";
import getColorScheme from "00453_getColorScheme.js";
import { getColorScheme } from "00453_getColorScheme.js";

const useSyncExternalStore = noop.useSyncExternalStore;
function subscribe(onChange) {
  _require = _getColorScheme.addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, getColorScheme.getColorScheme);
};