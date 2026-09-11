// === Module 14080: prerelease ===

// Module 14080 (prerelease)
import _mod14066 from "module_14066" /* 14066 */;


export default (arg0, arg1) => {
  const tmp = _mod14066(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};