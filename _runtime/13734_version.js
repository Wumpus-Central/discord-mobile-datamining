// === Module 13734: version ===

// Module 13734 (version)
import SemVer from "SemVer" /* 13726 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};