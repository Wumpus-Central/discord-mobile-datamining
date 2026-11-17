// === Module 16561: ? ===

// Module 16561
import _mod16553 from "module_16553" /* 16553 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16553(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};