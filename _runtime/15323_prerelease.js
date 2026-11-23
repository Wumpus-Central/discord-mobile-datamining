// _runtime/15323_prerelease.js
import _mod15309 from "metro/15309__.js";

export default (arg0, arg1) => {
  const tmp = _mod15309(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
