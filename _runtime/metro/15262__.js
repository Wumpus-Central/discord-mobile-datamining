// === Module 15262: ? ===

// Module 15262
import _mod15241 from "module_15241" /* 15241 */;

const tmp = _mod15241.navigator && _mod15241.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;