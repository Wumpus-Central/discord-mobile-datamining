// _runtime/16167_prerelease.js
import _mod16153 from "metro/16153__.js";

export default (arg0, arg1) => {
  const tmp = _mod16153(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
