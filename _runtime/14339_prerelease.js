// === Module 14339: prerelease ===

// Module 14339 (prerelease)
import _mod14325 from "module_14325" /* 14325 */;


export default (arg0, arg1) => {
  const tmp = _mod14325(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};