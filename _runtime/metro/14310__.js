// === Module 14310: ? ===

// Module 14310
import _mod14302 from "module_14302" /* 14302 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14302(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};