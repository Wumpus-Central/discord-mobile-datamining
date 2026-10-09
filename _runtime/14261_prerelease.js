// _runtime/14261_prerelease.js
import _mod14247 from "metro/14247__.js";

export default (arg0, arg1) => {
  const tmp = _mod14247(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
