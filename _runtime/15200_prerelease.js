// === Module 15200: prerelease ===

// Module 15200 (prerelease)
import _mod15186 from "module_15186" /* 15186 */;


export default (arg0, arg1) => {
  const tmp = _mod15186(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};