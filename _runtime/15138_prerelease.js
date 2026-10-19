// _runtime/15138_prerelease.js
import _mod15124 from "metro/15124__.js";

export default (arg0, arg1) => {
  const tmp = _mod15124(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
