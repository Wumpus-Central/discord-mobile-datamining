// === Module 15230: ? ===

// Module 15230
import _mod15222 from "module_15222" /* 15222 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15222(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};