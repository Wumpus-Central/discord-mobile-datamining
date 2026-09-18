// === Module 14231: ? ===

// Module 14231
import _mod14223 from "module_14223" /* 14223 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14223(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};