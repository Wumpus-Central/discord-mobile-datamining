// === Module 15368: prerelease ===

// Module 15368 (prerelease)
import _mod15354 from "module_15354" /* 15354 */;


export default (arg0, arg1) => {
  const tmp = _mod15354(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};