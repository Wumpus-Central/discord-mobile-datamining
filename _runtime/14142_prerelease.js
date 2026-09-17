// === Module 14142: prerelease ===

// Module 14142 (prerelease)
import _mod14128 from "module_14128" /* 14128 */;


export default (arg0, arg1) => {
  const tmp = _mod14128(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};