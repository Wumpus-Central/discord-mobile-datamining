// _runtime/13776_prerelease.js
import _mod13762 from "metro/13762__.js";

export default (arg0, arg1) => {
  const tmp = _mod13762(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
