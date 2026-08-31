// === Module 13477: version ===

// Module 13477 (version)
import SemVer from "SemVer" /* 13470 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};