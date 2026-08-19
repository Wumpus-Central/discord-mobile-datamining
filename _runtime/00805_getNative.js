// === Module 805: getNative ===

// Module 805 (getNative)
import getNative from "getNative" /* 737 */;


export default (() => {
  try {
    const _Object = Object;
    const tmp4 = getNative(Object, "defineProperty");
    tmp4({}, "", {});
    return tmp4;
  } catch (err) {
  }
})();