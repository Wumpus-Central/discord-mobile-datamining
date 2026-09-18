// _runtime/14237_prerelease.js
import _mod14223 from "metro/14223__.js";

export default (arg0, arg1) => {
  const tmp = _mod14223(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
