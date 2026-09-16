// === Module 14134: prerelease ===

// Module 14134 (prerelease)
import _mod14120 from "module_14120" /* 14120 */;


export default (arg0, arg1) => {
  const tmp = _mod14120(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};