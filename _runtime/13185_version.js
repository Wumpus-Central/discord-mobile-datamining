// === Module 13185: version ===

// Module 13185 (version)
import SemVer from "SemVer" /* 13178 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};