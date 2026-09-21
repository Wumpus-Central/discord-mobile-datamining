// === Module 14298: prerelease ===

// Module 14298 (prerelease)
import _mod14284 from "module_14284" /* 14284 */;


export default (arg0, arg1) => {
  const tmp = _mod14284(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};