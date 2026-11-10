// === Module 16252: prerelease ===

// Module 16252 (prerelease)
import _mod16238 from "module_16238" /* 16238 */;


export default (arg0, arg1) => {
  const tmp = _mod16238(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};