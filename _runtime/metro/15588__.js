// === Module 15588: ? ===

// Module 15588
import _mod15580 from "module_15580" /* 15580 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15580(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};