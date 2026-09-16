// _runtime/14134_prerelease.js
import _mod14120 from "metro/14120__.js";

export default (arg0, arg1) => {
  const tmp = _mod14120(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
