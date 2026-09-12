// === Module 14109: ? ===

// Module 14109
import _mod14101 from "module_14101" /* 14101 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14101(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};