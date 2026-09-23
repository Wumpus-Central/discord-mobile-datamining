// _runtime/14385_prerelease.js
import _mod14371 from "metro/14371__.js";

export default (arg0, arg1) => {
  const tmp = _mod14371(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
