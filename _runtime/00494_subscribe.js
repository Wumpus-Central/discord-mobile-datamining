// _runtime/00494_subscribe.js
import noop from "noop" /* 19 */;
import getColorScheme from "getColorScheme" /* 453 */;
import { getColorScheme } from "00453_getColorScheme.js";

const useSyncExternalStore = noop.useSyncExternalStore;
function subscribe(onChange) {
  _require = _getColorScheme.addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, getColorScheme.getColorScheme);
};