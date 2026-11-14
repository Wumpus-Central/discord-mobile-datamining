// _runtime/16531_prerelease.js
import _mod16517 from "metro/16517__.js";

export default (arg0, arg1) => {
  const tmp = _mod16517(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
