// === Module 16219: ? ===

// Module 16219
import _mod16211 from "module_16211" /* 16211 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16211(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};