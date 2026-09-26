// === Module 13567: ? ===

// Module 13567
import _mod13559 from "module_13559" /* 13559 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13559(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};