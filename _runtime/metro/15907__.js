// === Module 15907: ? ===

// Module 15907
import _mod15899 from "module_15899" /* 15899 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15899(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};