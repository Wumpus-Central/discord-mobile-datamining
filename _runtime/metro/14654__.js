// === Module 14654: ? ===

// Module 14654
import _mod14646 from "module_14646" /* 14646 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14646(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};