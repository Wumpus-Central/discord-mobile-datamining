// _runtime/16145_prerelease.js
import _mod16131 from "metro/16131__.js";

export default (arg0, arg1) => {
  const tmp = _mod16131(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
