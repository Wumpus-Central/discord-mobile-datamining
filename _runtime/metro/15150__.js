// === Module 15150: ? ===

// Module 15150
import _mod15142 from "module_15142" /* 15142 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15142(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};