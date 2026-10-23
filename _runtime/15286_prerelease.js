// _runtime/15286_prerelease.js
import _mod15272 from "metro/15272__.js";

export default (arg0, arg1) => {
  const tmp = _mod15272(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
