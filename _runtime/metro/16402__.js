// === Module 16402: ? ===

// Module 16402
import _mod16394 from "module_16394" /* 16394 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16394(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};