// _runtime/14080_prerelease.js
import _mod14066 from "metro/14066__.js";

export default (arg0, arg1) => {
  const tmp = _mod14066(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
