// === Module 16104: ? ===

// Module 16104
import _mod16083 from "module_16083" /* 16083 */;

const tmp = _mod16083.navigator && _mod16083.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;