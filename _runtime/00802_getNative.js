// _runtime/00802_getNative.js
import getNative from "00734_getNative.js";

export default (() => {
  try {
    const _Object = Object;
    const tmp4 = getNative(Object, "defineProperty");
    tmp4({}, "", {});
    return tmp4;
  } catch (err) {}
})();
