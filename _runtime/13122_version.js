// _runtime/13122_version.js
import { SemVer } from "13115_SemVer.js";

export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};