// === Module 15104: ? ===

// Module 15104
import _mod15096 from "module_15096" /* 15096 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15096(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};