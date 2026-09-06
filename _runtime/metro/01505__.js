// _runtime/metro/01505__.js
import noop from "00019__.js";

if (typeof document !== "undefined") {
  let useEffect = noop.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = noop.useEffect;
}

export default function useLatestCallback(current) {
  noop.useRef(current);
  useEffect(() => {
    closure_1.current = current;
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
    current = ref.current;
    return current.apply(this, items);
  }).current;
}
