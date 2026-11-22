// === Module 15321: prerelease ===

// Module 15321 (prerelease)
import _mod15307 from "module_15307" /* 15307 */;


export default (arg0, arg1) => {
  const tmp = _mod15307(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};