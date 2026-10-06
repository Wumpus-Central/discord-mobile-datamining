// _runtime/metro/13862__.js
import _mod13848 from "13848__.js";

export default (arg0, arg1) => {
  const tmp = _mod13848(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
