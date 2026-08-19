// _runtime/04298_ref.js
import noop from "00019_noop.js";
import shallowEqual from "04299_shallowEqual.js";

if (shallowEqual) {
  if (typeof shallowEqual === "object") {
    if ("default" in shallowEqual) {
      shallowEqual = shallowEqual.default;
    }
  }
}
let closure_2 = {};

export default (arg0, arg1) => {
  ref = ref.useRef(closure_2);
  let current = ref.current;
  closure_1 = current;
  const effect = ref.useEffect(() => {
    ref.current = closure_1;
  });
  if (!tmp4) {
    closure_1 = arg0;
    current = arg0;
  }
  return current;
};