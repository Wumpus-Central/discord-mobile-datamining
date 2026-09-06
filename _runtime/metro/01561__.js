// _runtime/metro/01561__.js
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

export const useClientLayoutEffect = useEffect;
