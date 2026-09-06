// _runtime/14029_prerelease.js
import _mod14015 from "metro/14015__.js";

export default (arg0, arg1) => {
  const tmp = _mod14015(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
