// _runtime/14298_prerelease.js
import _mod14284 from "metro/14284__.js";

export default (arg0, arg1) => {
  const tmp = _mod14284(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
