// _runtime/16413_prerelease.js
import _mod16399 from "metro/16399__.js";

export default (arg0, arg1) => {
  const tmp = _mod16399(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
