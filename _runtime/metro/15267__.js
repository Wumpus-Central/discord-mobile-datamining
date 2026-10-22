// === Module 15267: ? ===

// Module 15267
import _mod15259 from "module_15259" /* 15259 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15259(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};