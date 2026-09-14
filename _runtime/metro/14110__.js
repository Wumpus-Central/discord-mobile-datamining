// === Module 14110: ? ===

// Module 14110
import _mod14102 from "module_14102" /* 14102 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14102(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};