// === Module 4368: ref ===

// Module 4368 (ref)
import closure_0 from "noop" /* 19 */;
import shallowEqual from "shallowEqual" /* 4369 */;

if (shallowEqual) {
  if (typeof shallowEqual === "object") {
    if ("default" in shallowEqual) {
      shallowEqual = shallowEqual.default;
    }
  }
}
let closure_2 = {};

export default (arg0, arg1) => {
  let tmp = arg1;
  if (undefined === arg1) {
    tmp = closure_1;
  }
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