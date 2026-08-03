import { useSyncExternalStore } from "noop";

function subscribe(onChange) {
  _require = _require(453).addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, require(453) /* getColorScheme */.getColorScheme);
};