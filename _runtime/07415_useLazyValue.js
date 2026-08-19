// === Module 7415: useLazyValue ===

// Module 7415 (useLazyValue)
import noop from "noop" /* 19 */;

const useRef = noop.useRef;
let closure_1 = {};

export default function useLazyValue(fn) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = fn();
  }
  return tmp.current;
};