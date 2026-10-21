// === Module 15223: ? ===

// Module 15223
import _mod15215 from "module_15215" /* 15215 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15215(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};