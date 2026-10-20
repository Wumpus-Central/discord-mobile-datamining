// === Module 15156: prerelease ===

// Module 15156 (prerelease)
import _mod15142 from "module_15142" /* 15142 */;


export default (arg0, arg1) => {
  const tmp = _mod15142(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};