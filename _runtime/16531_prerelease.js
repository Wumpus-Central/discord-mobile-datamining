// === Module 16531: prerelease ===

// Module 16531 (prerelease)
import _mod16517 from "module_16517" /* 16517 */;


export default (arg0, arg1) => {
  const tmp = _mod16517(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};