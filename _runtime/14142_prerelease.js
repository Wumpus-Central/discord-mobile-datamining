// _runtime/14142_prerelease.js
import _mod14128 from "metro/14128__.js";

export default (arg0, arg1) => {
  const tmp = _mod14128(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
