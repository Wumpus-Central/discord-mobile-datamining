// _runtime/00494_subscribe.js
import { useSyncExternalStore } from "noop";

function subscribe(onChange) {
  _require = _require("00453_getColorScheme.js").addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, require("00453_getColorScheme.js") /* getColorScheme */.getColorScheme);
};