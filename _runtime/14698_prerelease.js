// === Module 14698: prerelease ===

// Module 14698 (prerelease)
import _mod14684 from "module_14684" /* 14684 */;


export default (arg0, arg1) => {
  const tmp = _mod14684(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};