// === Module 15829: prerelease ===

// Module 15829 (prerelease)
import _mod15815 from "module_15815" /* 15815 */;


export default (arg0, arg1) => {
  const tmp = _mod15815(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};