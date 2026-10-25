// === Module 15332: prerelease ===

// Module 15332 (prerelease)
import _mod15318 from "module_15318" /* 15318 */;


export default (arg0, arg1) => {
  const tmp = _mod15318(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};