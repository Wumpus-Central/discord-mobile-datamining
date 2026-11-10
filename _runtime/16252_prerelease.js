// _runtime/16252_prerelease.js
import _mod16238 from "metro/16238__.js";

export default (arg0, arg1) => {
  const tmp = _mod16238(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
