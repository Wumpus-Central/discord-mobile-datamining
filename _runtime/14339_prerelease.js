// _runtime/14339_prerelease.js
import _mod14325 from "metro/14325__.js";

export default (arg0, arg1) => {
  const tmp = _mod14325(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
