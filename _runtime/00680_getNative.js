// === Module 680: getNative ===

// Module 680 (getNative)
import getNative from "getNative" /* 612 */;


export default (() => {
  try {
    const _Object = Object;
    const tmp4 = getNative(Object, "defineProperty");
    tmp4({}, "", {});
    return tmp4;
  } catch (err) {
  }
})();