// === Module 14074: ? ===

// Module 14074
import _mod14066 from "module_14066" /* 14066 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14066(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};