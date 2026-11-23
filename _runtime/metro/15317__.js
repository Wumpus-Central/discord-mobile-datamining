// === Module 15317: ? ===

// Module 15317
import _mod15309 from "module_15309" /* 15309 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15309(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};