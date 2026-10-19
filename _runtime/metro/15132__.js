// === Module 15132: ? ===

// Module 15132
import _mod15124 from "module_15124" /* 15124 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15124(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};