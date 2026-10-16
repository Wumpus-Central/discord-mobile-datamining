// _runtime/15037_prerelease.js
import _mod15023 from "metro/15023__.js";

export default (arg0, arg1) => {
  const tmp = _mod15023(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
