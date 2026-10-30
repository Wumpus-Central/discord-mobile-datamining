// _runtime/15868_prerelease.js
import _mod15854 from "metro/15854__.js";

export default (arg0, arg1) => {
  const tmp = _mod15854(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
