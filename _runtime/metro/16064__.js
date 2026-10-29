// === Module 16064: ? ===

// Module 16064
import _mod16043 from "module_16043" /* 16043 */;

const tmp = _mod16043.navigator && _mod16043.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;