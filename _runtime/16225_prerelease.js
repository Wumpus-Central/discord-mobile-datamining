// _runtime/16225_prerelease.js
import _mod16211 from "metro/16211__.js";

export default (arg0, arg1) => {
  const tmp = _mod16211(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
