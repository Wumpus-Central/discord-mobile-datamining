// _runtime/15344_prerelease.js
import _mod15330 from "metro/15330__.js";

export default (arg0, arg1) => {
  const tmp = _mod15330(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
