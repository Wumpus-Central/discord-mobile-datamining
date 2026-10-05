// _runtime/13844_prerelease.js
import _mod13830 from "metro/13830__.js";

export default (arg0, arg1) => {
  const tmp = _mod13830(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
