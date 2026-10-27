// _runtime/15368_prerelease.js
import _mod15354 from "metro/15354__.js";

export default (arg0, arg1) => {
  const tmp = _mod15354(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
