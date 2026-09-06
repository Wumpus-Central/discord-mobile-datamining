// === Module 14023: ? ===

// Module 14023
import _mod14015 from "module_14015" /* 14015 */;


export default (str, arg1) => {
  const tmp = _mod14015;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};