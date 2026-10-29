// _runtime/15829_prerelease.js
import _mod15815 from "metro/15815__.js";

export default (arg0, arg1) => {
  const tmp = _mod15815(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
