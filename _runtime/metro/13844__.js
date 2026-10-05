// _runtime/metro/13844__.js
import _mod13830 from "13830__.js";

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
