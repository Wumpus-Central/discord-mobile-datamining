// === Module 14165: prerelease ===

// Module 14165 (prerelease)
import _mod14151 from "module_14151" /* 14151 */;


export default (arg0, arg1) => {
  const tmp = _mod14151(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};