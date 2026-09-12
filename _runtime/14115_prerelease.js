// _runtime/14115_prerelease.js
import _mod14101 from "metro/14101__.js";

export default (arg0, arg1) => {
  const tmp = _mod14101(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
