// === Module 15301: ? ===

// Module 15301
import _mod15293 from "module_15293" /* 15293 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15293(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};