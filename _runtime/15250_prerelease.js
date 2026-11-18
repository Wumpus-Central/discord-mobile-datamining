// === Module 15250: prerelease ===

// Module 15250 (prerelease)
import _mod15236 from "module_15236" /* 15236 */;


export default (arg0, arg1) => {
  const tmp = _mod15236(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};