// === Module 16056: prerelease ===

// Module 16056 (prerelease)
import _mod16042 from "module_16042" /* 16042 */;


export default (arg0, arg1) => {
  const tmp = _mod16042(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};