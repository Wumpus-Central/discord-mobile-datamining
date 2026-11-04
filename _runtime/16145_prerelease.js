// === Module 16145: prerelease ===

// Module 16145 (prerelease)
import _mod16131 from "module_16131" /* 16131 */;


export default (arg0, arg1) => {
  const tmp = _mod16131(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};