// _runtime/15156_prerelease.js
import _mod15142 from "metro/15142__.js";

export default (arg0, arg1) => {
  const tmp = _mod15142(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
