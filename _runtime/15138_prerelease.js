// === Module 15138: prerelease ===

// Module 15138 (prerelease)
import _mod15124 from "module_15124" /* 15124 */;


export default (arg0, arg1) => {
  const tmp = _mod15124(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};