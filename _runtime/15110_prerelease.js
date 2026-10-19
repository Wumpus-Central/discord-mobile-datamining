// === Module 15110: prerelease ===

// Module 15110 (prerelease)
import _mod15096 from "module_15096" /* 15096 */;


export default (arg0, arg1) => {
  const tmp = _mod15096(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};