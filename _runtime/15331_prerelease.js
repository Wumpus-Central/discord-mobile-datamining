// === Module 15331: prerelease ===

// Module 15331 (prerelease)
import _mod15317 from "module_15317" /* 15317 */;


export default (arg0, arg1) => {
  const tmp = _mod15317(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};