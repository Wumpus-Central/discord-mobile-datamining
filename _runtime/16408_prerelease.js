// === Module 16408: prerelease ===

// Module 16408 (prerelease)
import _mod16394 from "module_16394" /* 16394 */;


export default (arg0, arg1) => {
  const tmp = _mod16394(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};