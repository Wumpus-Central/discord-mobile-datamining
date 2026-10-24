// === Module 15327: prerelease ===

// Module 15327 (prerelease)
import _mod15313 from "module_15313" /* 15313 */;


export default (arg0, arg1) => {
  const tmp = _mod15313(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};