// === Module 13844: prerelease ===

// Module 13844 (prerelease)
import _mod13830 from "module_13830" /* 13830 */;


export default (arg0, arg1) => {
  const tmp = _mod13830(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};