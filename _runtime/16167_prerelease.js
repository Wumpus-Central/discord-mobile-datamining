// === Module 16167: prerelease ===

// Module 16167 (prerelease)
import _mod16153 from "module_16153" /* 16153 */;


export default (arg0, arg1) => {
  const tmp = _mod16153(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};