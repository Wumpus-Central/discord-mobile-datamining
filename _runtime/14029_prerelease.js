// === Module 14029: prerelease ===

// Module 14029 (prerelease)
import _mod14015 from "module_14015" /* 14015 */;


export default (arg0, arg1) => {
  const tmp = _mod14015(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};