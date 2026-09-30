// _runtime/13768_prerelease.js
import _mod13754 from "metro/13754__.js";

export default (arg0, arg1) => {
  const tmp = _mod13754(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
