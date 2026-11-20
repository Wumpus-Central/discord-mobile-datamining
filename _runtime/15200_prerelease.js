// _runtime/15200_prerelease.js
import _mod15186 from "metro/15186__.js";

export default (arg0, arg1) => {
  const tmp = _mod15186(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
