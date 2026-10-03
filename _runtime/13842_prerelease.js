// _runtime/13842_prerelease.js
import _mod13828 from "metro/13828__.js";

export default (arg0, arg1) => {
  const tmp = _mod13828(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
