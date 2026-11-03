// === Module 16050: ? ===

// Module 16050
import _mod16042 from "module_16042" /* 16042 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16042(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};