// === Module 13838: ? ===

// Module 13838
import _mod13830 from "module_13830" /* 13830 */;


export default (str, arg1) => {
  const tmp = _mod13830;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};