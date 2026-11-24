// === Module 15344: prerelease ===

// Module 15344 (prerelease)
import _mod15330 from "module_15330" /* 15330 */;


export default (arg0, arg1) => {
  const tmp = _mod15330(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};