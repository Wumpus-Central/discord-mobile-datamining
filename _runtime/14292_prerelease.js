// === Module 14292: prerelease ===

// Module 14292 (prerelease)
import _mod14278 from "module_14278" /* 14278 */;


export default (arg0, arg1) => {
  const tmp = _mod14278(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};