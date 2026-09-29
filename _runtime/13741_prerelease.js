// _runtime/13741_prerelease.js
import _mod13727 from "metro/13727__.js";

export default (arg0, arg1) => {
  const tmp = _mod13727(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
