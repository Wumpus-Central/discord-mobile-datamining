// === Module 16171: prerelease ===

// Module 16171 (prerelease)
import _mod16157 from "module_16157" /* 16157 */;


export default (arg0, arg1) => {
  const tmp = _mod16157(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};