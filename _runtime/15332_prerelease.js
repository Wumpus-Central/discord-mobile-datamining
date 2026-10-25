// _runtime/15332_prerelease.js
import _mod15318 from "metro/15318__.js";

export default (arg0, arg1) => {
  const tmp = _mod15318(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
