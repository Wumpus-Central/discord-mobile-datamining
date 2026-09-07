// _runtime/14032_prerelease.js
import _mod14018 from "metro/14018__.js";

export default (arg0, arg1) => {
  const tmp = _mod14018(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
