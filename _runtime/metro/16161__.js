// === Module 16161: ? ===

// Module 16161
import _mod16153 from "module_16153" /* 16153 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16153(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};