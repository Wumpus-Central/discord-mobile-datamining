// === Module 13862: prerelease ===

// Module 13862 (prerelease)
import _mod13848 from "module_13848" /* 13848 */;


export default (arg0, arg1) => {
  const tmp = _mod13848(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};