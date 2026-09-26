// _runtime/13573_prerelease.js
import _mod13559 from "metro/13559__.js";

export default (arg0, arg1) => {
  const tmp = _mod13559(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
