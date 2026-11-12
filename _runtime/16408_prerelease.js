// _runtime/16408_prerelease.js
import _mod16394 from "metro/16394__.js";

export default (arg0, arg1) => {
  const tmp = _mod16394(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
