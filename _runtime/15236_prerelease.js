// _runtime/15236_prerelease.js
import _mod15222 from "metro/15222__.js";

export default (arg0, arg1) => {
  const tmp = _mod15222(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
