// _runtime/15466_prerelease.js
import _mod15452 from "metro/15452__.js";

export default (arg0, arg1) => {
  const tmp = _mod15452(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
