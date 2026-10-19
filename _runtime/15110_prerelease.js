// _runtime/15110_prerelease.js
import _mod15096 from "metro/15096__.js";

export default (arg0, arg1) => {
  const tmp = _mod15096(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
