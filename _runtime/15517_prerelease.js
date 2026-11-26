// === Module 15517: prerelease ===

// Module 15517 (prerelease)
import _mod15503 from "module_15503" /* 15503 */;


export default (arg0, arg1) => {
  const tmp = _mod15503(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};