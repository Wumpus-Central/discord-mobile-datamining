import { SemVer } from "13020_SemVer.js";
// _runtime/13027_version.js

export default (arg0, arg1) => {
  const tmp = SemVer /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};