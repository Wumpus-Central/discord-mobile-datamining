// === Module 13770: ? ===

// Module 13770
import _mod13762 from "module_13762" /* 13762 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13762(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};