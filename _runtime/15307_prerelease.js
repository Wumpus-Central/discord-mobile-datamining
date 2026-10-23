// _runtime/15307_prerelease.js
import _mod15293 from "metro/15293__.js";

export default (arg0, arg1) => {
  const tmp = _mod15293(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
