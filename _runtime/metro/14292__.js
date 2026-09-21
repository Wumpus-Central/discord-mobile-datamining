// === Module 14292: ? ===

// Module 14292
import _mod14284 from "module_14284" /* 14284 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14284(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};