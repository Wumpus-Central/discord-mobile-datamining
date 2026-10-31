// _runtime/15909_prerelease.js
import _mod15895 from "metro/15895__.js";

export default (arg0, arg1) => {
  const tmp = _mod15895(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
