// _runtime/15250_prerelease.js
import _mod15236 from "metro/15236__.js";

export default (arg0, arg1) => {
  const tmp = _mod15236(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
