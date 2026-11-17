// === Module 16803: ? ===

// Module 16803
import _mod16782 from "module_16782" /* 16782 */;

const tmp = _mod16782.navigator && _mod16782.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;