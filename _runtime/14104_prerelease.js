// _runtime/14104_prerelease.js
import _mod14090 from "metro/14090__.js";

export default (arg0, arg1) => {
  const tmp = _mod14090(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
