// _runtime/13862_prerelease.js
import _mod13848 from "metro/13848__.js";

export default (arg0, arg1) => {
  const tmp = _mod13848(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
