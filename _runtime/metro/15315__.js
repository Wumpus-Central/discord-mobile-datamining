// === Module 15315: ? ===

// Module 15315
import _mod15307 from "module_15307" /* 15307 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15307(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};