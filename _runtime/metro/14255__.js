// === Module 14255: ? ===

// Module 14255
import _mod14247 from "module_14247" /* 14247 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14247(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};