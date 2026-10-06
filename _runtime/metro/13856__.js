// === Module 13856: ? ===

// Module 13856
import _mod13848 from "module_13848" /* 13848 */;


export default (str, arg1) => {
  const tmp = _mod13848;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};