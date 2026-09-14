// _runtime/14116_prerelease.js
import _mod14102 from "metro/14102__.js";

export default (arg0, arg1) => {
  const tmp = _mod14102(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
