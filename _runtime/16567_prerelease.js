// _runtime/16567_prerelease.js
import _mod16553 from "metro/16553__.js";

export default (arg0, arg1) => {
  const tmp = _mod16553(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
