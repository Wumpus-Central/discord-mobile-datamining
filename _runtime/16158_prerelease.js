// === Module 16158: prerelease ===

// Module 16158 (prerelease)
import _mod16144 from "module_16144" /* 16144 */;


export default (arg0, arg1) => {
  const tmp = _mod16144(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};