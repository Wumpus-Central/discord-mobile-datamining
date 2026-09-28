// === Module 13572: prerelease ===

// Module 13572 (prerelease)
import _mod13558 from "module_13558" /* 13558 */;


export default (arg0, arg1) => {
  const tmp = _mod13558(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};