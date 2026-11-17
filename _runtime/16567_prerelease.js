// === Module 16567: prerelease ===

// Module 16567 (prerelease)
import _mod16553 from "module_16553" /* 16553 */;


export default (arg0, arg1) => {
  const tmp = _mod16553(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};