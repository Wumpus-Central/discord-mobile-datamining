// _runtime/15594_prerelease.js
import _mod15580 from "metro/15580__.js";

export default (arg0, arg1) => {
  const tmp = _mod15580(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
