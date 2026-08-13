// _runtime/06953_useStableMemo.js
import { useRef } from "noop";
import { areHookInputsEqual } from "06954_areHookInputsEqual.js";

let closure_3 = [];

export default function useStableMemo(arg0, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = arg0();
    tmp2.current = items;
  } else if (!areHookInputsEqual(items, tmp2.current)) {
    tmp.current = arg0();
    tmp2.current = items;
  }
  return tmp.current;
};