// === Module 15236: prerelease ===

// Module 15236 (prerelease)
import _mod15222 from "module_15222" /* 15222 */;


export default (arg0, arg1) => {
  const tmp = _mod15222(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};