// === Module 16407: ? ===

// Module 16407
import _mod16399 from "module_16399" /* 16399 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16399(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};