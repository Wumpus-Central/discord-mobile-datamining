// === Module 15868: prerelease ===

// Module 15868 (prerelease)
import _mod15854 from "module_15854" /* 15854 */;


export default (arg0, arg1) => {
  const tmp = _mod15854(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};