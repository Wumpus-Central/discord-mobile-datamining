// _runtime/07136_useLazyValue.js
import noop from "00019_noop.js";

const useRef = noop.useRef;
let closure_1 = {};

export default function useLazyValue(arg0) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = arg0();
  }
  return tmp.current;
};