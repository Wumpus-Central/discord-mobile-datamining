// _runtime/15327_prerelease.js
import _mod15313 from "metro/15313__.js";

export default (arg0, arg1) => {
  const tmp = _mod15313(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
