// _runtime/15106_prerelease.js
import _mod15092 from "metro/15092__.js";

export default (arg0, arg1) => {
  const tmp = _mod15092(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
