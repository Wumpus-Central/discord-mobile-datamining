// === Module 14692: ? ===

// Module 14692
import _mod14684 from "module_14684" /* 14684 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14684(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};