// === Module 14026: ? ===

// Module 14026
import _mod14018 from "module_14018" /* 14018 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14018(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};