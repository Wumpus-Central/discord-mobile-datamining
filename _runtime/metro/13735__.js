// === Module 13735: ? ===

// Module 13735
import _mod13727 from "module_13727" /* 13727 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13727(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};