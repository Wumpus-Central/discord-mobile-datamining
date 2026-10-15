// === Module 15227: ? ===

// Module 15227
import _mod15206 from "module_15206" /* 15206 */;

const tmp = _mod15206.navigator && _mod15206.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;