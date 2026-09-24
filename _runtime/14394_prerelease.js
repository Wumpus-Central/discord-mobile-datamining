// _runtime/14394_prerelease.js
import _mod14380 from "metro/14380__.js";

export default (arg0, arg1) => {
  const tmp = _mod14380(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
