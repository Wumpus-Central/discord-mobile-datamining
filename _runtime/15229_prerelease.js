// _runtime/15229_prerelease.js
import _mod15215 from "metro/15215__.js";

export default (arg0, arg1) => {
  const tmp = _mod15215(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
