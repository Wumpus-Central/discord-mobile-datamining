// === Module 14261: prerelease ===

// Module 14261 (prerelease)
import _mod14247 from "module_14247" /* 14247 */;


export default (arg0, arg1) => {
  const tmp = _mod14247(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};