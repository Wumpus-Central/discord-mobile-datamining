// === Module 15460: ? ===

// Module 15460
import _mod15452 from "module_15452" /* 15452 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15452(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};