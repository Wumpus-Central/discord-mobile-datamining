// === Module 14022: version ===

// Module 14022 (version)
import SemVer from "SemVer" /* 14015 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};