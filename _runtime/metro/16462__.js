// === Module 16462: ? ===

// Module 16462
import _mod16441 from "module_16441" /* 16441 */;

const tmp = _mod16441.navigator && _mod16441.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;