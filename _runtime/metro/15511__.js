// === Module 15511: ? ===

// Module 15511
import _mod15503 from "module_15503" /* 15503 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15503(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};