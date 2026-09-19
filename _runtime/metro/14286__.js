// === Module 14286: ? ===

// Module 14286
import _mod14278 from "module_14278" /* 14278 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14278(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};