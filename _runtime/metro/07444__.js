// _runtime/metro/07444__.js
import _mod19 from "00019__.js";

const useRef = _mod19.useRef;
let closure_1 = {};

export default function useLazyValue(fn) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = fn();
  }
  return tmp.current;
}
