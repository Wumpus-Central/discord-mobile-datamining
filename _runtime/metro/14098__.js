// === Module 14098: ? ===

// Module 14098
import _mod14090 from "module_14090" /* 14090 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14090(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};