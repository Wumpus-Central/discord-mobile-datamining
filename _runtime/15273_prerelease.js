// _runtime/15273_prerelease.js
import _mod15259 from "metro/15259__.js";

export default (arg0, arg1) => {
  const tmp = _mod15259(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
