// === Module 15027: prerelease ===

// Module 15027 (prerelease)
import _mod15013 from "module_15013" /* 15013 */;


export default (arg0, arg1) => {
  const tmp = _mod15013(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};