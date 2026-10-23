// === Module 15280: ? ===

// Module 15280
import _mod15272 from "module_15272" /* 15272 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15272(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};