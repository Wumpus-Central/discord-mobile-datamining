// _runtime/16056_prerelease.js
import _mod16042 from "metro/16042__.js";

export default (arg0, arg1) => {
  const tmp = _mod16042(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
