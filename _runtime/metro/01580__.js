// === Module 1580: ? ===

// Module 1580
import noop from "module_19" /* 19 */;

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