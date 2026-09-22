// === Module 14304: prerelease ===

// Module 14304 (prerelease)
import _mod14290 from "module_14290" /* 14290 */;


export default (arg0, arg1) => {
  const tmp = _mod14290(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};