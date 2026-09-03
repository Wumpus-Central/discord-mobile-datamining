// === Module 13749: version ===

// Module 13749 (version)
import SemVer from "SemVer" /* 13742 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};