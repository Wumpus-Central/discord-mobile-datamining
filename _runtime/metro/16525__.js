// === Module 16525: ? ===

// Module 16525
import _mod16517 from "module_16517" /* 16517 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16517(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};