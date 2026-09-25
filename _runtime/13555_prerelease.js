// _runtime/13555_prerelease.js
import _mod13541 from "metro/13541__.js";

export default (arg0, arg1) => {
  const tmp = _mod13541(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
