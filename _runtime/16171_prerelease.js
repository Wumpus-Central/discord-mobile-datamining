// _runtime/16171_prerelease.js
import _mod16157 from "metro/16157__.js";

export default (arg0, arg1) => {
  const tmp = _mod16157(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
