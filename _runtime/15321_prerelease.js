// _runtime/15321_prerelease.js
import _mod15307 from "metro/15307__.js";

export default (arg0, arg1) => {
  const tmp = _mod15307(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
