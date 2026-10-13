// _runtime/14660_prerelease.js
import _mod14646 from "metro/14646__.js";

export default (arg0, arg1) => {
  const tmp = _mod14646(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
