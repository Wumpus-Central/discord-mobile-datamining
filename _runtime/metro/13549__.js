// === Module 13549: ? ===

// Module 13549
import _mod13541 from "module_13541" /* 13541 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13541(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};