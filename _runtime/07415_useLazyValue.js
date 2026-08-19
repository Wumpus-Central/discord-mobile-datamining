// _runtime/07415_useLazyValue.js
import noop from "00019_noop.js";

const useRef = noop.useRef;
let closure_1 = {};

export default function useLazyValue(fn) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = fn();
  }
  return tmp.current;
};