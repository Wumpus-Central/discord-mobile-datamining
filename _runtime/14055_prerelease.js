// _runtime/14055_prerelease.js
import _mod14041 from "metro/14041__.js";

export default (arg0, arg1) => {
  const tmp = _mod14041(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
