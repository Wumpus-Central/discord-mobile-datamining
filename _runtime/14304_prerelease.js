// _runtime/14304_prerelease.js
import _mod14290 from "metro/14290__.js";

export default (arg0, arg1) => {
  const tmp = _mod14290(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
