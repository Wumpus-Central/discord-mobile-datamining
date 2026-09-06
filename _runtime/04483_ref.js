// === Module 4483: ref ===

// Module 4483 (ref)
import noop from "module_19" /* 19 */;
import shallowEqual from "shallowEqual" /* 4484 */;

if (shallowEqual) {
  if (typeof shallowEqual === "object") {
    if ("default" in shallowEqual) {
      shallowEqual = shallowEqual.default;
    }
  }
}
let closure_2 = {};

export default (current, arg1) => {
  const ref = noop.useRef(closure_2);
  current = ref.current;
  const effect = noop.useEffect(() => {
    ref.current = current;
  });
  return current;
};