// === Module 14116: prerelease ===

// Module 14116 (prerelease)
import _mod14102 from "module_14102" /* 14102 */;


export default (arg0, arg1) => {
  const tmp = _mod14102(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};