// === Module 14104: prerelease ===

// Module 14104 (prerelease)
import _mod14090 from "module_14090" /* 14090 */;


export default (arg0, arg1) => {
  const tmp = _mod14090(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};