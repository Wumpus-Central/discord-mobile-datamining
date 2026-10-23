// === Module 15286: prerelease ===

// Module 15286 (prerelease)
import _mod15272 from "module_15272" /* 15272 */;


export default (arg0, arg1) => {
  const tmp = _mod15272(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};