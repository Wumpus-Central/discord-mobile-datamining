// === Module 14136: ? ===

// Module 14136
import _mod14128 from "module_14128" /* 14128 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14128(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};