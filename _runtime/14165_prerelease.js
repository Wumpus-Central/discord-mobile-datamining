// _runtime/14165_prerelease.js
import _mod14151 from "metro/14151__.js";

export default (arg0, arg1) => {
  const tmp = _mod14151(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
