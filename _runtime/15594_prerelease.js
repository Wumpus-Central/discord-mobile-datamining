// === Module 15594: prerelease ===

// Module 15594 (prerelease)
import _mod15580 from "module_15580" /* 15580 */;


export default (arg0, arg1) => {
  const tmp = _mod15580(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};