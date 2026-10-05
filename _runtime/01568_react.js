// _runtime/01568_react.js
import react from "00019_react.js";

let useEffect;
if (typeof document !== "undefined") {
  useEffect = react.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = react.useEffect;
}

export const useClientLayoutEffect = useEffect;
