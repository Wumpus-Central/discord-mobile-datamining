// === Module 14385: prerelease ===

// Module 14385 (prerelease)
import _mod14371 from "module_14371" /* 14371 */;


export default (arg0, arg1) => {
  const tmp = _mod14371(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};