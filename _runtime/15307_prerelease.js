// === Module 15307: prerelease ===

// Module 15307 (prerelease)
import _mod15293 from "module_15293" /* 15293 */;


export default (arg0, arg1) => {
  const tmp = _mod15293(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};