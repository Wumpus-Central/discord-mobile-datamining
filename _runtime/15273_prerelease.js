// === Module 15273: prerelease ===

// Module 15273 (prerelease)
import _mod15259 from "module_15259" /* 15259 */;


export default (arg0, arg1) => {
  const tmp = _mod15259(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};