// === Module 14032: prerelease ===

// Module 14032 (prerelease)
import _mod14018 from "module_14018" /* 14018 */;


export default (arg0, arg1) => {
  const tmp = _mod14018(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};