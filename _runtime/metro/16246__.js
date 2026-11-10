// === Module 16246: ? ===

// Module 16246
import _mod16238 from "module_16238" /* 16238 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16238(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};