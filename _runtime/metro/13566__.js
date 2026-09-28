// === Module 13566: ? ===

// Module 13566
import _mod13558 from "module_13558" /* 13558 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13558(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};