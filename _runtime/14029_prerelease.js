// === Module 14029: prerelease ===

// Module 14029 (prerelease)
import SemVer from "SemVer" /* 14015 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};