// === Module 16139: ? ===

// Module 16139
import _mod16131 from "module_16131" /* 16131 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16131(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};