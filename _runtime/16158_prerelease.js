// _runtime/16158_prerelease.js
import _mod16144 from "metro/16144__.js";

export default (arg0, arg1) => {
  const tmp = _mod16144(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
