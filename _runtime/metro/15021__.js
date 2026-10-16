// === Module 15021: ? ===

// Module 15021
import _mod15013 from "module_15013" /* 15013 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15013(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};