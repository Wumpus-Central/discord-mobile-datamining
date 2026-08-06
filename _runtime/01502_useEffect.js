// _runtime/01502_useEffect.js
import noop from "noop";

if (typeof document !== "undefined") {
  let useEffect = noop.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = noop.useEffect;
}

export default function useLatestCallback(stateFromStores) {
  const noop = stateFromStores;
  const useEffect = noop.useRef(stateFromStores);
  useEffect(() => {
    closure_1.current = closure_0;
  });
  return noop.useRef(function latestCallback() {
    let length;
    const items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        items[num] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    const current = ref.current;
    return current.apply(this, items);
  }).current;
};