// === Module 14379: ? ===

// Module 14379
import _mod14371 from "module_14371" /* 14371 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14371(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};