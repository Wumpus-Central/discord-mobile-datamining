// === Module 15524: prerelease ===

// Module 15524 (prerelease)
import _mod15510 from "module_15510" /* 15510 */;


export default (arg0, arg1) => {
  const tmp = _mod15510(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};