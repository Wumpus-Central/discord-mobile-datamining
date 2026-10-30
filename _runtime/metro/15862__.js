// === Module 15862: ? ===

// Module 15862
import _mod15854 from "module_15854" /* 15854 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15854(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};