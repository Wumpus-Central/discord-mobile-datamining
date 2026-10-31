// === Module 15903: ? ===

// Module 15903
import _mod15895 from "module_15895" /* 15895 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15895(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};