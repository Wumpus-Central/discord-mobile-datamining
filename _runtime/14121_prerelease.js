// _runtime/14121_prerelease.js
import _mod14107 from "metro/14107__.js";

export default (arg0, arg1) => {
  const tmp = _mod14107(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
