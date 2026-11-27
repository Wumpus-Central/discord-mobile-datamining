// === Module 15518: ? ===

// Module 15518
import _mod15510 from "module_15510" /* 15510 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15510(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};