// === Module 14115: ? ===

// Module 14115
import _mod14107 from "module_14107" /* 14107 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14107(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};