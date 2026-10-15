// === Module 14994: prerelease ===

// Module 14994 (prerelease)
import _mod14980 from "module_14980" /* 14980 */;


export default (arg0, arg1) => {
  const tmp = _mod14980(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};