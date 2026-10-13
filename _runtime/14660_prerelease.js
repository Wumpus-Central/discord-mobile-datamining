// === Module 14660: prerelease ===

// Module 14660 (prerelease)
import _mod14646 from "module_14646" /* 14646 */;


export default (arg0, arg1) => {
  const tmp = _mod14646(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};