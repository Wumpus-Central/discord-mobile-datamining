// === Module 14604: ? ===

// Module 14604
import _mod14583 from "module_14583" /* 14583 */;

const tmp = _mod14583.navigator && _mod14583.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;