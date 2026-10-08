// === Module 14159: ? ===

// Module 14159
import _mod14151 from "module_14151" /* 14151 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14151(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};