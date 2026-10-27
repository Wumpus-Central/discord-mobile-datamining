// === Module 15362: ? ===

// Module 15362
import _mod15354 from "module_15354" /* 15354 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15354(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};