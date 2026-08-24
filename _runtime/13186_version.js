// === Module 13186: version ===

// Module 13186 (version)
import SemVer from "SemVer" /* 13178 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};