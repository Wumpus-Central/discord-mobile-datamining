// _runtime/13034_prerelease.js
import { SemVer } from "13020_SemVer.js";

export default (arg0, arg1) => {
  const tmp = SemVer /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};