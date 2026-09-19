// _runtime/14292_prerelease.js
import _mod14278 from "metro/14278__.js";

export default (arg0, arg1) => {
  const tmp = _mod14278(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
