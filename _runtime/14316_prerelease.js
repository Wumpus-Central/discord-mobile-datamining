// _runtime/14316_prerelease.js
import _mod14302 from "metro/14302__.js";

export default (arg0, arg1) => {
  const tmp = _mod14302(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
