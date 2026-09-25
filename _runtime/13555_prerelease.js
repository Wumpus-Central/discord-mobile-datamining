// === Module 13555: prerelease ===

// Module 13555 (prerelease)
import _mod13541 from "module_13541" /* 13541 */;


export default (arg0, arg1) => {
  const tmp = _mod13541(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};