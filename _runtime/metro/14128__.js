// === Module 14128: ? ===

// Module 14128
import _mod14120 from "module_14120" /* 14120 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14120(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};