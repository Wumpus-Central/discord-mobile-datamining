// === Module 16225: prerelease ===

// Module 16225 (prerelease)
import _mod16211 from "module_16211" /* 16211 */;


export default (arg0, arg1) => {
  const tmp = _mod16211(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};