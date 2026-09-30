// === Module 13768: prerelease ===

// Module 13768 (prerelease)
import _mod13754 from "module_13754" /* 13754 */;


export default (arg0, arg1) => {
  const tmp = _mod13754(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};