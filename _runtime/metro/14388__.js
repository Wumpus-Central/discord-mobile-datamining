// === Module 14388: ? ===

// Module 14388
import _mod14380 from "module_14380" /* 14380 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14380(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};