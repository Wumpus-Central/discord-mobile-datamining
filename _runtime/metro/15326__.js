// === Module 15326: ? ===

// Module 15326
import _mod15318 from "module_15318" /* 15318 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15318(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};