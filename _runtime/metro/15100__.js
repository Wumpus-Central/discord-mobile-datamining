// === Module 15100: ? ===

// Module 15100
import _mod15092 from "module_15092" /* 15092 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15092(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};