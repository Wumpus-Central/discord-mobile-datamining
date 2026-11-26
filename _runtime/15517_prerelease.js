// _runtime/15517_prerelease.js
import _mod15503 from "metro/15503__.js";

export default (arg0, arg1) => {
  const tmp = _mod15503(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
