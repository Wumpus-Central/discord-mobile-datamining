// _runtime/15913_prerelease.js
import _mod15899 from "metro/15899__.js";

export default (arg0, arg1) => {
  const tmp = _mod15899(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
