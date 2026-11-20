// === Module 15194: ? ===

// Module 15194
import _mod15186 from "module_15186" /* 15186 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15186(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};