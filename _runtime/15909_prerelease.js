// === Module 15909: prerelease ===

// Module 15909 (prerelease)
import _mod15895 from "module_15895" /* 15895 */;


export default (arg0, arg1) => {
  const tmp = _mod15895(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};