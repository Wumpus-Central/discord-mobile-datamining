// _runtime/13572_prerelease.js
import _mod13558 from "metro/13558__.js";

export default (arg0, arg1) => {
  const tmp = _mod13558(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
