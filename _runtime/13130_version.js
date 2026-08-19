// === Module 13130: version ===

// Module 13130 (version)
import SemVer from "SemVer" /* 13122 */;


export default (str) => {
  str = str.trim();
  const tmpResult = SemVer(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};