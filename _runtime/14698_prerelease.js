// _runtime/14698_prerelease.js
import _mod14684 from "metro/14684__.js";

export default (arg0, arg1) => {
  const tmp = _mod14684(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
