// === Module 15037: prerelease ===

// Module 15037 (prerelease)
import _mod15023 from "module_15023" /* 15023 */;


export default (arg0, arg1) => {
  const tmp = _mod15023(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};