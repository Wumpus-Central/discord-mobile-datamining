// === Module 14316: prerelease ===

// Module 14316 (prerelease)
import _mod14302 from "module_14302" /* 14302 */;


export default (arg0, arg1) => {
  const tmp = _mod14302(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};