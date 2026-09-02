// === Module 802: getNative ===

// Module 802 (getNative)
import getNative from "getNative" /* 734 */;


export default (() => {
  try {
    const _Object = Object;
    const tmp4 = getNative(Object, "defineProperty");
    tmp4({}, "", {});
    return tmp4;
  } catch (err) {
  }
})();