// === Module 15520: ? ===

// Module 15520
import _mod15499 from "module_15499" /* 15499 */;

const tmp = _mod15499.navigator && _mod15499.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;