// === Module 14394: prerelease ===

// Module 14394 (prerelease)
import _mod14380 from "module_14380" /* 14380 */;


export default (arg0, arg1) => {
  const tmp = _mod14380(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};